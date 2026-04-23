import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { useState, type ComponentType } from 'react'
import { Menu, X, Home, Package, User, Mail, Github, ExternalLink } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { glowAnimation, pixelBorder } from '../../utils/game-effects'
import { Link } from 'react-router-dom'

const navIconMap: Record<string, ComponentType<{ className?: string }>> = {
  'Home': Home,
  'Products': Package,
  'Profile': User,
  'Contact': Mail,
}

export function Header() {
  const { header } = useContentData() as ContentData
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!header) return null

  const IconComponent = getIconComponent(header.icon)

  return (
    <header className="bg-gray-900 border-b-2 border-indigo-500/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className={cn("text-indigo-400 flex items-center group", glowAnimation)}>
              <span className="sr-only">{header.text}</span>
              <IconComponent className="h-8 w-auto sm:h-10" />
              <span className={cn(
                "max-w-0 overflow-hidden whitespace-nowrap",
                "group-hover:max-w-[200px] group-hover:ml-2",
                "transition-all duration-500 ease-out",
                "text-transparent bg-clip-text",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "text-sm font-bold"
              )}>
                CrystalGames Studio
              </span>
            </Link>
          </div>

          <div className="md:hidden z-50">
            <button
              type="button"
              className={cn(
                "text-indigo-400 p-2 rounded-lg",
                pixelBorder,
                "absolute top-4 right-4 z-50"
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

            <div className={cn(
              "fixed inset-0 bg-gray-900/95",
              "transition-opacity duration-300",
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
              "z-40"
            )} />

            <div className={cn(
              "fixed top-0 right-0 bottom-0",
              "w-64 bg-gray-900",
              "transform transition-transform duration-300",
              "p-6 pt-32",
              "shadow-xl",
              "z-40",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
              <div className="space-y-4">
                {header.navItems.map((item, index) => {
                  const NavIcon = navIconMap[item.text]
                  return item.link ? (
                    item.link.startsWith('/') ? (
                      <Link
                        key={index}
                        to={item.link}
                        className={cn(
                          "flex items-center gap-2",
                          "px-4 py-3",
                          "rounded-lg",
                          "text-base font-medium",
                          "text-indigo-300 hover:text-indigo-100",
                          "transition-all duration-200",
                          "hover:bg-indigo-500/10",
                          "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]",
                          "bg-gray-800"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {NavIcon && <NavIcon className="h-4 w-4" />}
                        {item.text}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={item.link}
                        className={cn(
                          "flex items-center gap-2",
                          "px-4 py-3",
                          "rounded-lg",
                          "text-base font-medium",
                          "text-indigo-300 hover:text-indigo-100",
                          "transition-all duration-200",
                          "hover:bg-indigo-500/10",
                          "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]",
                          "bg-gray-800"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {NavIcon && <NavIcon className="h-4 w-4" />}
                        {item.text}
                      </a>
                    )
                  ) : (
                    <span
                      key={index}
                      className="block text-base font-medium text-gray-600 cursor-not-allowed px-4 py-3"
                    >
                      {item.text}
                    </span>
                  )
                })}

                <a
                  href="https://wspolniak.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-2",
                    "px-4 py-3",
                    "rounded-lg",
                    "text-sm font-bold text-white",
                    "bg-gradient-to-r from-purple-600 to-pink-600",
                    "hover:from-purple-500 hover:to-pink-500",
                    "transition-all duration-300",
                    "shadow-lg shadow-purple-500/20",
                    "hover:shadow-xl hover:shadow-purple-500/30"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try Wspólniak <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href="https://github.com/CrystalGamesStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2",
                    "px-4 py-3",
                    "rounded-lg",
                    "text-base font-medium",
                    "text-indigo-300 hover:text-indigo-100",
                    "transition-all duration-200",
                    "hover:bg-indigo-500/10",
                    "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]",
                    "bg-gray-800"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-6">
            {header.navItems.map((item, index) => {
              const NavIcon = navIconMap[item.text]
              return item.link ? (
                item.link.startsWith('/') ? (
                  <Link
                    key={index}
                    to={item.link}
                    className={cn(
                      "flex items-center gap-1.5",
                      "px-3 py-2 rounded-lg",
                      "text-sm font-medium",
                      "text-indigo-300 hover:text-indigo-100",
                      "transition-all duration-200",
                      "hover:bg-indigo-500/10",
                      "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]"
                    )}
                  >
                    {NavIcon && <NavIcon className="h-4 w-4" />}
                    {item.text}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.link}
                    className={cn(
                      "flex items-center gap-1.5",
                      "px-3 py-2 rounded-lg",
                      "text-sm font-medium",
                      "text-indigo-300 hover:text-indigo-100",
                      "transition-all duration-200",
                      "hover:bg-indigo-500/10",
                      "hover:shadow-[0_0_10px_0_rgba(99,102,241,0.3)]"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {NavIcon && <NavIcon className="h-4 w-4" />}
                    {item.text}
                  </a>
                )
              ) : (
                <span
                  key={index}
                  className="text-sm font-medium text-gray-600 cursor-not-allowed px-3 py-2"
                >
                  {item.text}
                </span>
              )
            })}

            <a
              href="https://wspolniak.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5",
                "px-4 py-2 rounded-lg",
                "text-sm font-bold text-white",
                "bg-gradient-to-r from-purple-600 to-pink-600",
                "hover:from-purple-500 hover:to-pink-500",
                "transition-all duration-300",
                "shadow-lg shadow-purple-500/20",
                "hover:shadow-xl hover:shadow-purple-500/30"
              )}
            >
              Try Wspólniak <ExternalLink className="h-3 w-3" />
            </a>

            <a
              href="https://github.com/CrystalGamesStudio"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-indigo-400 hover:text-indigo-200",
                "transition-colors duration-200",
                "p-2"
              )}
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
