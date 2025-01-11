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
// children refers to the content that is wrapped inside the SkeletonWrapper, like the text on dropdown, "Set Currency"
// that should be hidden becuse the data inside the dropdown is still loading.

export default SkeletonWrapper;

// we can take isLoading property from the object returned by tanstack/react-query, and pass it to the SkeletonWrapper.