import {
  Flex,
  HStack,
  Image as ChakraImage,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Button,
  VStack,
  Stack,
  Icon,
  Avatar,
  Card,
  CardBody,
  Heading,
  Divider,
} from '@chakra-ui/react'
import logoLogo from '../../public/bet-2.svg'

import csgoLogo from '../../public/csgo-logo.svg'
import lolLogo from '../../public/lol-logo.svg'
import dota2Logo from '../../public/dota2-logo.svg'
import valorantLogo from '../../public/valorant-logo.svg'
import raibowSixLogo from '../../public/rainbow-six-logo.svg'
import freeFireLogo from '../../public/free-fire-logo.svg'
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

export default function Home() {
  return (
    <Flex w="full" h="90vh" mt={'8vh'}>
      <Flex w="full" maxW={'1280px'} mx="auto" wrap={'wrap'}>
        <Flex justify={'center'} align={'flex-start'} w={'full'} mt="8">
          <Stack
            direction={['column', 'column', 'column', 'row']}
            w="full"
            justify={'center'}
          >
            <ChakraImage src={logoLogo.src} w="32rem" h="32rem" />
            <Tabs
              h={['28rem', '30.2rem', '32rem', '32rem']}
              bg={'blackAlpha.300'}
              w={['28rem', '30.2rem', '32rem', '32rem']}
              borderRadius={'8'}
              boxShadow={'base'}
            >
              <TabList w={'100%'} justifyContent={'space-between'}>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                  }}
                >
                  <ChakraImage src={csgoLogo.src} w="3rem" h="3rem" />
                </Tab>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #53b2ffd6 100%)',
                  }}
                >
                  <ChakraImage src={lolLogo.src} w="3rem" h="3rem" />
                </Tab>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ff9900cf 100%)',
                  }}
                >
                  <ChakraImage src={freeFireLogo.src} w="3rem" h="3rem" />
                </Tab>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #7a7a7ace 100%)',
                  }}
                >
                  <ChakraImage src={raibowSixLogo.src} w="3rem" h="3rem" />
                </Tab>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ff5252d6 100%)',
                  }}
                >
                  <ChakraImage src={valorantLogo.src} w="3rem" h="3rem" />
                </Tab>
                <Tab
                  _selected={{
                    background:
                      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #de3140b3 100%)',
                  }}
                >
                  <ChakraImage src={dota2Logo.src} w="3rem" h="3rem" />
                </Tab>
              </TabList>

              <TabPanels w="32rem" h="29.375rem">
                <TabPanel>
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <ChakraImage src={furiaLogo.src} w="10" h="10" />
                              <Text fontSize={'0.8rem'}>FURIA</Text>
                            </HStack>

                            <Text fontSize={'1rem'}>1.02</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={0.5}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0.5}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <ChakraImage src={naviLogo.src} w="8" h="8" />

                              <Text fontSize={'0.8rem'}>Natus Vincere</Text>
                            </HStack>
                            <Text fontSize={'1rem'}>1.24</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={0.5}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0.5}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={0.5}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0.5}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={3}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
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
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0.5}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <ChakraImage src={glLogo.src} w="8" h="8" />
                              <Text fontSize={'0.8rem'}>GamerLegion</Text>
                            </HStack>

                            <Text fontSize={'1rem'}>1.02</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={3}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
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
                </TabPanel>
                <TabPanel>
                  <Flex w="full" h="100%">
                    <VStack w="full" h="full">
                      <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
                        LOL
                      </Text>
                      <HStack
                        bg={'gray.200'}
                        w={'100%'}
                        justify={'space-between'}
                        borderRadius={8}
                      >
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={1}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <Avatar name="G 2" w="8" h="8" bg={'black'} />

                              <Text fontSize={'0.8rem'}>G2</Text>
                            </HStack>

                            <Text fontSize={'1rem'}>1.02</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={1}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
                              <Text fontSize={'0.9rem'}>LOUD</Text>
                              <Avatar name="Lou d" w="8" h="8" />
                            </HStack>
                          </HStack>
                        </Button>
                      </HStack>
                      <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
                        LOL
                      </Text>
                      <HStack
                        bg={'gray.200'}
                        w={'100%'}
                        justify={'space-between'}
                        borderRadius={8}
                      >
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={1}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <Avatar name="Red Canids" w="8" h="8" />

                              <Text fontSize={'0.8rem'}>Red Kanids</Text>
                            </HStack>
                            <Text fontSize={'1rem'}>1.24</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={1}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
                              <Text fontSize={'1rem'}>Luminosity</Text>
                              <Avatar name="Lumin osity" w="8" h="8" />
                            </HStack>
                          </HStack>
                        </Button>
                      </HStack>
                      <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
                        LOL
                      </Text>
                      <HStack
                        bg={'gray.200'}
                        w={'100%'}
                        justify={'space-between'}
                        borderRadius={8}
                      >
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={1}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <Avatar name="TS M" w="8" h="8" color={'white'} />

                              <Text fontSize={'0.9rem'}>TSM</Text>
                            </HStack>
                            <Text fontSize={'1rem'}>1.24</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={0.5}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
                              <Text fontSize={'0.9rem'}>Liquid</Text>
                              <Avatar name="Liquid D" w="8" h="8" />
                            </HStack>
                          </HStack>
                        </Button>
                      </HStack>
                      <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
                        LOL
                      </Text>
                      <HStack
                        bg={'gray.200'}
                        w={'100%'}
                        justify={'space-between'}
                        borderRadius={8}
                      >
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={1}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <Avatar
                                name="OptiC Gaming"
                                w="8"
                                h="8"
                                color={'white'}
                              />

                              <Text fontSize={'0.8rem'}>OptiC Gaming</Text>
                            </HStack>
                            <Text fontSize={'1rem'}>1.24</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={2}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
                              <Text fontSize={'0.85rem'}>SK Gaming</Text>
                              <Avatar name="S K" w="8" h="8" />
                            </HStack>
                          </HStack>
                        </Button>
                      </HStack>
                      <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
                        LOL
                      </Text>
                      <HStack
                        bg={'gray.200'}
                        w={'100%'}
                        justify={'space-between'}
                        borderRadius={8}
                      >
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <HStack
                              spacing={0.5}
                              justify={'flex-start'}
                              w="100%"
                              h="100%"
                            >
                              <Avatar name="G O" w="8" h="8" />
                              <Text fontSize={'0.8rem'}>GO</Text>
                            </HStack>

                            <Text fontSize={'1rem'}>1.02</Text>
                          </HStack>
                        </Button>
                        <Text>VS</Text>
                        <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                          <HStack
                            spacing={0}
                            justify={'space-between'}
                            w="100%"
                            h="100%"
                          >
                            <Text fontSize={'1rem'}>1.50</Text>

                            <HStack
                              spacing={1}
                              justify={'flex-end'}
                              w="100%"
                              h="100%"
                            >
                              <Text fontSize={'0.8rem'}>Movistar Riders </Text>
                              <Avatar name="Movistar Riders" w="8" h="8" />
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
                        <Text>Acompanhe mais de 132 jogos de Esports </Text>

                        <Icon as={AiOutlineArrowRight} mt="1" ml="2" />
                      </Button>
                    </VStack>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Flex>
        <Flex w={'100%'} h="auto">
          <HStack mt="4" w={'100%'} h="100%" spacing={16} justify={'center'}>
            {/* <Card
              w="320px"
              h="300px"
              _hover={{ transform: 'scale(1.05)' }}
              transition={'0.3s'}
            >
              <CardBody p="0">
                <VStack>
                  <ChakraImage
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    w={'100%'}
                    h="10rem"
                    borderRadius={'4'}
                  />
                  <Divider />
                </VStack>

                <Stack spacing="3" m="5">
                  <Heading size="md">Living room Sofa</Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="320px"
              h="300px"
              _hover={{ transform: 'scale(1.05)' }}
              transition={'0.3s'}
            >
              <CardBody p="0">
                <VStack>
                  <ChakraImage
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    w={'100%'}
                    h="10rem"
                    borderRadius={'4'}
                  />
                  <Divider />
                </VStack>

                <Stack spacing="3" m="5">
                  <Heading size="md">Living room Sofa</Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card
              w="320px"
              h="300px"
              _hover={{ transform: 'scale(1.05)' }}
              transition={'0.3s'}
            >
              <CardBody p="0">
                <VStack>
                  <ChakraImage
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    w={'100%'}
                    h="10rem"
                    borderRadius={'4'}
                  />
                  <Divider />
                </VStack>

                <Stack spacing="3" m="5">
                  <Heading size="md">Living room Sofa</Heading>
                </Stack>
              </CardBody>
            </Card> */}
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
