"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const stocks = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 167.25,
    change: 1.25,
    changePercent: 0.75,
    volume: 52436789,
  },
  {
    id: "2",
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 245.78,
    change: 3.45,
    changePercent: 1.42,
    volume: 32145678,
  },
  {
    id: "3",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 102.34,
    change: -1.23,
    changePercent: -1.19,
    volume: 28765432,
  },
  {
    id: "4",
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 134.56,
    change: 0.87,
    changePercent: 0.65,
    volume: 18976543,
  },
  {
    id: "5",
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 298.76,
    change: 5.43,
    changePercent: 1.85,
    volume: 21345678,
  },
  {
    id: "6",
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 187.65,
    change: -3.21,
    changePercent: -1.68,
    volume: 35678901,
  },
  {
    id: "7",
    symbol: "NFLX",
    name: "Netflix Inc.",
    price: 412.34,
    change: 8.76,
    changePercent: 2.17,
    volume: 12345678,
  },
]

export function StockTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("symbol")
  const [sortDirection, setSortDirection] = useState("asc")
  const [visibleColumns, setVisibleColumns] = useState({
    symbol: true,
    name: true,
    price: true,
    change: true,
    volume: true,
  })

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const toggleColumn = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    })
  }

  const sortedStocks = [...stocks].sort((a, b) => {
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]

    if (typeof aValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    } else {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }
  })

  const filteredStocks = sortedStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 rounded-full"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto rounded-full">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem checked={visibleColumns.symbol} onCheckedChange={() => toggleColumn("symbol")}>
              Symbol
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={visibleColumns.name} onCheckedChange={() => toggleColumn("name")}>
              Name
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={visibleColumns.price} onCheckedChange={() => toggleColumn("price")}>
              Price
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={visibleColumns.change} onCheckedChange={() => toggleColumn("change")}>
              Change
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={visibleColumns.volume} onCheckedChange={() => toggleColumn("volume")}>
              Volume
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              {visibleColumns.symbol && (
                <TableHead onClick={() => handleSort("symbol")} className="cursor-pointer">
                  Symbol
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              )}
              {visibleColumns.name && (
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                  Name
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              )}
              {visibleColumns.price && (
                <TableHead onClick={() => handleSort("price")} className="cursor-pointer text-right">
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              )}
              {visibleColumns.change && (
                <TableHead onClick={() => handleSort("changePercent")} className="cursor-pointer text-right">
                  Change
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              )}
              {visibleColumns.volume && (
                <TableHead onClick={() => handleSort("volume")} className="cursor-pointer text-right">
                  Volume
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStocks.length === 0 ? (
              <TableRow>
                <TableCell colSpan={Object.values(visibleColumns).filter(Boolean).length} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              filteredStocks.map((stock) => (
                <TableRow key={stock.id} className="hover:bg-muted/30">
                  {visibleColumns.symbol && <TableCell className="font-medium">{stock.symbol}</TableCell>}
                  {visibleColumns.name && <TableCell>{stock.name}</TableCell>}
                  {visibleColumns.price && <TableCell className="text-right">${stock.price.toFixed(2)}</TableCell>}
                  {visibleColumns.change && (
                    <TableCell className={`text-right ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change.toFixed(2)} ({stock.change >= 0 ? "+" : ""}
                      {stock.changePercent.toFixed(2)}%)
                    </TableCell>
                  )}
                  {visibleColumns.volume && (
                    <TableCell className="text-right">{stock.volume.toLocaleString()}</TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
