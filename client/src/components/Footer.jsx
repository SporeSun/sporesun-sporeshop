import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <div>
            <Box as="footer" bg="purple.800" p={4} color="white" position="fixed" bottom="0" width="100%" height="55px">
                <Flex justify="space-between" align="center">
                    <Text>&copy; 2023 Spores'n'more</Text>
                    <Flex>
                        <Link mx={2} href="#home">
                            Home
                        </Link>
                        <Link mx={2} href="#about">
                            About
                        </Link>
                        <Link mx={2} href="#contact">
                            Contact
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </div>
    );
}