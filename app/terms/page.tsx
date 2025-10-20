'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import clubInfo from '@/app/data/club-info.json'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pitch-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6 text-gradient-gaa">
            Terms of Service
          </h1>
          <p className="text-gaa-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IE')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">1. Acceptance of Terms</h2>
              <p className="text-gaa-700 leading-relaxed">
                By accessing and using this website, participating in our Club Lotto, or becoming a member of {clubInfo.name}, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">2. Club Membership</h2>
              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">2.1 Eligibility</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                Membership is open to all who support the aims and objectives of the GAA and {clubInfo.name}. Juvenile members must have parental/guardian consent.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">2.2 Code of Conduct</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                All members must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Abide by GAA rules and regulations</li>
                <li>Respect fellow members, officials, and opponents</li>
                <li>Follow club policies and procedures</li>
                <li>Represent the club with integrity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">3. Club Lotto</h2>
              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">3.1 Eligibility</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                Participants must be 18 years or older. The Club Lotto is licensed under Irish gaming legislation.
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">3.2 Prize Distribution</h3>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Winners will be notified within 48 hours of the draw</li>
                <li>Prizes must be claimed within 30 days</li>
                <li>Unclaimed prizes will be added to the following week's jackpot</li>
                <li>The club reserves the right to void entries obtained fraudulently</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">3.3 Use of Proceeds</h3>
              <p className="text-gaa-700 leading-relaxed">
                All proceeds from the Club Lotto go towards funding team equipment, facilities maintenance, and youth development programs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">4. Liability and Insurance</h2>
              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">4.1 Match Participation</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                All players must be registered and insured through the GAA. Players participate at their own risk and must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Disclose any medical conditions</li>
                <li>Wear appropriate protective equipment</li>
                <li>Follow safety guidelines</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">4.2 Club Facilities</h3>
              <p className="text-gaa-700 leading-relaxed">
                While we maintain our facilities to a high standard, the club cannot be held liable for injuries sustained on club grounds except where caused by our negligence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">5. Website Use</h2>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Information on this website is provided in good faith</li>
                <li>Fixture details and results are updated regularly but may be subject to change</li>
                <li>The club reserves the right to update content without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">6. Governing Law</h2>
              <p className="text-gaa-700 leading-relaxed">
                These Terms of Service are governed by the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">7. Contact</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gaa-100">
                <p className="text-gaa-700 mb-2">
                  For questions about these Terms:
                </p>
                <p className="text-gaa-700">
                  Email: <a href={`mailto:${clubInfo.contact.email}`} className="text-gaa-600 hover:underline">{clubInfo.contact.email}</a><br />
                  Phone: <a href={`tel:${clubInfo.contact.phone}`} className="text-gaa-600 hover:underline">{clubInfo.contact.phone}</a>
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gaa-200">
              <Link href="/" className="text-gaa-600 hover:text-gaa-700 font-semibold">
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
