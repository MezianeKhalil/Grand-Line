import { Box, Container, Image, Grid, GridItem, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

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
        content: 'Declarative and efficient JavaScript library for building user interfaces.'
    },
    {
        title: 'Components',
        icon: ChakraUiIcon,
        content: 'UI components built using ChakraUi.'
    },
    {
        title: 'Vite',
        icon: ViteJsIcon,
        content: 'Next generation frontend tooling'
    },
    {
        title: 'Typescript',
        icon: TypescriptIcon,
        content: 'A language for application-scale JavaScript'
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

const FeatureCard = ({ feature: { title, content, icon } }: { feature: FeaturesContentTypes } ) => {
    return (
        <VStack bg={useColorModeValue('white', 'gray.800')} h='full' align="start" border="1px" p="4" borderColor={useColorModeValue('gray.200', 'gray.700')} rounded="md">
            <Box w='10' h="10">
                <Image src={icon} alt="" />
            </Box>
            
            <Heading as="h3" fontSize="2xl">{title}</Heading>
            <Text>{content}</Text>
        </VStack>
    )
}