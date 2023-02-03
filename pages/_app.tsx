import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import { GoogleAnalytics } from 'nextjs-google-analytics'
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )

}
