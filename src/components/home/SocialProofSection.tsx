import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { Star } from 'lucide-react'
import { getIconComponent } from '../../utils/helpers'
import { cn } from '../../utils/helpers'
import { 
  glowAnimation, 
  pixelBorder, 
  gameButton, 
  floatAnimation,
  pixelCard
} from '../../utils/game-effects'
import { Link } from 'react-router-dom'

export function SocialProofSection() {
  const { socialProof } = useContentData() as ContentData

  if (!socialProof || !socialProof.items || socialProof.items.length === 0) return null

  const CtaIcon = getIconComponent(socialProof.ctaIcon)

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn(
          "text-3xl font-extrabold text-center mb-12",
          "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300",
          glowAnimation
        )}>
          {socialProof.headline}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {socialProof.items.map((item, index) => {
            const IconComponent = getIconComponent(item.icon)

            return (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center",
                  "bg-gray-800/50 backdrop-blur-sm",
                  "rounded-lg p-6",
                  pixelBorder,
                  pixelCard,
                  "transform transition-all duration-300",
                  "hover:-translate-y-2",
                  "hover:shadow-[0_0_20px_0_rgba(99,102,241,0.3)]",
                  index === 1 ? floatAnimation : ''
                )}
              >
                <IconComponent className={cn(
                  "h-12 w-auto mb-4 text-indigo-400",
                  glowAnimation
                )} />
                <p className="text-indigo-200/80 text-center mb-4 font-medium">
                  {item.quote}
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(item.rating) 
                          ? "text-yellow-400 animate-[glow_1s_ease-in-out_infinite]" 
                          : "text-gray-600"
                      )}
                      fill="currentColor"
                    />
                  ))}
                  {item.rating % 1 !== 0 && (
                    <div className="relative">
                      <Star
                        className="h-5 w-5 text-gray-600"
                        fill="currentColor"
                      />
                      <Star
                        className="absolute top-0 left-0 h-5 w-5 text-yellow-400 animate-[glow_1s_ease-in-out_infinite]"
                        fill="currentColor"
                        style={{ clipPath: `inset(0 ${100 - (item.rating % 1) * 100}% 0 0)` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          {socialProof.ctaLink.startsWith('/') ? (
            <Link
              to={socialProof.ctaLink}
              className={cn(
                "inline-flex items-center justify-center",
                "px-6 py-3 text-lg font-medium",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "text-white rounded-lg",
                pixelBorder,
                gameButton,
                "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              {CtaIcon && <CtaIcon className={cn("mr-2 h-5 w-5", glowAnimation)} />}
              {socialProof.ctaText}
            </Link>
          ) : (
            <a
              href={socialProof.ctaLink}
              className={cn(
                "inline-flex items-center justify-center",
                "px-6 py-3 text-lg font-medium",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "text-white rounded-lg",
                pixelBorder,
                gameButton,
                "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CtaIcon && <CtaIcon className={cn("mr-2 h-5 w-5", glowAnimation)} />}
              {socialProof.ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
