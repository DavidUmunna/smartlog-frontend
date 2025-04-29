import { Link } from "react-router-dom"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"
import { Button } from "../../components/Button"
import { FeatureCard } from "../../components/FeatureCard"
import { StepItem } from "../../components/StepItem"

export default function LandingPage() {
  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Track Employee Attendance <br/>
            <p className="text-primblue underline">With Location Verification</p>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-customgrey">
            Ensure your employees are on premises when they clock in. Our location-based attendance tracking system
            provides accurate, reliable verification for businesses of all sizes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/register-company">
              <Button>
                Register Your Company <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primblue">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={MapPin}
              title="Location Verification"
              description="Verify employee attendance with precise geolocation technology that ensures they're on premises."
            />

            <FeatureCard
              Icon={Clock}
              title="Real-time Tracking"
              description="Monitor attendance in real-time with instant notifications and comprehensive dashboards."
            />

            <FeatureCard
              Icon={Shield}
              title="Secure & Reliable"
              description="Enterprise-grade security ensures your company and employee data remains protected."
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepItem
              number={1}
              title="Register Your Company"
              description="Create an account with your company details and add admin users."
            />
            
            <StepItem
              number={2}
              title="Set Up Locations"
              description="Define your company premises and geofence boundaries for verification."
            />

            <StepItem
              number={3}
              title="Start Tracking"
              description="Employees use the mobile app to clock in and out with location verification."
            />
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-lightblue">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Get Started?</h2>

          <p className="max-w-2xl text-lg text-customgrey mb-8">
            Join thousands of companies already using AttendanceTrack to monitor employee attendance with location
            verification.
          </p>

          <Link to="/register-company">
            <Button>
              Register Your Company <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}