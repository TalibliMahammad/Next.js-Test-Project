'use client'
import React from "react"
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"

export default function LikeButton({ item }: { item: any }) {
  
  const [liked, setLiked] = React.useState(false)

  // Component mount olanda localStorage-dən oxu
  React.useEffect(() => {
    const saved = localStorage.getItem(`liked_${item.id}`)
    if (saved === "true") setLiked(true)
  }, [item.id])

  const toggleLike = () => {
    const newVal = !liked
    setLiked(newVal)
    localStorage.setItem(`liked_${item.id}`, String(newVal))
  }

  return (
    <div className="text-4xl absolute top-2 right-2">
      {liked 
        ? <FaHeart onClick={toggleLike} className="text-red-500 cursor-pointer" /> 
        : <CiHeart onClick={toggleLike} className="text-gray-500 cursor-pointer" />
      }
    </div>
  )
}