import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Mail, Twitter, Youtube, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react'
import { useState, FormEvent } from 'react'

// Formspree endpoint - zastąp swoim
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgzwpqk"

function LoadingOverlay() {
  return (
    <div className={cn(
      "fixed inset-0 bg-gray-900/80 backdrop-blur-sm",
      "flex items-center justify-center",
      "z-50"
    )}>
      <div className={cn(
        "bg-gray-800 p-6 rounded-xl",
        "border border-indigo-500/30",
        "shadow-xl shadow-indigo-500/20",
        "flex flex-col items-center gap-4"
      )}>
        <Loader2 className={cn(
          "h-8 w-8 text-indigo-400",
          "animate-spin"
        )} />
        <p className="text-indigo-300 font-medium">Sending message...</p>
      </div>
    </div>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Podstawowa walidacja
    if (!formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ email: '', subject: '', message: '' }) // Czyszczenie formularza
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {isSubmitting && <LoadingOverlay />}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={cn(
          "text-4xl sm:text-5xl font-bold text-center mb-8",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          glowAnimation
        )}>
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Informacje kontaktowe */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-indigo-300 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Social Media */}
              <div className="space-y-4">
                <a
                  href="https://x.com/CrystalStudio64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-3",
                    "text-indigo-300 hover:text-indigo-100",
                    "transition-colors duration-200"
                  )}
                >
                  <Twitter className="h-6 w-6" />
                  <span>X</span>
                </a>
                
                <a
                  href="https://www.youtube.com/@CrystalGamesStudio-l9z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-3",
                    "text-indigo-300 hover:text-indigo-100",
                    "transition-colors duration-200"
                  )}
                >
                  <Youtube className="h-6 w-6" />
                  <span>YouTube</span>
                </a>
              </div>

              {/* WhatsApp Community */}
              <div className={cn(
                "p-6 rounded-lg",
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "border border-indigo-500/30",
                "transition-all duration-300",
                "hover:shadow-lg hover:shadow-emerald-500/20",
                "group"
              )}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-indigo-300">Join Our Community</h3>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-bold",
                    "bg-emerald-500/20 text-emerald-300",
                    "border border-emerald-500/30"
                  )}>
                    New!
                  </span>
                </div>
                <p className="text-indigo-200 mb-4">
                  Join our WhatsApp channel to receive the latest updates, chat with other players, and stay up to date with all the news!
                </p>
                <a
                  href="https://whatsapp.com/channel/0029Vb5pBYj1iUxXbkVkuy1f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-2 p-2 rounded-lg",
                    "text-indigo-300 hover:text-emerald-300",
                    "transition-all duration-300",
                    "hover:bg-emerald-500/10",
                    "group-hover:scale-105"
                  )}
                >
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">Join WhatsApp Channel →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formularz kontaktowy */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className={cn(
                "p-4 rounded-lg",
                "bg-green-900/20 border border-green-500/30",
                "flex items-center space-x-2"
              )}>
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-300">Message sent successfully!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={cn(
                "p-4 rounded-lg",
                "bg-red-900/20 border border-red-500/30",
                "flex items-center space-x-2"
              )}>
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-red-300">
                  {!formData.email || !formData.subject || !formData.message
                    ? 'Please fill in all fields'
                    : 'Error sending message. Please try again.'}
                </span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-indigo-300 font-medium mb-2 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-gray-800 border border-indigo-500/30",
                  "text-indigo-100",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  "transition duration-200"
                )}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-indigo-300 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-gray-800 border border-indigo-500/30",
                  "text-indigo-100",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  "transition duration-200"
                )}
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-indigo-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={6}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-gray-800 border border-indigo-500/30",
                  "text-indigo-100",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  "transition duration-200",
                  "resize-none"
                )}
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 px-6 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30",
                "flex items-center justify-center space-x-2",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              <Mail className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  )
} 