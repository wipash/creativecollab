import type React from "react"
import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Creative Collab - Inspiring Young Artists",
  description: "Creative Collab runs teacher-led, small group art classes and school-holiday workshops for kids in Auckland",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Creative Collab - Inspiring Young Artists",
    description: "Creative Collab runs teacher-led, small group art classes and school-holiday workshops for kids in Auckland",
    url: "https://creativecollab.co.nz",
    siteName: "Creative Collab",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Collab - Inspiring Young Artists",
    description: "Creative Collab runs teacher-led, small group art classes and school-holiday workshops for kids in Auckland",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
