import { Box, Button, Container, HStack, Heading, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

export default function Header () {
    return (
        <Box as='header' py='20'>
            <Container maxW='7xl'>
                <VStack mx="auto" justify="center" align="center" w={{ base: '100%', md: '80%', lg: '70%', xl: '80%' }}>
                    <Box fontWeight="medium" bg={useColorModeValue('white', 'gray.800')} color="blue.500" px='6' py="2" rounded="full">Open Source, and Free</Box>
                    <Heading as="h1" textAlign="center" size="2xl" py="3">The Ultimate Chakra UI Dashboard Template and Toolkit</Heading>
                    <Text textAlign="center" fontSize="lg">Your Chakra UI-powered dashboard solution. Packed with features like responsive design, dashboard elements, pages, UI components, and dynamic charts, ChakraFlow simplifies backend development. It's available for free and For developers of all levels.</Text>
                    <HStack spacing="4" pt='5'>
                        <Button as={RouteLink} to="/login" colorScheme='blue' px="8">Preview</Button>
                        <Button as={Link} isExternal href="https://github.com/MezianeKhalil/Grand-Line" variant="outline" px="8">Github</Button>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    )
}