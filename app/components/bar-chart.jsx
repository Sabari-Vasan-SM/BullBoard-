"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "AAPL", value: 2500 },
  { name: "MSFT", value: 3200 },
  { name: "AMZN", value: 1800 },
  { name: "GOOGL", value: 2800 },
  { name: "META", value: 1500 },
  { name: "TSLA", value: 2100 },
]

export function BarChartComponent() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Volume",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full p-4"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            dy={10}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
