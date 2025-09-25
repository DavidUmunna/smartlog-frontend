"use client"

import * as React from "react"
import {ChevronDown, ChevronUp, Calendar, ListChecks } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
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

// Sample data showing check-ins per day
const weeklyCheckIns = [
  { day: "Mon", checkIns: 42, goal: 45 },
  { day: "Tue", checkIns: 48, goal: 45 },
  { day: "Wed", checkIns: 39, goal: 45 },
  { day: "Thu", checkIns: 45, goal: 45 },
  { day: "Fri", checkIns: 51, goal: 45 },
  { day: "Sat", checkIns: 28, goal: 30 },
  { day: "Sun", checkIns: 32, goal: 30 },
]

export function DailyCheckInTracker() {
  const [dailyGoal, setDailyGoal] = React.useState(45)
  const [todayCheckIns, setTodayCheckIns] = React.useState(0)

  const adjustGoal = (delta: number) => {
    setDailyGoal(prev => Math.max(1, prev + delta))
  }

  const logCheckIns = () => {
    const checkIns = parseInt(prompt("Enter today's check-ins:", todayCheckIns.toString()) || "0")
    if (!isNaN(checkIns)) {
      setTodayCheckIns(Math.max(0, checkIns))
    }
  }

  const completionPercentage = dailyGoal > 0 ? Math.min(100, (todayCheckIns / dailyGoal) * 100) : 0

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5" />
          Daily Check-In Tracker
        </CardTitle>
        <CardDescription>
          Track daily check-ins and weekly patterns
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {/* Today's Check-Ins */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Today's Check-Ins</h3>
            <span className="text-sm text-muted-foreground">
              {todayCheckIns} / {dailyGoal} check-ins
            </span>
          </div>
          
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width: `${completionPercentage}%`,
                backgroundColor: completionPercentage >= 100 ? "#10b981" : "var(--primary)"
              }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>Goal: {dailyGoal}</span>
            <span>{dailyGoal * 2}</span>
          </div>
        </div>

        {/* Goal Configuration */}
        <div className="space-y-2">
          <h3 className="font-medium">Daily Target</h3>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => adjustGoal(-5)}
              disabled={dailyGoal <= 5}
            >
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Decrease target</span>
            </Button>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold tabular-nums">{dailyGoal}</span>
                <span className="text-lg">check-ins</span>
              </div>
              <div className="text-xs text-muted-foreground">
                per weekday
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => adjustGoal(5)}
            >
              <ChevronUp className="h-4 w-4" />
              <span className="sr-only">Increase target</span>
            </Button>
          </div>
        </div>

        {/* Weekly Check-In Chart */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <h3 className="font-medium">Weekly Check-Ins</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyCheckIns}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="day" />
                <YAxis 
                  label={{ value: 'Check-ins', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="rounded-lg border bg-background p-4 shadow-sm">
                          <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Day:</span>
                              <span className="font-medium">{data.day}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Check-ins:</span>
                              <span className="font-medium">{data.checkIns}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Goal:</span>
                              <span className="font-medium">{data.goal}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">Completion:</span>
                              <span className="font-medium">{Math.round((data.checkIns / data.goal) * 100)}%</span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar
                  dataKey="checkIns"
                  fill="var(--primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={logCheckIns}>
          {todayCheckIns > 0 ? "Update Today's Check-Ins" : "Log Today's Check-Ins"}
        </Button>
      </CardFooter>
    </Card>
  )
}