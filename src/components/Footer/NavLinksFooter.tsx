import { Text, Heading, VStack, Flex } from '@chakra-ui/react'

interface NavLinkFooterProps {
  title: string
  texts: string[]
}

export function NavLinkFooter({ title, texts }: NavLinkFooterProps) {
  return (
    <Flex width={'124'} h={'100%'} py="8">
      <VStack w="100%" h={'100%'} justify={'flex-start'} align={'flex-start'}>
        <Heading size="sm">{title}</Heading>
        {texts.map((text) => (
          <>
            <Text
              opacity={'0.7'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              {text}
            </Text>
          </>
        ))}
      </VStack>
    </Flex>
  )
}
