import { PropsWithChildren } from 'react'
import Header from '../components/Header'
import { Box, Paper } from '@mui/material'

const RegisterLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'}>
      <Header />

      <Box
        sx={{
          margin: 'auto',
          padding: '2rem',
          width: '100%',
          maxWidth: '500px',
          zIndex: 1,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            borderRadius: '8px',
            padding: '2rem',
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  )
}

export default RegisterLayout
