import {
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Image as ChakraImage,
  Icon,
} from '@chakra-ui/react'

import furiaLogo from '../../public/furia-logo.svg'
import imperialLogo from '../../public/imperial-logo.svg'
import naviLogo from '../../public/navi-logo.svg'
import fazeLogo from '../../public/faze-logo.svg'
import fnaticLogo from '../../public/fnatic-logo.svg'
import liquidLogo from '../../public/liquid-logo.svg'
import heroicLogo from '../../public/heroic-logo.svg'
import skGamingLogo from '../../public/sk-gaming-logo.svg'
import glLogo from '../../public/gl-logo.svg'
import spiritLogo from '../../public/spirit-logo.svg'

import { AiOutlineArrowRight } from 'react-icons/ai'

export function TabPanelComponent() {
  return (
    <Flex w="full" h="100%">
      <VStack w="full" h="full">
        <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
          CSGO
        </Text>
        <HStack
          bg={'gray.200'}
          w={'100%'}
          justify={'space-between'}
          borderRadius={8}
        >
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <HStack spacing={0} justify={'flex-start'} w="100%" h="100%">
                <ChakraImage src={furiaLogo.src} w="10" h="10" />
                <Text fontSize={'0.8rem'}>FURIA</Text>
              </HStack>

              <Text fontSize={'1rem'}>1.02</Text>
            </HStack>
          </Button>
          <Text>VS</Text>
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <Text fontSize={'1rem'}>1.50</Text>

              <HStack spacing={0.5} justify={'flex-end'} w="100%" h="100%">
                <Text fontSize={'0.9rem'}>Imperial</Text>
                <ChakraImage src={imperialLogo.src} w="8" h="8" />
              </HStack>
            </HStack>
          </Button>
        </HStack>
        <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
          CSGO
        </Text>
        <HStack
          bg={'gray.200'}
          w={'100%'}
          justify={'space-between'}
          borderRadius={8}
        >
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <HStack spacing={0.5} justify={'flex-start'} w="100%" h="100%">
                <ChakraImage src={naviLogo.src} w="8" h="8" />

                <Text fontSize={'0.8rem'}>Natus Vincere</Text>
              </HStack>
              <Text fontSize={'1rem'}>1.24</Text>
            </HStack>
          </Button>
          <Text>VS</Text>
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <Text fontSize={'1rem'}>1.50</Text>

              <HStack spacing={0.5} justify={'flex-end'} w="100%" h="100%">
                <Text fontSize={'1rem'}>fnatic</Text>
                <ChakraImage
                  src={fnaticLogo.src}
                  w={{ base: '8', lg: '12' }}
                  h={{ base: '8', lg: '12' }}
                />
              </HStack>
            </HStack>
          </Button>
        </HStack>
        <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
          CSGO
        </Text>
        <HStack
          bg={'gray.200'}
          w={'100%'}
          justify={'space-between'}
          borderRadius={8}
        >
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <HStack spacing={0.5} justify={'flex-start'} w="100%" h="100%">
                <ChakraImage
                  src={heroicLogo.src}
                  w={{ base: '8', lg: '12' }}
                  h={{ base: '8', lg: '12' }}
                />

                <Text fontSize={'0.9rem'}>Heroic</Text>
              </HStack>
              <Text fontSize={'1rem'}>1.24</Text>
            </HStack>
          </Button>
          <Text>VS</Text>
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <Text fontSize={'1rem'}>1.50</Text>

              <HStack spacing={0.5} justify={'flex-end'} w="100%" h="100%">
                <Text fontSize={'0.9rem'}>Liquid</Text>
                <ChakraImage
                  src={liquidLogo.src}
                  w={{ base: '8', lg: '12' }}
                  h={{ base: '8', lg: '12' }}
                />
              </HStack>
            </HStack>
          </Button>
        </HStack>
        <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
          CSGO
        </Text>
        <HStack
          bg={'gray.200'}
          w={'100%'}
          justify={'space-between'}
          borderRadius={8}
        >
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <HStack spacing={0.5} justify={'flex-start'} w="100%" h="100%">
                <ChakraImage
                  src={fazeLogo.src}
                  w={{ base: '8', lg: '10' }}
                  h={{ base: '8', lg: '10' }}
                />

                <Text fontSize={'0.9rem'}>FaZe</Text>
              </HStack>
              <Text fontSize={'1rem'}>1.24</Text>
            </HStack>
          </Button>
          <Text>VS</Text>
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <Text fontSize={'1rem'}>1.50</Text>

              <HStack spacing={3} justify={'flex-end'} w="100%" h="100%">
                <Text fontSize={'0.9rem'}>SK Gaming</Text>
                <ChakraImage
                  src={skGamingLogo.src}
                  w={{ base: '6', lg: '6' }}
                  h={{ base: '6', lg: '6' }}
                />
              </HStack>
            </HStack>
          </Button>
        </HStack>
        <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
          CSGO
        </Text>
        <HStack
          bg={'gray.200'}
          w={'100%'}
          justify={'space-between'}
          borderRadius={8}
        >
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <HStack spacing={0.5} justify={'flex-start'} w="100%" h="100%">
                <ChakraImage src={glLogo.src} w="8" h="8" />
                <Text fontSize={'0.8rem'}>GamerLegion</Text>
              </HStack>

              <Text fontSize={'1rem'}>1.02</Text>
            </HStack>
          </Button>
          <Text>VS</Text>
          <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
            <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
              <Text fontSize={'1rem'}>1.50</Text>

              <HStack spacing={3} justify={'flex-end'} w="100%" h="100%">
                <Text fontSize={'0.9rem'}>Spirit</Text>
                <ChakraImage
                  src={spiritLogo.src}
                  w={{ base: '8', lg: '12' }}
                  h={{ base: '8', lg: '12' }}
                />
              </HStack>
            </HStack>
          </Button>
        </HStack>
        <Button
          fontStyle={'italic'}
          bg="transparent"
          mt={{ base: '2', lg: '1' }}
          _hover={{ bg: '#6385b1', color: 'white' }}
          size={{ base: 'md', lg: 'sm' }}
        >
          Acompanhe mais de 500 jogos de Esports
          <Icon as={AiOutlineArrowRight} mt="1" ml="2" />
        </Button>
      </VStack>
    </Flex>
  )
}
