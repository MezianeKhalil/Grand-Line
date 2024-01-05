import { Box, Flex, Text, Button, Stack, Container, useColorModeValue, IconButton, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa"

import { ThemeToggle } from '@/shared/ui/themeToggle'

export default function Navbar () {
    return (
        <Box 
            as="nav"
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            
        >
            <Container maxW='7xl'>
                <Flex align={'center'}>
                    <Flex flex={{ base: 1 }}>
                        <Text
                            as={RouterLink}
                            to='/'
                            fontSize="xl"
                            fontWeight="medium"
                            color={useColorModeValue('gray.800', 'white')}
                        >
                            GrandLine
                        </Text>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={2}
                    >
                        <ThemeToggle />
                        <IconButton
                            as={Link}
                            icon={<FaGithub />}
                            href="https://github.com/MezianeKhalil/Grand-Line"
                            isExternal
                            aria-label="github repository"
                            variant="outline"
                            fontSize={'lg'}
                        />
                        <Button
                            as={RouterLink}
                            to='/login'
                            variant="outline"
                            fontSize={'lg'}
                            fontWeight={400}
                            px="8"
                        >
                            Live Preview
                        </Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}
