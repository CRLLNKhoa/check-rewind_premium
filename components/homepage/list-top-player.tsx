import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";
import { GoSmiley } from "react-icons/go";

function ListTopPlayer() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa <FaCheckCircle className='text-sm text-sky-600' /></h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost Maintainer' ><FaCode /></p>
        </div>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa</h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost Chick' ><MdOutlineEgg /></p>
        </div>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa</h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost user' ><GoSmiley /></p>
        </div>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa</h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost user' ><GoSmiley /></p>
        </div>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa</h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost user' ><GoSmiley /></p>
        </div>
        <div className='bg-blur-white backdrop-blur-md cursor-pointer hover:scale-[1.02] duration-500 select-none p-4 rounded-lg relative flex items-center'>
            <img src="https://github.com/shadcn.png" alt="img" className='size-16 rounded-md' />
            <div className='flex flex-col ml-4'>
                <h2 className='font-bold flex items-center gap-2'>Lương Khoa</h2>
                <p className='text-sm'>First Online: May 12th, 2000</p>
            </div>
            <p className='absolute bottom-2 right-2' title='Checkcost user' ><GoSmiley /></p>
        </div>
    </div>
  )
}

export default ListTopPlayer