import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { Star } from 'lucide-react'
import { getIconComponent } from '../../utils/helpers'

export function SocialProofSection() {
  const { socialProof } = useContentData() as ContentData

  if (!socialProof || !socialProof.items || socialProof.items.length === 0) return null

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          {socialProof.headline}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {socialProof.items.map((item, index) => {
            const IconComponent = getIconComponent(item.icon)

            return (
              <div key={index} className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm">
                <IconComponent className="h-12 w-auto mb-4" />
              <p className="text-gray-600 text-center mb-4">{item.quote}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
                {item.rating % 1 !== 0 && (
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    style={{ clipPath: `inset(0 ${100 - (item.rating % 1) * 100}% 0 0)` }}
                  />
                )}
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

