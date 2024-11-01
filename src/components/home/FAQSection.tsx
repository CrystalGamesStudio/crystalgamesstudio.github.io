import { useState } from 'react'
import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { 
  glowAnimation, 
  pixelBorder, 
  gameButton, 
  pixelCard
} from '../../utils/game-effects'

export function FAQSection() {
  const { faq } = useContentData() as ContentData
  const [openItems, setOpenItems] = useState<number[]>([])

  if (!faq || !faq.items || faq.items.length === 0) return null

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn(
          "text-3xl font-extrabold text-center mb-8",
          "text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-400 to-purple-400",
          glowAnimation
        )}>
          {faq.headline}
        </h2>
        <dl className="space-y-6">
          {faq.items.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white/30 backdrop-blur-sm",
                "rounded-lg overflow-hidden",
                pixelBorder,
                pixelCard,
                "transform transition-all duration-300",
                "hover:shadow-[0_0_15px_0_rgba(99,102,241,0.3)]"
              )}
            >
              <dt className="text-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className={cn(
                    "flex justify-between items-center w-full",
                    "px-4 py-5 text-left",
                    "text-indigo-200 font-medium",
                    "hover:text-indigo-100 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                    gameButton
                  )}
                >
                  <span className={cn(
                    openItems.includes(index) && glowAnimation
                  )}>
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className={cn(
                      "h-5 w-5 text-indigo-400",
                      glowAnimation
                    )} />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-400" />
                  )}
                </button>
              </dt>
              {openItems.includes(index) && (
                <dd className={cn(
                  "px-4 py-5",
                  "bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-800/50",
                  "border-t border-indigo-500/20"
                )}>
                  <p className={cn(
                    "text-base text-indigo-200/80",
                    "animate-[fadeIn_0.3s_ease-in-out]"
                  )}>
                    {item.answer}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

