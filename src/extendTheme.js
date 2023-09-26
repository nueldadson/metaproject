// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    gray: {
        100: "#EDEFEE",
    },
    green: {
        100:   "#495E57",
    },
    yellow: {
        100:   "#F4CE14",
    },
    red: {
        100: "#FBDABB",
        200: "#EE9972",
    },
    black: {
        100: '#333333',
    }
  },
  fonts: {
    body: 'Karla',
    heading: 'Markazi Text',
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
});

export default customTheme;