import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fortissimo',
  description: 'A Playground for Music Listeners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Quattrocento',_serif]">{children}</body>
    </html>
  )
}