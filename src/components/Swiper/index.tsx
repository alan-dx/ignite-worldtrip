import { Flex, Box, Text, Image, Divider } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

import { SwiperItem } from './SwiperItem'
import { HomeProps as SwiperProps, Continent } from '../../pages/index'

export function Swiper({ continents }: SwiperProps) {

  const [ currentContinentIndex, setCurrentContinentIndex ] = useState(0)
  const [ currentContinent, setCurrentContinent ] = useState<Continent>(continents[currentContinentIndex])

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
      <Link href={`continent/${currentContinent.slug}`}>
        <Flex
          backgroundImage={`url(${currentContinent.data.continent_image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          w="100%"
          maxW="1140px"
          cursor="pointer"
          h="96"
          zIndex="0"
        >
          <SwiperItem current={currentContinent} next={nextItem} prev={prevItem} />
        </Flex>
      </Link>
    </Flex>
  )
}