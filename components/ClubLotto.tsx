'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Calendar, Clock, ExternalLink, Ticket } from 'lucide-react'
import clubInfo from '@/app/data/club-info.json'
import { formatCurrency, formatDate, getNextDrawDate, daysUntilNextDraw } from '@/lib/utils'

export default function ClubLotto() {
  const { lotto } = clubInfo
  const daysUntil = daysUntilNextDraw(lotto.drawDay)
  const nextDrawDate = getNextDrawDate(lotto.drawDay)

  return (
    <section id="lotto" className="relative py-24 overflow-hidden pitch-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 rounded-full mb-6"
          >
            <Trophy className="w-5 h-5 text-gold-600" />
            <span className="text-sm font-bold text-gold-700 uppercase tracking-wide">Win Big & Support Your Club</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="text-gradient-gold">Club Lotto</span>
          </h2>
          <p className="section-subheading">
            Your weekly chance to win big while supporting {clubInfo.name}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="card-lotto max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-gold-700 mb-2 uppercase tracking-wide">This Week's Jackpot</p>
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                >
                  <div className="text-7xl md:text-8xl font-display font-black text-gradient-gold text-shadow-gold mb-2">
                    {formatCurrency(lotto.currentJackpot)}
                  </div>
                </motion.div>
                <p className="text-gaa-700 font-semibold text-lg">
                  Pick {lotto.numbersSelected} numbers from {lotto.numbersToPickFrom}
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gold-300 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold-600" />
                    <span className="font-bold text-gaa-800">Next Draw</span>
                  </div>
                  {daysUntil <= 2 && (
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold animate-pulse-gaa">
                      {daysUntil === 0 ? 'TONIGHT!' : daysUntil === 1 ? 'TOMORROW' : 'SOON'}
                    </span>
                  )}
                </div>
                <p className="text-gaa-700 font-semibold text-lg">{nextDrawDate}</p>
                <div className="flex items-center gap-2 mt-2 text-gaa-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{lotto.drawTime}</span>
                </div>
              </div>

              {lotto.playOnline && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-lotto group"
                >
                  <Ticket className="inline-block mr-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Play Online Now
                  <ExternalLink className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              )}
            </div>

            <div className="space-y-4">
              {lotto.lastWinner && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gaa-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center flex-shrink-0 shadow-gold">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gaa-800 mb-1">Last Week Winner</p>
                      <p className="text-2xl font-black text-gold-600 mb-1">
                        {formatCurrency(lotto.lastWinner.amount)}
                      </p>
                      <p className="text-sm text-gaa-600">
                        <span className="font-semibold">{lotto.lastWinner.name}</span> from {lotto.lastWinner.area}
                      </p>
                      <p className="text-xs text-gaa-500 mt-1">
                        {formatDate(lotto.lastWinner.date)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gaa-200"
              >
                <h3 className="font-bold text-gaa-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gaa-600" />
                  How to Play
                </h3>
                <ul className="space-y-3 text-sm text-gaa-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-gaa-100 flex items-center justify-center flex-shrink-0 font-bold text-gaa-700 text-xs">
                      1
                    </span>
                    <span>Choose {lotto.numbersSelected} numbers from 1 to {lotto.numbersToPickFrom}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-gaa-100 flex items-center justify-center flex-shrink-0 font-bold text-gaa-700 text-xs">
                      2
                    </span>
                    <span>Tickets are just {formatCurrency(lotto.ticketPrice)} each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-gaa-100 flex items-center justify-center flex-shrink-0 font-bold text-gaa-700 text-xs">
                      3
                    </span>
                    <span>Match all {lotto.numbersSelected} to win the jackpot!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 font-bold text-gold-700 text-xs">
                      +
                    </span>
                    <span className="font-semibold text-gold-700">
                      Match 3 numbers = {formatCurrency(lotto.consolationPrize)} consolation prize
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-gaa-50 to-pitch-50 rounded-2xl p-6 border-2 border-gaa-200"
              >
                <p className="text-sm text-gaa-700 leading-relaxed">
                  <strong className="text-gaa-800">100% of proceeds</strong> support our teams, facilities, and youth development programs. Thank you for your support!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-gaa-700 mb-4">
            <strong>Cannot play online?</strong> Get your tickets from sellers around the parish or at the clubhouse
          </p>
          <p className="text-sm text-gaa-600">
            For more information, contact <a href={`mailto:${clubInfo.contact.email}`} className="text-gaa-700 font-semibold hover:text-gaa-800 underline">{clubInfo.contact.email}</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
