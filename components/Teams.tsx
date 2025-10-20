'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, Clock, User, Award } from 'lucide-react'
import teamsData from '@/app/data/teams.json'

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-gradient-to-br from-pitch-50 via-white to-gaa-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-pitch-100 rounded-full mb-6"
          >
            <Users className="w-5 h-5 text-pitch-700" />
            <span className="text-sm font-bold text-pitch-800 uppercase tracking-wide">Our Teams</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="text-gradient-gaa">Teams & Training</span>
          </h2>
          <p className="section-subheading">
            Seven teams competing across all age groups and competitions
          </p>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamsData.teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-team group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gaa-900 mb-1 group-hover:text-gaa-700 transition-colors">
                    {team.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-pitch-100 text-pitch-700 rounded-full text-xs font-bold uppercase">
                    {team.ageGroup}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gaa-500 to-gaa-600 flex items-center justify-center shadow-gaa">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Competition */}
              <div className="mb-4 pb-4 border-b border-gaa-100">
                <div className="flex items-center gap-2 text-sm text-gaa-700">
                  <Award className="w-4 h-4 text-gaa-500" />
                  <span className="font-medium">{team.currentCompetition}</span>
                </div>
              </div>

              {/* Team Details */}
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-gaa-600 font-semibold uppercase mb-1">Manager</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gaa-500" />
                    <p className="font-bold text-gaa-900">{team.manager}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gaa-600 font-semibold uppercase mb-1">Captain</p>
                  <p className="font-bold text-gaa-900">{team.captain}</p>
                </div>
              </div>

              {/* Training Schedule */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gaa-200">
                <p className="text-xs text-gaa-600 font-semibold uppercase mb-3">Training Schedule</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gaa-500 flex-shrink-0" />
                    <span className="font-medium text-gaa-900">
                      {team.trainingDays.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gaa-500 flex-shrink-0" />
                    <span className="font-medium text-gaa-900">{team.trainingTime}</span>
                  </div>
                </div>
              </div>

              {/* Trainers */}
              {team.trainers.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gaa-500">
                    Trainers: {team.trainers.join(', ')}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gaa-50 to-pitch-50 rounded-3xl p-12 border-2 border-gaa-200 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gaa-900 mb-4">Interested in Joining?</h3>
            <p className="text-lg text-gaa-700 mb-6">
              New members are always welcome! Whether you're a beginner or experienced player, we have a team for you.
            </p>
            <p className="text-gaa-600 mb-6">
              All ages and abilities welcome - come along to training or contact us for more information.
            </p>
            <a
              href={`tel:${require('@/app/data/club-info.json').contact.phone}`}
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
