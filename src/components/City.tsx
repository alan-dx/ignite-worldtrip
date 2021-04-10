import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function City() {
  return (
    <Flex 
      h="279px"
      w="100%"
      maxW="256px"
      direction="column"
    >
      <Image flex="1" borderRadius="4px 4px 0px 0px" src="/images/london.png" objectFit="cover" />
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
          <Text as="strong" fontWeight="500" fontSize="2xl">Londres</Text>
          <Text fontWeight="500" fontSize="sm" color="gray.500">Reino Unido</Text>
        </Flex>
        <Box>
          <Image w="30px" h="30px" borderRadius="15px" src="/images/uk.png" objectFit="cover" />
        </Box>
      </Flex>
    </Flex>
  )
}