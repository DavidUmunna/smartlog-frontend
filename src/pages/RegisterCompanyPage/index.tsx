"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card"
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"
import { Select, SelectItem } from "../../components/Select"
import { AdminEmailInput } from "../../components/AdminEmailInput"

function RegisterCompanyPage() {
  const [industry, setIndustry] = useState("")
  const industries = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Retail",
    "Manufacturing",
    "Construction",
    "Hospitality",
    "Transportation",
    "Other",
  ]

  return (
    <div className="container mx-auto max-w-3xl py-10 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register Your Company</CardTitle>
          <CardDescription>Create a new account for your company to start tracking employee attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Enter your company name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Company Location</Label>
              <Input id="location" placeholder="Enter your company address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={industry} onChange={setIndustry} placeholder="Select your industry">
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind.toLowerCase()}>
                    {ind}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Input id="employees" type="number" min="1" placeholder="Enter number of employees" required />
            </div>

            <AdminEmailInput />

            <div className="pt-4">
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterCompanyPage
