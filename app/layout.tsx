import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Laboratory Needs Solutions Limited',
  description: 'Professional laboratory equipment, supplies, and solutions for research and industry',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Laboratory Needs logo (1)_page-0001.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Laboratory Needs logo (1)_page-0001.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Laboratory Needs logo (1)_page-0001.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
