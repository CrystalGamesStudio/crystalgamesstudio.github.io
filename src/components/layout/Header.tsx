import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { glowAnimation, pixelBorder, gameButton } from '../../utils/game-effects'

export function Header() {
  const { header } = useContentData() as ContentData
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!header) return null

  const IconComponent = getIconComponent(header.icon)

  return (
    <header className="bg-gray-900 border-b-2 border-indigo-500/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className={cn("text-indigo-400", glowAnimation)}>
              <span className="sr-only">{header.text}</span>
              <IconComponent className="h-8 w-auto sm:h-10" />
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className={cn(
                "text-indigo-400 p-2 rounded-lg",
                pixelBorder,
                gameButton
              )}
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
                  className={cn(
                    "block mt-4 md:inline-block md:mt-0",
                    "px-4 py-2 rounded-lg text-base font-medium",
                    "text-indigo-300 hover:text-indigo-100",
                    "transition-all duration-200",
                    "hover:bg-indigo-500/10",
                    "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]"
                  )}
                >
                  {item.text}
                </a>
              ) : (
                <span
                  key={index}
                  className="block mt-4 md:inline-block md:mt-0 text-base font-medium text-gray-600 cursor-not-allowed"
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
