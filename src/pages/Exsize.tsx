import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import {
  Trophy,
  ExternalLink,
  ClipboardList,
  CheckCircle,
  Gift,
  Shield,
  Crown,
  Users,
  Calendar,
  BarChart3,
  Target,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'

export function Exsize() {
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
                <Trophy className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              ExSize
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              Family task management with gamification — motivate your children through tasks, rewards, and virtual currency.
            </p>
          </div>

          {/* Open App CTA */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "text-center"
          )}>
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Start Managing Family Tasks Today
            </h2>
            <p className="text-indigo-300 mb-6">
              Help your children build responsibility through a fun, game-like experience.
            </p>
            <a
              href="https://exsize.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2",
                "px-8 py-3 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium text-lg",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              Open ExSize <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className={cn(
              "text-3xl font-bold text-center mb-8",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400"
            )}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <ClipboardList className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-200 mb-2">Parents Assign Tasks</h3>
                <p className="text-indigo-300 text-sm">Create one-time or weekly tasks with ExBucks rewards. Assign them to specific children in your family.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-200 mb-2">Children Complete Tasks</h3>
                <p className="text-indigo-300 text-sm">Kids mark tasks as done. Parents review and approve. Approved tasks earn ExBucks — the virtual currency.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20",
                "text-center"
              )}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-200 mb-2">ExBucks & Rewards</h3>
                <p className="text-indigo-300 text-sm">Children spend earned ExBucks in the reward shop. Browse, purchase, and enjoy — no parent approval needed.</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-6",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Task Lifecycle</p>
                  <p className="text-indigo-300 text-sm">Create, assign, complete, approve or reject — full task state machine with parent oversight.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Weekly Plans</p>
                  <p className="text-indigo-300 text-sm">Assign tasks to specific days of the week. Children see their plan organized by day.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">ExBucks Economy</p>
                  <p className="text-indigo-300 text-sm">Virtual currency earned through tasks. Full transaction ledger with earned, spent, and penalty records.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Reward Shop</p>
                  <p className="text-indigo-300 text-sm">Admin-managed catalog with fixed prices. Children purchase rewards instantly with ExBucks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Trophy className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">50 Levels & XP</p>
                  <p className="text-indigo-300 text-sm">Progressive level system. XP equals ExBucks earned. Unlock titles and badges as you level up.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Streaks & Badges</p>
                  <p className="text-indigo-300 text-sm">Track consecutive days of 100% task completion. Earn badges at level milestones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Parent Dashboard</p>
                  <p className="text-indigo-300 text-sm">Per-child statistics, weekly overview, task completion trends, and ExBucks tracking.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Player Profiles</p>
                  <p className="text-indigo-300 text-sm">Game-like profile pages with level, XP, streaks, badges, and transaction history.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SizePass */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-indigo-400" />
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent"
                )}>
                  Free
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Up to 2 parents + 1 child</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Full task lifecycle</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">ExBucks economy & reward shop</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Levels, XP & streaks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">1 Freemium badge</span>
                </li>
              </ul>
            </div>
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="h-6 w-6 text-yellow-400" />
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-yellow-400 to-amber-400",
                  "bg-clip-text text-transparent"
                )}>
                  SizePass
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span className="text-indigo-200">Unlimited family members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span className="text-indigo-200">Photo proof of task completion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span className="text-indigo-200">Premium badges at level milestones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span className="text-indigo-200">Sibling leaderboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span className="text-indigo-200">Advanced parent statistics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy & Safety */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className={cn(
                "text-2xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Privacy & Safety
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">GDPR Compliant</p>
                  <p className="text-indigo-300 text-sm">Full account deletion with cascading data removal. Special handling for minors under 16.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">No Public Child Profiles</p>
                  <p className="text-indigo-300 text-sm">Child profiles are visible only to the child and their parents. No inter-family communication.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">No Pay-to-Win</p>
                  <p className="text-indigo-300 text-sm">ExBucks cannot be purchased with real money. Cannot be traded between children. No ads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
