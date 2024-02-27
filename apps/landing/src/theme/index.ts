import { createTheme } from '@mui/material'
import { healthTheme } from 'ui'
import * as dt from 'design-tokens'

const landingTheme = createTheme(healthTheme, {
  typography: {
    body1: {
      color: dt.ColorGrey50,
      fontWeight: 600,
      fontSize: '1.35rem',
    },
    body2: {
      color: '#172048',
    },
    h1: {
      color: '#172048',
      fontSize: '4rem',
      fontWeight: 900,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 900,
      color: '#172048',
    },
    h4: {
      color: '#172048',
      fontWeight: 900,
    },
  },
})

export default landingTheme
