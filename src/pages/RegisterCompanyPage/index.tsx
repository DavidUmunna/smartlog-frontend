"use client"

//import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card"
import Input from "../../components/Input"
import Label from "../../components/Label"
import Select from "../../components/Select"
import { AdminEmailInput } from "../../components/AdminEmailInput"

function RegisterCompanyPage() {
  //const [industry, setIndustry] = useState("")
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
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline text-primblue hover:text-darkblue">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-black">Register Your Company</CardTitle>
          <CardDescription className="text-customgrey">Create a new account for your company to start tracking employee attendance</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-black">Company Name</Label>
              <Input id="company-name" placeholder="Enter your company name" required  className="border border-slate-300 mt-1 text-black"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-black">Company Location</Label>
              <Input id="location" placeholder="Enter your company address" required  className="border border-slate-300 mt-1 text-black"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-black">Industry</Label>
              <Select id="industry" items={industries} placeholder="Select an industry"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees" className="text-black">Number of Employees</Label>
              <Input id="employees" type="number" min="1" placeholder="Enter number of employees" required  className="border border-slate-300 mt-1 text-black"/>
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
