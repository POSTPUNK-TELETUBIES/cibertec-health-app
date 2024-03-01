import { PropsWithChildren } from 'react'
import { Typography } from '@mui/material'

const Title = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant='h3'
      mt={4}
      color={'sheldon'}
      fontWeight={'bold'}
      display={'inline-block'}
      p={1.5}
    >
      {children}
    </Typography>
  )
}

export default Title
