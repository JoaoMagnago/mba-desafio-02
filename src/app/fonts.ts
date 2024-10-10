/* eslint-disable camelcase */
import { DM_Sans as DMSansFont, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const DMSans = DMSansFont({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})
