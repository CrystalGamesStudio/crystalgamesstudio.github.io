import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const { header } = useContentData() as ContentData
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!header) return null

  const IconComponent = getIconComponent(header.icon)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-indigo-500">
              <span className="sr-only">{header.text}</span>
              <IconComponent className="h-8 w-auto sm:h-10" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:flex md:items-center md:space-x-8`}>
            {header.navItems.map((item, index) => 
              item.link ? (
                <a
                  key={index}
                  href={item.link}
                  className="block mt-4 md:inline-block md:mt-0 text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.text}
                </a>
              ) : (
                <span
                  key={index}
                  className="block mt-4 md:inline-block md:mt-0 text-base font-medium text-gray-400 cursor-not-allowed"
                >
                  {item.text}
                </span>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
