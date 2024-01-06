import { Box, Container, Image, Grid, GridItem, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

import { ChakraUiIcon, ReactIcon, TypescriptIcon, ViteJsIcon, FsdIcon, I18nIcon } from "@/shared/assets/icons"

export interface FeaturesContent {
    title: string
    content: string
    icon?: string
}

const featuresContent: Array<FeaturesContent> = [
    {
        title: 'ReactJs',
        icon: ReactIcon,
        content: 'Efficient JavaScript library revolutionizing web development for building interactive user interfaces with easy state management'
    },
    {
        title: 'Components',
        icon: ChakraUiIcon,
        content: 'Streamlines React development with a collection of customizable components, ensuring a quick and stylish creation of responsive user interfaces.'
    },
    {
        title: 'Vite',
        icon: ViteJsIcon,
        content: 'Next-gen frontend tooling accelerates web development with a lightweight, fast build system. Leveraging native ES module imports, it\'s perfect for modern applications.'
    },
    {
        title: 'Typescript',
        icon: TypescriptIcon,
        content: 'Boosts JavaScript development with static typing for robust, scalable projects. Powerful tools catch errors early, improving code quality and maintainability'
    },
    {
        title: 'Feature-Sliced Design',
        icon: FsdIcon,
        content: 'Feature-Sliced Design promotes modular efficiency, organizing code into cohesive slices for streamlined development and enhanced scalability.'
    },
    {
        title: 'Dark Mode',
        icon: '',
        content: 'The app effortlessly adjusts to your system settings, automatically switching to dark mode to enhance user comfort and aesthetics.'
    },
    {
        title: 'i18next',
        icon: I18nIcon,
        content: 'The app excels in internationalization (i18n), seamlessly adapting to various languages and cultural nuances for a truly global user experience'
    },
    {
        title: 'React Helmet',
        icon: '',
        content: 'A document head manager for React, that allows you to easily manage the document head'
    },
    {
        title: 'Auto import',
        icon: '',
        content: 'The coding environment boasts alias path simplicity and automatic imports, streamlining development for concise and efficient coding'
    }
]

export default function Features () {
    return (
        <Box as="section" py="12" bg={useColorModeValue('gray.50', 'gray.900')}>
            <Container maxW="7xl">
                <Heading as="h2" textAlign="center">Features</Heading>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3} py='8'>
                    {
                        featuresContent.map(feature => {
                            return (
                                <GridItem>
                                    <FeatureCard feature={feature} />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

const FeatureCard = ({ feature: { title, content, icon } }: { feature: FeaturesContent } ) => {
    return (
        <VStack bg={useColorModeValue('white', 'gray.800')} h='full' align="start" border="1px" p="4" borderColor={useColorModeValue('gray.200', 'gray.700')} rounded="md">
            <Box w='10' h="10">
                <Image src={icon} alt="" width="100%" height="100%" maxW='100%' maxH="100%"/>
            </Box>
            <Heading as="h3" fontSize="2xl">{title}</Heading>
            <Text>{content}</Text>
        </VStack>
    )
}