"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContext = React.createContext({})

const ChartContainer = React.forwardRef(({ children, config, className, ...props }, ref) => {
  const colors = {}
  const labels = {}

  for (const key in config) {
    colors[key] = config[key].color
    labels[key] = config[key].label
  }

  const contextValue = React.useMemo(
    () => ({
      colors,
      labels,
    }),
    [colors, labels],
  )

  return (
    <ChartContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn("", className)}
        style={{
          "--color-background": "hsl(var(--background))",
          "--color-foreground": "hsl(var(--foreground))",
          ...Object.entries(colors).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [`--color-${key}`]: value,
            }),
            {},
          ),
        }}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props} />
})
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef(({ className, payload, formatter, ...props }, ref) => {
  const { labels } = React.useContext(ChartContext)

  if (!payload?.length) {
    return null
  }

  return (
    <div ref={ref} className={cn("rounded-lg border bg-background px-3 py-2 text-sm shadow-md", className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <span className="text-muted-foreground">{labels[item.dataKey] ?? item.name}</span>
              </div>
              <div className="font-medium">
                {formatter
                  ? formatter(item.value)
                  : typeof item.value === "number"
                    ? item.value.toLocaleString()
                    : item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
