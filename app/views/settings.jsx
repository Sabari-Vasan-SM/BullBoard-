"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "../../components/theme-toggle"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function SettingsView() {
  const { resolvedTheme } = useTheme()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [autoRefresh, setAutoRefresh] = useState(true)

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Settings</h2>
        <p className="text-muted-foreground">Customize your dashboard preferences</p>
      </div>

      <Tabs defaultValue="account" className="mb-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex rounded-full p-1 bg-secondary">
          <TabsTrigger value="account" className="rounded-full">
            Account
          </TabsTrigger>
          <TabsTrigger value="appearance" className="rounded-full">
            Appearance
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-full">
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-4 space-y-4">
          <Card className="material-card">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Stock trader and investor" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="material-card">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full">Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-4 space-y-4">
          <Card className="material-card">
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Manage your theme preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="theme-mode">Dark Mode</Label>
                  <div className="text-sm text-muted-foreground">
                    Current theme: {resolvedTheme === "dark" ? "Dark" : "Light"}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <ThemeToggle />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="material-card">
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>Customize how data is displayed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Refresh Data</Label>
                  <div className="text-sm text-muted-foreground">Automatically refresh data every minute</div>
                </div>
                <Switch checked={autoRefresh} onCheckedChange={setAutoRefresh} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4 space-y-4">
          <Card className="material-card">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Notifications</Label>
                  <div className="text-sm text-muted-foreground">Receive notifications about your portfolio</div>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Alerts</Label>
                  <div className="text-sm text-muted-foreground">Receive important alerts via email</div>
                </div>
                <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} disabled={!notificationsEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <div className="text-sm text-muted-foreground">Receive push notifications in your browser</div>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                  disabled={!notificationsEnabled}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
