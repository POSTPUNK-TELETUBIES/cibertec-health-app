import { createTheme } from "@mui/material";
import * as dt from 'design-tokens'
import { text } from "stream/consumers";

const gradientBackground = `linear-gradient(97.65deg, ${dt.ColorPrimaryMain} 0.33%, ${dt.ColorPrimary50} 93.35%)`

export const healthTheme = createTheme({
  components:{
    MuiButton:{
      variants:[
        {
          props: {
            variant: 'contained'
          },
          style:{
            '&.MuiToggleButton-primary':{
              background: gradientBackground,
              boxShadow: `box-shadow: 0px 10px 15px 0px ${dt.ColorPrimary200}`
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
            background: gradientBackground,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }
        }
      ]
    }
  }
})
