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
        <meta name="description" content="I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Benson Cho's Portfolio" />
        <meta property="og:description" content="I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech." />
        <meta property="og:image" content="/images/sitepreview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Box className="container" id="Home">
        <HomeSection />
      </Box>
      <Box className="container" id="About"
        margin="auto">
        <AboutSection />
      </Box>
      <Box className="container" id="Projects"
        margin="auto">
        <ProjectSection />
      </Box>
      <Box className="container" id="Contact"
        margin="auto">
        <ContactSection />
      </Box>
      <BensonCho />
      <SideBar />
    </>
  )
}
