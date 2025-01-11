import React from 'react'
import { Skeleton } from './ui/skeleton'
import { cn } from '@/lib/utils'

const SkeletonWrapper = (
    {children, // The content to display inside the SkeletonWrapper once loading is complete
    isLoading,
    fullWidth = true,} : { // Controls whether the skeleton should span the full width of its parent container
        children: React.ReactNode,
        isLoading: boolean,
        fullWidth?: boolean,
    }
) => {
    if(!isLoading) return children;
  return (
    <Skeleton className={cn(fullWidth && "w-full")}>
        <div className="opacity-0">{children}</div>
    </Skeleton>
  )
}

export default SkeletonWrapper 