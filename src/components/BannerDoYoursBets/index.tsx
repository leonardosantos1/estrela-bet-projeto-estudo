import {
  Image as ChakraImage,
  Text,
  VStack,
  Button,
  Flex,
  Stack,
} from '@chakra-ui/react'
import imageRandomEstrelBets from '../../../public/image-estrela-bets.png'

export function BannerDoYoursBets() {
  return (
    <Stack
      spacing={24}
      direction={['column', 'column', 'column', 'row']}
      py="40"
    >
      <ChakraImage src={imageRandomEstrelBets.src} w="30rem" h="30rem" />
      <VStack spacing={0} justify={'flex-start'} my={'6'}>
        <Text
          fontSize={'4.5rem'}
          letterSpacing={'-3px'}
          lineHeight={'1'}
          color={'#ffc400'}
          w="100%"
          h="auto"
          fontFamily={'Russo One'}
        >
          APOSTE EM
        </Text>
        <Text
          fontSize={'4.5rem'}
          lineHeight={'0.7'}
          letterSpacing={'-3px'}
          color={'#ffc400'}
          w="100%"
          h="auto"
          fontFamily={'Russo One'}
        >
          ESPORTS.
        </Text>
        <Text
          fontSize={'4.5rem'}
          letterSpacing={'-3px'}
          w="100%"
          h="auto"
          lineHeight={'1'}
          fontFamily={'Russo One'}
        >
          APOSTE NA
        </Text>
        <Text
          fontSize={'4.5rem'}
          letterSpacing={'-3px'}
          w="100%"
          h="auto"
          lineHeight={'0.7'}
          fontFamily={'Russo One'}
        >
          ESTRELO BETS
        </Text>
        <VStack w="100%" justify={'flex-start'} mt="4">
          <Text w="100%" m="2" color={'white'} fontSize={'1.1rem'}>
            Querendo apostar em esports? Achou teu lugar!
          </Text>
          <Flex w={'100%'}>
            <Button
              bg="#fdd523"
              color={'white'}
              _hover={{ bg: '#ffc400' }}
              m="2"
            >
              VAMOS LÁ
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </Stack>
  )
}
