import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { cn } from '../../utils/helpers'
import { glowAnimation, pixelBorder, gameButton } from '../../utils/game-effects'

export function ProductsShowcase() {
  const { productsShowcase } = useContentData() as ContentData

  if (!productsShowcase || !productsShowcase.items || productsShowcase.items.length === 0) return null

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 text-center mb-12">
          {productsShowcase.headline}
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {productsShowcase.items.map((product, index) => {
            const IconComponent = getIconComponent(product.icon)
            return (
              <div key={index} 
                className={cn(
                  "group relative flex flex-col bg-gray-800",
                  "rounded-lg overflow-hidden transform transition-all duration-300",
                  pixelBorder,
                  "hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/50"
                )}
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-t-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <IconComponent className={cn(
                      "h-20 w-20 text-indigo-300",
                      glowAnimation
                    )} />
                  </div>
                </div>
                <div className="mt-4 flex-grow flex flex-col p-4">
                  <h3 className="text-lg font-bold text-white/80 text-center mb-4">
                    {product.title}
                  </h3>
                  <div className="mt-auto">
                    {product.buttonLink ? (
                      <a
                        href={product.buttonLink}
                        className={cn(
                          "flex items-center justify-center px-4 py-2",
                          "bg-gradient-to-r from-indigo-500 to-purple-500",
                          "text-white rounded-md font-medium",
                          pixelBorder,
                          gameButton,
                          "hover:from-indigo-600 hover:to-purple-600"
                        )}
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {product.buttonText}
                      </a>
                    ) : (
                      <span className="flex items-center justify-center px-4 py-2 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed">
                        <IconComponent className="h-4 w-4 mr-2" />
                        {product.buttonText}
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
