import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

function Layout({ hideNavbar = false, hideFooter = false }) {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideNavbar && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
