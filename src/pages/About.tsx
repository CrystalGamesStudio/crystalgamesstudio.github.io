import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Gem, Gamepad2, Users, Target, Heart, Zap } from 'lucide-react'

export function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className={cn(
                "p-4 rounded-xl",
                "bg-gradient-to-br from-indigo-600 to-purple-600",
                "shadow-lg shadow-indigo-500/30"
              )}>
                <Gem className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              About CrystalGames Studio
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              We create innovative games and apps that combine passion with technology
            </p>
          </div>

          {/* Mission Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <Target className="h-8 w-8 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Our Mission
              </h2>
            </div>
            <p className={cn(
              "text-indigo-200 text-lg leading-relaxed",
              "mb-4"
            )}>
              CrystalGames Studio was born from a passion for creating exceptional gaming and application experiences. 
              Our goal is to combine innovative technological solutions with creative entertainment 
              that engages and inspires players around the world.
            </p>
            <p className={cn(
              "text-indigo-300 leading-relaxed"
            )}>
              We believe that every game can be not just entertainment, but also a tool for learning, 
              growth, and building community. That's why we create projects that matter.
            </p>
          </div>

          {/* Values Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent",
              "text-center"
            )}>
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={cn(
                "p-6 rounded-lg",
                "bg-gray-800/50",
                "border border-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-4">
                  <Heart className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  "text-indigo-200"
                )}>
                  Passion
                </h3>
                <p className="text-indigo-300 text-sm">
                  Everything we do stems from a love of games and technology
                </p>
              </div>

              <div className={cn(
                "p-6 rounded-lg",
                "bg-gray-800/50",
                "border border-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-4">
                  <Zap className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  "text-indigo-200"
                )}>
                  Innovation
                </h3>
                <p className="text-indigo-300 text-sm">
                  We seek new solutions and ideas that surprise players
                </p>
              </div>

              <div className={cn(
                "p-6 rounded-lg",
                "bg-gray-800/50",
                "border border-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  "text-indigo-200"
                )}>
                  Community
                </h3>
                <p className="text-indigo-300 text-sm">
                  We build relationships with players and listen to their feedback
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <Gamepad2 className="h-8 w-8 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                What We Do
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "mt-1"
                )}>
                  <Gamepad2 className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className={cn(
                    "text-xl font-bold mb-1",
                    "text-indigo-200"
                  )}>
                    Game Development
                  </h3>
                  <p className="text-indigo-300">
                    We create web and mobile games that combine classic entertainment with modern mechanics. 
                    Each game is a unique experience designed with the player in mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "mt-1"
                )}>
                  <Zap className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className={cn(
                    "text-xl font-bold mb-1",
                    "text-indigo-200"
                  )}>
                    Desktop Applications
                  </h3>
                  <p className="text-indigo-300">
                    We develop modern desktop applications, such as EgraTor Browser - 
                    a browser built on Electron that combines functionality with elegant design.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  "bg-indigo-600/20",
                  "mt-1"
                )}>
                  <Users className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className={cn(
                    "text-xl font-bold mb-1",
                    "text-indigo-200"
                  )}>
                    Community Building
                  </h3>
                  <p className="text-indigo-300">
                    We support the gaming community through active communication, game updates 
                    and listening to feedback to constantly improve our products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

