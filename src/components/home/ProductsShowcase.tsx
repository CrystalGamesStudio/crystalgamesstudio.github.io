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
              <div key={index} className="group relative flex flex-col">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <div className="w-full h-full flex items-center justify-center">
                    <IconComponent className="h-20 w-20 text-gray-500" />
                  </div>
                </div>
                <div className="mt-4 flex-grow flex flex-col">
                  <h3 className="text-sm text-gray-700 text-center">
                    <a href={product.buttonLink}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <div className="mt-auto pt-4">
                    {product.buttonLink ? (
                      <a
                        href={product.buttonLink}
                        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {product.buttonText}
                        <span className="sr-only">, {product.title}</span>
                      </a>
                    ) : (
                      <span
                        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {product.buttonText}
                        <span className="sr-only">, {product.title}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
