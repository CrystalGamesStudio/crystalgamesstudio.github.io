import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { BookOpen, Gamepad2, Keyboard, Zap, Trophy, ArrowLeft, Space } from 'lucide-react'

export function GameGuide() {
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
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Game Guide
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              Learn how to play our games and master the mechanics
            </p>
          </div>

          {/* School's Out! Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <Gamepad2 className="h-10 w-10 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                School's Out!
              </h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className={cn(
                  "text-2xl font-bold mb-4 text-indigo-200"
                )}>
                  How to Play
                </h3>
                <p className="text-indigo-300 mb-6 leading-relaxed">
                  School's Out! is an exciting arcade-style game where you must survive the school day by jumping over obstacles 
                  and managing your energy. Master Morse code combos to unlock powerful bonuses and achieve the highest score possible!
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Keyboard className="h-5 w-5" />
                  <span>Basic Controls</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Space className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Jump</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Press <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Spacebar</kbd> or tap the right side 
                      of the screen (on mobile) to jump over obstacles.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Energy Management</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Watch your energy bar carefully. Jumping consumes energy, so manage it wisely to survive longer.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Zap className="h-5 w-5" />
                  <span>Morse Code Combos</span>
                </h3>
                <div className={cn(
                  "p-4 rounded-lg",
                  "bg-indigo-800/30",
                  "border border-indigo-500/30"
                )}>
                  <p className="text-indigo-200 mb-3">
                    One of the unique features of School's Out! is the Morse code combo system:
                  </p>
                  <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-2">
                    <li>Press <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Enter</kbd> to start inputting your combo</li>
                    <li>Use dots (.) and dashes (-) to create Morse code patterns</li>
                    <li>Complete combos to earn temporary bonuses and power-ups</li>
                    <li>Higher scores come from successful combo execution!</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Trophy className="h-5 w-5" />
                  <span>Tips for High Scores</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Timing is everything:</strong> Learn the patterns of obstacles and jump 
                      at the right moment to conserve energy.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Practice Morse code:</strong> The better you get at combos, the more 
                      bonuses you'll unlock, leading to higher scores.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Survive as long as possible:</strong> The longer you stay alive, 
                      the more points you accumulate. Try to set new personal records!
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Coin Collector Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <Gamepad2 className="h-10 w-10 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Coin Collector
              </h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className={cn(
                  "text-2xl font-bold mb-4 text-indigo-200"
                )}>
                  How to Play
                </h3>
                <p className="text-indigo-300 mb-6 leading-relaxed">
                  Coin Collector is a fast-paced adventure game where your goal is simple: collect all the coins while avoiding 
                  obstacles and making it to the exit. Navigate through challenging levels and become a master coin collector!
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Keyboard className="h-5 w-5" />
                  <span>Controls</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <ArrowLeft className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Movement</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Use <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Arrow Keys</kbd> (↑ ↓ ← →) to move your character 
                      around the level. On mobile devices, use on-screen directional controls.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Trophy className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Objective</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Your goal is to collect all coins scattered throughout each level while avoiding dangerous obstacles.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Zap className="h-5 w-5" />
                  <span>Gameplay Mechanics</span>
                </h3>
                <div className="space-y-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-indigo-800/30",
                    "border border-indigo-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Collect All Coins</h4>
                    <p className="text-indigo-300 text-sm">
                      Each level contains a specific number of coins. Make sure to collect every single one before attempting 
                      to reach the exit. Some coins might be hidden in tricky locations!
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-red-900/20",
                    "border border-red-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Avoid Obstacles</h4>
                    <p className="text-indigo-300 text-sm">
                      Watch out for various obstacles that can harm you or slow you down. These might include spikes, moving 
                      platforms, enemies, or environmental hazards. One wrong move could cost you the level!
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-green-900/20",
                    "border border-green-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Reach the Exit</h4>
                    <p className="text-indigo-300 text-sm">
                      Once you've collected all coins, navigate to the exit point to complete the level and advance to the next challenge. 
                      Only then will you be able to progress!
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <Trophy className="h-5 w-5" />
                  <span>Pro Tips</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Plan your route:</strong> Before making a move, observe the level layout 
                      and plan the most efficient path to collect all coins.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Timing is crucial:</strong> Wait for the right moment to move past 
                      obstacles. Some may move in patterns that you can predict.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Don't rush:</strong> Take your time to collect all coins safely. 
                      Speed comes with practice, but accuracy is key to completing levels.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

