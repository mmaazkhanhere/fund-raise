"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Campaigns</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#bdee85] via-[#a7e65d] to-[#4caf50] p-6 no-underline outline-none focus:shadow-md"
                    href="/climate-change"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Climate Change Initiatives
                    </div>
                    <p className="text-sm leading-tight text-[#f8f8f2]">
                      Actions to reduces greenhouse gas emission and protect forests
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/conservation" title="Conservation Projects">
                Efforts to protect and restore natural habitats
              </ListItem>
              <ListItem href="/water-conservation" title="Water Conservation">
                Efforts to protect and conserve water resources
              </ListItem>
              <ListItem href="/echo-tech" title="Eco-Tech">
                Fund and promote eco-friendly technologies
              </ListItem>
              <ListItem href="/eco-education" title="Eco-Education">
                Programs to educate about environmental issues
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/*Initiatives */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-[#f8f8f2]'>
            Initiatives
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/" title="Green Energy">
                Promoting renewable and clean energy sources
              </ListItem>
              <ListItem href="/" title="Reforestation">
                Planting trees to restore forests and capture carbon
              </ListItem>
              <ListItem href="/" title="Plastic Reduction">
                Initiatives to reduce plastic waste
              </ListItem>
              <ListItem href="/" title="Community Projects">
                Local initiatives for environmental issues
              </ListItem>
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-[#f8f8f2]'>
            How It Works
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/" title="Withdrawal of Funds">
                How to withdraw funds?
              </ListItem>
              <ListItem href="/" title="Share a Campaign">
                Increase your visibility by sharing on social media
              </ListItem>
              <ListItem href="/" title="Post-Donation Process">
                What happens after a donation is made?
              </ListItem>
              <ListItem href="/" title="FAQs">
                Answers to common questions about the crowdfunding process.
              </ListItem>
            </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Success Stories
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
