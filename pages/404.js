import { Box, Heading, Text, Button } from '@chakra-ui/react'
import SideBar from '@/components/sidebar'
import Navigation from '@/components/navigation'
import '@fontsource/open-sans'
import '@fontsource/bebas-neue'
export default function Page404() {
    return (
        <>
            <SideBar />
            <Navigation />
            <Box
                className="container" display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
                gap=".5rem"
                margin="auto"
                height="100vh">
                <Heading marginBottom="-25px" textAlign="center" fontSize="9xl">
                    404.
                </Heading>
                <Text>
                    Page Not Found.
                </Text>
                <Button variant="submit" as="a" href="/">Return</Button>
            </Box>
        </>
    )
}