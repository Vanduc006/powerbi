import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import Placeholder from './placeholder.svg'
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const articles = [
  {
    id: 1,
    title: "The Future of AI",
    image: "/placeholder.svg?height=200&width=400",
    content: "Artificial Intelligence is rapidly evolving, transforming industries and our daily lives. From self-driving cars to advanced medical diagnostics, AI is pushing the boundaries of what's possible.",
    author: "Jane Doe",
    date: "2024-03-15",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiODFjOGYxN2YtZDQ2MC00YTEyLWE5NTEtYTZhZjQwZWRkMjM2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    image: "/placeholder.svg?height=200&width=400",
    content: "As the world grapples with climate change, sustainable energy solutions are becoming increasingly crucial. Solar, wind, and other renewable sources are paving the way for a greener future.",
    author: "John Smith",
    date: "2024-03-14",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiOGZhYjNkNTktZGE5Zi00MWE1LWEyNzktNmRhODJiOGM5YmJiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  },
  {
    id: 3,
    title: "The Rise of Remote Work",
    image: "/placeholder.svg?height=200&width=400",
    content: "The global pandemic has accelerated the adoption of remote work, leading to a paradigm shift in how we view the workplace. Companies are reimagining their policies to adapt to this new reality.",
    author: "Alice Johnson",
    date: "2024-03-13",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiYTZjZjBiNTktYTJiZC00MjY4LWExMDUtNGY5NWJmZGUzOWQ2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  },
  {
    id: 4,
    title: "Cybersecurity in the Digital Age",
    image: "/placeholder.svg?height=200&width=400",
    content: "As our lives become increasingly digital, the importance of cybersecurity cannot be overstated. From personal data protection to national security, the challenges and solutions are evolving rapidly.",
    author: "Bob Williams",
    date: "2024-03-12",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiNzhhMTg2ZTgtZTMzNC00MmMwLWE1YTktNDgyZjU3OWY5NzkwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
  }
]

const CardPowerBi = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const openDrawer = (article: typeof articles[0]) => {
    setSelectedArticle(article)
  }

  const closeDrawer = () => {
    setSelectedArticle(null)
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>

                      <img
              src="https://g-i6griwoirpx.vusercontent.net/placeholder.svg"
              alt="logo"
              className="object-cover h-48 w-full"
            />
                      <CardContent className="mt-4">
                        <p className="text-muted-foreground">{article.content}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </CardFooter>
                    </Card>
        ))}
      </div>
      <div>
        <Sheet open={selectedArticle !== null} onOpenChange={closeDrawer}>
          <SheetContent side="bottom" className="h-full w-full overflow-y-auto">
            {selectedArticle && (
              <div className="container mx-auto max-w-4xl">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-3xl">{selectedArticle.title}</SheetTitle>
                  <SheetDescription className="text-lg">{selectedArticle.author} - {selectedArticle.date}</SheetDescription>
                </SheetHeader>
                <div className="space-y-6">
                <img
                  src="https://g-i6griwoirpx.vusercontent.net/placeholder.svg"
                  alt="logo"
                  className="object-cover h-48 w-full"
                />
                  <p className="text-lg text-muted-foreground">{selectedArticle.content}</p>
                  <div className="aspect-video">
                    <iframe
                      title="Power BI Report"
                      width="100%"
                      height="100%"
                      src={selectedArticle.powerBiLink}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>

  )
}

export default CardPowerBi