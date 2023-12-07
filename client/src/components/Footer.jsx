import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box as="footer" bg="purple.800" p={4} color="white"  bottom="0" width="100%">
            <Flex justify="space-between" align="center">
                <Text>&copy; 2023 Spores'n'more</Text>
                <Flex>
                    <Link mx={2} to="/" style={{margin:"4px"}}>
                        Home
                    </Link>
                    <Link mx={2} to="/products" style={{margin:"4px"}}>
                        Products
                    </Link>
                    <Link mx={2} to="about" style={{margin:"4px"}}>
                        About
                    </Link>
                    <Link mx={2} to="/contact" style={{margin:"4px"}}>
                        Contact
                    </Link> 
                </Flex>
            </Flex>
        </Box>
    );
}