import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Icon,
  useDisclosure,
  DrawerHeader,
  VStack,
  Link,
  Text,
  Image as ChakraImage,
  Flex,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logoImage from '../../../public/bet-2.svg'
import { IoMdFootball } from 'react-icons/io'
import { MdGames } from 'react-icons/md'
import { ImBlocked } from 'react-icons/im'

export function DrawerHeaderComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} bg={'transparent'}>
        <Icon
          as={GiHamburgerMenu}
          w={7}
          h={7}
          color={'blackAlpha.800'}
          mx={2}
        />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent w="100%">
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/">
              <ChakraImage src={logoImage.src} w="16" h="16" />
            </Link>
          </DrawerHeader>

          <DrawerBody border="1px" borderColor={'red'}>
            <VStack spacing={0}>
              <Link href="/esports" w="100%">
                <Button
                  borderRadius={'0'}
                  bg="transparent"
                  _hover={{ bg: 'gray.100', fontWeight: 'bold' }}
                  w="100%"
                >
                  <Flex w="100%" justify={'flex-start'}>
                    <Icon as={MdGames} w="5" h="5" color={'gray.700'} />
                    <Text color={'gray.500'} ml="5">
                      Esports
                    </Text>
                  </Flex>
                </Button>
              </Link>

              <Link href="/esportes" w="100%">
                <Button
                  borderRadius={'0'}
                  bg="transparent"
                  _hover={{ bg: 'gray.100', fontWeight: 'bold' }}
                  w="100%"
                >
                  <Flex w="100%" justify={'flex-start'}>
                    <Icon as={IoMdFootball} w="5" h="5" color={'gray.700'} />
                    <Text color={'gray.500'} ml="5">
                      Esportes
                    </Text>
                  </Flex>
                </Button>
              </Link>

              <Link href="/secret" w="100%">
                <Button
                  borderRadius={'0'}
                  bg="transparent"
                  _hover={{ bg: 'gray.100', fontWeight: 'bold' }}
                  w="100%"
                >
                  <Flex w="100%" justify={'flex-start'}>
                    <Icon as={ImBlocked} w="5" h="5" color={'gray.700'} />
                    <Text color={'gray.500'} ml="5">
                      SECRET
                    </Text>
                  </Flex>
                </Button>
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
