import { useState } from 'react'
import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          {faq.headline}
        </h2>
        <dl className="space-y-6">
          {faq.items.map((item, index) => (
            <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
              <dt className="text-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full px-4 py-5 text-left text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {item.question}
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-indigo-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-500" />
                  )}
                </button>
              </dt>
              {openItems.includes(index) && (
                <dd className="px-4 py-5 bg-gray-50">
                  <p className="text-base text-gray-500">{item.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

