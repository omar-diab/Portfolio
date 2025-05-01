'use client';

import Image from "next/image"
import Link from "next/link"

import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-4">
      <Link href={"/"} data-aos="fade-down-right" data-aos-duration="1500">  
        <Image src={'/assets/photos/logo.png'} alt="Logo" height={100} width={100} className="w-auto h-auto"/>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header