import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Shield } from 'lucide-react'

export function Privacy() {
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
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Privacy Policy
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
                1. Information We Collect
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                We collect information that you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Game usage data and preferences</li>
                <li>Communication records when you contact us</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                2. How We Use Your Information
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our games and services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                3. Information Sharing
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                We do not sell your personal information. We may share your information only:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>With service providers who assist us in operating our services</li>
                <li>In connection with a business transfer</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                4. Data Security
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                5. Your Rights
              </h2>
              <p className="text-indigo-200 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                6. Cookies and Tracking
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                We use cookies and similar tracking technologies to collect and store information about your usage 
                of our games and services. You can control cookies through your browser settings, though this may 
                affect functionality.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                7. Children's Privacy
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please contact us.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                8. Changes to This Policy
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className={cn(
                "text-2xl font-bold mb-4",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                9. Contact Us
              </h2>
              <p className="text-indigo-200 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="/contact" className="text-indigo-400 hover:text-indigo-300 underline">
                  our contact page
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

