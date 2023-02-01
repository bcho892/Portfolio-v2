import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode("themeGrey.bg", "themeGrey.bg")(props),
                overflowX: "hidden",
                color: "white"
            },
        }),
    },
    fonts: {
        heading: `'Bebas Neue', sans-serif`,
        body: `'Open Sans', sans-serif`
    },
    components: {
        Card: {
            baseStyle: {
                boxShadow: '0 0 0 0 transparent'
            },
            variants: {
                'navigation': {
                    boxShadow: 'none',
                    bg: 'red.300'
                }
            }
        },
        Button: {

            variants: {
                'project': {
                    borderRadius: '0',
                    backgroundColor: 'white',
                    color: 'themeGrey.dark',
                    _hover: {
                        bg: "themeRed",
                        color: "white"
                    }

                },
                'landing': {
                    justifyContent: 'flex-start',
                    padding: '0 1rem',
                    color: 'themeGrey.dark',
                    bg: 'white',
                    borderRadius: '2px',
                    _hover: {
                        bg: "themeRed",
                        color: "white"
                    }
                }
            }
        }
    },
    colors: {
        themeRed: "#FF3E3E",
        themeGrey: {
            bg: "#363636",
            dark: "#474747",
            light: "#D9D9D9"
        }
    }
})

export default theme