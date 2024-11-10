"use client"

import { useRef, useEffect, useState} from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { LayoutDashboard, Home, Info,Plus, Menu, Flame,Trash2, UserCog } from "lucide-react"
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "./components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"

import { useToast } from './hooks/use-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Datenow from './sections/Datenow';
import { createClient } from "@supabase/supabase-js";
// import supabase from './controllers/ConnectSupaBase';



// import { BartChartPowerBi } from "./sections/BartChartPowerBi"
// import AreaChartPowerBi from "./sections/AreaChartPowerBi"
// import { PieChartPowerBi } from "./sections/PieChartPowerBi"
// import { currentUser } from '@clerk/nextjs/server';
import Marquee from "react-fast-marquee";


const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('vi-VN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

// const supabase = createClient('https://myfdqawmzovlouhecepo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZmRxYXdtem92bG91aGVjZXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMjA4NTUsImV4cCI6MjAxMjc5Njg1NX0.8UXB-5owTd7tudPSVR80j7pQCSuNON342wGVWvXZXZU');
// const { data } = await supabase.from('powerbi').select('*')
// console.log(data)
// const articles = data;
// const tableData = data;

const admins = [
  'c3435101@uon.edu.au',
  'janie.nguyen2059@gmail.com',
  'quynhanh.ng520@gmail.com',
  'bagiadaohoa@gmail.com',
  'ducnv2411150@usth.edu.vn'
]
const articles = [
  {
    id: 1,
    title: "The Future of AI",
    image: "https://cdn.tgdd.vn/News/1561019/2(27)-1280x720.jpg",
    content: "Artificial Intelligence is rapidly evolving, transforming industries and our daily lives. From self-driving cars to advanced medical diagnostics, AI is pushing the boundaries of what's possible.",
    author: "Jane Doe",
    modify: "2024-03-15",
    powerBiLink: "https://app.powerbi.com/reportEmbed?reportId=3be9ae9d-b37d-4b8b-becd-bbdc51b78348&autoAuth=true&embeddedDemo=true"
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    image: "https://cdn.tgdd.vn/News/1561019/2(27)-1280x720.jpg",
    content: "As the world grapples with climate change, sustainable energy solutions are becoming increasingly crucial. Solar, wind, and other renewable sources are paving the way for a greener future.",
    author: "John Smith",
    modify: "2024-03-14",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiOGZhYjNkNTktZGE5Zi00MWE1LWEyNzktNmRhODJiOGM5YmJiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  },
  {
    id: 3,
    title: "The Rise of Remote Work",
    image: "https://cdn.tgdd.vn/News/1561019/2(27)-1280x720.jpg",
    content: "The global pandemic has accelerated the adoption of remote work, leading to a paradigm shift in how we view the workplace. Companies are reimagining their policies to adapt to this new reality.",
    author: "Alice Johnson",
    modify: "2024-03-13",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiYTZjZjBiNTktYTJiZC00MjY4LWExMDUtNGY5NWJmZGUzOWQ2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  },
  {
    id: 4,
    title: "Cybersecurity in the Digital Age",
    image: "https://cdn.tgdd.vn/News/1561019/2(27)-1280x720.jpg",
    content: "As our lives become increasingly digital, the importance of cybersecurity cannot be overstated. From personal data protection to national security, the challenges and solutions are evolving rapidly.",
    author: "Bob Williams",
    modify: "2024-03-12",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiNzhhMTg2ZTgtZTMzNC00MmMwLWE1YTktNDgyZjU3OWY5NzkwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  }
]
const tableData = articles;
export default function App() {
  const [rows, setRows] = useState(tableData);
  const [activePage, setActivePage] = useState("Dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const pages = ["Dashboard"]
  
  const openDrawer = (article: typeof articles[0]) => {
    setSelectedArticle(article)
  }

  const closeDrawer = () => {
    setSelectedArticle(null)
  }
  const { user } = useUser();
  
  // console.log(user.firstName + user.lastName)
  if (!user) {
    return (
      <>
        <div className='flex justify-center'>
                
          <SignedOut>
          
            {/* Hiển thị nếu người dùng chưa đăng nhập */}
            <SignIn/>
          </SignedOut>
        </div>
      </>
    );
  }
  const userEmail = user.primaryEmailAddress?.emailAddress || "";
  if (admins.includes(userEmail)) {
    pages.push('Database management')
  } 
  
  const handleDelete = async (id) => {
    // Here you would execute the delete operation, like calling the API or supabase delete function
    await supabase
      .from('powerbi')
      .delete()
      .eq('id', id);
    toast("Delete post success 😈")  
    window.location.reload()
    // Optionally, update state to reflect deletion without a page reload
  };
  
  const handleInputChange = (e, rowId, field) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      )
    );
  };
  const handleSave = async (row) => {
    const { data, error } = await supabase
      .from('powerbi') // Replace with your table name
      .update({
        title: row.title,
        content: row.content,
        image: row.image,
        powerBiLink: row.powerBiLink,
      })
      .eq('id', row.id);

    if (error) {
      console.error('Error updating row:', error);
    } else {
      toast("The post is up-to-date 👌")  
      window.location.reload()
    }
  };

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
                  <div className="flex h-screen">
                    {/* Sidebar */}
                    <aside
                      className={`bg-[#2e2d32] w-64 h-screen flex flex-col transition-all duration-300 ease-in-out ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                      } fixed lg:relative lg:translate-x-0 z-20`}
                    >
                      <div className="p-4">
                        <h1 className="text-xl font-bold text-white">FES MANAGEMENT</h1>
                        
                        {/* <h1 className="text-m">By dunv</h1> */}
                      </div>
                      <nav className="flex-1 p-4">
                        {pages.map((page) => (
                          <Button
                            key={page}
                            variant={activePage === page ? "default" : "ghost"}
                            className="w-full justify-start mb-2 text-white rounded-[12px]"
                            onClick={() => 
                              setActivePage(page)
                            }
                          >
                            {page === "Dashboard" && <Home className="mr-2 h-4 w-4 " />}
                            {page === "Database management" && <LayoutDashboard className="mr-2 h-4 w-4" />}
                            {page === "User management" && <UserCog className="mr-2 h-4 w-4" />}
                            {page}
                          </Button>
                        ))}
                      </nav>
                      <div className="p-4">
                        <Button variant="ghost" className="w-full justify-start text-white rounded-[12px]">
                      
                          <UserButton></UserButton> Hello {user.firstName} {user.lastName}
                        </Button>
                      </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <header className="bg-white shadow-sm z-10 bg-[#2e2d32]">
                        <div className="sm:px-6 lg:px-8 flex justify-between items-center bg-[#2e2d32]">
                          <h1 className="text-2xl font-semibold text-white"></h1>

                          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu className="h-6 w-6" />
                          </Button>
                        </div>
                      </header>

                      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#2e2d32] ">
                        <div className="p-6">
                          {activePage === "Dashboard" && (
                              <Card className="w-full bg-[#1f1f1f] text-white border-transparent">

                              <CardHeader>
                                <CardTitle className="mb-5">Reports</CardTitle>
                                <Marquee>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet purus nec dolor fringilla fermentum. Fusce dapibus sapien at est tincidunt, vitae feugiat magna viverra. Integer pharetra justo vel nibh facilisis, a scelerisque arcu gravida. Nam sodales, justo nec tincidunt consequat, sem eros fermentum ex, in porttitor turpis nulla in erat. Proin varius, justo sed aliquam sodales, felis velit condimentum ligula, vitae tincidunt justo purus nec arcu. Suspendisse potenti. Aliquam erat volutpat. Etiam euismod diam sit amet justo ultrices, in tincidunt lectus facilisis. Donec gravida cursus neque, id finibus purus porttitor in. Ut ac libero ac nunc tempus fermentum.
                                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus aliquet mi eget justo eleifend, non elementum ex tincidunt. Curabitur congue ligula a est lacinia, non lobortis metus gravida. Ut mollis ligula a diam tristique, non bibendum arcu tempor. Duis nec tincidunt ligula. Sed congue ultricies mi, id facilisis elit. Nulla facilisi. Aenean fringilla sem vel erat efficitur, sit amet vulputate tortor interdum. In in ipsum sit amet magna vestibulum ullamcorper.
                                </Marquee> 
                              </CardHeader>
                              <CardContent>
                                  {/* <div className="mb-5 w-full flex flex-wrap md:flex-nowrap gap-5">
                                    <BartChartPowerBi></BartChartPowerBi>                                
                                    <PieChartPowerBi></PieChartPowerBi>
                                  </div> */}                              
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {articles.map((article) => (
                                    <Card key={article.id} className="overflow-hidden cursor-pointer">
                                      <CardHeader>    
                                        <CardTitle>{article.title}</CardTitle>
                                      </CardHeader>

                                      <CardContent className="">
                                      {article.image !== "" ?                                         
                                        <img
                                          src={article.image}
                                          alt="somthing went wrong when server try to load this image. Please double check the link image"
                                          className="object-cover h-48 w-full rounded-[10px]"
                                        /> :
                                        <div className='flex flex-col space-y-3'>
                                          <Skeleton className="h-[125px] w-full rounded-xl" />
                                        </div>
                                      }
                                        <p className="mt-4 text-muted-foreground line-clamp-3">{article.content}</p>
                                      </CardContent>
                                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                                        
                                        <span>{article.modify}</span>
                                        {/* <Button onClick={() => openDrawer(article)} className='bg-[#2e2d32] rounded-lg'>View</Button> */}
                                        <div className='pt-1 pr-5 pb-1 pl-5 rounded-[5px] text-white border-dashed border-2 border-black text-black' onClick={() => openDrawer(article)}>
                                          View
                                        </div>
                                      </CardFooter>
                                    </Card>
                                  ))}
                                </div>
                                  {/* <div className="">
                                    <CardPowerBi></CardPowerBi>
                                    
                                  </div> */}
                                  
                              </CardContent>

                            </Card>
                          )}
                          {activePage === "Database management" && (
                            <Card className="w-full">
                              <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Post Management</CardTitle>
                                <Sheet>
                                  <SheetTrigger asChild>
                                    <Button className='rounded-[12px]'><Plus className="mr-2 h-4 w-4" /> Create New Post</Button>
                                  </SheetTrigger>
                                  <SheetContent>
                                    <SheetHeader>
                                      <SheetTitle>Create New Post</SheetTitle>
                                      <SheetDescription>Add a new post to your blog</SheetDescription>
                                    </SheetHeader>
                                    <form onSubmit={ async (e)=> {
                                      e.preventDefault()
                                      // Newrows()
                                      const form = e.target as HTMLFormElement;
                                      const formData = new FormData(form);
                                      const new_title_row = formData.get('title')
                                      const new_content_row = formData.get('content')
                                      const new_powerBiLink_row = formData.get('powerBiLink')
                                      const new_image = formData.get("image")
                                      await supabase
                                      .from('powerbi')
                                      .insert([
                                        { 
                                          title: new_title_row, 
                                          content: new_content_row, 
                                          powerBiLink: new_powerBiLink_row,
                                          image: new_image,  
                                          modify: formattedDate,
                                        },
                                      ])
                                      .select()
                                      // console.log(new_title_row)
                                      // const formJson = Object.fromEntries(formData.entries());
                                      // console.log(formJson);

                                      ;(e.target as HTMLFormElement).reset()
                                      toast("Creat new post success!")
                                      window.location.reload()
                                      
                                    }} className="space-y-4 mt-4">
                                      <div>
                                        <Label htmlFor="title">Title, required</Label>
                                        <Input id="title" name="title" required />
                                      </div>
                                      <div>
                                        <Label htmlFor="content">Content, not required</Label>
                                        <Textarea id="content" name="content"/>
                                      </div>
                                      <div>
                                        <Label htmlFor="powerBiLink">Power BI Link, required</Label>
                                        <Input id="powerBiLink" name="powerBiLink" required/>
                                      </div>
                                      <div>
                                        <Label htmlFor="powerBiLink">Link just 1 image, not required</Label>
                                        <Input id="image" name="image"/>
                                      </div>
                                      <div>
                                        <Label htmlFor="powerBiLink">Date modified : </Label>
                                        <Datenow/>
                                      </div>
                                      <Button type="submit" className='rounded-[12px]'>Create Post</Button>
                                    </form>
                                  </SheetContent>
                                </Sheet>
                              </CardHeader>
                              <CardContent>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead className="w-12">ID</TableHead>
                                      <TableHead>Title</TableHead>
                                      <TableHead>Content</TableHead>
                                      <TableHead>Image</TableHead>
                                      <TableHead>PowerBI</TableHead>
                                      <TableHead>Edit</TableHead>
                                      <TableHead>Remove</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  {rows.map((row) => (
                                    <TableRow key={row.id}>
                                      <TableCell>{row.id}</TableCell>
                                      <TableCell>
                                        <Textarea
                                          defaultValue={row.title}
                                          onChange={(e) => handleInputChange(e, row.id, 'title')}
                                          className="rounded-[12px]"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <Textarea
                                          defaultValue={row.content}
                                          onChange={(e) => handleInputChange(e, row.id, 'content')}
                                          className="rounded-[12px]"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <Textarea
                                          defaultValue={row.image}
                                          onChange={(e) => handleInputChange(e, row.id, 'image')}
                                          className="rounded-[12px]"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <Textarea
                                          defaultValue={row.powerBiLink}
                                          onChange={(e) => handleInputChange(e, row.id, 'powerBiLink')}
                                          className="rounded-[12px]"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <Button
                                          variant="outline"
                                          className="rounded-[12px]"
                                          onClick={() => handleSave(row)}
                                        >
                                          Save
                                        </Button>
                                      </TableCell>
                                      <TableCell>
                                        <AlertDialog>
                                          <AlertDialogTrigger asChild>
                                            <Button variant="destructive" className="rounded-[12px]">
                                              <Trash2 className="h-4 w-4" />
                                            </Button>
                                          </AlertDialogTrigger>
                                          <AlertDialogContent>
                                            <AlertDialogHeader>
                                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                              <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete the post.
                                              </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                                              <AlertDialogAction onClick={() => handleDelete(row.id)}>
                                                Delete
                                              </AlertDialogAction>
                                            </AlertDialogFooter>
                                          </AlertDialogContent>
                                        </AlertDialog>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </Table>
                              </CardContent>
                              <ToastContainer
                                position="top-right"
                                autoClose={100}
                                closeOnClick
                                theme="light"/>
                              <ToastContainer />
                            
                            </Card>
                          
                          )}
                          
                        </div>
                      </main>
                    </div>
                    
                  {/* drawer */}

                  <Sheet open={selectedArticle !== null} onOpenChange={closeDrawer}>
                    <SheetContent side="bottom" className="h-full w-full overflow-y-auto">
                      {selectedArticle && (
                        <div className="container mx-auto max-w-4xl">
                          <SheetHeader className="mb-6">
                            <SheetTitle className="text-3xl">{selectedArticle.title}</SheetTitle>
                            <SheetDescription className="text-lg">{selectedArticle.modify}</SheetDescription>
                          </SheetHeader>
                          <div className="space-y-6">
                            {selectedArticle.image != "" ?
                              <img
                              src={selectedArticle.image}
                              alt="somthing went wrong when server try to load this image. Please double check the link image"
                              className="object-cover rounded-[12px]"
                              /> : 
                              <div className='flex flex-col space-y-3'>
                                <Skeleton className="h-[125px] w-full rounded-xl" />
                              </div>
                              
                            }
                          {/* <img
                            src={selectedArticle.image}
                            alt="somthing went wrong when server try to load this image. Please double check the link image"
                            className="object-cover"
                          /> */}
                            <p className="text-lg text-muted-foreground">{selectedArticle.content}</p>
                            <div className="aspect-video ">
                              {/* <iframe
                                title="Power BI Report"
                                width="100%"
                                height="100%"
                                src={selectedArticle.powerBiLink}
                                frameBorder="0"
                                allowFullScreen
                              ></iframe> */}
                              <iframe title="INFT 6900" width="100%" height="100%" src={selectedArticle.powerBiLink} frameborder="0" allowFullScreen="true" className='rounded-[12px] border-dashed border-2'></iframe>
                            </div>
                          </div>
                        </div>
                      )}
                    </SheetContent>
                  </Sheet>

                  </div>

                  </SignedIn>
                  {/* <h1 className='flex justify-center'>Being development..</h1> */}
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