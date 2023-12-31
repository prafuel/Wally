import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wally',
  description: 'Get Wallpaper for your Device',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
