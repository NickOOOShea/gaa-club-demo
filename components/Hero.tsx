'use client'

import { motion } from 'framer-motion'
import { Trophy, MapPin, Calendar, ChevronDown, Shield, Users } from 'lucide-react'
import clubInfo from '@/app/data/club-info.json'

export default function Hero() {
  const currentYear = new Date().getFullYear()
  const yearsEstablished = currentYear - clubInfo.founded

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gaa-pattern">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large green blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-gaa-200/40 to-gaa-300/20 rounded-full blur-3xl animate-float-energetic"
        />

        {/* Gold accent blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-40 -left-20 w-80 h-80 bg-gradient-to-br from-gold-200/30 to-pitch-300/20 rounded-full blur-3xl animate-float-energetic animation-delay-4000"
        />

        {/* Small pitch accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-pitch-300/20 to-gaa-200/10 rounded-full blur-2xl animate-float-energetic animation-delay-6000"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Shield className="w-5 h-5 text-gaa-600" />
              <span className="text-sm font-semibold text-gaa-700">
                {clubInfo.location.parish} · {clubInfo.location.county} · {clubInfo.location.province}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            >
              <span className="text-gradient-pride text-shadow-gaa">
                {clubInfo.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-gaa-700 mb-4 font-medium"
            >
              {clubInfo.tagline}
            </motion.p>

            {/* Founded */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gaa-600 mb-8 font-semibold"
            >
              Serving our community for {yearsEstablished} years
            </motion.p>

            {/* Quick info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gaa-700 border border-gaa-200 shadow-gaa">
                Football & Hurling
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gold-700 border border-gold-200 shadow-gold">
                7 Teams
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-pitch-700 border border-pitch-200">
                All Ages Welcome
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#lotto"
                className="btn-lotto group"
              >
                Play Club Lotto
                <Trophy className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#fixtures"
                className="btn-outline group"
              >
                <Calendar className="inline-block mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Fixtures
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element / Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card with shield illustration */}
              <div className="relative bg-gradient-to-br from-white to-pitch-50 rounded-3xl p-12 shadow-2xl border-2 border-gaa-100">
                {/* Shield illustration */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-gaa-500 to-gaa-700 rounded-3xl rotate-45 flex items-center justify-center shadow-2xl">
                      <div className="-rotate-45">
                        <Shield className="w-24 h-24 text-gold-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Floating gold accent */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center shadow-gold">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Quick info cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-gaa-100 hover:border-gaa-300 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gaa-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gaa-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gaa-800">Our Grounds</p>
                      <p className="text-sm text-gaa-600">{clubInfo.pitch.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-gold-100 hover:border-gold-300 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gaa-800">Club Honours</p>
                      <p className="text-sm text-gaa-600">Multiple Championships</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-pitch-100 hover:border-pitch-300 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-pitch-100 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-pitch-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gaa-800">Since {clubInfo.founded}</p>
                      <p className="text-sm text-gaa-600">Community at our heart</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-gold-200/30 to-gaa-200/30 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#lotto"
            className="flex flex-col items-center gap-2 text-gaa-600 hover:text-gaa-700 transition-colors group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
