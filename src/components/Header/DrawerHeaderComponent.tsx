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
  HStack,
  Box,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logoImage from '../../../public/bet-2.svg'
import { IoMdFootball } from 'react-icons/io'
import { MdGames } from 'react-icons/md'
import { ImBlocked } from 'react-icons/im'

import csgoLogo from '../../../public/csgo-logo.svg'
import lolLogo from '../../../public/lol-logo.svg'
import dota2Logo from '../../../public/dota2-logo.svg'
import valorantLogo from '../../../public/valorant-logo.svg'
import rainbowSixLogo from '../../../public/rainbow-six-logo.svg'
import freeFireLogo from '../../../public/free-fire-logo.svg'
import footballLogo from '../../../public/football-logo.png'
import basketballLogo from '../../../public/basketball-logo.png'
import tennisLogo from '../../../public/tennis-logo.png'
import mblLogo from '../../../public/mbl-logo.png'
import volleyballLogo from '../../../public/volleyball-logo.png'
import baseballLogo from '../../../public/baseball-logo.png'

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
          <DrawerBody p={0}>
            <HStack spacing={'0'} p={0}>
              <VStack
                spacing={0}
                p={0}
                overflowY="visible"
                overflowX={'hidden'}
              >
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={lolLogo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={csgoLogo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={rainbowSixLogo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={valorantLogo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={dota2Logo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={freeFireLogo.src} w="100%" h="100%" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={footballLogo.src} w="10" h="10" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={baseballLogo.src} w="10" h="10" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={basketballLogo.src} w="10" h="10" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={volleyballLogo.src} w="8" h="8" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={mblLogo.src} w="10" h="10" />
                </Button>
                <Button w={'4rem'} h={'4rem'} bg={'transparent'}>
                  <ChakraImage src={tennisLogo.src} w="10" h="10" />
                </Button>
              </VStack>

              <Flex
                align={'flex-start'}
                justify={'flex-start'}
                w={'100%'}
                h="100%"
                mb="auto"
                overflowX="auto"
              >
                <VStack w="100%">
                  <Flex
                    justify={'flex-start'}
                    align={'center'}
                    w="100%"
                    mt="8"
                    background="gray.200"
                    h={'3rem'}
                  >
                    <Text fontWeight={'bold'} px={6} color={'#ffc400'}>
                      APOSTAS
                    </Text>
                  </Flex>
                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text px={2} textAlign={'left'} w="100%">
                      Esports
                    </Text>
                  </Button>
                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text px={2} textAlign={'left'} w="100%">
                      Esportes
                    </Text>
                  </Button>
                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text px={2} textAlign={'left'} w="100%">
                      Concurso
                    </Text>
                  </Button>
                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 70%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text px={2} textAlign={'left'} w="100%">
                      Notícia
                    </Text>
                  </Button>

                  <Flex
                    justify={'flex-start'}
                    align="center"
                    h={'3rem'}
                    background="gray.200"
                    w="100%"
                  >
                    <Text fontWeight={'bold'} px={6} color={'#ffc400'}>
                      AJUDA
                    </Text>
                  </Flex>

                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 70%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text
                      px={2}
                      textAlign={'left'}
                      w="100%"
                      fontSize={'0.95rem'}
                    >
                      FAQ
                    </Text>
                  </Button>
                  <Button
                    w={'100%'}
                    h={'3rem'}
                    bg={'transparent'}
                    borderRadius={0}
                    _hover={{
                      background:
                        'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #747474d3 70%)',
                      color: 'white',
                    }}
                    transition={'0.1s'}
                  >
                    <Text
                      px={2}
                      textAlign={'left'}
                      w="100%"
                      fontSize={'0.95rem'}
                    >
                      Contate o Suporte
                    </Text>
                  </Button>
                </VStack>
              </Flex>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
