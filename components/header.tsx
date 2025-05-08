"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Landing Page</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? "mobile-nav-active" : ""}`}>
          <ul>
            <li>
              <Link href="#hero" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products">Produk</Link>
            </li>
            <li>
              <Link href="/articles">Artikel</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            {/* Cart icon for mobile menu */}
            <li className="cart-mobile d-xl-none">
              <Link href="/cart" className="cart-icon-mobile">
                <i className="bi bi-cart me-1"></i>
                Cart
                <span className="badge bg-primary rounded-pill ms-2">3</span>
                <span className="visually-hidden">Cart</span>
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <div className="d-flex align-items-center">
          {/* Cart icon for desktop */}
          <Link href="/cart" className="cart-icon d-none d-xl-flex me-2 position-relative">
            <i className="bi bi-cart"></i>
            <span className="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle">
              3
            </span>
            <span className="visually-hidden">Cart</span>
          </Link>
          <Link className="btn-getstarted" href="/auth">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}