import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react"

export default function Footer () {
    return (
        <Box as='footer' py="6" borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <VStack>
                <Text>©2024 GrandLine, All rights reserved.</Text>
            </VStack>
        </Box>
    )
}