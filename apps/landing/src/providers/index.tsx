'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { SupabaseProvider } from './SupabaseProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { healthTheme } from '@/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={healthTheme}>
          <CssBaseline />
          <SupabaseProvider>
            {children}
          </SupabaseProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  )
}
