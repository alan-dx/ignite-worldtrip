import { Flex, Button, Icon, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'

import { SwiperItem } from './SwiperItem'
import { HomeProps as SwiperProps, Continent } from '../../pages/index'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

export function Swiper({ continents }: SwiperProps) {

  const [ currentContinentIndex, setCurrentContinentIndex ] = useState(0)
  const [ currentContinent, setCurrentContinent ] = useState<Continent>(continents[currentContinentIndex])

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
    

    <Flex w="100%" align="center" justify="center" mt={isWideVersion ? '24' : '6'} mb="8">
        <Flex
          backgroundImage={`url(${currentContinent.data.continent_image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          w="100%"
          maxW="1140px"
          h="96"
          position="relative"
        >
          <Button onClick={prevItem} bg="transparent" position="absolute" top="48" left="0.5" >
            <Icon as={FiChevronLeft} fontSize={["34","48"]} color="yellow.900" />
          </Button>
          <SwiperItem current={currentContinent} />
          <Button onClick={nextItem} bg="transparent" position="absolute" top="48" right="0.5" >
            <Icon as={FiChevronRight} fontSize={["34","48"]} color="yellow.900" />
          </Button>
        </Flex>
    </Flex>
  )
}