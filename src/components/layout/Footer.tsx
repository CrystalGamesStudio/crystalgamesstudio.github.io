import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { cn } from '../../utils/helpers'
import { glowAnimation, pixelBorder } from '../../utils/game-effects'

export function Footer() {
  const { footer } = useContentData() as ContentData

  if (!footer) return null

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-indigo-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:col-span-2">
            {footer.columns.map((column, index) => (
              <div 
                key={index}
                className={cn(
                  "p-4 rounded-lg bg-gray-800/50",
                  pixelBorder,
                  "hover:shadow-[0_0_15px_0_rgba(99,102,241,0.3)]",
                  "transition-all duration-300"
                )}
              >
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-widest uppercase mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url ? (
                        <a 
                          href={link.url} 
                          className="text-base text-indigo-300 hover:text-indigo-100 transition-colors"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <span className="text-base text-gray-600 cursor-not-allowed">
                          {link.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-indigo-500/20 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footer.socialMedia.map((item, index) => {
              const IconComponent = getIconComponent(item.icon)
              return (
                <a 
                  key={index} 
                  href={item.url} 
                  className={cn(
                    "text-indigo-400 hover:text-indigo-300 transition-colors",
                    glowAnimation
                  )}
                >
                  <span className="sr-only">{item.icon}</span>
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </a>
              )
            })}
          </div>
          <p className="mt-8 text-base text-indigo-400/60 md:mt-0 md:order-1">
            {`© ${new Date().getFullYear()}  `}
            <a 
              href={footer.copyrightLink} 
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {footer.copyright}
            </a> {footer.copyrightReserve}
          </p>
        </div>
      </div>
    </footer>
  )
}
