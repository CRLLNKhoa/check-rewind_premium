"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'

function Reward3() {
    const [showGift,setShowGift] = useState(false)
  return (
    <Card className="rounded-2xl overflow-hidden h-[324px] border-none bg-gradient-to-br from-fuchsia-900 to-purple-700 backdrop-blur-md">
    <CardContent
      className="flex items-center justify-between p-6
     flex-col h-full"
    >
      <img className="rounded-lg" src="/anh3.gif" alt="claim" />
      <h1 className="text-xl font-bold text-white flex flex-col items-center gap-1 my-4 uppercase">
                   Gói quà ruby 2 <div className="cursor-pointer" onClick={() => setShowGift(true)}><IoHelpCircleOutline /></div>
                  </h1>
      <Button disabled
        className="rounded-full bg-white text-black
         hover:bg-white font-bold h-12 w-full text-xl mt-auto"
      >
        x100{" "}
        <img src="/ruby.webp" alt="icon" className="w-6 h-6 ml-2" />
      </Button>
    </CardContent>
    <div className={cn("bg-black/80 text-white flex flex-col p-4 -z-50 opacity-0 absolute duration-300 ease-in-out top-0 left-0 right-0 bottom-0 transition-all",
                    showGift && "z-50 opacity-100"
                )}>
                    <ul className='text-center'>
                        <li>x1 Ruby</li>
                        <li>x1.1 Ruby</li>
                        <li>x1.2 Ruby</li>
                        <li>x0.2 Ruby</li>
                        <li>x1.3 Ruby</li>
                        <li>x1.4 Ruby</li>
                        <li>x10 Ruby</li>
                    </ul>
                    <Button className='mt-auto' onClick={() => setShowGift(false)}>Close</Button>
                </div>
  </Card>
  )
}

export default Reward3