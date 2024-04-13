/*React component tha represents a navigation bar for for large screens, including
links, buttons for signing in and starting a campaign */

import Link from 'next/link'
import React from 'react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

import NavbarMenu from './navbar-menu'
import { Button } from '../ui/button'
import MobileNavbar from './mobile-navbar'

type Props = {}

const Navbar = async (props: Props) => {

    const signedInUser = await currentUser() //get the current signed in user

    return (
        <header
            className='flex items-center justify-between max-w-7xl mx-auto w-full
            py-4 px-4'
        >
            <nav
                className='uppercase font-black text-2xl lg:text-3xl text-[#345846]'
            >
                <Link href='/'>
                    FundRaise
                </Link>
            </nav>

            <nav className='hidden lg:block'>
                <NavbarMenu />
            </nav>

            <nav className='flex items-center gap-x-4'>
                <div className='hidden lg:block'>
                    <Link
                        href='/create-campaign'
                    >
                        <Button
                            variant='accent'
                        >
                            Start Campaign
                        </Button>
                    </Link>

                </div>

                {/*Display a sign in button if no login user otherwise display
                a user detail button if a sign in user is present */}
                {
                    signedInUser ? (
                        <UserButton
                            afterSignOutUrl='/'
                        />
                    ) : (
                        <SignInButton>
                            <Button
                                variant='outline'
                                aria-label='Sign In Button'
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                    )
                }

                <div className='flex lg:hidden items-center gap-x-2'>
                    <MobileNavbar />
                </div>

            </nav>

        </header>
    )
}

export default Navbar