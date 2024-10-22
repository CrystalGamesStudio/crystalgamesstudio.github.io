import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'

export function ProductsShowcase() {
  const { productsShowcase } = useContentData() as ContentData

  if (!productsShowcase || !productsShowcase.items || productsShowcase.items.length === 0) return null

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
          {productsShowcase.headline}
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {productsShowcase.items.map((product, index) => {
            const IconComponent = getIconComponent(product.icon)
            return (
              <div key={index} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <IconComponent className="h-20 w-20" />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 text-center">
                      <a href={product.buttonLink} className="block">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href={product.buttonLink}
                    className="relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {product.buttonText}
                    <span className="sr-only">, {product.title}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
