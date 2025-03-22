import { cn } from '@/lib/utils'
import React from 'react'

const navs = [
    "Home",
    "Create Polaroid",
    "Gallery",
    "Pricing",
    "Contact"
]

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-between items-center lg:px-20 md:px-10 sm:px-8 px-5 py-10'>
        <h2 className="text-2xl font-medium font-logo ">Pixels</h2>
        <nav className=' gap-10 text-white/70 hidden lg:flex'>
            {navs.map((nav, index) => (
                <a key={index} href="#" className={cn(
                    "text-sm",
                    nav === "Home" && "text-white"
                )}>
                    {nav}
                </a>
            ))}
        </nav>
        <button className='bg-white text-neutral-950 rounded-md px-4 py-[8px] font-semibold '>
            Sign Up
        </button>
    </div>
  )
}

export default Navbar