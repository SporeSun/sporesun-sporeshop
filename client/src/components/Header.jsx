import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Box, Heading, Flex, Spacer, Image, Icon, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
    return (
        <div className="header">
            <Box bg="purple" p={2} color="white">
                <Flex>
                    <Image src="https://i.imgur.com/4IjYbdj.png" alt="logo" objectFit="cover" maxW="100px" />
                    <Spacer />
                    <Link to={"/"}>
                    <Heading size="md" pt={7} className="heading">SPORES'N'MORE</Heading>
                    </Link>
                    <Spacer />
                    <Menu pt={7}>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            mx={20}
                            my={6}
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
                        <Icon size="xl" as={FontAwesomeIcon} icon={faShoppingCart} pt={7} pr={5} />
                    </Box>
                </Flex>
            </Box>
        </div>
    );
};

export default Header;;