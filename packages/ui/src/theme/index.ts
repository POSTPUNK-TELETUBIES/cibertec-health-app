import { createTheme } from "@mui/material";
import * as dt from 'design-tokens'


const gradientBackground = `linear-gradient(97.65deg, ${dt.ColorPrimaryMain} 0.33%, ${dt.ColorPrimary50} 93.35%)`
const textGradient = gradientBackground.replace('93', '60')

export const healthTheme = createTheme({
  palette: {
    primary: {
      main: dt.ColorPrimary200,
    },
    secondary: {
      main: dt.ColorPrimary50,
    },
    background: {
      default: dt.ColorPrimary25,
    },
  },
  typography:{
    body1:{
      color: dt.ColorGrey50,
      fontWeight: 600,
      fontSize: '1.35rem'
    },
    body2:{
      color: '#172048'
    },
    h1:{
      color: '#172048',
      fontSize: '4rem',
      fontWeight: 900
    },
    h2:{
      fontSize: '3rem',
      fontWeight: 900,
      color: '#172048'
    },
    h4:{
      color: '#172048',
      fontWeight: 900
    }
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root: {
          textTransform: 'none',
          borderRadius: '2rem',
          paddingInline: '2.5rem',
          paddingBlock: '1rem',
          fontWeight: 700
        }
      },
      variants:[
        {
          props: {
            variant: 'contained'
          },
          style:{
            '&.MuiButton-containedPrimary':{
              background: gradientBackground,
              boxShadow: `0px 10px 20px -12px ${dt.ColorPrimary200}`
            }
          }
        }
      ],
    },
    MuiTypography:{
      variants:[
        {
          props:{
            color: 'sheldon'
          },
          style:{
            background: textGradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }
        }
      ]
    },
  MuiCard:{
    styleOverrides:{
      root:{
        borderRadius: '2rem'
      }
    }
  }
  }
})
