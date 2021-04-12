import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface CityProps {
  city: {
    city_image: string;
    country_flag: string;
    city_name: string;
    country_name: string
  }
}

export function City({city}: CityProps) {
  return (
    <Flex 
      h="279px"
      w="100%"
      maxW="256px"
      direction="column"
    >
      <Image flex="1" borderRadius="4px 4px 0px 0px" src={`${city.city_image})`} objectFit="cover" />
      <Flex 
        bg="white" 
        h="106px"
        borderWidth="0px 1px 1px"
        borderRadius="0px 0px 4px 4px"
        borderColor="yellow.900"

        align="center"
        justify="space-between"
        px="5"
      >
        <Flex direction="column" align="flex-start">
          <Text as="strong" fontWeight="500" fontSize="2xl">{city.city_name}</Text>
          <Text fontWeight="500" fontSize="sm" color="gray.500">{city.country_name}</Text>
        </Flex>
        <Box>
          <Image w="30px" h="30px" borderRadius="15px" src={`${city.country_flag}`} objectFit="cover" />
        </Box>
      </Flex>
    </Flex>
  )
}