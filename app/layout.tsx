import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Full-Stack Developer',
  description: 'Creative portfolio showcasing enterprise applications and modern web development',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Full-Stack Developer',
    description: 'Creative portfolio showcasing enterprise applications',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  )
}
