'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo-sm.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {
  let path = usePathname()
  return <>
  <nav className='container flex w-full justify-between items-center bg-[#3a497b] py-3 px-6 rounded-2xl sticky top-0 z-50'>
    <Image src={logo} alt='logo' className='max-w-10' />
    <ul className='flex space-x-3'>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/' ? 'active' : ''} href={'/'}>All</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/mmorpg' ? 'active' : ''} href={'mmorpg'}>MMORPG</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/shooter' ? 'active' : ''} href={'/shooter'}>SHOOTER</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/sailing' ? 'active' : ''} href={'/sailing'}>SAILING</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/permadeath' ? 'active' : ''} href={'/permadeath'}>PERMADEATH</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/superhero' ? 'active' : ''} href={'/superhero'}>SUPERHERO</Link></li>
      <li className='hover:text-[#09c] transition-all duration-500 ease-in-out' ><Link className={path == '/pixel' ? 'active' : ''} href={'/pixel'}>PIXEL</Link></li>
    </ul>
  </nav>
  </>
}
