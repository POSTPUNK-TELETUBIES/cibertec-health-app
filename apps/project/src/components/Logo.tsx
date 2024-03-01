import { Typography } from '@mui/material'
import { MainLogo } from 'ui'

const Logo = () => {
  return (
    <Typography
      textAlign={'center'}
      component={'h2'}
      variant='h2'
      fontWeight={'lighter'}
      color={'secondary'}
      fontSize={'1.7rem'}
    >
      Hai<span style={{ fontWeight: 'bold' }}>Doc</span>{' '}
      <MainLogo style={{ width: '24px', height: '24px', marginBottom: '5px' }} />
    </Typography>
  )
}

export default Logo
