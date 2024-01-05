import { Box, Container, Heading, Text, VStack, Link } from '@chakra-ui/react'

export default function Codebase () {
    return (
        <Box as='section' py='16'>
            <Container maxW='7xl'>
                <VStack mx="auto" justify="center" align="center" w={{ base: '100%', md: '80%', lg: '70%', xl: '80%' }}>
                    <Heading as="h1" textAlign="center" size="xl">Proudly Open Source</Heading>
                    <Text textAlign="center" fontSize="lg">GrandLine is open source and powered by open source libraries. </Text>
                    <Text textAlign="center" fontSize="lg"> The code is available on  
                        <Link 
                            href="https://github.com/MezianeKhalil/Grand-Line" 
                            isExternal
                            fontWeight="semibold"
                            pl="1"
                        >
                            Github
                        </Link>.
                    </Text>
                </VStack>
            </Container>
        </Box>
    )
}
