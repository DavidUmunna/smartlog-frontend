import { Link } from "react-router-dom"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 font-bold">
          <MapPin className="h-8 w-8 text-primblue" />
          <span className="text-2xl text-primblue">SmartLog</span>
        </div>

        <div className="flex gap-8 mt-4 md:mt-0">
          <Link to="/privacy" className="text-sm text-customgrey hover:underline">
            Privacy Policy
          </Link>

          <Link to="/terms" className="text-sm text-customgrey hover:underline">
            Terms of Service
          </Link>

          <Link to="/contact" className="text-sm text-customgrey hover:underline">
            Contact Us
          </Link>
        </div>

        <p className="text-sm text-customgrey mt-4 md:mt-0">
          © {new Date().getFullYear()} AttendanceTrack. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
