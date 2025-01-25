'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/logo-sm.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <nav className={`w-full sticky top-2 z-40  md:flex md:justify-between items-center  transition-all duration-500 ease-in-out`}>
<div className="flex flex-col md:flex-row justify-between items-center w-[90%] bg-[#3a497b] rounded-2xl px-6 py-3 mx-auto">
<div className="flex justify-between items-center w-full md:w-auto">
    <Image src={logo} alt='logo' className='max-w-10' />
    <button
      className="w-10 h-10 md:hidden"
      onClick={toggleNavbar}
    >
      <FontAwesomeIcon icon={faBars} className="fa-xl" />
    </button>
  </div>

  <ul className={`flex flex-col md:flex-row items-center gap-y-5 md:gap-x-5 mt-4 md:mt-0 transition-all duration-500 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/' ? 'active' : ''} href={'/'}>All</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/mmorpg' ? 'active' : ''} href={'/mmorpg'}>MMORPG</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/shooter' ? 'active' : ''} href={'/shooter'}>SHOOTER</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/sailing' ? 'active' : ''} href={'/sailing'}>SAILING</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/permadeath' ? 'active' : ''} href={'/permadeath'}>PERMADEATH</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/superhero' ? 'active' : ''} href={'/superhero'}>SUPERHERO</Link>
    </li>
    <li className='hover:text-[#09c] transition-all duration-500 ease-in-out'>
      <Link className={path == '/pixel' ? 'active' : ''} href={'/pixel'}>PIXEL</Link>
    </li>
  </ul>
</div>
</nav>

    </>
  );
}
