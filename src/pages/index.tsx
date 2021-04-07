import { Flex, Box, Text, Image, Divider } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
      direction="column"
    >
      <Flex
        h={335}
        backgroundImage="url('/images/banner.jpg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Flex 
          w="100%" 
          maxWidth={1480}
          align="center"
          justify="space-between"
          px="36"
          position="relative"
        >
          <Text 
            color="gray.50" 
            justifySelf="flex-start"
            fontSize="4xl"
            fontWeight="500"
          >
            5 Continentes,<br/>
            infinitas possibilidades.
            <Text
              fontSize="lg"
              fontWeight="400"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Text>
          <Image 
            src="/images/airplane.svg"
            mt="40"
            zIndex="1"
            justifySelf="flex-end"
          />
        </Flex>
      </Flex>

      <Flex 
        maxWidth={1480} 
        px="36"
        mt="28"
        direction="column"
        align="center"
      >
        <Flex
          w="100%"
          align="center"
          justify="space-between"
        >
          <Box
            textAlign="center"
          >
            <Image 
              src="/icons/cocktail.svg"
              mx="auto"
            />
            <Text fontWeight="700" fontSize="2xl" mt="6">vida noturna</Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Image 
              src="/icons/surf.svg"
              mx="auto"
            />
            <Text fontWeight="700" fontSize="2xl" mt="6">praia</Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Image 
              src="/icons/building.svg"
              mx="auto"
            />
            <Text fontWeight="700" fontSize="2xl" mt="6">moderno</Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Image 
              src="/icons/museum.svg"
              mx="auto"
            />
            <Text fontWeight="700" fontSize="2xl" mt="6">clássico</Text>
          </Box>
        </Flex>
        
        <Divider 
          bg="gray.800" 
          h="1" 
          w="24" 
          mt="20" 
        />
        
        <Text 
          textAlign="center" 
          mt="24"
          fontSize="4xl"
          fontWeight="500"
        >
          Vamos nessa?<br/>
          Então escolha seu continente
        </Text>
      </Flex>

    </Flex>
  )
}
