import {
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Image as ChakraImage,
  Icon,
  Avatar,
} from '@chakra-ui/react'

import { AiOutlineArrowRight } from 'react-icons/ai'

interface Bets {
  opponentRight: string
  opponentLeft: string
  oddLeft: string
  oddRight: string
  imgOpponentRight: string
  imgOpponentLeft: string
  wLeft: { base: string; lg: string }
  hLeft: { base: string; lg: string }
  wRight: { base: string; lg: string }
  hRight: { base: string; lg: string }
  avatarOpponentRight?: string
  avatarOpponentLeft?: string
}

interface TabPanelComponentProps {
  label: string
  bets: Bets[]
  amountGame: number
}

export function TabPanelComponent({
  label,
  bets,
  amountGame,
}: TabPanelComponentProps) {
  return (
    <Flex w="full" h="100%">
      <VStack w="full" h="full">
        {bets.map((bet) => (
          <>
            <Text textAlign={'left'} w={'100%'} fontSize={'0.55rem'}>
              {label}
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
                    {bet.imgOpponentLeft.length > 0 ? (
                      <ChakraImage
                        src={bet.imgOpponentLeft}
                        w={{
                          base: bet.wLeft.base,
                          lg: bet.wLeft.lg,
                        }}
                        h={{
                          base: bet.hLeft.base,
                          lg: bet.hLeft.lg,
                        }}
                      />
                    ) : (
                      <Avatar
                        name={
                          bet.avatarOpponentLeft
                            ? bet.avatarOpponentLeft
                            : 'Opponent Left'
                        }
                        w="8"
                        h="8"
                        bg={'green'}
                        color={'white'}
                      />
                    )}
                    <Text fontSize={'0.8rem'} pl="1">
                      {bet.opponentLeft}
                    </Text>
                  </HStack>

                  <Text fontSize={'1rem'}>{bet.oddLeft}</Text>
                </HStack>
              </Button>
              <Text>VS</Text>
              <Button w="13rem" h={{ base: '2.5rem', lg: '3rem' }}>
                <HStack spacing={0} justify={'space-between'} w="100%" h="100%">
                  <Text fontSize={'1rem'}>{bet.oddRight}</Text>

                  <HStack spacing={0.5} justify={'flex-end'} w="100%" h="100%">
                    <Text fontSize={'0.8rem'} pr="1">
                      {bet.opponentRight}
                    </Text>
                    {bet.imgOpponentRight.length > 0 ? (
                      <ChakraImage
                        src={bet.imgOpponentRight}
                        w={{
                          base: bet.wRight.base,
                          lg: bet.wRight.lg,
                        }}
                        h={{
                          base: bet.hRight.base,
                          lg: bet.hRight.lg,
                        }}
                      />
                    ) : (
                      <Avatar
                        name={
                          bet.avatarOpponentRight
                            ? bet.avatarOpponentRight
                            : 'Opponent Right'
                        }
                        w="8"
                        h="8"
                      />
                    )}
                  </HStack>
                </HStack>
              </Button>
            </HStack>
          </>
        ))}
        <Button
          fontStyle={'italic'}
          bg="transparent"
          mt={{ base: '2', lg: '1' }}
          _hover={{ bg: '#6385b1', color: 'white' }}
          size={{ base: 'md', lg: 'sm' }}
        >
          Acompanhe mais de {amountGame} jogos de Esports
          <Icon as={AiOutlineArrowRight} mt="1" ml="2" />
        </Button>
      </VStack>
    </Flex>
  )
}
