"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <MapPin className="h-5 w-5 text-emerald-500" />
          <span>AttendanceTrack</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm font-medium hover:underline">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:underline">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium hover:underline">
            Pricing
          </a>
          <Link to="/signin" className="text-sm font-medium px-3 py-1.5 rounded hover:bg-gray-100">
            Sign In
          </Link>
          <Link
            to="/register-company"
            className="text-sm font-medium bg-emerald-500 text-white px-3 py-1.5 rounded hover:bg-emerald-600"
          >
            Register Company
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-100">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <Link to="/signin" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
            <Link
              to="/register-company"
              className="text-sm font-medium bg-emerald-500 text-white px-4 py-2 rounded text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Company
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
