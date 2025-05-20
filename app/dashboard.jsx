"use client"

import { useState } from "react"
import {
  BarChartIcon,
  PieChartIcon,
  LineChartIcon,
  BarChart2,
  Menu,
  X,
  Home,
  TrendingUp,
  DollarSign,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChartComponent } from "./components/bar-chart"
import { PieChartComponent } from "./components/pie-chart"
import { LineChartComponent } from "./components/line-chart"
import { HistogramComponent } from "./components/histogram"
import { StockTable } from "./components/stock-table"
import { StockStats } from "./components/stock-stats"
import { MarketOverview } from "./views/market-overview"
import { PortfolioView } from "./views/portfolio"
import { SettingsView } from "./views/settings"
import { ThemeToggle } from "../components/theme-toggle"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState("dashboard")

  const handleViewChange = (view) => {
    setActiveView(view)
    setSidebarOpen(false) // Close sidebar on mobile after navigation
  }

  // Render the appropriate view based on activeView state
  const renderView = () => {
    switch (activeView) {
      case "market":
        return <MarketOverview />
      case "portfolio":
        return <PortfolioView />
      case "settings":
        return <SettingsView />
      default:
        return (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
              <p className="text-muted-foreground">View your stock performance and market trends</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StockStats />
            </div>

            <Tabs defaultValue="charts" className="mb-6">
              <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex rounded-full p-1 bg-secondary">
                <TabsTrigger value="charts" className="rounded-full">
                  Charts
                </TabsTrigger>
                <TabsTrigger value="table" className="rounded-full">
                  Stock Table
                </TabsTrigger>
              </TabsList>
              <TabsContent value="charts" className="space-y-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="material-card overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
                      <CardTitle className="text-md font-medium">Stock Performance</CardTitle>
                      <LineChartIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="p-0 h-[350px]">
                      <LineChartComponent />
                    </CardContent>
                  </Card>
                  <Card className="material-card overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
                      <CardTitle className="text-md font-medium">Sector Distribution</CardTitle>
                      <PieChartIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="p-0 h-[350px]">
                      <PieChartComponent />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="material-card overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
                      <CardTitle className="text-md font-medium">Volume Comparison</CardTitle>
                      <BarChartIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="p-0 h-[350px]">
                      <BarChartComponent />
                    </CardContent>
                  </Card>
                  <Card className="material-card overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 bg-card">
                      <CardTitle className="text-md font-medium">Price Distribution</CardTitle>
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="p-0 h-[350px]">
                      <HistogramComponent />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="table" className="mt-4">
                <Card className="material-card">
                  <CardHeader>
                    <CardTitle>Stock Portfolio</CardTitle>
                    <CardDescription>Your current stock holdings and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StockTable />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )
    }
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile header with sidebar toggle and theme switch */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-card shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-2">
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-xl font-bold">Stock Dashboard</h1>
        </div>
        <ThemeToggle />
      </div>

      {/* Sidebar */}
      <div
        className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-200 ease-in-out
        fixed md:static top-0 left-0 h-full w-64 bg-card border-r z-40 md:z-0 shadow-md
      `}
      >
        <div className="p-4 border-b flex justify-between items-center bg-primary">
          <h1 className="text-xl font-bold text-primary-foreground">Stock Dashboard</h1>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
        <div className="p-4">
          <nav className="space-y-2">
            <Button
              variant={activeView === "dashboard" ? "default" : "ghost"}
              className={`w-full justify-start rounded-full material-button ${
                activeView === "dashboard" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => handleViewChange("dashboard")}
            >
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            <Button
              variant={activeView === "market" ? "default" : "ghost"}
              className={`w-full justify-start rounded-full material-button ${
                activeView === "market" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => handleViewChange("market")}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Market Overview
            </Button>
            <Button
              variant={activeView === "portfolio" ? "default" : "ghost"}
              className={`w-full justify-start rounded-full material-button ${
                activeView === "portfolio" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => handleViewChange("portfolio")}
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Portfolio
            </Button>
            <Button
              variant={activeView === "settings" ? "default" : "ghost"}
              className={`w-full justify-start rounded-full material-button ${
                activeView === "settings" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => handleViewChange("settings")}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {renderView()}
      </div>
    </div>
  )
}
