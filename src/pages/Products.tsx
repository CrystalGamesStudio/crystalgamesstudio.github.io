import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Globe, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

type Game = {
  title: string;
  imageUrl: string;
  review: string;
  link: string;
}

const games: Game[] = [
  {
    title: "School's Out!",
    imageUrl: "/images/schoolsout.png",
    review: "Amazing arcade game! Engaging gameplay and unique mechanics make it impossible to put down!",
    link: "/schools-out"
  },
  {
    title: "Coin Collector",
    imageUrl: "/images/coincollector.png",
    review: "Exciting coin-collecting adventure with addictive gameplay and challenging levels. Can you collect them all?",
    link: "/coin-collector"
  }
]

function GameCard({ game }: { game: Game }) {
  return (
    <div className={cn(
      "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
      "rounded-xl overflow-hidden",
      "border border-indigo-500/30",
      "shadow-lg shadow-indigo-500/20",
      "transition-all duration-300 hover:scale-105",
      "hover:shadow-xl hover:shadow-indigo-500/30"
    )}>
      <h3 className={cn(
        "text-2xl font-bold text-center py-4",
        "bg-gradient-to-r from-indigo-400 to-purple-400",
        "bg-clip-text text-transparent",
        glowAnimation,
        "animate-floating"
      )}>
        {game.title}
      </h3>
      
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <p className={cn(
          "text-indigo-200 text-center",
          "italic"
        )}>
          "{game.review}"
        </p>
        
        <a
          href={game.link}
          className={cn(
            "mt-4 block w-full text-center",
            "py-2 px-4 rounded-lg",
            "bg-gradient-to-r from-indigo-600 to-purple-600",
            "text-white font-medium",
            "hover:from-indigo-500 hover:to-purple-500",
            "transition-all duration-300",
            "shadow-lg shadow-indigo-500/20",
            "hover:shadow-xl hover:shadow-indigo-500/30"
          )}
        >
          Play Now
        </a>
      </div>
    </div>
  )
}

function AppCard({ app }: { app: { title: string; description: string; imageUrl?: string; link: string } }) {
  return (
    <div className={cn(
      "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
      "rounded-xl overflow-hidden",
      "border border-indigo-500/30",
      "shadow-lg shadow-indigo-500/20",
      "transition-all duration-300 hover:scale-105",
      "hover:shadow-xl hover:shadow-indigo-500/30",
      "p-6"
    )}>
      <div className="flex items-center space-x-4 mb-4">
        <div className={cn(
          "p-3 rounded-lg",
          "bg-gradient-to-br from-indigo-600 to-purple-600",
          "shadow-lg shadow-indigo-500/30"
        )}>
          <Globe className="h-6 w-6 text-white" />
        </div>
        <h2 className={cn(
          "text-2xl font-bold",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          "bg-clip-text text-transparent",
          glowAnimation
        )}>
          {app.title}
        </h2>
      </div>
      
      <p className={cn(
        "text-indigo-200 mb-4",
        "leading-relaxed"
      )}>
        {app.description}
      </p>
      
      {app.imageUrl && (
        <div className={cn(
          "aspect-video bg-gray-800 rounded-lg",
          "border border-indigo-500/30",
          "overflow-hidden mb-4",
          "relative"
        )}>
          <img
            src={app.imageUrl}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <Link
        to={app.link}
        className={cn(
          "w-full block text-center",
          "py-2 px-4 rounded-lg",
          "bg-gradient-to-r from-indigo-600 to-purple-600",
          "text-white font-medium",
          "hover:from-indigo-500 hover:to-purple-500",
          "transition-all duration-300",
          "shadow-lg shadow-indigo-500/20",
          "hover:shadow-xl hover:shadow-indigo-500/30"
        )}
      >
        Learn More
      </Link>
    </div>
  )
}

const apps = [
  {
    title: "EgraTor",
    description: "Multi-functional browser for games and more",
    imageUrl: "/images/EgraTor-card image.png",
    link: "/egrator"
  }
]

export function Products() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={cn(
          "text-4xl sm:text-5xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          glowAnimation
        )}>
          Our Products
        </h1>

        {/* Games Section */}
        <div className="mb-16">
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} game={game} />
            ))}
            
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl overflow-hidden",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20",
              "transition-all duration-300 hover:scale-105",
              "hover:shadow-xl hover:shadow-indigo-500/30"
            )}>
              <h3 className={cn(
                "text-2xl font-bold text-center py-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent",
                glowAnimation,
                "animate-floating"
              )}>
                Coming Soon
              </h3>
              
              <div className={cn(
                "relative aspect-video",
                "bg-gradient-to-br from-gray-800 to-gray-900",
                "flex items-center justify-center"
              )}>
                <p className={cn(
                  "text-indigo-300 text-xl font-medium"
                )}>
                  Coming Soon
                </p>
              </div>
              
              <div className="p-6">
                <p className={cn(
                  "text-indigo-200 text-center",
                  "italic mb-4"
                )}>
                  "New games are on the way!"
                </p>
                
                <button
                  disabled
                  className={cn(
                    "w-full",
                    "py-2 px-4 rounded-lg",
                    "bg-gray-700",
                    "text-gray-400 font-medium",
                    "cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Section */}
        <div>
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
            
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl overflow-hidden",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20",
              "transition-all duration-300 hover:scale-105",
              "hover:shadow-xl hover:shadow-indigo-500/30",
              "p-6"
            )}>
              <div className="flex items-center space-x-4 mb-4">
                <div className={cn(
                  "p-3 rounded-lg",
                  "bg-gradient-to-br from-indigo-600 to-purple-600",
                  "shadow-lg shadow-indigo-500/30"
                )}>
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent",
                  glowAnimation
                )}>
                  Coming Soon
                </h2>
              </div>
              
              <div className={cn(
                "aspect-video bg-gray-800 rounded-lg",
                "border border-indigo-500/30",
                "flex items-center justify-center",
                "mb-4",
                "bg-gradient-to-br from-gray-800 to-gray-900"
              )}>
                <p className={cn(
                  "text-indigo-300 text-xl font-medium"
                )}>
                  Coming Soon
                </p>
              </div>
              
              <button
                disabled
                className={cn(
                  "w-full",
                  "py-2 px-4 rounded-lg",
                  "bg-gray-700",
                  "text-gray-400 font-medium",
                  "cursor-not-allowed",
                  "transition-all duration-300"
                )}
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

