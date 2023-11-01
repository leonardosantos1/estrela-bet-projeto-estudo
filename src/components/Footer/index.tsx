import {
  Flex,
  HStack,
  Text,
  VStack,
  Image as ChakraImage,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react'
import csgoLogo from '../../../public/csgo-logo.svg'
import lolLogo from '../../../public/lol-logo.svg'
import valorantLogo from '../../../public/valorant-logo.svg'
import dota2Logo from '../../../public/dota2-logo.svg'
import r6Logo from '../../../public/rainbow-six-logo.svg'
import ffLogo from '../../../public/free-fire-logo.svg'
import footballLogo from '../../../public/football-logo.png'
import basketLogo from '../../../public/basketball-logo.png'
import baseballLogo from '../../../public/baseball-logo.png'
import tennisLogo from '../../../public/tennis-logo.png'
import mlbLogo from '../../../public/mbl-logo.png'
import volleyLogo from '../../../public/volleyball-logo.png'
import { NavLinkFooter } from './NavLinksFooter'
import { NavLinksChildren } from '@/utils/NavLinksChildren'

const navLinksChildren = new NavLinksChildren()

export function Footer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex w="full" mx="auto" bg="white" justify={'center'} py="8">
      <VStack>
        <HStack
          spacing={{ base: 42, md: 60, lg: 72 }}
          maxW="1280px"
          w={{ base: '90%', md: '90%', lg: '90%' }}
        >
          <VStack w={'full'}>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={csgoLogo.src} w="10" h="10" bg={'white'} />
              <Text p="0" color={'blackAlpha.800'} fontWeight={'bold'}>
                Counter Strike
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={lolLogo.src} w="10" h="10" />
              <Text
                p="0"
                color={'#0099ff'}
                fontWeight={'bold'}
                fontSize={'0.94rem'}
              >
                League of Legends
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={valorantLogo.src} w="10" h="10" />
              <Text p="0" color={'#ff5252d6'} fontWeight={'bold'}>
                Valorant
              </Text>
            </HStack>

            <HStack
              justify={'flex-start'}
              w="full"
              opacity={0.8}
              _hover={{ opacity: '1', cursor: 'pointer' }}
              color={'#cf3333'}
              fontWeight={'bold'}
            >
              <ChakraImage src={dota2Logo.src} w="10" h="10" />
              <Text p="0">Dota 2</Text>
            </HStack>
          </VStack>
          <VStack w="full">
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
              color={'#302e2e'}
            >
              <ChakraImage src={r6Logo.src} w="10" h="10" bg={'white'} />
              <Text p="0" fontWeight={'bold'}>
                Rainbow Six
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
              color={'#fc9700'}
            >
              <ChakraImage src={ffLogo.src} w="10" h="10" />
              <Text p="0" fontWeight={'bold'} fontSize={'0.94rem'}>
                Free fire
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={footballLogo.src} w="10" h="10" />
              <Text p="0" color={'blackAlpha.800'} fontWeight={'bold'}>
                Futebol
              </Text>
            </HStack>

            <HStack
              justify={'flex-start'}
              w="full"
              opacity={0.8}
              _hover={{ opacity: '1', cursor: 'pointer' }}
              color={'#b65800'}
              fontWeight={'bold'}
            >
              <ChakraImage src={basketLogo.src} w="10" h="10" />
              <Text p="0">Basquete</Text>
            </HStack>
          </VStack>
          <VStack w="full">
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={baseballLogo.src} w="10" h="10" bg={'white'} />
              <Text p="0" color={'#6b4e36'} fontWeight={'bold'}>
                Basebol
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={tennisLogo.src} w="10" h="10" />
              <Text
                p="0"
                color={'#086bad'}
                fontWeight={'bold'}
                fontSize={'0.94rem'}
              >
                Tenis
              </Text>
            </HStack>
            <HStack
              justify={'flex-start'}
              w="full"
              opacity={'0.8'}
              _hover={{ bg: 'transparent', opacity: '1', cursor: 'pointer' }}
            >
              <ChakraImage src={volleyLogo.src} w="10" h="10" />
              <Text p="0" color={'#e0a501d5'} fontWeight={'bold'}>
                Volei
              </Text>
            </HStack>

            <HStack
              justify={'flex-start'}
              w="full"
              opacity={0.8}
              _hover={{ opacity: '1', cursor: 'pointer' }}
              color={'#962d2d'}
              fontWeight={'bold'}
            >
              <ChakraImage src={mlbLogo.src} w="10" h="10" />
              <Text p="0">MLB</Text>
            </HStack>
          </VStack>
        </HStack>

        {isWideVersion && (
          <>
            <Divider py="2" />
            <HStack spacing={36} py="2" w={{ sm: '75%', md: '90%', lg: '90%' }}>
              <NavLinkFooter
                title={'Conteúdo'}
                texts={navLinksChildren.textsContent}
              />
              <NavLinkFooter
                title={'Suporte'}
                texts={navLinksChildren.textsSuport}
              />
              <NavLinkFooter
                title={'Legal'}
                texts={navLinksChildren.textsLaws}
              />
              <NavLinkFooter
                title={'Redes sociais'}
                texts={navLinksChildren.textsMidasSocias}
              />
            </HStack>
          </>
        )}

        <Flex w={'100%'} maxW={'1180px'} flexWrap={'wrap'} justify={'center'}>
          <Divider py="2" />

          <Text
            fontSize={'0.5rem'}
            textAlign={'justify'}
            w={{ base: '60%', md: '90%', lg: '90%' }}
            flexWrap={'wrap'}
            pt="6"
          >
            Aviso Importante: Todas as Imagens Neste Site São Públicas ou
            Criadas por IA para Fins de Estudo e Portfólio, Não Comerciais Caro
            visitante, É com grande satisfação que recebemos você em nosso site,
            um espaço dedicado ao aprendizado e à demonstração de projetos que
            envolvem inteligência artificial e design. Gostaríamos de esclarecer
            que todas as imagens exibidas neste site são de domínio público ou
            foram criadas por meio de algoritmos de inteligência artificial.
            Nosso principal objetivo é compartilhar conhecimento, práticas e
            experimentos que contribuam para o desenvolvimento pessoal e
            profissional na área de tecnologia e design. Não comercializamos nem
            utilizamos as imagens exibidas para fins lucrativos, pois este site
            é estritamente um projeto de estudo e um acervo para nosso portfólio
            pessoal. Acreditamos na importância da ética e da transparência, e,
            portanto, respeitamos integralmente os direitos autorais e as
            licenças de uso de qualquer conteúdo que não seja de domínio
            público. Se você encontrar alguma imagem que julgue não estar em
            conformidade com as diretrizes legais ou éticas, por favor, entre em
            contato conosco imediatamente para que possamos tomar as medidas
            apropriadas. Salientamos que nosso compromisso é com a educação e a
            promoção de soluções inovadoras. Se você tem interesse em aprender
            mais sobre os métodos e técnicas utilizadas na criação das imagens
            ou se deseja colaborar conosco de alguma forma, estamos abertos a
            discussões construtivas e parcerias que possam beneficiar a
            comunidade. Agradecemos por visitar nosso site e por compartilhar
            deste espaço de aprendizado e exploração. Esperamos que encontre
            aqui informações úteis e inspiradoras. Não hesite em entrar em
            contato caso tenha alguma dúvida ou sugestão. Atenciosamente,
            Leonardo Aparecido dos Santos | leonardo.santos574@hotmail.com
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
