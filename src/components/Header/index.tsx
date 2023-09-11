import {
  HStack,
  Image as ChakraImage,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import logoImage from '../../../public/bet-2.svg'
import Link from 'next/link'
import { DrawerHeaderComponent } from './DrawerHeaderComponent'
import { ButtonsHeader } from './ButtonsHeader'
import { useState } from 'react'
import { ModalLogin } from '../Login/ModalLogin'
export function Header() {
  const isNotWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <HStack
      w="full"
      h="8vh"
      justify={'space-between'}
      px="4"
      boxShadow={'base'}
      position="fixed"
      top="0"
      zIndex="3"
      bg={'white'}
    >
      <HStack spacing={2}>
        {isNotWideVersion ? (
          <>
            <DrawerHeaderComponent />
            <Link href="/">
              <ChakraImage src={logoImage.src} w="16" h="8vh" />
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <ChakraImage src={logoImage.src} w="16" h="8vh" />
            </Link>
            <ButtonsHeader />
          </>
        )}
      </HStack>
      <HStack>
        <Button
          transition={'0.2s'}
          bg="transparent"
          _hover={{ bg: 'transparent', textDecoration: 'underline' }}
          onClick={openModal}
        >
          LOGIN
        </Button>
        <ModalLogin isOpen={isOpen} onClose={closeModal} />
        <Button
          bg={'blackAlpha.800'}
          color={'white'}
          _hover={{ bg: 'blackAlpha.700' }}
          transition={'0.2s'}
        >
          REGISTER
        </Button>
      </HStack>
    </HStack>
  )
}
