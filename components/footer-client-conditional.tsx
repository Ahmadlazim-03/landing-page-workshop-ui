// components/footer-client-conditional.tsx
"use client"

import { usePathname } from "next/navigation"
import Footer from "./footer"

export default function FooterClientConditional() {
  const pathname = usePathname()
  const hideFooter = pathname.startsWith("/auth")

  if (hideFooter) return null

  return <Footer />
}
