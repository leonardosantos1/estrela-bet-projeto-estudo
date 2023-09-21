import { Flex, HStack, Image as ChakraImage, Stack } from '@chakra-ui/react'
import logoLogo from '../../public/bet-2.svg'

import { TabsBetsComponent } from '@/components/TabsBetsComponent'

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
            <TabsBetsComponent />
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
