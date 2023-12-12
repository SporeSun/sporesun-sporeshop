import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
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
import Auth from "../utils/auth"


const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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
          <MenuList textColor={"black"}>
            <MenuItem>
              <Link to ="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to ="/login">Login</Link>
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem>
              <Link to ="/signup">Sign Up!</Link>
            </MenuItem>
            <MenuItem>
              <Link to ="/orderhistory">Order History</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/Psilocybe Cubensis Spores`}>Psilocybe Cubensis Spores</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/Exotic Psilocybe Spores`}>Exotic Psilocybe Spores</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/Gourmet and Medicinal Cultures`}>Gourmet and Medicinal Cultures</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/Live Plants`}>Live Plants</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/Seeds`}>Seeds</Link>
            </MenuItem>
            <MenuItem>
            <Link to={`/category/Lab Supplies`}>Lab Supplies</Link>
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
              {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </Badge>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
