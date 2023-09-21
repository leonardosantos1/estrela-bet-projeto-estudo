import {
  TabList,
  Image as ChakraImage,
  TabPanels,
  TabPanel,
  Flex,
  Tabs,
} from '@chakra-ui/react'
import { TabListCustomComponent } from './TabListCustomComponent'
import { TabPanelComponent } from './TabPanelComponent'
import { BetsArray } from '@/utils/BetsArray'

import csgoLogo from '../../../public/csgo-logo.svg'
import lolLogo from '../../../public/lol-logo.svg'
import dota2Logo from '../../../public/dota2-logo.svg'
import valorantLogo from '../../../public/valorant-logo.svg'
import raibowSixLogo from '../../../public/rainbow-six-logo.svg'
import freeFireLogo from '../../../public/free-fire-logo.svg'

const bets = new BetsArray()

export function TabsBetsComponent() {
  return (
    <Tabs
      h={['28rem', '30.2rem', '32rem', '32rem']}
      bg={'blackAlpha.300'}
      w={['28rem', '30.2rem', '32rem', '32rem']}
      borderRadius={'8'}
      boxShadow={'base'}
    >
      <TabList w={'100%'} justifyContent={'space-between'}>
        <TabListCustomComponent bgColor="#747474d3">
          <ChakraImage src={csgoLogo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
        <TabListCustomComponent bgColor="#53b2ffd6">
          <ChakraImage src={lolLogo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
        <TabListCustomComponent bgColor="#ff9900cf">
          <ChakraImage src={freeFireLogo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
        <TabListCustomComponent bgColor="#7a7a7ace">
          <ChakraImage src={raibowSixLogo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
        <TabListCustomComponent bgColor="#ff5252d6">
          <ChakraImage src={valorantLogo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
        <TabListCustomComponent bgColor="#de3140b3">
          <ChakraImage src={dota2Logo.src} w="3rem" h="3rem" />
        </TabListCustomComponent>
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
          <TabPanelComponent label="FF" bets={bets.betsFF} amountGame={345} />
        </TabPanel>
        <TabPanel>
          <TabPanelComponent label="R6" bets={bets.betsR6} amountGame={65} />
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
  )
}
