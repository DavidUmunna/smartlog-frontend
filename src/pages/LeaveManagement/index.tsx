"use client"

import * as React from "react"
import { UserCheck, UserX, Clock, CalendarDays } from "lucide-react"
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
  Line
} from "recharts"

import { Button } from "../../registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../registry/new-york-v4/ui/card"
import { LeaveRequestsModal } from "../../components/cards/LeaveRequestsModal"
// Sample data for the past 6 months
const leaveData = [
  { month: 'Jan', approved: 8, pending: 3, onLeave: 5 },
  { month: 'Feb', approved: 12, pending: 5, onLeave: 8 },
  { month: 'Mar', approved: 7, pending: 2, onLeave: 4 },
  { month: 'Apr', approved: 9, pending: 4, onLeave: 6 },
  { month: 'May', approved: 11, pending: 6, onLeave: 9 },
  { month: 'Jun', approved: 10, pending: 3, onLeave: 7 },
]

export default function LeaveManagementCard() {
  const [activeTab, setActiveTab] = React.useState<'current' | 'pending'>('current')
  const [Openmodal,setOpenmodal]=React.useState(false)
  // Current leave stats
  const currentOnLeave = 7
  const pendingRequests = 4
  //const approvalRate = Math.round((currentOnLeave / (currentOnLeave + pendingRequests)) * 100)

  return (
    <Card className="h-full mt-10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          Leave Management
        </CardTitle>
        <CardDescription>
          Overview of employee leave status and requests
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <UserCheck className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">On Leave</p>
                <p className="text-2xl font-bold">{currentOnLeave}</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-100 p-2">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-2xl font-bold">{pendingRequests}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for different views */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 font-medium ${activeTab === 'current' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('current')}
          >
            Current Leave
          </button>
          <button
            className={`flex-1 py-2 font-medium ${activeTab === 'pending' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Requests
          </button>
        </div>

        {/* Chart Section */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={leaveData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="rounded-lg border bg-background p-4 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Month:</span>
                            <span className="font-medium">{data.month}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <UserCheck className="h-3 w-3" /> Approved:
                            </span>
                            <span className="font-medium">{data.approved}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> Pending:
                            </span>
                            <span className="font-medium">{data.pending}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <UserX className="h-3 w-3" /> On Leave:
                            </span>
                            <span className="font-medium">{data.onLeave}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              {activeTab === 'current' ? (
                <>
                  <Bar dataKey="onLeave" name="On Leave" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="approved" stroke="#8884d8" strokeWidth={2} />
                </>
              ) : (
                <Bar dataKey="pending" name="Pending Requests" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div className="rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserX className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Currently unavailable</span>
            </div>
            <span className="font-medium">{currentOnLeave} employees</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Awaiting approval</span>
            </div>
            <span className="font-medium">{pendingRequests} requests</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="outline"
        onClick={() => setOpenmodal(true)}
        className="flex-1">
          View All Requests
        </Button>
        <Button className="flex-1">
          Approve Requests
        </Button>
        <LeaveRequestsModal onOpenChange={setOpenmodal} open={Openmodal}/>
      </CardFooter>
    
    </Card>
  )
}