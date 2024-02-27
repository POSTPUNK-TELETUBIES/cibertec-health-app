import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import projectTheme from '.'

const ThemeModeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={projectTheme}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
)

export default ThemeModeProvider
