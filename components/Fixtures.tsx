'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Clock, Award } from 'lucide-react'
import fixturesData from '@/app/data/fixtures.json'
import { formatDate, formatTime, parseScore, getCompetitionBadgeClass } from '@/lib/utils'

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recent'>('upcoming')

  return (
    <section id="fixtures" className="py-24 bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gaa-100 rounded-full mb-6"
          >
            <Calendar className="w-5 h-5 text-gaa-600" />
            <span className="text-sm font-bold text-gaa-700 uppercase tracking-wide">Match Schedule</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="text-gradient-gaa">Fixtures & Results</span>
          </h2>
          <p className="section-subheading">
            Follow our teams in action across all competitions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'upcoming'
                ? 'bg-gaa-600 text-white shadow-gaa'
                : 'bg-white text-gaa-700 border-2 border-gaa-200 hover:border-gaa-400'
            }`}
          >
            Upcoming Fixtures
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'recent'
                ? 'bg-gaa-600 text-white shadow-gaa'
                : 'bg-white text-gaa-700 border-2 border-gaa-200 hover:border-gaa-400'
            }`}
          >
            Recent Results
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'upcoming' ? (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {fixturesData.upcoming.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-fixture group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-gaa-100 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-gaa-200 transition-colors">
                        <span className="text-2xl font-black text-gaa-800">
                          {new Date(fixture.date).getDate()}
                        </span>
                        <span className="text-xs font-semibold text-gaa-600 uppercase">
                          {new Date(fixture.date).toLocaleDateString('en-IE', { month: 'short' })}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`badge-category ${getCompetitionBadgeClass(fixture.type)}`}>
                            {fixture.type}
                          </span>
                          <span className="text-xs text-gaa-600 font-medium">
                            {fixture.team}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gaa-900 mb-1">
                          St Brigids vs {fixture.opponent}
                        </h3>
                        <p className="text-sm text-gaa-600 font-medium">
                          {fixture.competition}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                      <div className="flex items-center gap-2 text-gaa-700">
                        <Clock className="w-4 h-4 text-gaa-500" />
                        <span className="font-semibold">{formatTime(fixture.time)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gaa-500" />
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          fixture.venue === 'Home'
                            ? 'bg-gaa-100 text-gaa-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {fixture.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {fixturesData.upcoming.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gaa-300 mx-auto mb-4" />
                  <p className="text-gaa-600 font-medium">No upcoming fixtures at the moment</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="recent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {fixturesData.recent.map((result, index) => {
                const ourScore = parseScore(result.score.us)
                const theirScore = parseScore(result.score.them)
                const isWin = result.result === 'Win'

                return (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`card-result ${isWin ? 'card-result-win' : 'card-result-loss'} group`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center flex-shrink-0 ${
                          isWin ? 'bg-gaa-100' : 'bg-red-50'
                        }`}>
                          <Award className={`w-8 h-8 mb-1 ${isWin ? 'text-gaa-600' : 'text-red-600'}`} />
                          <span className={`text-xs font-black uppercase ${
                            isWin ? 'text-gaa-700' : 'text-red-700'
                          }`}>
                            {result.result}
                          </span>
                        </div>

                        <div className="flex-1">
                          <p className="text-xs text-gaa-600 font-medium mb-1">
                            {formatDate(result.date)} - {result.team}
                          </p>
                          <h3 className="text-xl font-bold text-gaa-900 mb-1">
                            St Brigids vs {result.opponent}
                          </h3>
                          <p className="text-sm text-gaa-600 font-medium">
                            {result.competition} - {result.venue}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-xs text-gaa-600 mb-1 font-semibold">St Brigids</p>
                          <p className={`text-3xl font-black font-mono ${isWin ? 'text-gaa-600' : 'text-red-600'}`}>
                            {result.score.us}
                          </p>
                          <p className="text-xs text-gaa-500 mt-1">({ourScore} pts)</p>
                        </div>
                        <div className="text-2xl font-bold text-gaa-400">-</div>
                        <div className="text-center">
                          <p className="text-xs text-gaa-600 mb-1 font-semibold">{result.opponent}</p>
                          <p className="text-3xl font-black font-mono text-gray-600">
                            {result.score.them}
                          </p>
                          <p className="text-xs text-gaa-500 mt-1">({theirScore} pts)</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {fixturesData.recent.length === 0 && (
                <div className="text-center py-12">
                  <Award className="w-16 h-16 text-gaa-300 mx-auto mb-4" />
                  <p className="text-gaa-600 font-medium">No recent results available</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gaa-700 mb-4">
            Want to support our teams at upcoming matches?
          </p>
          <a href="#lotto" className="btn-primary">
            Play Club Lotto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
