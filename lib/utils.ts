/**
 * Utility functions for St. Brigid's GAA website
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine class names with Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a human-readable format
 * @param dateString - ISO date string (e.g., "2025-10-25")
 * @returns Formatted date (e.g., "Fri, Oct 25")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IE', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Format a date with full details
 * @param dateString - ISO date string
 * @returns Full date format (e.g., "Friday, 25th October 2025")
 */
export function formatFullDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Format time from 24-hour to 12-hour format
 * @param timeString - Time in 24-hour format (e.g., "14:00")
 * @returns Time in 12-hour format (e.g., "2:00 PM")
 */
export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

/**
 * Parse GAA score string to calculate total points
 * GAA scoring: Goals = 3 points, Points = 1 point
 * Score format: "2-14" means 2 goals (6 points) + 14 points = 20 total
 * @param score - Score string (e.g., "2-14")
 * @returns Total points
 */
export function parseScore(score: string): number {
  const [goals, points] = score.split('-').map(Number)
  return (goals * 3) + points
}

/**
 * Format a score for display
 * @param score - Score string (e.g., "2-14")
 * @returns Formatted score with total (e.g., "2-14 (20)")
 */
export function formatScore(score: string): string {
  const total = parseScore(score)
  return `${score} (${total})`
}

/**
 * Determine if a date is in the past
 * @param dateString - ISO date string
 * @returns true if date is in the past
 */
export function isPastDate(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

/**
 * Determine if a date is today
 * @param dateString - ISO date string
 * @returns true if date is today
 */
export function isToday(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 days")
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const today = new Date()
  const diffTime = date.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays === -1) return 'Yesterday'
  if (diffDays > 0) return `In ${diffDays} days`
  return `${Math.abs(diffDays)} days ago`
}

/**
 * Format currency (Euro)
 * @param amount - Amount in euros
 * @returns Formatted currency string (e.g., "€4,200")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Get category badge class name
 * @param category - News category
 * @returns Tailwind class name for badge
 */
export function getCategoryBadgeClass(category: string): string {
  const categoryMap: { [key: string]: string } = {
    'Match Report': 'badge-match-report',
    'Club News': 'badge-club-news',
    'Juvenile': 'badge-juvenile',
    'Events': 'badge-events',
    'Club Development': 'badge-development'
  }
  return categoryMap[category] || 'badge-match-report'
}

/**
 * Get competition type badge class
 * @param type - Competition type
 * @returns Tailwind class name for badge
 */
export function getCompetitionBadgeClass(type: string): string {
  return type === 'Championship' ? 'badge-championship' : 'badge-league'
}

/**
 * Calculate days until next draw
 * @param drawDay - Day of the week (e.g., "Monday")
 * @returns Number of days until next draw
 */
export function daysUntilNextDraw(drawDay: string): number {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date().getDay()
  const drawDayIndex = days.indexOf(drawDay)

  let daysUntil = drawDayIndex - today
  if (daysUntil < 0) daysUntil += 7

  return daysUntil
}

/**
 * Get next draw date string
 * @param drawDay - Day of the week
 * @returns Formatted next draw date
 */
export function getNextDrawDate(drawDay: string): string {
  const days = daysUntilNextDraw(drawDay)
  if (days === 0) return 'Today'
  if (days === 1) return 'Tomorrow'

  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + days)
  return formatFullDate(nextDate.toISOString().split('T')[0])
}
