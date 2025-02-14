import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'

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

export function Games() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={cn(
          "text-4xl sm:text-5xl font-bold text-center mb-8",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          glowAnimation
        )}>
          Our Games
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </main>
    </div>
  )
} 