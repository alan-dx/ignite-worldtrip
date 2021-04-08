import { Flex, Box, Text, Image, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import { SwiperItem } from './SwiperItem'

export function Swiper() {

  const continents = [
    {
      name: "Europa",
      description: "O continente mais antigo.",
      image: '/images/eiffel.jpg'
    },
    {
      name: "África",
      description: "O gigantesco continente.",
      image: '/images/african.jpg'
    }
  ]

  const [ currentContinentIndex, setCurrentContinentIndex ] = useState(0)
  const [ currentContinent, setCurrentContinent ] = useState(continents[currentContinentIndex])

  function nextItem() {

    if (currentContinentIndex < continents.length - 1) {
      setCurrentContinentIndex(currentContinentIndex + 1)
      setCurrentContinent(continents[currentContinentIndex + 1])
    } else {
      setCurrentContinent(continents[0])
      setCurrentContinentIndex(0)
    }
  }

  function prevItem() {
    if (currentContinentIndex > 0) {
      setCurrentContinentIndex(currentContinentIndex - 1)
      setCurrentContinent(continents[currentContinentIndex - 1])
    } else if (currentContinentIndex == 0) {
      setCurrentContinentIndex(continents.length - 1)
      setCurrentContinent(continents[continents.length - 1])
    }
    
  }

  return (
    <Flex w="100%" align="center" justify="center" mt="24" mb="8">
      <Flex
        backgroundImage={`url(${currentContinent.image})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        maxW="1140px"
        cursor="pointer"
        h="96"
      >
        <SwiperItem current={currentContinent} next={nextItem} prev={prevItem} />
      </Flex>
    </Flex>
  )
}