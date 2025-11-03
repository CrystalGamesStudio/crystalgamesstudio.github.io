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
  const [openItems, setOpenItems] = useState<{ categoryIndex: number; itemIndex: number }[]>([])
  const [openCategories, setOpenCategories] = useState<number[]>([])

  if (!faq) return null

  // Support both new categories format and old items format
  const hasCategories = faq.categories && faq.categories.length > 0
  const hasItems = faq.items && faq.items.length > 0

  if (!hasCategories && !hasItems) return null

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategories(prev =>
      prev.includes(categoryIndex)
        ? prev.filter(cat => cat !== categoryIndex)
        : [...prev, categoryIndex]
    )
  }

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    setOpenItems(prevOpenItems => {
      const exists = prevOpenItems.some(item => 
        item.categoryIndex === categoryIndex && item.itemIndex === itemIndex
      )
      return exists
        ? prevOpenItems.filter(item => 
            !(item.categoryIndex === categoryIndex && item.itemIndex === itemIndex)
          )
        : [...prevOpenItems, { categoryIndex, itemIndex }]
    })
  }

  const isItemOpen = (categoryIndex: number, itemIndex: number) => {
    return openItems.some(item => 
      item.categoryIndex === categoryIndex && item.itemIndex === itemIndex
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn(
          "text-3xl font-extrabold text-center mb-12",
          "text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-400 to-purple-400",
          glowAnimation
        )}>
          {faq.headline}
        </h2>
        
        {hasCategories ? (
          <div className="space-y-6">
            {faq.categories!.map((category, categoryIndex) => (
              <div key={categoryIndex} className={cn(
                "bg-indigo-900/20 backdrop-blur-sm",
                "rounded-xl overflow-hidden",
                pixelBorder,
                "border border-indigo-500/30"
              )}>
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className={cn(
                    "w-full flex justify-between items-center",
                    "px-6 py-4",
                    "text-indigo-200 font-bold text-xl",
                    "hover:bg-indigo-800/30 transition-colors",
                    openCategories.includes(categoryIndex) && "bg-indigo-800/40"
                  )}
                >
                  <span className={cn(
                    openCategories.includes(categoryIndex) && glowAnimation
                  )}>
                    {category.name}
                  </span>
                  {openCategories.includes(categoryIndex) ? (
                    <ChevronUp className="h-5 w-5 text-indigo-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-400" />
                  )}
                </button>
                
                {openCategories.includes(categoryIndex) && (
                  <div className="px-4 pb-4 space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className={cn(
                          "bg-white/20 backdrop-blur-sm",
                          "rounded-lg overflow-hidden",
                          pixelBorder,
                          pixelCard,
                          "transform transition-all duration-300",
                          "hover:shadow-[0_0_15px_0_rgba(99,102,241,0.3)]"
                        )}
                      >
                        <dt className="text-base">
                          <button
                            onClick={() => toggleItem(categoryIndex, itemIndex)}
                            className={cn(
                              "flex justify-between items-center w-full",
                              "px-4 py-4 text-left",
                              "text-indigo-200 font-medium",
                              "hover:text-indigo-100 transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-indigo-500",
                              gameButton
                            )}
                          >
                            <span className={cn(
                              isItemOpen(categoryIndex, itemIndex) && glowAnimation
                            )}>
                              {item.question}
                            </span>
                            {isItemOpen(categoryIndex, itemIndex) ? (
                              <ChevronUp className={cn(
                                "h-4 w-4 text-indigo-400",
                                glowAnimation
                              )} />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-indigo-400" />
                            )}
                          </button>
                        </dt>
                        {isItemOpen(categoryIndex, itemIndex) && (
                          <dd className={cn(
                            "px-4 py-4",
                            "bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-800/50",
                            "border-t border-indigo-500/20"
                          )}>
                            <p className={cn(
                              "text-sm text-indigo-200/80",
                              "animate-[fadeIn_0.3s_ease-in-out]"
                            )}>
                              {item.answer}
                            </p>
                          </dd>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Fallback to old format without categories
          <dl className="space-y-6">
            {faq.items!.map((item, index) => (
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
                    onClick={() => toggleItem(-1, index)}
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
                      isItemOpen(-1, index) && glowAnimation
                    )}>
                      {item.question}
                    </span>
                    {isItemOpen(-1, index) ? (
                      <ChevronUp className={cn(
                        "h-5 w-5 text-indigo-400",
                        glowAnimation
                      )} />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-indigo-400" />
                    )}
                  </button>
                </dt>
                {isItemOpen(-1, index) && (
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
        )}
      </div>
    </section>
  )
}

