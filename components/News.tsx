'use client'

import { motion } from 'framer-motion'
import { Newspaper, Calendar, ArrowRight } from 'lucide-react'
import newsData from '@/app/data/news.json'
import { formatDate, getCategoryBadgeClass } from '@/lib/utils'

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 rounded-full mb-6"
          >
            <Newspaper className="w-5 h-5 text-gold-600" />
            <span className="text-sm font-bold text-gold-700 uppercase tracking-wide">Latest Updates</span>
          </motion.div>

          <h2 className="section-heading">
            <span className="text-gradient-gaa">Club News</span>
          </h2>
          <p className="section-subheading">
            Stay up to date with everything happening at the club
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.articles.slice(0, 6).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-news group cursor-pointer"
            >
              {/* Header with category badge */}
              <div className="p-6 bg-gradient-to-br from-gaa-50 to-pitch-50">
                <div className="flex items-start justify-between mb-3">
                  <span className={`badge-category ${getCategoryBadgeClass(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gaa-600">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gaa-900 mb-2 group-hover:text-gaa-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gaa-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-gaa-700 font-semibold hover:text-gaa-800 transition-colors group/btn">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more button */}
        {newsData.articles.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="btn-outline">
              View All News
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
