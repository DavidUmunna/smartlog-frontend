"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Badge } from "./Badge"
import { Label } from "./Label"
import { Select, SelectItem } from "./Select"

export function AdminEmailInput({ onEmailsChange, onSelectedEmailChange }) {
  const [adminEmails, setAdminEmails] = useState([])
  const [newEmail, setNewEmail] = useState("")
  const [selectedAdminEmail, setSelectedAdminEmail] = useState(null)

  const addAdminEmail = () => {
    if (newEmail && !adminEmails.includes(newEmail) && newEmail.includes("@")) {
      const updatedEmails = [...adminEmails, newEmail]
      setAdminEmails(updatedEmails)
      setNewEmail("")
      if (onEmailsChange) onEmailsChange(updatedEmails)
    }
  }

  const removeAdminEmail = (email) => {
    const updatedEmails = adminEmails.filter((e) => e !== email)
    setAdminEmails(updatedEmails)
    if (onEmailsChange) onEmailsChange(updatedEmails)

    if (selectedAdminEmail === email) {
      setSelectedAdminEmail(null)
      if (onSelectedEmailChange) onSelectedEmailChange(null)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addAdminEmail()
    }
  }

  const handleSelectEmail = (email) => {
    setSelectedAdminEmail(email)
    if (onSelectedEmailChange) onSelectedEmailChange(email)
  }

  return (
    <div className="space-y-2">
      <Label>Admin Emails</Label>
      <div className="flex gap-2">
        <Input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add admin email address"
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
              className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove</span>
            </button>
          </Badge>
        ))}
      </div>

      {adminEmails.length > 0 && (
        <div className="mt-4 space-y-2">
          <Label htmlFor="login-email">Select Admin Email for Login</Label>
          <Select
            value={selectedAdminEmail || ""}
            onChange={handleSelectEmail}
            placeholder="Select admin email to proceed"
          >
            {adminEmails.map((email) => (
              <SelectItem key={email} value={email}>
                {email}
              </SelectItem>
            ))}
          </Select>
        </div>
      )}
    </div>
  )
}