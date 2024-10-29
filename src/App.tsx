"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { LayoutDashboard, Home, Info, User, Menu, Flame } from "lucide-react"
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "./components/ui/badge"

import CardPowerBi from "./sections/CardPowerBi"

import { BartChartPowerBi } from "./sections/BartChartPowerBi"
import AreaChartPowerBi from "./sections/AreaChartPowerBi"
import { PieChartPowerBi } from "./sections/PieChartPowerBi"

export default function App() {

  const [activePage, setActivePage] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const pages = ["Home", "Admin", "About"]

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
                        <h1 className="text-2xl font-bold">DUCNV</h1>
                        {/* <h1 className="text-m">By dunv</h1> */}
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
                      
                          <UserButton></UserButton> Settings
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
                                  <CardTitle>Some stuff  <Badge variant="destructive">Hot <Flame className="mr-2 h-4 w-4" /></Badge></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-5 w-full flex flex-wrap md:flex-nowrap gap-5">
                                      <BartChartPowerBi></BartChartPowerBi>

                                      <AreaChartPowerBi></AreaChartPowerBi>
                                      <PieChartPowerBi></PieChartPowerBi>

                                    </div>

                                  <CardTitle className="mb-5">Posts</CardTitle>

                                    <div className="">
                                      <CardPowerBi></CardPowerBi>
                                      
                                    </div>
                                    
                                </CardContent>

                              </Card>

                          )}
                          {activePage === "Admin" && (
                            <Card className="w-full">
                              <CardHeader>
                                <CardTitle>Posts Manger</CardTitle>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline">New post</Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                      <DialogTitle>Edit profile</DialogTitle>
                                      <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                      <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                          Tile
                                        </Label>
                                        <Input
                                          id="tile"
                                          defaultValue="ducnv"
                                          className="col-span-3"
                                        />
                                      </div>
                                      <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                          Link
                                        </Label>
                                        <Input
                                          id="link"
                                          defaultValue="ducdeptraimalailamtai"
                                          className="col-span-3"
                                        />
                                      </div>
                                      <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                          Description
                                        </Label>
                                        <Input
                                          id="description"
                                          defaultValue="ducdeptraimalailamtai"
                                          className="col-span-3"
                                        />
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </CardHeader>
                              <CardContent>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead className="w-12">ID</TableHead>
                                      <TableHead>Title</TableHead>
                                      <TableHead>Link</TableHead>
                                      <TableHead>Description</TableHead>
                                      <TableHead>Edit</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {tableData.map((row) => (
                                      <TableRow key={row.id}>
                                        <TableCell>
                                        {row.id}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.role}</TableCell>
                                        <TableCell>
                                          <Button variant="outline">Save</Button>
                                        </TableCell>
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