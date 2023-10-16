import {
  Button,
  HStack,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image as ChakraImage,
  Box,
  SimpleGrid,
  VStack,
  MenuGroup,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoMdFootball } from 'react-icons/io'
import { MdGames } from 'react-icons/md'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import csgoLogo from '../../../public/csgo-logo.svg'
import lolLogo from '../../../public/lol-logo.svg'
import dota2Logo from '../../../public/dota2-logo.svg'
import valorantLogo from '../../../public/valorant-logo.svg'
import raibowSixLogo from '../../../public/rainbow-six-logo.svg'
import freeFireLogo from '../../../public/free-fire-logo.svg'
import footballLogo from '../../../public/football-logo.png'
import basketballLogo from '../../../public/basketball-logo.png'
import tennisLogo from '../../../public/tennis-logo.png'
import mblLogo from '../../../public/mbl-logo.png'
import volleyballLogo from '../../../public/volleyball-logo.png'
import baseballLogo from '../../../public/baseball-logo.png'

export function ButtonsHeader() {
  return (
    <HStack spacing={'5'} justify={'center'} align={'center'} mx="5">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              borderRadius={'0'}
              bg="transparent"
              _hover={{ bg: 'transparent', fontWeight: 'bold' }}
              w={'32'}
              h="8vh"
              _focus={{ boxShadow: 'none' }}
              _active={{ bg: 'transparent', fontWeight: 'bold' }}
            >
              <HStack spacing={1}>
                <Icon as={MdGames} w="5" h="5" color={'gray.700'} />

                <Text color={'gray.500'}>Esports</Text>
                {isOpen ? (
                  <Flex justify={'center'} align={'flex-end'} mt="2">
                    <Icon as={BsChevronUp} w="3" />
                  </Flex>
                ) : (
                  <Flex justify={'center'} align={'flex-end'} mt="2">
                    <Icon as={BsChevronDown} w="3" />
                  </Flex>
                )}
              </HStack>
            </MenuButton>

            <MenuList p={0} borderRadius={0}>
              <MenuGroup
                title="APOSTAS EM ESPORTS"
                color={'#ffbb00'}
                fontWeight={'bold'}
                fontStyle={'italic'}
                fontSize={'1.125rem'}
              >
                <SimpleGrid columns={3}>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft={'1px'}
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={csgoLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.8rem'} fontStyle={'italic'}>
                          CSGO
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #53b2ffd6 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={lolLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.8rem'} fontStyle={'italic'}>
                          LoL
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft={'1px'}
                      borderRight={'1px'}
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ff9900cf 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={freeFireLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.8rem'} fontStyle={'italic'}>
                          Free fire
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderLeft="1px"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #7a7a7ace 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage
                          src={raibowSixLogo.src}
                          w="3rem"
                          h="3rem"
                        />
                        <Text fontSize={'0.9rem'} fontStyle={'italic'}>
                          R6
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderBottom={'1px'}
                      borderTop="1px"
                      borderLeft="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ff5252d6 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={valorantLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.8rem'} fontStyle={'italic'}>
                          Valorant
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      border="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #de3140b3 100%)',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={dota2Logo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.8rem'} fontStyle={'italic'}>
                          Dota 2
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                </SimpleGrid>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              borderRadius={'0'}
              bg="transparent"
              _hover={{ bg: 'transparent', fontWeight: 'bold' }}
              w={'32'}
              h="8vh"
              _focus={{ boxShadow: 'none' }}
              _active={{ bg: 'transparent', fontWeight: 'bold' }}
            >
              <HStack spacing={1}>
                <Icon as={IoMdFootball} w="5" h="5" color={'gray.700'} />
                <Text color={'gray.500'}>Esportes</Text>
                {isOpen ? (
                  <Flex justify={'center'} align={'flex-end'} mt="2">
                    <Icon as={BsChevronUp} w="3" />
                  </Flex>
                ) : (
                  <Flex justify={'center'} align={'flex-end'} mt="2">
                    <Icon as={BsChevronDown} w="3" />
                  </Flex>
                )}
              </HStack>
            </MenuButton>

            <MenuList p={0} borderRadius={0}>
              <MenuGroup
                title="APOSTAS ESPORTIVAS"
                color={'#00e0c2'}
                fontWeight={'bold'}
                fontStyle={'italic'}
                fontSize={'1.125rem'}
              >
                <SimpleGrid columns={3}>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft={'1px'}
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #747474d3 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={footballLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          FUTEBOL
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FF754C 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage
                          src={basketballLogo.src}
                          w="3rem"
                          h="3rem"
                        />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          BASQUETE
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderTop="1px"
                      borderLeft={'1px'}
                      borderRight={'1px'}
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #D6BCB8 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={baseballLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          BASEBOL
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderLeft="1px"
                      borderTop="1px"
                      borderBottom="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFC107 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage
                          src={volleyballLogo.src}
                          w="3rem"
                          h="3rem"
                        />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          VOLEI
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      borderBottom={'1px'}
                      borderTop="1px"
                      borderLeft="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #5EC08F 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={tennisLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          TENIS
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                  <MenuItem p={0}>
                    <Box
                      border="1px"
                      borderColor={'gray.100'}
                      _hover={{
                        background:
                          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #7A3D38 100%)',
                        color: 'white',
                      }}
                      height="6rem"
                      w={'6rem'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <VStack spacing={0}>
                        <ChakraImage src={mblLogo.src} w="3rem" h="3rem" />
                        <Text fontSize={'0.6rem'} fontWeight={'bold'}>
                          MLB
                        </Text>
                      </VStack>
                    </Box>
                  </MenuItem>
                </SimpleGrid>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
      <Link href="/concurso">
        <Button
          w={'32'}
          h="8vh"
          borderRadius={'0'}
          bg="transparent"
          _hover={{ bg: 'transparent', fontWeight: 'bold' }}
        >
          <HStack spacing={1}>
            <Text color={'gray.500'}>Concurso</Text>
          </HStack>
        </Button>
      </Link>
      <Link href="/noticia">
        <Button
          w={'32'}
          h="8vh"
          borderRadius={'0'}
          bg="transparent"
          _hover={{ bg: 'transparent', fontWeight: 'bold' }}
        >
          <HStack spacing={1}>
            <Text color={'gray.500'}>Notícia</Text>
          </HStack>
        </Button>
      </Link>
      <HStack>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                w={'32'}
                h="8vh"
                borderRadius={'0'}
                bg="transparent"
                _hover={{ bg: 'transparent', fontWeight: 'bold' }}
                color={'gray.500'}
                _focus={{ boxShadow: 'none' }}
                _active={{ bg: 'transparent', fontWeight: 'bold' }}
              >
                <HStack>
                  <Text>Ajuda</Text>

                  {isOpen ? (
                    <Flex justify={'center'} align={'flex-end'} mt="2">
                      <Icon as={BsChevronUp} w="3" />
                    </Flex>
                  ) : (
                    <Flex justify={'center'} align={'flex-end'} mt="2">
                      <Icon as={BsChevronDown} w="3" />
                    </Flex>
                  )}
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem color={'gray.500'} fontWeight="bold">
                  FAQ
                </MenuItem>
                <MenuItem color={'gray.500'} fontWeight="bold">
                  Contate o Suporte
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </HStack>
    </HStack>
  )
}
