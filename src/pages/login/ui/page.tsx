import { Flex, VStack, useColorModeValue } from "@chakra-ui/react"

import { LoginForm } from './widgets/form'

export default function Login () {
    return (
        <Flex
            as="main"
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.100", "gray.800")}
        >
               
            <VStack
                w={{ base: "100%", lg: "40%", xl: "30%" }}
                p="5"
                bg="white"
                rounded="md"
            >
                <LoginForm />
            </VStack>   
        </Flex>
    )
}
