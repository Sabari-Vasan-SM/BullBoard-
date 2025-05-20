"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Jan", AAPL: 145, MSFT: 210, AMZN: 95 },
  { date: "Feb", AAPL: 150, MSFT: 230, AMZN: 100 },
  { date: "Mar", AAPL: 155, MSFT: 225, AMZN: 105 },
  { date: "Apr", AAPL: 160, MSFT: 240, AMZN: 110 },
  { date: "May", AAPL: 165, MSFT: 245, AMZN: 115 },
  { date: "Jun", AAPL: 170, MSFT: 250, AMZN: 120 },
]

export function LineChartComponent() {
  return (
    <ChartContainer
      config={{
        AAPL: {
          label: "Apple",
          color: "hsl(var(--chart-1))",
        },
        MSFT: {
          label: "Microsoft",
          color: "hsl(var(--chart-2))",
        },
        AMZN: {
          label: "Amazon",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full w-full p-4"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            dy={10}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: "currentColor", fontSize: 12 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="AAPL"
            stroke="var(--color-AAPL)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="MSFT"
            stroke="var(--color-MSFT)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="AMZN"
            stroke="var(--color-AMZN)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
