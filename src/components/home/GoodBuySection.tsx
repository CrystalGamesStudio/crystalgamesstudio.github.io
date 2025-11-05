import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { Star } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { 
  glowAnimation, 
  pixelBorder, 
  gameButton, 
  energyField,
  glitchText,
  cyberpunkCard,
  neonText
} from '../../utils/game-effects'
import { Link } from 'react-router-dom'

export function GoodBuySection() {
  const { goodBuy } = useContentData() as ContentData

  if (!goodBuy) return null

  const CtaIcon = getIconComponent(goodBuy.ctaIcon)
  const QuoteIcon = getIconComponent(goodBuy.quote.icon)

  return (
    <section className={cn(
      "py-16 relative overflow-hidden",
      "bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900",
      energyField
    )}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="grid grid-cols-12 h-full w-full animate-[fadeIn_2s_ease-in-out]">
          {[...Array(144)].map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "aspect-square border border-indigo-500/20",
                "hover:bg-indigo-500/10 transition-colors duration-300"
              )} 
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-8 w-8",
                  i < Math.floor(goodBuy.rating) 
                    ? "text-yellow-400 animate-[glow_1s_ease-in-out_infinite]" 
                    : "text-gray-600"
                )}
                fill="currentColor"
              />
            ))}
          </div>
          <h2 className={cn(
            "text-4xl font-extrabold mb-4",
            "text-transparent bg-clip-text",
            "bg-gradient-to-r from-white via-indigo-200 to-purple-200",
            neonText,
            glitchText
          )}>
            {goodBuy.headline}
          </h2>
          <p className="text-xl text-indigo-200/80 max-w-2xl mx-auto">
            {goodBuy.subheadline}
          </p>
        </div>

        <div className="flex justify-center mb-12 relative z-20">
          {goodBuy.ctaLink.startsWith('/') ? (
            <Link
              to={goodBuy.ctaLink}
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-4 text-lg font-bold",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "text-white rounded-lg transform transition-all",
                pixelBorder,
                gameButton,
                "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
                "hover:scale-105",
                "shadow-[0_0_20px_0_rgba(99,102,241,0.3)]",
                "relative"
              )}
            >
              {CtaIcon && (
                <CtaIcon className={cn("mr-2 h-6 w-6", glowAnimation)} />
              )}
              {goodBuy.ctaText}
            </Link>
          ) : (
            <a
              href={goodBuy.ctaLink}
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-4 text-lg font-bold",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "text-white rounded-lg transform transition-all",
                pixelBorder,
                gameButton,
                "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
                "hover:scale-105",
                "shadow-[0_0_20px_0_rgba(99,102,241,0.3)]",
                "relative"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CtaIcon && (
                <CtaIcon className={cn("mr-2 h-6 w-6", glowAnimation)} />
              )}
              {goodBuy.ctaText}
            </a>
          )}
        </div>

        <div className={cn(
          "max-w-2xl mx-auto p-6 rounded-lg",
          cyberpunkCard,
          "transform hover:scale-[1.02] transition-transform duration-300",
          "relative z-10"
        )}>
          <div className="flex items-start space-x-4">
            {QuoteIcon && (
              <QuoteIcon className={cn(
                "h-8 w-8 text-indigo-400 flex-shrink-0",
                glowAnimation
              )} />
            )}
            <p className="text-lg text-indigo-200/80 italic">
              {goodBuy.quote.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

