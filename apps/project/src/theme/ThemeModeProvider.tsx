import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { healthTheme } from 'ui'

const ThemeModeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={healthTheme}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
)

export default ThemeModeProvider
