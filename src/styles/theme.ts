import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "50": "#FFFAED",
      "100": "#FFF3D4",
      "200": "#FFECBA",
      "300": "#FFE5A1",
      "400": "#FFDE87 ",
      "500": "#FFD66E",
      "600": "#FFCF54",
      "700": "#FFC83B",
      "800": "#FFC121",
      "900": "#FFBA08"
    },
    gray: {
      "50": "#F5F8FA",
      "200": "#DADADA",
      "500": "#999999",
      "800": "#47585B",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800'
      }
    }
  }
})