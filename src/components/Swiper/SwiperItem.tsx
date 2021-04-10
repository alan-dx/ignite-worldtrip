import { Flex, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Continent } from '../../pages/index'

interface SwiperItemProps {
  current: Continent;
}

export function SwiperItem({current}: SwiperItemProps) {

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="100%"
    >
      <Link href={`continent/${current.slug}`}>
        <Text cursor="pointer" _hover={{color: "yellow.900"}} transition="color 0.3s" fontWeight="700" fontSize="6xl" color="gray.50" >
          {current.data.continent_name}
        </Text>
      </Link>
      <Text fontWeight="500" fontSize="4xl" color="gray.50" >{current.data.continent_description}</Text>
    </Flex>
  )
}