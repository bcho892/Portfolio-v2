import Head from 'next/head'
import '@fontsource/open-sans'
import '@fontsource/bebas-neue'
import { Box, Image } from '@chakra-ui/react'

import Navigation from '@/components/navigation'
import HomeSection from '@/components/homesection'
import BensonCho from '@/components/bensoncho'
import SideBar from '@/components/sidebar'
import AboutSection from '@/components/aboutsection'
import ProjectSection from '@/components/projectsection'
import ContactSection from '@/components/contactsection'
export default function Home() {
  return (
    <>
      <Head>
        <title>Benson Cho - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Box className="container">
        <HomeSection />
      </Box>
      <Box className="container"
        margin="auto">
        <AboutSection />
      </Box>
      <Box className="container"
        margin="auto">
        <ProjectSection />
      </Box>
      <Box className="container"
        margin="auto">
        <ContactSection />
      </Box>
      <BensonCho />
      <SideBar />
    </>
  )
}
