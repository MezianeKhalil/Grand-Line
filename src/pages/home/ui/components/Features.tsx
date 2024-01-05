import { Box, Container, Image, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'

import { ChakraUiIcon, ReactIcon, TypescriptIcon, ViteJsIcon } from "@/shared/assets/icons"

interface FeaturesContentTypes {
    title: string
    content: string
    icon?: string
}

const featuresContent: Array<FeaturesContentTypes> = [
    {
        title: 'ReactJs',
        icon: ReactIcon,
        content: 'ReactJS is a declarative and efficient JavaScript library for building user interfaces, making it simpler to create interactive and dynamic web applications.'
    },
    {
        title: 'ChakraUi',
        icon: ChakraUiIcon,
        content: 'a user-friendly and modular component library for React, offering essential building blocks with accessibility in mind'
    },
    {
        title: 'Vite',
        icon: ViteJsIcon,
        content: '---'
    },
    {
        title: 'Typescript',
        icon: TypescriptIcon,
        content: '---'
    }
]

export default function Features () {
    return (
        <Box as="section" py="12">
            <Container maxW="7xl">
                <Heading as="h2" textAlign="center">Features</Heading>
                <Text textAlign="center" w={{ base: '100%',  md: '80%', lg: '70%', xl: '60%' }} mx="auto">ChakraFlow brings you all the essential UI components and features you'd expect from a comprehensive UI library, ready to kickstart your Chakra UI web project with style and functionality.</Text>
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

const FeatureCard = ({ feature: { title, content, icon } }: { feature: FeaturesContentTypes } ) => {
    return (
        <VStack h='full' align="start" border="1px" p="5" borderColor='gray.200' rounded="md">
            <Box w='10' h="10">
                <Image src={icon} alt="" />
            </Box>
            
            <Heading as="h3" fontSize="2xl">{title}</Heading>
            <Text>{content}</Text>
        </VStack>
    )
}