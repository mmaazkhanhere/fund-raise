import Link from 'next/link'
import React from 'react'
import NavbarMenu from './navbar-menu'
import { Button } from '../ui/button'
import { UserButton } from '@clerk/nextjs'
import NavigationMenuDemo from './nav-items'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header
            className='flex items-center justify-between max-w-7xl mx-auto w-full
            py-4'
        >
            <nav
                className='uppercase font-black text-3xl text-[#345846]'
            >
                <Link href='/'>
                    FundRaise
                </Link>
            </nav>

            <nav>
                <NavbarMenu />
            </nav>

            <nav className='flex items-center gap-x-4'>
                <Button className='bg-[#81f08f] text-[#0f2417]'>
                    Start Campaign
                </Button>
                <UserButton />
            </nav>

        </header>
    )
}

export default Navbar