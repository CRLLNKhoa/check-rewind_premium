"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'

function Reward2() {
    const [showGift,setShowGift] = useState(false)
  return (
    <div className="p-1">
              <Card className="rounded-2xl overflow-hidden border-none h-[324px] bg-gradient-to-r from-gray-700 to-black backdrop-blur-md">
                <CardContent
                  className="flex h-full items-center justify-between p-6
                 flex-col"
                >
                  <img className="rounded-lg" src="/anh1.gif" alt="claim" />
                  <h1 className="text-xl font-bold text-white flex flex-col items-center gap-1 my-4 uppercase">
                    Quà điểm danh <div className="cursor-pointer" onClick={() => setShowGift(true)}><IoHelpCircleOutline /></div>
                  </h1>
                  <Button
                    className="rounded-full bg-white text-black
                     hover:bg-white font-bold mt-auto h-12  w-full"
                  >
                    Claim Reward
                  </Button>
                </CardContent>
                <div className={cn("bg-black/80 text-white flex flex-col p-4 -z-50 opacity-0 absolute duration-300 ease-in-out top-0 left-0 right-0 bottom-0 transition-all",
                    showGift && "z-50 opacity-100"
                )}>
                    <ul className='text-center'>
                        <li>Chúc bạn may mắn lần sau! (50%)</li>
                        <li>+1 Ruby (30%)</li>
                        <li>+5 Ruby (10%)</li>
                        <li>+10 Ruby (5%)</li>
                        <li>+20 Ruby (2,5%)</li>
                        <li>+800 Ruby (1%)</li>
                        <li>+10K Ruby (0,5%)</li>
                    </ul>
                    <Button className='mt-auto' onClick={() => setShowGift(false)}>Close</Button>
                </div>
              </Card>
            </div>
  )
}

export default Reward2