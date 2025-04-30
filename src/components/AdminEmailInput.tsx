"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import Input from "./Input"
import { Button } from "./Button"
import { Badge } from "./Badge"
import Label from "./Label"
import Select from "./Select"

export function AdminEmailInput(/*{ onEmailsChange, onSelectedEmailChange }*/) {
  const [adminEmails, setAdminEmails] = useState<string[]>([])
  const [newEmail, setNewEmail] = useState("")
  const [selectedAdminEmail, setSelectedAdminEmail] = useState<string|null>(null)

  const addAdminEmail = () => {
    if (newEmail && !adminEmails.includes(newEmail) && newEmail.includes("@")) {
      const updatedEmails = [...adminEmails, newEmail]
      setAdminEmails(updatedEmails)
      setNewEmail("")
      //if (onEmailsChange) onEmailsChange(updatedEmails)
    }
  }

  const removeAdminEmail = (email: string) => {
    const updatedEmails = adminEmails.filter((e) => e !== email)
    setAdminEmails(updatedEmails)
    //if (onEmailsChange) onEmailsChange(updatedEmails)

    if (selectedAdminEmail === email) {
      setSelectedAdminEmail(null)
      //if (onSelectedEmailChange) onSelectedEmailChange(null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addAdminEmail()
    }
  }

  const handleSelectEmail = (email: string) => {
    setSelectedAdminEmail(email)
    //if (onSelectedEmailChange) onSelectedEmailChange(email)
  }

  return (
    <div className="space-y-2">
      <Label className="text-black">Admin Emails</Label>
      <div className="flex gap-2">
        <Input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add admin email address"
          className="border border-slate-300 mt-1 text-black"
        />

        <Button onClick={addAdminEmail} variant="outline">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {adminEmails.map((email) => (
          <Badge key={email} variant="secondary" className="flex items-center gap-1">
            {email}
            <button
              type="button"
              onClick={() => removeAdminEmail(email)}
              className="ml-1 rounded-full p-0.5 bg-primblue hover:bg-darkblue text-white"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Remove</span>
            </button>
          </Badge>
        ))}
      </div>

      {adminEmails.length > 0 && (
        <div className="mt-4 space-y-2">
          <Label htmlFor="login-email text-black">Select Admin Email for Login</Label>
          <Select id="adminemail" items={adminEmails} onChange={(e)=>{ handleSelectEmail(e.target.value); }} placeholder="Select admin email to proceed"/>
        </div>
      )}
    </div>
  )
}