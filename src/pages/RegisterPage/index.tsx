import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card";
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"

export function RegisterPage() {
  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create a new account to join your company</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Enter your company name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}