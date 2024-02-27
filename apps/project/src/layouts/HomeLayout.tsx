import { PropsWithChildren } from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box'

interface HomeLayoutProps {
  ambulanciaUrgente?: boolean
  title?: string
}

const HomeLayout = ({ children, title }: PropsWithChildren<HomeLayoutProps>) => {
  return (
    <>
      <Header />
      {title && <Box>{title}</Box>}
      {children}
    </>
  )
}

export default HomeLayout
