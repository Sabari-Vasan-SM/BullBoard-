"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate histogram data for price distribution
const generateHistogramData = () => {
  const ranges = ["0-50", "50-100", "100-150", "150-200", "200-250", "250-300", "300-350", "350-400"]

  return ranges.map((range) => ({
    range,
    count: Math.floor(Math.random() * 30) + 5,
  }))
}

const data = generateHistogramData()

export function HistogramComponent() {
  return (
    <ChartContainer
      config={{
        count: {
          label: "Number of Stocks",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="h-full w-full p-4"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
          <XAxis
            dataKey="range"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            angle={-45}
            textAnchor="end"
            height={70}
            tick={{ fill: "currentColor", fontSize: 12 }}
            label={{
              value: "Price Range ($)",
              position: "insideBottom",
              offset: -10,
              fill: "currentColor",
              fontSize: 12,
            }}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: "currentColor", fontSize: 12 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
