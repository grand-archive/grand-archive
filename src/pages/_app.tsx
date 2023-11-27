import '@/styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
