import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { Star } from 'lucide-react'

export function GoodBuySection() {
  const { goodBuy } = useContentData() as ContentData

  if (!goodBuy) return null

  const CtaIcon = getIconComponent(goodBuy.ctaIcon)
  const QuoteIcon = getIconComponent(goodBuy.quote.icon)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${
                  i < Math.floor(goodBuy.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{goodBuy.headline}</h2>
          <p className="text-xl text-gray-600">{goodBuy.subheadline}</p>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href={goodBuy.ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {CtaIcon && <CtaIcon className="mr-2 h-6 w-6" />}
            {goodBuy.ctaText}
          </a>
        </div>

        <div className="flex items-start justify-center">
          {QuoteIcon && <QuoteIcon className="h-8 w-8 text-gray-400 mr-4 flex-shrink-0" />}
          <p className="text-lg text-gray-600 italic">{goodBuy.quote.text}</p>
        </div>
      </div>
    </section>
  )
}

