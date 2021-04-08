import { Flex, Text, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

interface Continent {
  name: string;
  description: string;
  image: string;
}

interface SwiperItemProps {
  current: Continent;
  next: () => void;
  prev: () => void;
}

export function SwiperItem({current, prev, next}: SwiperItemProps) {



  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="100%"
      position="relative"
    >
      <Button onClick={prev} bg="transparent" position="absolute" left="4px" >
        <Icon as={FiChevronLeft} fontSize="48" color="yellow.900" />
      </Button>
      <Text fontWeight="700" fontSize="6xl" color="gray.50" >
        {current.name}
      </Text>
      <Text fontWeight="500" fontSize="4xl" color="gray.50" >{current.description}</Text>
      <Button onClick={next} bg="transparent" position="absolute" right="4px" >
        <Icon as={FiChevronRight} fontSize="48" color="yellow.900" />
      </Button>
    </Flex>
  )
}