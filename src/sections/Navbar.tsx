"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Home, Info, User, Menu } from "lucide-react"
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"


const tableData = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Manager" },

]

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const pages = ["Home", "Admin", "About"]

  const toggleRowSelection = (id: string) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  {/* Begin navbar */}
                  <div className="flex h-screen bg-gray-100">
                    {/* Sidebar */}
                    <aside
                      className={`bg-white w-64 h-screen flex flex-col transition-all duration-300 ease-in-out ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                      } fixed lg:relative lg:translate-x-0 z-20`}
                    >
                      <div className="p-4 border-b">
                        <h1 className="text-2xl font-bold">BrandName</h1>
                      </div>
                      <nav className="flex-1 p-4">
                        {pages.map((page) => (
                          <Button
                            key={page}
                            variant={activePage === page ? "default" : "ghost"}
                            className="w-full justify-start mb-2"
                            onClick={() => setActivePage(page)}
                          >
                            {page === "Home" && <Home className="mr-2 h-4 w-4" />}
                            {page === "Admin" && <LayoutDashboard className="mr-2 h-4 w-4" />}
                            {page === "About" && <Info className="mr-2 h-4 w-4" />}
                            {page}
                          </Button>
                        ))}
                      </nav>
                      <div className="p-4 border-t">
                        <Button variant="ghost" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" />
                          User
                        </Button>
                      </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <header className="bg-white shadow-sm z-10">
                        <div className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                          <h1 className="text-2xl font-semibold text-gray-900">{activePage}</h1>
                          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu className="h-6 w-6" />
                          </Button>
                        </div>
                      </header>

                      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="p-6">
                          {activePage === "Home" && (
                            <Card className="w-full">
                              <CardHeader>
                                <CardTitle>Monthly Sales</CardTitle>
                              </CardHeader>
                              <CardContent>

                              </CardContent>
                            </Card>
                          )}
                          {activePage === "Admin" && (
                            <Card className="w-full">
                              <CardHeader>
                                <CardTitle>User Management</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead className="w-12">Select</TableHead>
                                      <TableHead>Name</TableHead>
                                      <TableHead>Email</TableHead>
                                      <TableHead>Role</TableHead>
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
                              </CardContent>
                            </Card>
                          )}
                          {activePage === "About" && (
                            <Card className="w-full">
                              <CardHeader>
                                <CardTitle>About Us</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p>This is the about page content. You can add more information about your company or project here.</p>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </main>
                    </div>
                  </div>
                  {/* <div className='mt-20'>
                    <Contents>                
                    </Contents>
                  </div> */}
                </SignedIn>
                <div className='flex justify-center'>
                  <SignedOut>
                    {/* Hiển thị nếu người dùng chưa đăng nhập */}
                    <SignIn/>
                  </SignedOut>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}