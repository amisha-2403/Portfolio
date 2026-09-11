import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: 'Amisha Choudhary | Full-Stack Developer & Computer Science Student',
  description:
    'Computer Science student and full-stack developer from Jaipur building practical web applications and exploring AI/ML.',
  keywords: ['Amisha Choudhary', 'Full-Stack Developer', 'Computer Science Student', 'Jaipur'],
  openGraph: {
    title: 'Amisha Choudhary | Full-Stack Developer & Computer Science Student',
    description:
      'Computer Science student and full-stack developer from Jaipur building practical web applications and exploring AI/ML.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#16110f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
