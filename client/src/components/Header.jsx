import React from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Box, Heading, Flex, Spacer, Icon, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
    return (
        <Box bg="purple" p={10} color="white">
            <Flex>
                <Heading size="md">My logo</Heading>
                <Spacer />
                <Heading size="md">Your Logo</Heading>
                <Spacer />
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        mx={20}
                       
                    />
                    <MenuList>
                        <MenuItem icon={<AddIcon />} command='⌘T'>
                            New Tab
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                            New Window
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                            Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<EditIcon />} command='⌘O'>
                            Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Box cursor="pointer">
                    <Icon size="xl" as={FontAwesomeIcon} icon={faShoppingCart} />
                </Box>
            </Flex>
        </Box>
    );
};

export default Header;;