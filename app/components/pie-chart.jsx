"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Technology", value: 40 },
  { name: "Healthcare", value: 15 },
  { name: "Finance", value: 20 },
  { name: "Consumer", value: 10 },
  { name: "Energy", value: 15 },
]

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function PieChartComponent() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Percentage",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full p-4"
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
