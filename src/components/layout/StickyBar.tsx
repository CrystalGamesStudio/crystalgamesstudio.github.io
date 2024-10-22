import { useContentData } from '../../hooks/useContentData'
import { cn, getIconComponent } from '../../utils/helpers'
import { ContentData } from '../../types/content'

export function StickyBar() {
  const { stickyBar } = useContentData() as ContentData

  if (!stickyBar) return null

  const IconComponent = getIconComponent(stickyBar.icon)

  return (
    <div className="bg-indigo-600 text-white py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <a
            href={stickyBar.link}
            className={cn(
              "text-sm sm:text-base font-medium truncate",
              "underline underline-offset-4",
              "hover:text-indigo-100 transition-colors"
            )}
          >
            {stickyBar.text}
          </a>
        </div>
      </div>
    </div>
  )
}
