import { Box, Typography, TypographyProps } from "@mui/material"
import Image from "next/image"

export const OurServices = ()=>{
  return <Box display={'grid'} 
  flexBasis={{
    xs: 0,
    lg: '50%'
  }} 
  sx={{
    placeItems: 'center',
    '& img':{
      maxHeight: '52rem',
      maxWidth: '600px'
    },
    
  }}>
    <Typography variant="h4" sx={{marginBottom: '3rem'}}>
      Nuestros
      <Typography
        variant="span"
        color="sheldon"
        fontSize={'inherit'} 
        fontWeight={'inherit'}
      >
          {' '}Servicios
      </Typography>
    </Typography>
    <Image
      width={600}
      height={1000}
      alt="female doctor smiling"
      src={"/doctorService.png"}
      />
    </Box>
}
