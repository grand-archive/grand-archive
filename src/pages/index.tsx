import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'

const Home = () => {
  return (
    <Box
      bgImage="url('/background-patterns.jpg')"
      bgRepeat="repeat"
      h="100%"
      w="100%"
    >
      <VStack h="100%">
        <Box
          bg="black"
          bgImage="url('/navbar-border.png')"
          bgPosition="bottom"
          bgRepeat="repeat-x"
          bgSize="2px 6px"
          pb="3"
          pt="2"
          px="6"
          w="100%"
        >
          <HStack justify="space-between" maxW="6xl" mx="auto">
            <Link href="/">
              <Image alt="Logo" src="/logo-navbar.png" w="24" />
            </Link>
          </HStack>
        </Box>

        <Center flex="1">
          <Heading textColor="white">Bruh</Heading>
        </Center>

        <Box
          bg="black"
          bgImage="url('/navbar-border.png')"
          bgPosition="top"
          bgRepeat="repeat-x"
          bgSize="2px 6px"
          pb="3"
          pt="4"
          px="6"
          w="100%"
        >
          <HStack justify="space-between" maxW="6xl" mx="auto">
            <Text textColor="white">Made by Max</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
