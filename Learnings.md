<!-- in app/layout.tsx -->

## <html lang="en" className="light">
This avoids a flash of unstyled content (FOUT) or mismatched theming during hydration when the user's system theme is detected or when they have a preferred theme saved.
By setting className="light" on the html tag, you're ensuring the initial theme is light before any theme logic from next-themes takes over such as this below given line that sets theme.
<RootProviders>{children}</RootProviders>

 <!-- In Mobile navbar, to close the slider -->
clickCallback function

## Tanstack Query
Unlike useState, useQuery is part of a global cache managed by React Query. This means:
The data is stored in a shared cache identified by the queryKey.
The cache can be reused across different components that request the same data with the same queryKey.
# How useQuery Mimics useEffect
1. Triggering Side Effects
useEffect: You typically fetch data inside a useEffect to perform side effects like making API calls when a component mounts or when dependencies change.
useQuery: Automatically fetches data when the component mounts or when the queryKey changes, acting as a side-effect manager.
2. Dependency Management
useEffect: You specify dependencies in the dependency array to control when the effect runs.
useQuery: The queryKey acts as a dependency array. When the queryKey changes, useQuery refetches the data automatically.

## diff between serverActions and API 

## revalidatePath("/") on Next js

## cn function
The cn function is a utility function often used in React (or JavaScript) projects to manage and conditionally apply CSS class names. It makes working with dynamic class lists easier and more readable.


## Server actions


//Doubts

/api/categories/route.js
