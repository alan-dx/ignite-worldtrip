import {
  Popover as PopoverChakra,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Icon,
} from "@chakra-ui/react"

import { FiInfo } from 'react-icons/fi'

export function Popover() {
  return (
    <PopoverChakra>
      <PopoverTrigger>
        <Icon fontSize="12" color="gray.500" as={FiInfo} />
      </PopoverTrigger>
      <PopoverContent position="absolute">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize="2xl" >O que é? </PopoverHeader>
        <PopoverBody fontWeight="400" fontSize="md" >Uma lista de quantas cidades +100 este continente tem.</PopoverBody>
      </PopoverContent>
    </PopoverChakra>
  )
}