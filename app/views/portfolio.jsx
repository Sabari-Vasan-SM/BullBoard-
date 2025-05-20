"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StockTable } from "../components/stock-table"
import { PieChartComponent } from "../components/pie-chart"
import { LineChartComponent } from "../components/line-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChartIcon, LineChartIcon, ArrowUp } from "lucide-react"

export function PortfolioView() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
        <p className="text-muted-foreground">Manage and track your investment portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,567.89</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUp className="mr-1 h-4 w-4" />
              +2.4% today
            </p>
          </CardContent>
        </Card>
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Gain/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$12,345.67</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUp className="mr-1 h-4 w-4" />
              +10.98% all time
            </p>
          </CardContent>
        </Card>
        <Card className="material-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Cash Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,432.10</div>
            <p className="text-xs text-muted-foreground mt-1">12.4% of portfolio</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="holdings" className="mb-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex rounded-full p-1 bg-secondary">
          <TabsTrigger value="holdings" className="rounded-full">
            Holdings
          </TabsTrigger>
          <TabsTrigger value="performance" className="rounded-full">
            Performance
          </TabsTrigger>
          <TabsTrigger value="allocation" className="rounded-full">
            Allocation
          </TabsTrigger>
        </TabsList>
        <TabsContent value="holdings" className="mt-4">
          <Card className="material-card">
            <CardHeader>
              <CardTitle>Your Holdings</CardTitle>
              <CardDescription>Current stocks in your portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <StockTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="mt-4">
          <Card className="material-card overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
              <CardTitle className="text-md font-medium">Portfolio Performance</CardTitle>
              <LineChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 h-[400px]">
              <LineChartComponent />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="allocation" className="mt-4">
          <Card className="material-card overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
              <CardTitle className="text-md font-medium">Portfolio Allocation</CardTitle>
              <PieChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-0 h-[400px]">
              <PieChartComponent />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
