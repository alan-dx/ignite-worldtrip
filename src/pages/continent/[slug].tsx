import { Flex, Text, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { City } from "../../components/City";
import { Popover } from "../../components/Popover";
import getPrismicClient from "../../services/prismic";

type Cities100 = {
  city_image: string;
  country_flag: string;
  city_name: string;
  country_name: string
}

interface ContientProps {
  continent: {
    continent_name: string,
    continent_abstract: string;
    continent_image: string;
    continent_info: {
      numbers_country: string,
      numbers_cities: string,
      numbers_languages: string,
    },
    continent_cities_100: Cities100[]
  }
}

export default function Continent( {continent} : ContientProps ) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction="column">
      {/* Header */}
      <Flex
        backgroundImage={`url(${continent.continent_image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        h="96"
        justify="center"
      >
        <Flex width="100%" maxW="1140px" align={isWideVersion ? "flex-end" : 'center'} justify={!isWideVersion && 'center'} mb="16" >
          <Text fontWeight="500" color="white" fontSize={['5xl',"6xl"]} >{continent.continent_name}</Text>
        </Flex>
      </Flex>
      {/* Header */}

      <Flex maxW="1140px" justify="space-between" direction={isWideVersion ? 'row' : 'column'} mx="auto"  mt="20" >
        <Text w={isWideVersion ? '50%' : '100%'} pr={isWideVersion && "12"} px={!isWideVersion && '2'} fontSize="3xl" color="gray.800" fontWeight="6" textAlign="justify" >
          {continent.continent_abstract}
        </Text>
        <Flex flex='1' ml={isWideVersion && "16"} px={!isWideVersion && '2'} mt={!isWideVersion && '16'} align="center" justify="space-between">
          <Box textAlign={["left","center"]}>
            <Text as="strong" fontWeight="500" color="yellow.900" fontSize={['5xl', "6xl"]}>{continent.continent_info.numbers_country}</Text>
            <Text fontSize={['2xl', "3xl"]} fontWeight="700">países</Text>
          </Box>
          <Box textAlign={["left","center"]}>
            <Text fontWeight="500" color="yellow.900" fontSize={['5xl', "6xl"]}>{continent.continent_info.numbers_languages}</Text>
            <Text fontSize={['2xl', "3xl"]} fontWeight="700">línguas</Text>
          </Box>
          <Box textAlign={["left","center"]} position="relative">
            <Text fontWeight="500" color="yellow.900" fontSize={['5xl', "6xl"]}>{continent.continent_info.numbers_cities}</Text>
            <Text fontSize={['2xl', "3xl"]} fontWeight="700" justify="center">cidades +100 <Popover /></Text>
          </Box>
        </Flex>
      </Flex>
    
      <Flex w="100%" maxW="1160px" mx="auto" alignItems={!isWideVersion && 'center'} direction="column" mt="20" mb="8" >
        <Text fontSize="4xl" fontWeight="500">Cidades +100</Text>
        <SimpleGrid flex="1" rowGap="12" gap="8" minChildWidth="256px" mt="10">
          {
            continent.continent_cities_100.map(city => (
              <City key={city.city_name} city={city} />
            ))
          }
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params
  
  const prismic = getPrismicClient()

  const response = await prismic.getByUID('continents', String(slug), {})

  const continent = {
    continent_name: response.data.continent_name[0].text,
    continent_abstract: response.data.continent_abstract[0].text,
    continent_image: response.data.continent_image.url,
    continent_info: {
      numbers_country: response.data.continent_info[0].numbers_country[0].text,
      numbers_cities: response.data.continent_info[0].numbers_cities[0].text,
      numbers_languages: response.data.continent_info[0].numbers_languages[0].text,
    },
    continent_cities_100: response.data.continent_cities_100.map(city => {

      return {
        city_image: city.city_image.url,
        country_flag: city.country_flag.url,
        city_name: city.city_name[0].text,
        country_name: city.country_name[0].text
      }
    })
  }

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}