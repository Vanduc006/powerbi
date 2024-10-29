import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import Placeholder from './placeholder.svg'
const articles = [
  {
    title: "The Future of AI",
    image: "placeholder.svg?height=200&width=400",
    content: "Artificial Intelligence is rapidly evolving, transforming industries and our daily lives. From self-driving cars to advanced medical diagnostics, AI is pushing the boundaries of what's possible.",
    author: "Jane Doe",
    date: "2024-03-15"
  },
  {
    title: "Sustainable Energy Solutions",
    image: "placeholder.svg?height=200&width=400",
    content: "As the world grapples with climate change, sustainable energy solutions are becoming increasingly crucial. Solar, wind, and other renewable sources are paving the way for a greener future.",
    author: "John Smith",
    date: "2024-03-14"
  },
  {
    title: "The Rise of Remote Work",
    image: "placeholder.svg?height=200&width=400",
    content: "The global pandemic has accelerated the adoption of remote work, leading to a paradigm shift in how we view the workplace. Companies are reimagining their policies to adapt to this new reality.",
    author: "Alice Johnson",
    date: "2024-03-13"
  },
  {
    title: "Cybersecurity in the Digital Age",
    image: "placeholder.svg?height=200&width=400",
    content: "As our lives become increasingly digital, the importance of cybersecurity cannot be overstated. From personal data protection to national security, the challenges and solutions are evolving rapidly.",
    author: "Bob Williams",
    date: "2024-03-12"
  }
]

const CardPowerBi = () => {
  return (
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
  )
}

export default CardPowerBi