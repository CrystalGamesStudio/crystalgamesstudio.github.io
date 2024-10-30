import { useContentData } from '../../hooks/useContentData'
import { ContentData } from '../../types/content'
import { cn } from '../../utils/helpers'
import { pulseAnimation, pixelBorder, gameButton, neonText } from '../../utils/game-effects'

export function HeroSection() {
    const { hero } = useContentData() as ContentData

    if (!hero) return null

    return (
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full w-full">
                    {[...Array(144)].map((_, i) => (
                        <div key={i} className="aspect-square border border-white/20" />
                    ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto relative">
                <div 
                    className="absolute right-0 top-0 w-1/2 h-full opacity-30 hidden lg:block"
                    dangerouslySetInnerHTML={{ __html: hero.backgroundSvg }}
                />
                
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className={cn(
                                "text-4xl tracking-tight font-extrabold",
                                "text-transparent bg-clip-text",
                                "bg-gradient-to-r from-white via-indigo-200 to-purple-200",
                                neonText,
                                "sm:text-5xl md:text-6xl"
                            )}>
                                <span className={cn(
                                    "block xl:inline",
                                    pulseAnimation
                                )}>
                                    {hero.headline}
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-indigo-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {hero.subheadline}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div>
                                    <a
                                        href={hero.ctaLink}
                                        className={cn(
                                            "w-full flex items-center justify-center px-8 py-3 text-base font-medium",
                                            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                                            "text-white rounded-lg transform transition-all",
                                            pixelBorder,
                                            gameButton,
                                            "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
                                            "md:py-4 md:text-lg md:px-10"
                                        )}
                                    >
                                        {hero.ctaText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}