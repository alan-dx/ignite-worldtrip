import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      h="24"
      w="100%"
      maxWidth={1480}
      px="36"
      mx="auto"
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" h={45} alt="logo" />
    </Flex>
  )
}