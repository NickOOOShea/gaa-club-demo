'use client'

import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import clubInfo from '@/app/data/club-info.json'
import teamsData from '@/app/data/teams.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#lotto', label: 'Club Lotto' },
    { href: '#fixtures', label: 'Fixtures & Results' },
    { href: '#teams', label: 'Teams & Training' },
    { href: '#news', label: 'News & Updates' },
  ]

  return (
    <footer className="bg-gaa-800 text-pitch-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gaa-500 to-gaa-600 flex items-center justify-center shadow-gaa">
                <Shield className="w-5 h-5 text-gold-300" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {clubInfo.name}
              </h3>
            </div>
            <p className="text-pitch-300 text-sm leading-relaxed mb-4">
              {clubInfo.tagline}
            </p>
            <p className="text-xs text-pitch-400">
              Proudly serving {clubInfo.location.parish} since {clubInfo.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-pitch-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Legal
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="/privacy"
                className="block text-pitch-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-pitch-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Teams */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Our Teams
            </h4>
            <div className="space-y-1 text-sm">
              {teamsData.teams.slice(0, 7).map((team) => (
                <p key={team.id} className="text-pitch-300 text-xs">
                  {team.name}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Contact Us
            </h4>
            <address className="not-italic text-pitch-300 text-sm space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-400" />
                <span>
                  {clubInfo.address.street}<br />
                  {clubInfo.address.area}<br />
                  {clubInfo.address.city}
                </span>
              </p>
              <a
                href={`tel:${clubInfo.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                {clubInfo.contact.phone}
              </a>
              <a
                href={`mailto:${clubInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-gold-400" />
                {clubInfo.contact.email}
              </a>
            </address>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={clubInfo.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pitch-800 hover:bg-gaa-600 flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-pitch-200 group-hover:text-white" />
                </a>
                <a
                  href={`https://twitter.com/${clubInfo.contact.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pitch-800 hover:bg-gaa-600 flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-pitch-200 group-hover:text-white" />
                </a>
                <a
                  href={`https://instagram.com/${clubInfo.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pitch-800 hover:bg-gold-500 flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-pitch-200 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pitch-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-pitch-400">
          <p>
            © {currentYear} {clubInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Website by</span>
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
            >
              Connecteire
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
