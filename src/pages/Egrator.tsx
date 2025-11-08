import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { 
  Globe, 
  Folder, 
  KeyRound, 
  Bookmark, 
  Download, 
  FileText, 
  Layout, 
  Puzzle, 
  Database,
  Printer,
  QrCode,
  Share2,
  BookOpen,
  Link2,
  Code,
  Zap,
  Settings,
  Github
} from 'lucide-react'
import { useState, useEffect } from 'react'

// GitHub repository owner and name
const GITHUB_REPO_OWNER = 'CrystalGamesStudio'
const GITHUB_REPO_NAME = 'EgraTor'

interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  assets: Array<{
    name: string
    browser_download_url: string
    size: number
  }>
  html_url: string
}

export function Egrator() {
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/releases/latest`
        )
        if (response.ok) {
          const data = await response.json()
          setLatestRelease(data)
        }
      } catch (error) {
        console.error('Error fetching release:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestRelease()
  }, [])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

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
                <Globe className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              EgraTor Browser
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              Modern web browser built on Electron and Chromium with neumorphism design
            </p>
          </div>

          {/* Download Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "text-center"
          )}>
            <div className="flex justify-center mb-4">
              <Download className="h-12 w-12 text-indigo-400" />
            </div>
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Download EgraTor
            </h2>
            
            {loading ? (
              <p className="text-indigo-300">Checking for available versions...</p>
            ) : latestRelease ? (
              <div className="space-y-4">
                <div>
                  <p className="text-indigo-300 mb-2">
                    Latest version: <span className="text-indigo-200 font-bold">{latestRelease.tag_name}</span>
                  </p>
                  <p className="text-indigo-400 text-sm mb-4">
                    Published: {new Date(latestRelease.published_at).toLocaleDateString('en-US')}
                  </p>
                </div>
                
                {latestRelease.assets.length > 0 ? (
                  <div className="space-y-3">
                    {latestRelease.assets.map((asset, index) => (
                      <button
                        key={index}
                        disabled
                        className={cn(
                          "block p-4 rounded-lg w-full",
                          "bg-gray-700",
                          "text-gray-400 font-medium",
                          "transition-all duration-300",
                          "shadow-lg",
                          "flex items-center justify-between",
                          "cursor-not-allowed opacity-50"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5" />
                          <div className="text-left">
                            <p className="font-semibold">{asset.name}</p>
                            <p className="text-sm text-gray-500">{formatFileSize(asset.size)}</p>
                          </div>
                        </div>
                        <Download className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    disabled
                    className={cn(
                      "inline-block px-6 py-3 rounded-lg",
                      "bg-gray-700",
                      "text-gray-400 font-medium",
                      "transition-all duration-300",
                      "shadow-lg",
                      "cursor-not-allowed opacity-50"
                    )}
                  >
                    View All Releases
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-indigo-300 mb-4">
                  Failed to load release information
                </p>
                <button
                  disabled
                  className={cn(
                    "inline-flex items-center space-x-2 px-6 py-3 rounded-lg",
                    "bg-gray-700",
                    "text-gray-400 font-medium",
                    "transition-all duration-300",
                    "shadow-lg",
                    "cursor-not-allowed opacity-50"
                  )}
                >
                  <Github className="h-5 w-5" />
                  <span>View Releases on GitHub</span>
                </button>
              </div>
            )}
          </div>

          {/* Main Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Panel - Categories */}
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Left Panel - Categories
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Folder className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <div>
                    <p className="text-indigo-200 font-medium">Categories</p>
                    <p className="text-indigo-300 text-sm">Home, Work, Entertainment, Social (can add custom ones)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <div>
                    <p className="text-indigo-200 font-medium">Pages/Applications</p>
                    <p className="text-indigo-300 text-sm">Rounded square icons as SVG graphics</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Link2 className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <div>
                    <p className="text-indigo-200 font-medium">WEB</p>
                    <p className="text-indigo-300 text-sm">Link to crystalgames.studio</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <div>
                    <p className="text-indigo-200 font-medium">Adding</p>
                    <p className="text-indigo-300 text-sm">Ability to add custom categories and pages</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Panel - Tools */}
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Right Panel - Tools
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-indigo-200 font-medium mb-2">Tools:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Zap className="h-4 w-4" />
                      <span>AI Assistant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <KeyRound className="h-4 w-4" />
                      <span>Password Manager</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Bookmark className="h-4 w-4" />
                      <span>Bookmarks</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Download className="h-4 w-4" />
                      <span>Downloads</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <FileText className="h-4 w-4" />
                      <span>Notes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Layout className="h-4 w-4" />
                      <span>Split and dock</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Puzzle className="h-4 w-4" />
                      <span>Extensions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Database className="h-4 w-4" />
                      <span>Other Data</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-indigo-200 font-medium mb-2">Actions:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Printer className="h-4 w-4" />
                      <span>Print</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <QrCode className="h-4 w-4" />
                      <span>Generate QR Code</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Share2 className="h-4 w-4" />
                      <span>Send/Share</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <BookOpen className="h-4 w-4" />
                      <span>Reader Mode</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Link2 className="h-4 w-4" />
                      <span>Copy URL</span>
                    </div>
                    <div className="flex items-center space-x-2 text-indigo-300">
                      <Code className="h-4 w-4" />
                      <span>Dev Mode</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Features */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Browser Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Tabs</p>
                  <p className="text-indigo-300 text-sm">Tab system with ability to add/close tabs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Navigation</p>
                  <p className="text-indigo-300 text-sm">URL bar with automatic search recognition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Keyboard Shortcuts</p>
                  <p className="text-indigo-300 text-sm">Ctrl+T, Ctrl+W, Ctrl+R, Ctrl+L, F12</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Data Storage</p>
                  <p className="text-indigo-300 text-sm">Automatic saving of settings and data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Keyboard Shortcuts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <span className="text-indigo-300">Ctrl+T</span>
                <span className="text-indigo-200">New Tab</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <span className="text-indigo-300">Ctrl+W</span>
                <span className="text-indigo-200">Close Tab</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <span className="text-indigo-300">Ctrl+R</span>
                <span className="text-indigo-200">Refresh Page</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <span className="text-indigo-300">Ctrl+L</span>
                <span className="text-indigo-200">Focus URL Bar</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <span className="text-indigo-300">F12</span>
                <span className="text-indigo-200">Open/Close DevTools</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <Code className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-indigo-200 font-medium">Electron</p>
                <p className="text-indigo-300 text-sm">Desktop framework</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <Globe className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-indigo-200 font-medium">Chromium</p>
                <p className="text-indigo-300 text-sm">Browser engine</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <Layout className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-indigo-200 font-medium">Neumorphism</p>
                <p className="text-indigo-300 text-sm">UI style</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50">
                <Database className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-indigo-200 font-medium">electron-store</p>
                <p className="text-indigo-300 text-sm">Data storage</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

