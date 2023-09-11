import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image as ChakraImage,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  VStack,
  Input,
  Icon,
  Text,
  Center,
  Checkbox,
} from '@chakra-ui/react'
import { BiLogoTwitter, BiLogoFacebook } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { BsSteam, BsTwitch } from 'react-icons/bs'

import logoSvg from '../../../public/bet-2.svg'
interface ModalLoginProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent={'center'}>
            <ChakraImage src={logoSvg.src} w="24" h="24" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs align="center" borderColor={'transparent'}>
              <TabList>
                <HStack spacing={8}>
                  <Tab>Registre-se</Tab>
                  <Tab>Login</Tab>
                </HStack>
              </TabList>

              <TabPanels>
                <TabPanel h="12rem">
                  <VStack w="90%" justify={'flex-start'}>
                    <Input placeholder="Email" w="100%" h="3rem" />
                    <HStack w="100%">
                      <Input
                        placeholder="Criar senha"
                        w="84%"
                        h="3rem"
                        type="password"
                      />
                      <Button
                        bg={'gray.500'}
                        color={'white'}
                        _hover={{ bg: 'gray.700' }}
                        w="16%"
                        h="3rem"
                      >
                        IR
                      </Button>
                    </HStack>
                  </VStack>
                </TabPanel>
                <TabPanel h="12rem">
                  <VStack w="90%" justify={'flex-start'}>
                    <Input placeholder="Email" w="100%" h="3rem" />
                    <HStack w="100%">
                      <Input
                        placeholder="Senha"
                        w="84%"
                        h="3rem"
                        type="password"
                      />
                      <Button
                        bg={'gray.500'}
                        color={'white'}
                        _hover={{ bg: 'gray.700' }}
                        w="16%"
                        h="3rem"
                      >
                        IR
                      </Button>
                    </HStack>
                    <HStack justify={'space-between'} w="100%">
                      <Checkbox size="md">Lembre-me</Checkbox>
                      <Text
                        fontSize={'0.8rem'}
                        color={'blackAlpha.900'}
                        _hover={{
                          cursor: 'pointer',
                          opacity: '0.6',
                        }}
                      >
                        Esqueci minha senha
                      </Text>
                    </HStack>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <VStack justify={'center'} mb="8">
              <Text>Utilize também para logar ou registrar-se:</Text>
              <HStack justify={'center'} spacing={5}>
                <Button
                  borderRadius={'100%'}
                  w={10}
                  bg={'#00aeff'}
                  color={'white'}
                  _hover={{ transform: 'scale(1.05)', opacity: '0.9' }}
                >
                  <Icon as={BiLogoTwitter} w="6" h="6" />
                </Button>
                <Button
                  borderRadius={'100%'}
                  w={10}
                  boxShadow="base"
                  _hover={{
                    transform: 'scale(1.05)',
                    opacity: '0.9',
                  }}
                  bg={'#fff'}
                >
                  <Icon as={FcGoogle} w="6" h="6" />
                </Button>
                <Button
                  borderRadius={'100%'}
                  w={10}
                  bg={'#004db3'}
                  color={'white'}
                  _hover={{ transform: 'scale(1.05)', opacity: '0.9' }}
                >
                  <Icon as={BiLogoFacebook} w="7" h="7" />
                </Button>
                <Button
                  borderRadius={'100%'}
                  w={10}
                  bg={'#000'}
                  color={'white'}
                  _hover={{ transform: 'scale(1.05)', opacity: '0.9' }}
                >
                  <Icon as={BsSteam} w="6" h="6" />
                </Button>
                <Button
                  borderRadius={'100%'}
                  w={10}
                  bg={'#7d3fa1'}
                  color={'white'}
                  _hover={{ transform: 'scale(1.05)', opacity: '0.9' }}
                >
                  <Icon as={BsTwitch} w="6" h="6" />
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
