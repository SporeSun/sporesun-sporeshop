import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Image,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);

  //destructuring cart items
  console.log("llllllllllllllllll", cartItems)

  return (
    <Box bg="purple" p={2} color="white">
      <Flex>
        <Link to="/">
          <Image
            src="https://i.imgur.com/4IjYbdj.png"
            alt="logo"
            objectFit="cover"
            maxW="100px"
          />
        </Link>

        <Spacer />
        <Heading size="md" pt={7}>
          SPORES'N'MORE
        </Heading>
        <Spacer />
        <Menu pt={7}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            mx={20}
            my={6}
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to="/cart">
          <Box cursor="pointer">
            <Icon size="xl" as={FontAwesomeIcon} icon={faShoppingCart} pt={7} />
            {/* <Badge count={cartItems?.length} showZero offset={[10, -5]}>
                    <span style={{ color: "transparent" }}>.</span>
                  </Badge> */}
            <Badge
              ml=""
              colorScheme="white"
              style={{
                marginTop: "-32px",
                borderRadius: "50%",
                padding:"6px 10px",
                textAlign:"center",
                backgroundColor:"orange"
              }}
            >
              
              {cartItems?.length}
            </Badge>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
