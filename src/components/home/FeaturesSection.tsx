import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { getIconComponent } from '../../utils/helpers'
import { cn } from '../../utils/helpers'
import { glowAnimation, pixelBorder } from '../../utils/game-effects'

export function FeaturesSection() {
  const { features } = useContentData() as ContentData

  if (!features || !features.items || features.items.length === 0) return null

  return (
    <div className="relative bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className={cn(
            "mt-2 text-3xl leading-8 font-extrabold tracking-tight",
            "text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200",
            "sm:text-4xl"
          )}>
            {features.headline}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-indigo-100/90 lg:mx-auto">
            {features.subheadline}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {features.items.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon)

              return (
                <div 
                  key={index} 
                  className={cn(
                    "relative flex flex-col items-center text-center",
                    "p-6 rounded-lg",
                    "bg-gray-800/30 backdrop-blur-sm",
                    pixelBorder,
                    "transform transition-all duration-300",
                    "hover:-translate-y-1",
                    "hover:shadow-[0_0_20px_0_rgba(99,102,241,0.5)]",
                    "shadow-[0_0_15px_0_rgba(99,102,241,0.3)]",
                    "border border-indigo-500/20"
                  )}
                >
                  <dt className="flex flex-col items-center">
                    <div className={cn(
                      "flex items-center justify-center h-16 w-16 rounded-lg mb-4",
                      "bg-gradient-to-br from-indigo-400 to-purple-500",
                      glowAnimation,
                      "shadow-[0_0_15px_0_rgba(99,102,241,0.5)]"
                    )}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <p className={cn(
                      "text-lg leading-6 font-bold",
                      "text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200",
                      "drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    )}>
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-4 text-base text-indigo-100/80">
                    {feature.description}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform translate-y-[1px]" />
        <div className="h-[3px] bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent transform translate-y-[2px]" />
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-24 opacity-40">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 h-1 rounded-full",
                  "bg-indigo-300",
                  "animate-pulse",
                  glowAnimation
                )}
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
