import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <MapPin className="h-5 w-5 text-primblue" />
          <span className="text-primblue">SmartLog</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm text-primblue font-medium hover:underline hover:text-darkblue">
            Features
          </a>
          
          <a href="#how-it-works" className="text-sm text-primblue font-medium hover:underline hover:text-darkblue">
            How It Works
          </a>

          <a href="#pricing" className="text-sm text-primblue font-medium hover:underline hover:text-darkblue">
            Pricing
          </a>

          <Link to="/signin" className="text-sm font-medium px-3 py-1.5 rounded text-primblue hover:bg-lightblue">
            Sign In
          </Link>

          <Link
            to="/register-company"
            className="text-sm font-medium bg-primblue text-white px-3 py-2 rounded hover:bg-darkblue"
          >
            Register Company
          </Link>
        </nav>

        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-lightblue">
            {
              isMenuOpen ? 
                <X className="h-5 w-5 text-primblue" /> : 
                <Menu className="h-5 w-5 text-primblue" />
            }
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm text-primblue font-medium py-2 hover:text-darkblue" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            
            <a href="#how-it-works" className="text-sm text-primblue font-medium py-2 hover:text-darkblue" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            
            <a href="#pricing" className="text-sm text-primblue font-medium py-2 hover:text-darkblue" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            
            <Link to="/signin" className="text-sm text-primblue font-medium py-2 hover:bg-lightblue" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
            
            <Link
              to="/register-company"
              className="text-sm font-medium bg-primblue text-white px-4 py-2 rounded text-center hover:bg-darkblue"
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
