import '@/styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <DefaultSeo
      description="Play Grand Archive online!"
      title="Grand Archive"
    />
    <Component {...pageProps} />
  </ChakraProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
