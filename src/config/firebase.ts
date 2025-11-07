import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMdUBjs2QdVg7Ge_pyZR6SHKpu7RKw-E",
  authDomain: "crystal-develop.firebaseapp.com",
  projectId: "crystal-develop",
  storageBucket: "crystal-develop.firebasestorage.app",
  messagingSenderId: "713419463668",
  appId: "1:713419463668:web:4f2dddd98fb55529a177a1",
  measurementId: "G-GXBJQLHSHR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Firebase Storage
export const storage = getStorage(app)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Analytics (only in browser environment)
let analytics = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

export { analytics }
export default app

