import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";

export function RegisterPage() {
  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline text-primblue hover:text-darkblue">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-black">Register</CardTitle>
          <CardDescription className="text-customgrey">Create a new account to join your company</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-black">Company Name</Label>
              <Input id="company" placeholder="Enter your company name" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input id="password" type="password" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-black">Confirm Password</Label>
              <Input id="confirm-password" type="password" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-black">
            Already have an account?{" "}

            <Link to="/signin" className="font-medium underline text-primblue hover:text-darkblue">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}