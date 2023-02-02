import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const formEffect = {
    content: '""',
    bg: "themeRed",
    height: "5px",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    transition: "transform .5s",
}

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode("themeGrey.bg", "themeGrey.bg")(props),
                overflowX: "hidden",
                color: "white"
            },
            html: {
                scrollBehaviour: "smooth"
            }
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
        Heading: {
            baseStyle: {
                fontWeight: "200",
            }
        },
        Textarea: {
            variants: {
                'contact': {
                    borderRadius: "0",
                    bg: "themeGrey.dark",
                    color: "white"
                }
            }
        },
        Input: {
            variants: {
                'contact': {
                    field: {
                        position: "relative",
                        borderRadius: "0",
                        bg: "themeGrey.dark",
                        color: "white",

                    }
                }
            },
        },
        Button: {
            variants: {
                'project': {
                    borderRadius: '0',
                    bg: 'white',
                    color: 'themeGrey.dark',
                    _hover: {
                        bg: "themeRed",
                        color: "white"
                    }

                },
                'submit': {
                    borderRadius: '0',
                    bg: "themeRed",
                    color: "white",
                    _hover: {
                        bg: 'white',
                        color: 'themeGrey.dark',
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