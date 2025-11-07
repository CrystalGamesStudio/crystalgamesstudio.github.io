import { useState, useEffect, useRef } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  User,
  updateProfile,
  updateEmail
} from 'firebase/auth'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { auth, storage } from '../config/firebase'
import { cn } from '../utils/helpers'
import { glowAnimation, pixelBorder, gameButton } from '../utils/game-effects'
import { 
  User as UserIcon, 
  LogOut, 
  Mail, 
  Lock, 
  Edit2, 
  Save, 
  X, 
  Camera,
  Shield,
  Users
} from 'lucide-react'
import { NotificationContainer, useNotifications } from '../components/ui/Notification'
import { ImageCropModal } from '../components/ui/ImageCropModal'

const googleProvider = new GoogleAuthProvider()

// Helper function to shorten User ID
const shortenUID = (uid: string) => {
  if (uid.length <= 12) return uid
  return `${uid.substring(0, 8)}...${uid.substring(uid.length - 4)}`
}

// Helper function to get user-friendly error messages
const getErrorMessage = (error: any): string => {
  const errorCode = error.code || ''
  const errorMessage = error.message || 'An error occurred'
  
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please sign in instead.'
    case 'auth/invalid-email':
      return 'Invalid email address. Please check your email.'
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled. Please contact support.'
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters.'
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.'
    case 'auth/user-not-found':
      return 'No account found with this email. Please sign up first.'
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.'
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.'
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed. Please try again.'
    case 'auth/popup-blocked':
      return 'Popup was blocked by your browser. Please allow popups and try again.'
    case 'auth/cancelled-popup-request':
      return 'Only one popup request is allowed at a time. Please try again.'
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.'
    default:
      // If it's a Firebase error, try to extract a readable message
      if (errorMessage.includes('Firebase')) {
        return 'Firebase authentication error. Please check your configuration.'
      }
      return errorMessage
  }
}

export function Profile() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photoURL, setPhotoURL] = useState<string | null>(null)
  const [showCropModal, setShowCropModal] = useState(false)
  const [imageToCrop, setImageToCrop] = useState<string | null>(null)
  const uploadTaskRef = useRef<any>(null)
  const { notifications, addNotification, removeNotification } = useNotifications()

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        setEditName(currentUser.displayName || '')
        setEditEmail(currentUser.email || '')
        // Always use photoURL from user profile first (most reliable)
        // This URL is already set when we upload via updateProfile
        if (currentUser.photoURL) {
          setPhotoURL(currentUser.photoURL)
        } else {
          // Only try to load from storage if photoURL is not set
          // This helps avoid CORS issues - we prefer using photoURL from Auth
          setPhotoURL(null)
        }
      } else {
        setPhotoURL(null)
      }
    })
    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isSignUp) {
        // Register new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        // Optionally set a default display name from email
        if (userCredential.user && !userCredential.user.displayName) {
          const displayName = email.split('@')[0]
          await updateProfile(userCredential.user, { displayName })
        }
        addNotification('Account created successfully!', 'success')
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password)
        addNotification('Successfully signed in!', 'success')
      }
    } catch (err: any) {
      const errorMessage = getErrorMessage(err)
      addNotification(errorMessage, 'error')
      console.error('Authentication error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)

    try {
      await signInWithPopup(auth, googleProvider)
      addNotification('Successfully signed in with Google!', 'success')
    } catch (err: any) {
      const errorMessage = getErrorMessage(err)
      addNotification(errorMessage, 'error')
      console.error('Google sign-in error:', err)
    } finally {
      setGoogleLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setIsEditing(false)
      addNotification('Successfully signed out', 'info')
    } catch (err: any) {
      const errorMessage = err.message || 'Error signing out'
      addNotification(errorMessage, 'error')
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditName(user?.displayName || '')
    setEditEmail(user?.email || '')
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditName(user?.displayName || '')
    setEditEmail(user?.email || '')
  }

  const handleSaveProfile = async () => {
    if (!user) return

    setLoading(true)

    try {
      const updates: { displayName?: string; photoURL?: string } = {}
      let hasUpdates = false
      
      if (editName !== user.displayName && editName.trim()) {
        updates.displayName = editName.trim()
        hasUpdates = true
      }

      if (photoURL && photoURL !== user.photoURL) {
        updates.photoURL = photoURL
        hasUpdates = true
      }

      if (Object.keys(updates).length > 0) {
        await updateProfile(user, updates)
        addNotification('Profile information updated successfully!', 'success')
      }

      if (editEmail !== user.email && editEmail) {
        await updateEmail(user, editEmail)
        addNotification('Email updated successfully!', 'success')
        addNotification('Please check your new email for verification', 'info', 6000)
      }

      if (!hasUpdates && editEmail === user.email) {
        addNotification('No changes to save', 'info', 3000)
      } else {
        setIsEditing(false)
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Error updating profile'
      addNotification(errorMessage, 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      const errorMsg = 'Please select an image file'
      addNotification(errorMsg, 'error')
      return
    }

    // Validate file size (max 10MB - before cropping)
    if (file.size > 10 * 1024 * 1024) {
      const errorMsg = 'Image size must be less than 10MB'
      addNotification(errorMsg, 'error')
      return
    }

    // Read file and show crop modal
    const reader = new FileReader()
    reader.onloadend = () => {
      setImageToCrop(reader.result as string)
      setShowCropModal(true)
    }
    reader.readAsDataURL(file)
    
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleCropComplete = async (croppedImageBlob: Blob) => {
    if (!user) {
      addNotification('User not authenticated', 'error')
      return
    }

    setShowCropModal(false)
    setUploadingPhoto(true)
    addNotification('Uploading profile photo...', 'info', 2000)

    try {
      // Validate blob
      if (!croppedImageBlob || croppedImageBlob.size === 0) {
        throw new Error('Invalid image file')
      }

      console.log('Starting upload:', {
        uid: user.uid,
        blobSize: croppedImageBlob.size,
        blobType: croppedImageBlob.type
      })

      const storageRef = ref(storage, `profile-photos/${user.uid}`)
      
      // Use resumable upload for cancellation capability
      const uploadTask = uploadBytesResumable(storageRef, croppedImageBlob)
      uploadTaskRef.current = uploadTask

      // Wait for upload to complete
      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload progress:', progress + '%')
          },
          (error) => {
            console.error('Upload error:', error)
            reject(error)
          },
          async () => {
            console.log('Upload completed successfully')
            resolve(null)
          }
        )
      })

      // Get download URL after upload completes
      console.log('Getting download URL...')
      const downloadURL = await getDownloadURL(storageRef)
      console.log('Download URL obtained:', downloadURL)
      
      setPhotoURL(downloadURL)
      
      // Update user profile with photo URL
      console.log('Updating user profile...')
      try {
        await updateProfile(user, { photoURL: downloadURL })
        console.log('Profile updated successfully')
        addNotification('Profile photo updated successfully!', 'success')
        
        // Force refresh user data
        await user.reload()
        setUser({ ...user } as User)
      } catch (updateError: any) {
        console.error('Error updating profile with photo URL:', updateError)
        // Photo is uploaded but profile update failed - still show the photo
        addNotification('Photo uploaded but profile update failed: ' + updateError.message, 'warning')
      }
    } catch (err: any) {
      console.error('Upload failed:', err)
      
      // Only show error if it wasn't a cancellation
      // Firebase can return either 'storage/cancelled' or 'storage/canceled'
      if (err.code !== 'storage/cancelled' && err.code !== 'storage/canceled') {
        let errorMessage = 'Error uploading photo'
        
        if (err.code === 'storage/unauthorized') {
          errorMessage = 'Permission denied. Please check Firebase Storage rules.'
        } else if (err.code === 'storage/quota-exceeded') {
          errorMessage = 'Storage quota exceeded'
        } else if (err.code === 'storage/unauthenticated') {
          errorMessage = 'Please sign in to upload photos'
        } else if (err.message) {
          errorMessage = err.message
        }
        
        addNotification(errorMessage, 'error')
      } else {
        // Upload was cancelled, don't show error
        addNotification('Photo upload cancelled', 'info')
      }
    } finally {
      setUploadingPhoto(false)
      setImageToCrop(null)
      uploadTaskRef.current = null
    }
  }

  const handleCancelUpload = () => {
    if (uploadTaskRef.current) {
      try {
        uploadTaskRef.current.cancel()
      } catch (error) {
        // Ignore errors during cancellation
      }
      uploadTaskRef.current = null
      setUploadingPhoto(false)
      addNotification('Photo upload cancelled', 'info')
    }
  }

  const handleCropCancel = () => {
    setShowCropModal(false)
    setImageToCrop(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  if (user) {
    return (
      <>
        <NotificationContainer 
          notifications={notifications} 
          onRemove={removeNotification} 
        />
        {showCropModal && imageToCrop && (
          <ImageCropModal
            imageSrc={imageToCrop}
            onCropComplete={handleCropComplete}
            onCancel={handleCropCancel}
          />
        )}
        <div className="min-h-screen bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl overflow-hidden",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "p-8 mb-6"
          )}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative">
                <div className={cn(
                  "relative w-32 h-32 rounded-full overflow-hidden",
                  "border-4 border-indigo-500/50",
                  "shadow-lg shadow-indigo-500/30",
                  isEditing && "cursor-pointer"
                )}>
                  {photoURL ? (
                    <img 
                      src={photoURL} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      onError={(error) => {
                        console.error('Failed to load profile photo:', photoURL, error)
                        setPhotoURL(null)
                        addNotification('Failed to load profile photo', 'error')
                      }}
                      onLoad={() => {
                        console.log('Profile photo loaded successfully')
                      }}
                    />
                  ) : (
                    <div className={cn(
                      "w-full h-full",
                      "bg-gradient-to-br from-indigo-600 to-purple-600",
                      "flex items-center justify-center"
                    )}>
                      <UserIcon className="h-16 w-16 text-white" />
                    </div>
                  )}
                  {uploadingPhoto && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full">
                      <div className="flex flex-col items-center gap-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <button
                          onClick={handleCancelUpload}
                          className={cn(
                            "p-2 rounded-full",
                            "bg-red-600 hover:bg-red-500",
                            "text-white",
                            "shadow-lg",
                            "transition-all duration-300",
                            "flex items-center justify-center"
                          )}
                          title="Cancel upload"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {isEditing && (
                  <>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingPhoto}
                      className={cn(
                        "absolute bottom-0 right-0",
                        "p-2 rounded-full",
                        "bg-indigo-600 hover:bg-indigo-500",
                        "text-white",
                        "shadow-lg",
                        "transition-all duration-300",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className={cn(
                  "text-4xl font-bold mb-2",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent",
                  glowAnimation,
                  "animate-bounce-slow"
                )}>
                  {user.displayName || 'User'}
                </h1>
                <p className="text-indigo-300 mb-4">{user.email}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className={cn(
                    "px-3 py-1 rounded-full",
                    "bg-indigo-500/20 border border-indigo-500/30",
                    "text-indigo-200 text-sm",
                    isEditing && "font-mono"
                  )}>
                    ID: {isEditing ? user.uid : shortenUID(user.uid)}
                  </div>
                  {user.emailVerified && (
                    <div className={cn(
                      "px-3 py-1 rounded-full",
                      "bg-green-500/20 border border-green-500/30",
                      "text-green-200 text-sm"
                    )}>
                      Verified
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className={cn(
                      "px-4 py-2 rounded-lg",
                      "bg-gradient-to-r from-indigo-600 to-purple-600",
                      "text-white font-medium",
                      "hover:from-indigo-500 hover:to-purple-500",
                      "transition-all duration-300",
                      "shadow-lg shadow-indigo-500/20",
                      pixelBorder,
                      gameButton,
                      "flex items-center gap-2"
                    )}
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className={cn(
                        "px-4 py-2 rounded-lg",
                        "bg-gradient-to-r from-green-600 to-green-700",
                        "text-white font-medium",
                        "hover:from-green-500 hover:to-green-600",
                        "transition-all duration-300",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        pixelBorder,
                        gameButton,
                        "flex items-center gap-2"
                      )}
                    >
                      <Save className="h-4 w-4" />
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className={cn(
                        "px-4 py-2 rounded-lg",
                        "bg-gray-700 hover:bg-gray-600",
                        "text-white font-medium",
                        "transition-all duration-300",
                        pixelBorder,
                        gameButton,
                        "flex items-center gap-2"
                      )}
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </button>
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    "bg-gradient-to-r from-red-600 to-red-700",
                    "text-white font-medium",
                    "hover:from-red-500 hover:to-red-600",
                    "transition-all duration-300",
                    "shadow-lg shadow-red-500/20",
                    pixelBorder,
                    gameButton,
                    "flex items-center gap-2"
                  )}
                >
                  <LogOut className="h-4 w-4" />
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Profile Information */}
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl overflow-hidden",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20",
              "p-6"
            )}>
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "border border-indigo-500/30"
                )}>
                  <UserIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <h2 className="text-xl font-bold text-white">Profile Information</h2>
              </div>
              
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg",
                          "bg-white/10 backdrop-blur-sm",
                          "border border-indigo-500/30",
                          "text-white",
                          "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                          "transition-all duration-300"
                        )}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg",
                          "bg-white/10 backdrop-blur-sm",
                          "border border-indigo-500/30",
                          "text-white",
                          "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                          "transition-all duration-300"
                        )}
                        placeholder="Enter your email"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-indigo-200 text-sm mb-1">Display Name</p>
                      <p className="text-white font-medium">{user.displayName || 'Not set'}</p>
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm mb-1">Email</p>
                      <p className="text-white font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm mb-1">User ID</p>
                      <p className={cn(
                        "text-white font-medium text-sm font-mono",
                        !isEditing && "break-all"
                      )}>
                        {isEditing ? user.uid : shortenUID(user.uid)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Account Security */}
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl overflow-hidden",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20",
              "p-6"
            )}>
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "border border-indigo-500/30"
                )}>
                  <Shield className="h-5 w-5 text-indigo-300" />
                </div>
                <h2 className="text-xl font-bold text-white">Account Security</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-indigo-200 text-sm mb-1">Email Verified</p>
                  <p className={cn(
                    "font-medium",
                    user.emailVerified ? "text-green-400" : "text-yellow-400"
                  )}>
                    {user.emailVerified ? 'Verified ✓' : 'Not Verified'}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-200 text-sm mb-1">Account Created</p>
                  <p className="text-white font-medium text-sm">
                    {user.metadata.creationTime 
                      ? new Date(user.metadata.creationTime).toLocaleDateString()
                      : 'Unknown'}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-200 text-sm mb-1">Last Sign In</p>
                  <p className="text-white font-medium text-sm">
                    {user.metadata.lastSignInTime 
                      ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                      : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>

            {/* Friends & Groups */}
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl overflow-hidden",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20",
              "p-6"
            )}>
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "border border-indigo-500/30"
                )}>
                  <Users className="h-5 w-5 text-indigo-300" />
                </div>
                <h2 className="text-xl font-bold text-white">Social</h2>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <span className="text-base text-gray-600 cursor-not-allowed">
                    Friends
                  </span>
                </li>
                <li>
                  <span className="text-base text-gray-600 cursor-not-allowed">
                    Groups
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className={cn(
        "max-w-md w-full",
        "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
        "rounded-xl overflow-hidden",
        "border border-indigo-500/30",
        "shadow-lg shadow-indigo-500/20",
        "p-8"
      )}>
        <div className="flex items-center justify-center mb-6">
          <div className={cn(
            "p-4 rounded-full",
            "bg-gradient-to-br from-indigo-600 to-purple-600",
            "shadow-lg shadow-indigo-500/30"
          )}>
            <UserIcon className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h2 className={cn(
          "text-3xl font-bold text-center mb-2",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          "bg-clip-text text-transparent",
          glowAnimation
        )}>
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h2>
        
        <p className="text-indigo-200 text-center mb-6">
          {isSignUp 
            ? 'Create a new account to get started' 
            : 'Welcome back! Please sign in to your account.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-indigo-200 text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-lg",
                  "bg-white/10 backdrop-blur-sm",
                  "border border-indigo-500/30",
                  "text-white placeholder-indigo-300/50",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  "focus:border-indigo-500",
                  "transition-all duration-300"
                )}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-indigo-200 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-lg",
                  "bg-white/10 backdrop-blur-sm",
                  "border border-indigo-500/30",
                  "text-white placeholder-indigo-300/50",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  "focus:border-indigo-500",
                  "transition-all duration-300"
                )}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full py-3 px-4 rounded-lg",
              "bg-gradient-to-r from-indigo-600 to-purple-600",
              "text-white font-medium",
              "hover:from-indigo-500 hover:to-purple-500",
              "transition-all duration-300",
              "shadow-lg shadow-indigo-500/20",
              "hover:shadow-xl hover:shadow-indigo-500/30",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              pixelBorder,
              gameButton
            )}
          >
            {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-300 hover:text-indigo-100 text-sm transition-colors"
          >
            {isSignUp 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"}
          </button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-indigo-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-b from-indigo-900/50 to-purple-900/50 text-indigo-300">
                Or continue with
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className={cn(
              "mt-4 w-full flex items-center justify-center",
              "py-3 px-4 rounded-lg",
              "bg-white text-gray-800 font-medium",
              "hover:bg-gray-100",
              "transition-all duration-300",
              "shadow-lg shadow-white/20",
              "hover:shadow-xl hover:shadow-white/30",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              pixelBorder,
              gameButton
            )}
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {googleLoading ? 'Loading...' : 'Sign in with Google'}
          </button>
        </div>
      </div>
    </div>
  )
}
