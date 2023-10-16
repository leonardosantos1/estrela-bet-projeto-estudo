import {
  HStack,
  Text,
  Image as ChakraImage,
  VStack,
  Flex,
} from '@chakra-ui/react'
import partnerImage1 from '../../../public/logo-esports-1.png'
import partnerImage2 from '../../../public/logo-sports-2.png'
import partnerImage3 from '../../../public/logo-esports-3.png'

export function PartnersGuys() {
  return (
    <VStack w="100%" py="10">
      <Flex justify={'flex-start'} w="100%" pb="4">
        <Text color="#ffc400" fontSize={'0.95rem'} fontWeight={'bold'}>
          ORGULHOSAMENTE PARCEIROS DE:
        </Text>
      </Flex>
      <HStack w="100%" justify={'space-between'}>
        <ChakraImage src={partnerImage1.src} w="36" />
        <ChakraImage src={partnerImage2.src} w="36" />
        <ChakraImage src={partnerImage3.src} w="36" />
      </HStack>
    </VStack>
  )
}
