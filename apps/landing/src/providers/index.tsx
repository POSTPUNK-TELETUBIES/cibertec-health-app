'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { SupabaseProvider } from './SupabaseProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { healthTheme } from '@/theme'

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={healthTheme}>
        <CssBaseline />
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
