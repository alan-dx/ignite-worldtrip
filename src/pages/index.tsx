import { Flex, Box, Text, Image, Divider, useBreakpointValue, SimpleGrid } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { Swiper } from '../components/Swiper'

import getPrismicClient from '../services/prismic'
import Prismic from '@prismicio/client'
import { CircleIcon } from '../components/CircleIcon'

export type Continent = {
  slug: string;
  data: {
    continent_name: string;
    continent_description: string;
    continent_image: string;
  }
}

export interface HomeProps {
  continents: Continent[]
}

export default function Home({continents}: HomeProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex 
      direction="column"
    >
      <Flex
        h={["200px", "335px"]}
        backgroundImage="url('/images/banner.jpg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        justify="center"
      >
        <Flex 
          w="100%" 
          maxWidth="1140px"
          align="center"
          justify="space-between"
          position="relative"
          px={!isWideVersion && '2'} 
        >
          <Text 
            color="gray.50" 
            justifySelf="flex-start"
            fontSize={["3xl","4xl"]}
            fontWeight="500"
          >
            5 Continentes,<br/>
            infinitas possibilidades.
            <Text
              fontSize={["md","lg"]}
              fontWeight="400"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Text>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        maxWidth="1140px"
        mt={isWideVersion ? "28" : "14"}
        direction="column"
        align="center"
        alignSelf="center"
      >
        <SimpleGrid 
          flex="1"
          rowGap="12"
          gap="4"
          minChildWidth="100px"
          w="100%"
          align="center"
          justify="space-between"
        >
          <Flex
            textAlign="center"
            direction={isWideVersion ? 'column' : 'row'}
            align="center"
            justify="center"
          >
            {isWideVersion ? (
            <Image
              src="/icons/cocktail.svg"
              mx="auto"
            />
            ) : (
              <CircleIcon />
            )}
            <Text fontWeight={isWideVersion ? '700' : '500'} fontSize="xl" ml={!isWideVersion && '2'}>vida noturna</Text>
          </Flex>
          <Flex
            textAlign="center"
            direction={isWideVersion ? 'column' : 'row'}
            align="center"
            justify="center"
          >
            {isWideVersion ? (
            <Image
              src="/icons/surf.svg"
              mx="auto"
            />
            ) : (
              <CircleIcon />
            )}
            <Text fontWeight={isWideVersion ? '700' : '500'} fontSize="xl" ml={!isWideVersion && '2'}>praia</Text>
          </Flex>
          <Flex
            textAlign="center"
            direction={isWideVersion ? 'column' : 'row'}
            align="center"
            justify="center"
          >
            {isWideVersion ? (
            <Image
              src="/icons/building.svg"
              mx="auto"
            />
            ) : (
              <CircleIcon />
            )}
            <Text fontWeight={isWideVersion ? '700' : '500'} fontSize="xl" ml={!isWideVersion && '2'}>moderno</Text>
          </Flex>
          <Flex
            textAlign="center"
            direction={isWideVersion ? 'column' : 'row'}
            align="center"
            justify="center"
          >
            {isWideVersion ? (
            <Image
              src="/icons/museum.svg"
              mx="auto"
            />
            ) : (
              <CircleIcon />
            )}
            <Text fontWeight={isWideVersion ? '700' : '500'} fontSize="xl" ml={!isWideVersion && '2'}>clássico</Text>
          </Flex>
          <Flex
            textAlign="center"
            direction={isWideVersion ? 'column' : 'row'}
            align="center"
            justify="center"
          >
            {isWideVersion ? (
            <Image
              src="/icons/world.svg"
              mx="auto"
            />
            ) : (
              <CircleIcon />
            )}
            <Text fontWeight={isWideVersion ? '700' : '500'} fontSize="xl" ml={!isWideVersion && '2'}>e mais...</Text>
          </Flex>
        </SimpleGrid>
        
        <Divider 
          bg="gray.800" 
          h="1" 
          w="24" 
          mt={isWideVersion ? '28' : '14'}
        />
        
        <Text 
          textAlign="center" 
          mt={isWideVersion ? '28' : '14'}
          fontSize={["2xl","4xl"]}
          fontWeight="500"
        >
          Vamos nessa?<br/>
          Então escolha seu continente
        </Text>

        <Swiper continents={continents} />
      </Flex>

    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents')
  ], {
    fetch: ['continents.continent_name', 'continents.continent_description', 'continents.continent_image']
  })

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      data: {
        continent_name: continent.data.continent_name[0].text,
        continent_description: continent.data.continent_description[0].text,
        continent_image: continent.data.continent_image.url
      }
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}