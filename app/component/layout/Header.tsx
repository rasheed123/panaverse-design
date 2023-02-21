import Image from 'next/image'
import React from 'react'
import Logo from 'public/red-p-logo.png'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between max-w-screen-xl mx-auto bg-white py-6 px-2 sticky top-0 items-center'>
        {/* Logo */}
        <div>
            <Image src={Logo} alt="Panaverse logo DAO" />
        {/* <h1 className='text-xl font-bold'>Panaverse DAO</h1> */}
        </div>
        {/* Navigation Bar */}
        <ul className='flex space-x-6 font-medium'>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/courses"}>Courses</Link>
            </li>
            <li>Blog</li>
        </ul>
    </header>
  )
}

export default Header