import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Globe, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={cn(
          "text-4xl sm:text-5xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          glowAnimation
        )}>
          Our Apps
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl overflow-hidden",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "transition-all duration-300 hover:scale-105",
            "hover:shadow-xl hover:shadow-indigo-500/30",
            "p-6"
          )}>
            <div className="flex items-center space-x-4 mb-4">
              <div className={cn(
                "p-3 rounded-lg",
                "bg-gradient-to-br from-indigo-600 to-purple-600",
                "shadow-lg shadow-indigo-500/30"
              )}>
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className={cn(
                "text-2xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent",
                glowAnimation
              )}>
                EgraTor
              </h2>
            </div>
            
            <p className={cn(
              "text-indigo-200 mb-4",
              "leading-relaxed"
            )}>
              Multi-functional browser for games and more
            </p>
            
            <div className={cn(
              "aspect-video bg-gray-800 rounded-lg",
              "border border-indigo-500/30",
              "overflow-hidden mb-4",
              "relative"
            )}>
              <img
                src="/images/egrator.png"
                alt="EgraTor Browser Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Link
              to="/egrator"
              className={cn(
                "w-full block text-center",
                "py-2 px-4 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              Learn More
            </Link>
          </div>
          
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl overflow-hidden",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "transition-all duration-300 hover:scale-105",
            "hover:shadow-xl hover:shadow-indigo-500/30",
            "p-6"
          )}>
            <div className="flex items-center space-x-4 mb-4">
              <div className={cn(
                "p-3 rounded-lg",
                "bg-gradient-to-br from-indigo-600 to-purple-600",
                "shadow-lg shadow-indigo-500/30"
              )}>
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h2 className={cn(
                "text-2xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent",
                glowAnimation
              )}>
                Coming Soon
              </h2>
            </div>
            
            <div className={cn(
              "aspect-video bg-gray-800 rounded-lg",
              "border border-indigo-500/30",
              "flex items-center justify-center",
              "mb-4",
              "bg-gradient-to-br from-gray-800 to-gray-900"
            )}>
              <p className={cn(
                "text-indigo-300 text-xl font-medium"
              )}>
                Coming Soon
              </p>
            </div>
            
            <button
              disabled
              className={cn(
                "w-full",
                "py-2 px-4 rounded-lg",
                "bg-gray-700",
                "text-gray-400 font-medium",
                "cursor-not-allowed",
                "transition-all duration-300"
              )}
            >
              Coming Soon
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

