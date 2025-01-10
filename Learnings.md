<!-- in app/layout.tsx -->

## <html lang="en" className="light">
This avoids a flash of unstyled content (FOUT) or mismatched theming during hydration when the user's system theme is detected or when they have a preferred theme saved.
By setting className="light" on the html tag, you're ensuring the initial theme is light before any theme logic from next-themes takes over such as this below given line that sets theme.
<RootProviders>{children}</RootProviders>

 <!-- In Mobile navbar, to close the slider -->
clickCallback function

