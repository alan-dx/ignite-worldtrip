import { Button, Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {

  const { asPath, push } = useRouter()

  function handleGoBack() {
    push('/')
  }

  return (
    <Flex
      as="header"
      h="24"
      w="100%"
      maxWidth="1140px"
      mx="auto"
      align="center"
      justify="center"
      position="relative"
    >
      {asPath != '/' && (
        <Button bg="transparent" onClick={handleGoBack} position="absolute" left="5" >
          <Icon as={FiChevronLeft} fontSize="24"/>
        </Button>
      )
      }
      <Link href="/">
        <Image src="/logo.svg" h={45} alt="logo" />
      </Link>
    </Flex>
  )
}