import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Link } from 'react-router'
import { ExternalLink, Github, AppWindow } from 'lucide-react'

type Product = {
  title: string
  imageUrl?: string
  description: string
  // Internal link to the product page (used by the "More" button,
  // or as the single main button when there is no openLink).
  link: string
  // External link — when present, renders the "Open" button (GitHub/exsize/wspolniak etc.).
  openLink?: string
  // Label of the single main button shown when there is no openLink (e.g. "Play Now", "Learn More").
  buttonText?: string
}

const apps: Product[] = [
  {
    title: "ExSize",
    imageUrl: "/images/exsize-preview.png",
    description: "Family task management with gamification — motivate children through tasks, rewards and virtual currency",
    link: "/products/exsize",
    openLink: "https://exsize.pages.dev",
  },
  {
    title: "Wspolniak",
    imageUrl: "/images/wspolniak-preview.png",
    description: "A latest working app from Crystal Studio, Open-Source, so you can Self-Host it.",
    link: "/products/wspolniak",
    openLink: "https://wspolniak.com",
  },
  {
    title: "ADM-CLI",
    imageUrl: "/images/adm-preview.png",
    description: "Developer-focused CLI tool that automates environment setup and provides an AI-powered daily assistant for development workflows",
    link: "/products/adm-cli",
    openLink: "https://github.com/CrystalPlatforms/ADM-CLI",
  },
  {
    title: "umux",
    imageUrl: "/images/umux-preview.png",
    description: "Open-source terminal workspace manager for Linux, macOS and Windows — persistent project workspaces, tabs & split panels, SSH, agent status, and desktop notifications when AI CLI tasks finish. v1.0 is out now!",
    link: "/products/umux",
    openLink: "https://github.com/CrystalPlatforms/umux",
  },
]

const games: Product[] = [
  {
    title: "School's Out!",
    imageUrl: "/images/schoolsout.png",
    description: "Amazing arcade game! Engaging gameplay and unique mechanics make it impossible to put down!",
    link: "/schools-out",
    buttonText: "Play Now",
  },
  {
    title: "Coin Collector",
    imageUrl: "/images/coincollector.png",
    description: "Exciting coin-collecting adventure with addictive gameplay and challenging levels. Can you collect them all?",
    link: "/coin-collector",
    buttonText: "Play Now",
  },
]

// Unified card for both games and apps — same size, same style.
function ProductCard({ product }: { product: Product }) {
  const isGithub = !!product.openLink && product.openLink.includes('github.com')

  return (
    <div className={cn(
      "flex flex-col h-full",
      "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
      "rounded-xl overflow-hidden",
      "border border-indigo-500/30",
      "shadow-lg shadow-indigo-500/20",
      "transition-all duration-300 hover:scale-105",
      "hover:shadow-xl hover:shadow-indigo-500/30"
    )}>
      {/* Image / placeholder — always the same aspect ratio so every card is identical in size */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <AppWindow className="h-16 w-16 text-indigo-400/40" />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className={cn(
          "text-2xl font-bold mb-3",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          "bg-clip-text text-transparent",
          glowAnimation
        )}>
          {product.title}
        </h3>

        <p className={cn(
          "text-indigo-200 leading-relaxed mb-4"
        )}>
          {product.description}
        </p>

        {/* Buttons — pinned to the bottom so every card in a row lines up */}
        <div className="mt-auto">
          {product.openLink ? (
            <div className="flex gap-3">
              <a
                href={product.openLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 flex items-center justify-center gap-2",
                  "py-2 px-4 rounded-lg",
                  "bg-gradient-to-r from-indigo-600 to-purple-600",
                  "text-white font-medium",
                  "hover:from-indigo-500 hover:to-purple-500",
                  "transition-all duration-300",
                  "shadow-lg shadow-indigo-500/20",
                  "hover:shadow-xl hover:shadow-indigo-500/30"
                )}
              >
                {isGithub ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                Open
              </a>
              <Link
                to={product.link}
                className={cn(
                  "flex-1 block text-center",
                  "py-2 px-4 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                More
              </Link>
            </div>
          ) : (
            <Link
              to={product.link}
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
              {product.buttonText || "Learn More"}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

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

        {/* Apps Section — shown first */}
        <div className="mb-16">
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <ProductCard key={index} product={app} />
            ))}
          </div>
        </div>

        {/* Games Section — shown second */}
        <div>
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {games.map((game, index) => (
              <ProductCard key={index} product={game} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
