import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "St. Brigid's GAA - Pride, Passion, Community | Drumcondra, Dublin 9",
  description: "St. Brigid's Gaelic Athletic Association in Drumcondra, Dublin 9. Seven teams competing in football and hurling across all age groups. Play Club Lotto, view fixtures, and join our community since 1954.",
  keywords: 'St Brigids GAA, GAA Drumcondra, Dublin GAA, Gaelic football Dublin, Hurling Dublin, Club Lotto, GAA club Dublin 9, St Brigids GAA fixtures, juvenile GAA Dublin',
  authors: [{ name: "St. Brigid's GAA" }],
  openGraph: {
    title: "St. Brigid's GAA - Pride, Passion, Community Since 1954",
    description: 'Seven teams competing in football and hurling. Play Club Lotto, view fixtures, and join our Drumcondra GAA community.',
    type: 'website',
    locale: 'en_IE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
