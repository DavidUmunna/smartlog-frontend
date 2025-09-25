"use client"

import * as React from "react"
import { X, Check, Clock, User, CalendarDays, ChevronDown } from "lucide-react"
import { Button } from "../../registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../registry/new-york-v4/ui/dialog"

type LeaveRequest = {
  id: string
  employee: string
  startDate: string
  endDate: string
  type: string
  status: "pending" | "approved" | "rejected"
  reason: string
}

export function LeaveRequestsModal({ open, onOpenChange }: { 
  open: boolean, 
  onOpenChange: (open: boolean) => void 
}) {
  const [requests, setRequests] = React.useState<LeaveRequest[]>([
    {
      id: "1",
      employee: "John Doe",
      startDate: "2023-06-20",
      endDate: "2023-06-23",
      type: "Vacation",
      status: "pending",
      reason: "Family trip"
    },
    {
      id: "2",
      employee: "Jane Smith",
      startDate: "2023-06-18",
      endDate: "2023-06-19",
      type: "Sick",
      status: "pending",
      reason: "Flu symptoms"
    },
    {
      id: "3",
      employee: "Mike Johnson",
      startDate: "2023-06-25",
      endDate: "2023-06-28",
      type: "Personal",
      status: "pending",
      reason: "Moving houses"
    }
  ])

  const handleApprove = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "approved" } : req
    ))
  }

  const handleReject = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "rejected" } : req
    ))
  }

  const pendingRequests = requests.filter(req => req.status === "pending")
  const processedRequests = requests.filter(req => req.status !== "pending")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Leave Requests Management
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Pending Requests Section */}
          {pendingRequests.length > 0 && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-medium">
                <Clock className="h-4 w-4 text-amber-500" />
                Awaiting Approval ({pendingRequests.length})
              </h3>
              <div className="space-y-3">
                {pendingRequests.map(request => (
                  <div key={request.id} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{request.employee}</span>
                          <span className="text-sm text-muted-foreground">• {request.type}</span>
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="text-muted-foreground">Dates: </span>
                          {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                        </div>
                        <div className="mt-1 text-sm">
                          <span className="text-muted-foreground">Reason: </span>
                          {request.reason}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleReject(request.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <X className="mr-1 h-3 w-3" /> Reject
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleApprove(request.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Check className="mr-1 h-3 w-3" /> Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Processed Requests Section */}
          {processedRequests.length > 0 && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-medium">
                <ChevronDown className="h-4 w-4" />
                Processed Requests ({processedRequests.length})
              </h3>
              <div className="space-y-3">
                {processedRequests.map(request => (
                  <div key={request.id} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{request.employee}</span>
                          <span className="text-sm text-muted-foreground">• {request.type}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            request.status === "approved" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {request.status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="text-muted-foreground">Dates: </span>
                          {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {requests.length === 0 && (
            <div className="py-8 text-center text-muted-foreground">
              No leave requests found
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}