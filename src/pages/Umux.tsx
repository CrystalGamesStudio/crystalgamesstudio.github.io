import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import {
  SquareTerminal,
  ExternalLink,
  LayoutGrid,
  Columns,
  Bell,
  Plug,
  Download,
  CheckCircle,
  Sparkles,
  Cpu,
  Code2,
  Boxes,
  Rocket,
  Apple,
  AppWindow,
  Activity,
  History
} from 'lucide-react'

export function Umux() {
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
                <SquareTerminal className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              umux
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              An open-source terminal workspace manager for Linux, macOS and Windows. Organize terminals into persistent project workspaces, split panels, and get notified when long-running AI CLI tasks finish.
            </p>
          </div>

          {/* Download — prawdziwe releasy z GitHuba (link zawsze prowadzi do najnowszej wersji) */}
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
              Download umux
            </h2>
            <p className="text-indigo-300 mb-6 max-w-2xl mx-auto">
              v1.0 is out — free and open-source, no sign-up. Grab the latest release for your system from GitHub Releases.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
              <a
                href="https://github.com/CrystalPlatforms/umux/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "bg-gradient-to-r from-indigo-600 to-purple-600",
                  "text-white font-medium text-lg",
                  "hover:from-indigo-500 hover:to-purple-500",
                  "transition-all duration-300",
                  "shadow-lg shadow-indigo-500/20",
                  "hover:shadow-xl hover:shadow-indigo-500/30"
                )}
              >
                <Download className="h-5 w-5" />
                Linux (.deb / .AppImage / .rpm)
              </a>
              <a
                href="https://github.com/CrystalPlatforms/umux/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium text-lg",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                <Apple className="h-5 w-5" />
                macOS (.dmg)
              </a>
              <a
                href="https://github.com/CrystalPlatforms/umux/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium text-lg",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                <AppWindow className="h-5 w-5" />
                Windows (.exe)
              </a>
            </div>
            <p className="text-indigo-400/70 text-sm">
              Builds are unsigned — macOS may ask you to right-click → Open on first launch, and Windows SmartScreen may show a one-time warning. This is normal for open-source apps.
            </p>
          </div>

          {/* GitHub CTA */}
          <div className={cn(
            "bg-gradient-to-b from-gray-900 to-gray-950",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/20",
            "text-center"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Follow the development
            </h2>
            <p className="text-indigo-300 mb-6">
              Open-source — built with Tauri v2 (Rust) + React + TypeScript.
            </p>
            <a
              href="https://github.com/CrystalPlatforms/umux"
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
              View on GitHub <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <h2 className={cn(
              "text-3xl font-bold text-center mb-8",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400"
            )}>
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <LayoutGrid className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Project Workspaces</h3>
                </div>
                <p className="text-indigo-300 text-sm">Group terminals into named workspaces — one per project. Create, rename, pin and reorder them, switch context without losing your shells, and everything persists across restarts.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Columns className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Tabs &amp; Split Panels</h3>
                </div>
                <p className="text-indigo-300 text-sm">Tabs per workspace with resizable split panels — keep a build, a log tail, and a server side by side. Pane zoom expands one panel fullscreen and restores the prior layout when you zoom back out.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">AI CLI Notifications</h3>
                </div>
                <p className="text-indigo-300 text-sm">When AI tools like Claude Code, Codex, Gemini CLI or Aider signal task completion, umux fires a native desktop notification — step away without babysitting long tasks.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Agent Status</h3>
                </div>
                <p className="text-indigo-300 text-sm">A live indicator on every panel shows whether your AI agent is working, needs your attention, or is idle — see what&apos;s going on at a glance.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Plug className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">SSH Panels</h3>
                </div>
                <p className="text-indigo-300 text-sm">Open a panel connected to a remote machine over SSH using your local agent and keys (Linux &amp; macOS, Windows coming in v2.0). Remote panels behave just like local ones.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <History className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Session Restore</h3>
                </div>
                <p className="text-indigo-300 text-sm">Close the app, come back tomorrow — umux reopens your workspaces, panels, layout, working directories and shells exactly where you left off.</p>
              </div>
            </div>
          </div>

          {/* Built With */}
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
              Built With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Cpu className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Rust + Tauri v2</p>
                  <p className="text-indigo-300 text-sm">Native desktop app. Owns PTYs, SSH connections, the OSC parser, and the notification bridge.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code2 className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">React + TypeScript</p>
                  <p className="text-indigo-300 text-sm">Frontend rendering the terminal surface and the workspace/pane UI.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Boxes className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Linux, macOS &amp; Windows</p>
                  <p className="text-indigo-300 text-sm">One app for every OS — Linux (Ubuntu/Wayland, .deb/.AppImage/.rpm), macOS 11+ (universal .dmg), Windows 10+ (.exe).</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Open Source</p>
                  <p className="text-indigo-300 text-sm">Free to use and contribute to on GitHub.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Built For */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="h-6 w-6 text-indigo-400" />
              <h2 className={cn(
                "text-2xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Built For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Power Users</p>
                  <p className="text-indigo-300 text-sm">Tame dozens of scattered terminal windows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Developers</p>
                  <p className="text-indigo-300 text-sm">One workspace per project, persistent across restarts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">AI Coders</p>
                  <p className="text-indigo-300 text-sm">Get notified the moment an AI CLI task finishes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
