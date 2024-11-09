import React from 'react'
import logo from '../assets/logo.png'
import { IoMdContact } from "react-icons/io";

function Navbar() {
  return (
    <div className='bg-background sticky top-0 z-10'>
        <nav className='max-w-screen-xl mx-auto py-4 px-6'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt="logo" className='h-11 w-auto object-contain' />
                
                <ul className='hidden md:flex md:gap-14'>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>About</a>
                    </li>
                    <li>
                        <a className='menu-item'>Works</a>
                    </li>
                    <li>
                        <a className='menu-item'>Testimonials</a>
                    </li>
                </ul>

                <button className='hidden h-10 text-blue-600 text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-blue-600 md:block'>Contact Us</button>
                <button className='w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden  z-50'>
                    <IoMdContact />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar