import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Users, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Wspolniak() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className={cn(
                "p-4 rounded-xl",
                "bg-gradient-to-br from-indigo-600 to-purple-600",
                "shadow-lg shadow-indigo-500/30"
              )}>
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Wspolniak
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              A new app from CrystalGames Studio
            </p>
          </div>

          {/* Coming Soon */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "text-center"
          )}>
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-indigo-400" />
            </div>
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Coming Soon
            </h2>
            <p className="text-indigo-300 mb-8 max-w-lg mx-auto">
              We're working on something exciting. Stay tuned for more information about Wspolniak.
            </p>
            <Link
              to="/products"
              className={cn(
                "inline-flex items-center gap-2",
                "px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              <ArrowLeft className="h-5 w-5" /> Back to Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
