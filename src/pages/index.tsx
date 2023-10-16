import {
  Flex,
  HStack,
  Image as ChakraImage,
  Stack,
  Card,
  CardBody,
  VStack,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react'
import logoLogo from '../../public/bet-2.svg'
import esportsNewsImage1 from '../../public/esports-news-image1.png'
import esportsNewsImage2 from '../../public/esports-news-image2.png'
import esportsNewsImage3 from '../../public/esports-news-image3.png'

import { TabsBetsComponent } from '@/components/TabsBetsComponent'
import { Footer } from '@/components/Footer'
import { PartnersGuys } from '@/components/PartnersGuys'
import { BannerDoYoursBets } from '@/components/BannerDoYoursBets'

export default function Home() {
  return (
    <Flex w="full" h="90vh" mt={'8vh'}>
      <VStack w="full" spacing={0}>
        <Flex w="full" maxW={'1280px'} mx="auto" wrap={'wrap'}>
          <Flex justify={'center'} align={'flex-start'} w={'full'} my="8">
            <Stack
              direction={['column', 'column', 'column', 'row']}
              w="full"
              justify={'center'}
              align={'center'}
            >
              <ChakraImage src={logoLogo.src} w="32rem" h="32rem" />
              <TabsBetsComponent />
            </Stack>
          </Flex>
        </Flex>

        <Flex w={'100%'} h="auto" bg={'gray.800'}>
          <Stack
            py="4"
            w={'100%'}
            h="100%"
            spacing={16}
            justify={'center'}
            direction={['column', 'column', 'column', 'row']}
          >
            <Card
              w="400px"
              h="300px"
              _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
              transition={'0.3s'}
              flexWrap={'wrap'}
              borderRadius={'2'}
              mx={{
                base: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: '0',
                xl: '0',
                '2xl': '0',
              }}
            >
              <CardBody p="0" w={'full'}>
                <VStack>
                  <ChakraImage
                    src={esportsNewsImage1.src}
                    alt="Green double couch with wooden legs"
                    w="400px"
                    h="200px"
                  />
                  <Divider />
                </VStack>

                <Stack
                  spacing="2"
                  p="3"
                  flexWrap={'wrap'}
                  w={'full'}
                  maxHeight="200px"
                >
                  <Heading
                    size="md"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ESTRELO BETS: Noticia Estrelo Bets 1
                  </Heading>
                  <Text
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    por Leonardo dos Santos
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="400px"
              h="300px"
              _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
              transition={'0.3s'}
              borderRadius={'2'}
              mx={{
                base: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: '0',
                xl: '0',
                '2xl': '0',
              }}
            >
              <CardBody p="0">
                <VStack>
                  <ChakraImage
                    src={esportsNewsImage2.src}
                    alt="Green double couch with wooden legs"
                    w="400px"
                    h="200px"
                  />
                  <Divider />
                </VStack>

                <Stack spacing="2" m="3">
                  <Heading size="md">
                    ESTRELO BETS: Noticia Estrelo Bets 2
                  </Heading>
                  <Text>por Leonardo dos Santos</Text>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="400px"
              h="300px"
              _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
              transition={'0.3s'}
              borderRadius={'2'}
              mx={{
                base: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: '0',
                xl: '0',
                '2xl': '0',
              }}
            >
              <CardBody p="0">
                <VStack>
                  <ChakraImage
                    src={esportsNewsImage3.src}
                    alt="Green double couch with wooden legs"
                    w="400px"
                    h="200px"
                  />
                  <Divider />
                </VStack>

                <Stack spacing="2" m="3">
                  <Heading size="md">
                    ESTRELO BETS: Noticia Estrelo Bets 3
                  </Heading>
                  <Text>por Leonardo dos Santos</Text>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </Flex>
        <Flex
          bg={
            'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #777474 100%)'
          }
          w="100%"
        >
          <Flex w="100%" h="auto" mx="auto" maxW={'1280px'} justify={'center'}>
            <BannerDoYoursBets />
          </Flex>
        </Flex>

        <Flex bg={'#2b2a2a'} w="100%" border={'1px'} borderTopColor={'black'}>
          <Flex w="100%" h="auto" mx="auto" maxW={'1180px'}>
            <PartnersGuys />
          </Flex>
        </Flex>

        <Flex w={'100%'} h="auto" bg={'blackAlpha.700'}>
          <Footer />
        </Flex>
      </VStack>
    </Flex>
  )
}
