"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react"

export function StockStats() {
  const stats = [
    {
      title: "Market Value",
      value: "$1,245,678",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Active Positions",
      value: "24",
      change: "+2",
      trend: "up",
      icon: Users,
    },
    {
      title: "Top Gainer",
      value: "MSFT +3.45%",
      change: "$245.78",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Top Loser",
      value: "TSLA -1.68%",
      change: "$187.65",
      trend: "down",
      icon: TrendingDown,
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="material-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              {stat.trend === "up" ? (
                <ArrowUp className="mr-1 h-4 w-4 text-green-600" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-red-600" />
              )}
              <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
