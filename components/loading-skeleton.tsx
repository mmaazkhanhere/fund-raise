/*A react component that represents a loading skeleton displayed indicating
a process under progress or data being fetched */

import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

const LoadingSkeleton = (props: Props) => {
    return (
        <section className="flex items-center space-x-4">
            <Skeleton className="h-12 lg:h-20 w-12 lg:w-20 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] lg:w-[450px]" />
                <Skeleton className="h-4 w-[200px] lg:w-[400px]" />
            </div>
        </section>
    )
}

export default LoadingSkeleton