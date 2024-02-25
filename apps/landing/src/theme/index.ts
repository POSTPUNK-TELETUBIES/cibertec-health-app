import { createTheme } from "@mui/material";
import * as dt from 'design-tokens'


const gradientBackground = `linear-gradient(97.65deg, ${dt.ColorPrimaryMain} 0.33%, ${dt.ColorPrimary50} 93.35%)`
const textGradient = gradientBackground.replace('93', '50')

export const healthTheme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root: {
          textTransform: 'none'
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
              boxShadow: `0px 10px 15px 0px ${dt.ColorPrimary200}`
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
    }
  }
})
