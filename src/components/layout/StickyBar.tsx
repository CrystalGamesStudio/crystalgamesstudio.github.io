import { useContentData } from '../../hooks/useContentData'
import { cn, getIconComponent } from '../../utils/helpers'
import { ContentData } from '../../types/content'
import { glowAnimation } from '../../utils/game-effects'
import { Link } from 'react-router-dom'

export function StickyBar() {
  const { stickyBar } = useContentData() as ContentData

  if (!stickyBar) return null

  const IconComponent = getIconComponent(stickyBar.icon)

  return (
    <div className="sticky top-0 z-50">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-[10px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-scanline" />
      </div>

      <div className={cn(
        "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900",
        "shadow-[0_4px_15px_0_rgba(99,102,241,0.3)]",
        "border-b-2 border-indigo-500/30"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-center space-x-2 sm:space-x-4 py-2",
            "text-indigo-200"
          )}>
            <IconComponent className={cn(
              "h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0",
              glowAnimation
            )} />
            {stickyBar.link.startsWith('/') ? (
              <Link
                to={stickyBar.link}
                className={cn(
                  "text-sm sm:text-base font-medium",
                  "hover:text-indigo-100 transition-colors",
                  "relative group"
                )}
              >
                {/* Hover effect underline */}
                <span className="relative">
                  {stickyBar.text}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5",
                    "bg-gradient-to-r from-indigo-400 to-purple-400",
                    "transform scale-x-0 group-hover:scale-x-100",
                    "transition-transform duration-300 origin-left"
                  )} />
                </span>
              </Link>
            ) : (
              <a
                href={stickyBar.link}
                className={cn(
                  "text-sm sm:text-base font-medium",
                  "hover:text-indigo-100 transition-colors",
                  "relative group"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Hover effect underline */}
                <span className="relative">
                  {stickyBar.text}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5",
                    "bg-gradient-to-r from-indigo-400 to-purple-400",
                    "transform scale-x-0 group-hover:scale-x-100",
                    "transition-transform duration-300 origin-left"
                  )} />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
