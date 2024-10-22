import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'

export function FeaturesSection() {
  const { features } = useContentData() as ContentData

  if (!features || !features.items || features.items.length === 0) return null

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {features.headline}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {features.subheadline}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
            {features.items.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon)

              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <dt className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <p className="text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
