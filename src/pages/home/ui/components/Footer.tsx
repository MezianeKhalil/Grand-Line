import { Box, Text, VStack } from "@chakra-ui/react"

export default function Footer () {
    return (
        <Box as='footer' py="6" borderTop="1px" borderColor="gray.200">
            <VStack>
                <Text>©2024 GrandLine, All rights reserved.</Text>
            </VStack>
        </Box>
    )
}