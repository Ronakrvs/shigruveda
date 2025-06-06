import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   icons: {
    icon: '/images/logo.png',
  },
  title: "shigruvedas - Organic Moringa Farm | Fresh Leaves, Powder",
  description:
    "Premium organic moringa products from our farm. Fresh moringa leaves, powder. Bulk orders welcome. Earth to Wellness.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
