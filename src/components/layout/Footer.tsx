import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'

export function Footer() {
  const { footer } = useContentData() as ContentData

  if (!footer) {
    return null
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:col-span-2">
            {footer.columns.map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-indigo-300 tracking-widest uppercase mb-2 border-b border-indigo-500 pb-1">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url ? (
                        <a href={link.url} className="text-base text-gray-300 hover:text-white">
                          {link.text}
                        </a>
                      ) : (
                        <span className="text-base text-gray-400 cursor-not-allowed">
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
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footer.socialMedia.map((item, index) => {
              const IconComponent = getIconComponent(item.icon)
              return (
                <a key={index} href={item.url} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.icon}</span>
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </a>
              )
            })}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
