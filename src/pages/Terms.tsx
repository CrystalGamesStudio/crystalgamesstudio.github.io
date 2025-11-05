import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Terms() {
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
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Terms of Service
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "space-y-8"
          )}>
            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                1. Acceptance of Terms
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                By accessing and using CrystalGames Studio games, applications, and services, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                2. Use License
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                Permission is granted to temporarily download and use our games and applications for personal, 
                non-commercial transitory viewing only. Under this license you may not:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                3. Accounts and Registration
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for safeguarding the password and for all activities 
                that occur under your account.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                4. User Conduct
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Engage in any fraudulent activity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Interfere with or disrupt the service</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                5. Purchases and Payments
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                If you wish to purchase any product or service made available through our services, you may be asked 
                to supply certain information relevant to your purchase. All purchases are final unless otherwise stated. 
                Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                6. Intellectual Property
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                The service and its original content, features, and functionality are owned by CrystalGames Studio 
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                property laws.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                7. Disclaimer
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                The materials on CrystalGames Studio's services are provided on an 'as is' basis. CrystalGames Studio 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                8. Limitations of Liability
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                In no event shall CrystalGames Studio or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use 
                or inability to use the materials on CrystalGames Studio's services.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                9. Termination
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                10. Changes to Terms
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
                provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                11. Contact Information
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 underline">
                  our contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

