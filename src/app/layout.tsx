import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

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
    <html className={poppins.variable} lang="pt">
      <body className="bg-background text-gray-400 antialiased">
        {children}
      </body>
    </html>
  )
}
