'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import clubInfo from '@/app/data/club-info.json'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pitch-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6 text-gradient-gaa">
            Privacy Policy
          </h1>
          <p className="text-gaa-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IE')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">1. Who We Are</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border border-gaa-100">
                <p className="text-gaa-700 mb-2">
                  <strong>{clubInfo.name}</strong><br />
                  {clubInfo.address.street}<br />
                  {clubInfo.address.city}<br />
                  {clubInfo.address.eircode}
                </p>
                <p className="text-gaa-700">
                  Phone: <a href={`tel:${clubInfo.contact.phone}`} className="text-gaa-600 hover:underline">{clubInfo.contact.phone}</a><br />
                  Email: <a href={`mailto:${clubInfo.contact.email}`} className="text-gaa-600 hover:underline">{clubInfo.contact.email}</a>
                </p>
              </div>
              <p className="text-gaa-700 leading-relaxed">
                We are a GAA club serving the {clubInfo.location.parish} community since {clubInfo.founded}. This Privacy Policy explains how we collect and use your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">2. Information We Collect</h2>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">2.1 Club Lotto</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                When you participate in our Club Lotto, we collect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Name</li>
                <li>Phone number or email</li>
                <li>Lotto ticket numbers</li>
                <li>Payment information (processed securely)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">2.2 Membership & Registration</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                For team members and participants:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Name, date of birth, address</li>
                <li>Parent/guardian contact (for juvenile members)</li>
                <li>Emergency contact information</li>
                <li>Medical information (as required for safety)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 text-gaa-700">2.3 Website Information</h3>
              <p className="text-gaa-700 leading-relaxed mb-4">
                When you visit our website, basic information is collected automatically:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Browser type and device</li>
                <li>Pages visited</li>
                <li>Time and date of visit</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Manage club lotto entries and notify winners</li>
                <li>Coordinate team training and matches</li>
                <li>Communicate club news and events</li>
                <li>Ensure safety of participants</li>
                <li>Comply with GAA insurance and safety requirements</li>
              </ul>
              <p className="text-gaa-700 leading-relaxed">
                <strong>We will NEVER:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Sell your personal information</li>
                <li>Share your data with third parties for marketing</li>
                <li>Use your information for purposes not related to the club</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">4. Data Retention</h2>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li>Lotto entries: Retained for 1 year for legal/audit purposes</li>
                <li>Membership records: Retained while you're a member + 2 years</li>
                <li>Contact form inquiries: Deleted after response (typically 30 days)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">5. Your Rights Under GDPR</h2>
              <p className="text-gaa-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gaa-700 space-y-2">
                <li><strong>Access</strong> your personal data</li>
                <li><strong>Rectify</strong> inaccurate information</li>
                <li><strong>Erase</strong> your data (right to be forgotten)</li>
                <li><strong>Restrict</strong> processing of your data</li>
                <li><strong>Data portability</strong> (receive your data in machine-readable format)</li>
                <li><strong>Object</strong> to processing</li>
                <li><strong>Lodge a complaint</strong> with the Data Protection Commission</li>
              </ul>
              <p className="text-gaa-700 leading-relaxed">
                To exercise any of these rights, contact us at <a href={`mailto:${clubInfo.contact.email}`} className="text-gaa-600 hover:underline">{clubInfo.contact.email}</a>. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 text-gaa-800">6. Contact for Data Requests</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gaa-100">
                <p className="text-gaa-700 mb-2">
                  For all data protection queries:
                </p>
                <p className="text-gaa-700">
                  Email: <a href={`mailto:${clubInfo.contact.secretary}`} className="text-gaa-600 hover:underline">{clubInfo.contact.secretary}</a><br />
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
