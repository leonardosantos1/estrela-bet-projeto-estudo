import {
  Flex,
  HStack,
  Image as ChakraImage,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from '@chakra-ui/react'
import logoLogo from '../../public/bet-2.svg'

import csgoLogo from '../../public/csgo-logo.svg'
import lolLogo from '../../public/lol-logo.svg'
import dota2Logo from '../../public/dota2-logo.svg'
import valorantLogo from '../../public/valorant-logo.svg'
import raibowSixLogo from '../../public/rainbow-six-logo.svg'
import freeFireLogo from '../../public/free-fire-logo.svg'

import { TabPanelComponent } from '@/components/TabPanelComponent'
import { BetsArray } from '../utils/BetsArray'

const bets = new BetsArray()

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
                    <TabPanelComponent
                      label="CSGO"
                      bets={bets.betsCSGO}
                      amountGame={500}
                    />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex w="full" h="100%">
                    <TabPanelComponent
                      label="LOL"
                      bets={bets.betsLOL}
                      amountGame={132}
                    />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <TabPanelComponent
                    label="FF"
                    bets={bets.betsFF}
                    amountGame={345}
                  />
                </TabPanel>
                <TabPanel>
                  <TabPanelComponent
                    label="R6"
                    bets={bets.betsR6}
                    amountGame={65}
                  />
                </TabPanel>
                <TabPanel>
                  <TabPanelComponent
                    label="Valorant"
                    bets={bets.betsValorant}
                    amountGame={278}
                  />
                </TabPanel>
                <TabPanel>
                  <TabPanelComponent
                    label="Dota 2"
                    bets={bets.betsDota2}
                    amountGame={412}
                  />
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
