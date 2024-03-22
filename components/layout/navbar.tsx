import Link from 'next/link'
import React from 'react'
import NavbarMenu from './navbar-menu'
import { Button } from '../ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

type Props = {}

const Navbar = async (props: Props) => {

    const signedInUser = await currentUser()

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
                <Button
                    variant='accent'
                >
                    Start Campaign
                </Button>

                {
                    signedInUser ? (
                        <UserButton
                            showName={true}
                            afterSignOutUrl='/'
                        />
                    ) : (
                        <SignInButton>
                            <Button
                                variant='outline'
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                    )
                }

            </nav>

        </header>
    )
}

export default Navbar