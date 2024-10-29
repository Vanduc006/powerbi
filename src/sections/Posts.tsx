import React from 'react'
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
const [selectedRows, setSelectedRows] = useState<string[]>([])
const toggleRowSelection = (id: string) => {
  setSelectedRows(prev =>
    prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
  )
}
const tableData = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Manager" },
]

const Posts = () => {
  return (
    <div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Select</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={() => toggleRowSelection(row.id)}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Posts