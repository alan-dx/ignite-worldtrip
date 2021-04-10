import { Flex, Text, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { City } from "../../components/City";
import { Popover } from "../../components/Popover";

export default function Continent() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction="column">
      {/* Header */}
      <Flex
        backgroundImage="url('/images/african.jpg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        h="96"
        justify="center"
      >
        <Flex width="100%" maxW="1140px" align="flex-end" mb="16" >
          <Text fontWeight="500" color="white" fontSize="6xl" >Europa</Text>
        </Flex>
      </Flex>
      {/* Header */}
      <Flex maxW="1140px" justify="space-between" direction={isWideVersion ? 'row' : 'column'} mx="auto"  mt="20" >
        <Text w={isWideVersion ? '50%' : '100%'} pr="12" fontSize="3xl" color="gray.800" fontWeight="6" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Flex flex='1' ml="16" align="center" justify="space-between">
          <Box textAlign="center">
            <Text as="strong" fontWeight="500" color="yellow.900" fontSize="6xl">50</Text>
            <Text fontSize="3xl" fontWeight="700">países</Text>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="500" color="yellow.900" fontSize="6xl">60</Text>
            <Text fontSize="3xl" fontWeight="700">países</Text>
          </Box>
          <Box textAlign="center" position="relative">
            <Text fontWeight="500" color="yellow.900" fontSize="6xl">27</Text>
            <Text fontSize="3xl" fontWeight="700" justify="center">cidades +100 <Popover /></Text>
          </Box>
        </Flex>
      </Flex>
    
      <Flex w="100%" maxW="1160px" mx="auto" direction="column" mt="20" mb="8">
        <Text fontSize="4xl" fontWeight="500">Cidades +100</Text>
        <SimpleGrid flex="1" rowGap="12" minChildWidth="320px" mt="10">
          <City />
          <City />
          <City />
          <City />
          <City />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}