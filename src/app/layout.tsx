import type { Metadata } from 'next'
import { poppins } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Marketplace',
    default: 'Marketplace',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={poppins.className} lang="pt">
      <body className="bg-background text-gray-400 antialiased">
        {children}
      </body>
    </html>
  )
}
