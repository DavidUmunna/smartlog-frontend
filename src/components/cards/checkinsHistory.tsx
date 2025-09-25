"use client"

import * as React from "react"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "../../registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../registry/new-york-v4/ui/card"

const recentCheckIns = [
  { date: "2023-06-15", count: 48 },
  { date: "2023-06-14", count: 42 },
  { date: "2023-06-13", count: 45 },
  { date: "2023-06-12", count: 39 },
  { date: "2023-06-11", count: 32 },
  { date: "2023-06-10", count: 28 },
]

export function CheckInHistory() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="text-sm font-medium">Recent Check-Ins</span>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4">
          {recentCheckIns.map((entry, index) => (
            <div key={index} className="flex items-center px-4 py-2 hover:bg-muted/50">
              <div className="mr-3 rounded-full bg-green-100 p-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  {new Date(entry.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="text-xs text-muted-foreground">
                  {entry.count} check-ins
                </div>
              </div>
              <div className={`text-sm font-medium ${
                entry.count >= 45 ? 'text-green-600' : 
                entry.count >= 40 ? 'text-amber-600' : 'text-red-600'
              }`}>
                {Math.round((entry.count / 45) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}