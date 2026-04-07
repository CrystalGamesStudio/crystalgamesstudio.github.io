import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import {
  Users,
  ArrowLeft,
  Camera,
  Calendar,
  Image,
  Search,
  Shield,
  MessageCircle,
  Heart,
  Layout,
  FolderOpen
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Wspolniak() {
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
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Wspólniak
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              A private digital family home — share memories, photos, and organize events in one closed space.
            </p>
          </div>

          {/* What is Wspólniak */}
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
              Your Family's Private Space
            </h2>
            <p className="text-indigo-300 mb-4 max-w-2xl mx-auto">
              Wspólniak replaces sending photos individually across messengers by providing one shared digital family space. No public access, no external users, no algorithms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">One family</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">One private space</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">No public access</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">No external users</span>
            </div>
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
                  <Layout className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Feed</h3>
                </div>
                <p className="text-indigo-300 text-sm">Chronological feed with text and photo posts. React, comment, and filter by groups. The main screen of the app.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <Image className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Albums</h3>
                </div>
                <p className="text-indigo-300 text-sm">Long-term memory storage. Albums never expire. Everyone can create them, add images with titles, and browse memories.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Calendar</h3>
                </div>
                <p className="text-indigo-300 text-sm">Plan family events — meetings, birthdays, trips. Events include title, description, date, and optional group assignment.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <FolderOpen className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Groups</h3>
                </div>
                <p className="text-indigo-300 text-sm">Subspaces inside your family. Create groups for specific topics or events. Posts can belong to a group or the entire family.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Comments & Reactions</h3>
                </div>
                <p className="text-indigo-300 text-sm">React to posts with predefined reactions. Leave comments under any post. Visible to all group members.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <Search className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Search</h3>
                </div>
                <p className="text-indigo-300 text-sm">Search across posts, albums, and events to quickly find any memory or information.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
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
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">Admin Creates Accounts</h3>
                <p className="text-indigo-300 text-sm">No public registration. Admin creates accounts for family members and manages the space.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">Share Memories</h3>
                <p className="text-indigo-300 text-sm">Upload photos, write updates, and create albums. Everything stays in one place.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">React & Comment</h3>
                <p className="text-indigo-300 text-sm">Leave reactions and comments. Stay connected with your family in a calm, private environment.</p>
              </div>
            </div>
          </div>

          {/* Privacy & Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                  Privacy First
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Fully private environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">No advertising or external tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Admin-managed accounts only</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Posts auto-expire after 6 months</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Albums are permanent</span>
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
                <Layout className="h-6 w-6 text-indigo-400" />
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent"
                )}>
                  Simple by Design
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Minimal, clean interface</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">No algorithmic feed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Predictable navigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Mobile-first, works on slow internet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Designed for all ages</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Products */}
          <div className="text-center">
            <Link
              to="/products"
              className={cn(
                "inline-flex items-center gap-2",
                "px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              <ArrowLeft className="h-5 w-5" /> Back to Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
