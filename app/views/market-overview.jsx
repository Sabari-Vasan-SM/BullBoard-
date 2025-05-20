"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChartComponent } from "../components/line-chart"
import { BarChartComponent } from "../components/bar-chart"
import { PieChartComponent } from "../components/pie-chart"
import { LineChartIcon, BarChartIcon, PieChartIcon, TrendingUp } from "lucide-react"

export function MarketOverview() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Market Overview</h2>
        <p className="text-muted-foreground">Analyze current market trends and sector performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">S&P 500</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,587.64</div>
            <p className="text-xs text-green-600 flex items-center mt-1">+0.63% (+28.63)</p>
          </CardContent>
        </Card>
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Nasdaq</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14,346.02</div>
            <p className="text-xs text-green-600 flex items-center mt-1">+0.82% (+116.29)</p>
          </CardContent>
        </Card>
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Dow Jones</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36,124.56</div>
            <p className="text-xs text-green-600 flex items-center mt-1">+0.45% (+161.15)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card className="material-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
            <CardTitle className="text-md font-medium">Market Indices Performance</CardTitle>
            <LineChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-0 h-[350px]">
            <LineChartComponent />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="material-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
            <CardTitle className="text-md font-medium">Sector Performance</CardTitle>
            <BarChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-0 h-[350px]">
            <BarChartComponent />
          </CardContent>
        </Card>
        <Card className="material-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
            <CardTitle className="text-md font-medium">Market Capitalization</CardTitle>
            <PieChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-0 h-[350px]">
            <PieChartComponent />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
