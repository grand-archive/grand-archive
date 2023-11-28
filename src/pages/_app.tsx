import '@/styles/globals.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { DefaultSeo } from 'next-seo'

const linuxBiolinum = localFont({ src: './linux-biolinum.woff2' })

const theme = extendTheme({
  fonts: {
    heading: linuxBiolinum.style.fontFamily,
    body: linuxBiolinum.style.fontFamily
  }
})

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <DefaultSeo
      description="Play Grand Archive online!"
      title="Grand Archive"
    />
    <Component {...pageProps} />
  </ChakraProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
