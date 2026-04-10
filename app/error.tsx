'use client'

import Link from "next/link";
import { useEffect } from "react"

export default function Error({
    error,
    reset
}:{
    error:Error
    reset:()=>void
}){
    useEffect(()=>{
        console.log("Error");
        
    },[error])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 dark:bg-black">
      <h1 className="text-6xl font-bold text-gray-200">500</h1>
      <h2 className="text-xl font-bold">Xəta baş verdi</h2>
      <p className="text-gray-500">{error.message || 'Gözlənilməz xəta'}</p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Yenidən cəhd Et
        </button>
      </div>
        <Link href="/Home" className="border px-6 py-2 rounded-lg">
          Ana səhifə
        </Link>
    </div>
  )
}