'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { SupabaseProvider } from './SupabaseProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import landingTheme from '@/theme'

export function Providers({ children }: Readonly<PropsWithChildren>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={landingTheme}>
          <CssBaseline />
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  )
}
