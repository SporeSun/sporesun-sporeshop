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
            <MenuItem>
              Psilocybe Cubensis Spores
            </MenuItem>
            <MenuItem>
              Exotic Psilocybe Spores
            </MenuItem>
            <MenuItem>
              Gourmet and Medicinal Cultures
            </MenuItem>
            <MenuItem>
              Live Plants
            </MenuItem>
            <MenuItem>
              Seeds
            </MenuItem>
            <MenuItem>
              Lab Supplies
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

    const categoryData = [
        {
            id: 1,
            link: '/psilocybe-cubensis',
            description: "Psilocybe Cubensis Spores",
        },
        {
            id: 2,
            link: '/exotic-psilocybe',
            description: "Exotic Psilocybe Spores",
        },
        {
            id: 3,
            link: '/gourmet-and-medicinal-cultures',
            description: "Gourmet and Medicinal Cultures",
        },
        {
            id: 4,
            link: '/live-plants',
            description: "Live Plants",
        },
        {
            id: 5,
            link: '/seeds',
            description: "Seeds",
        },
        {
            id: 6,
            link: '/lab-supplies',
            description: "Lab Supplies",
        }
    ];


    return (
        <div className="header">
            <Box bg="purple" p={2} color="white">
                <Flex>
                    <Image src="https://i.imgur.com/ec0v0aG.jpeg" alt="logo" objectFit="cover" maxW="200px" className="header-image"/>
                    <Spacer />
                    <Link to={"/"}>
                    <Heading size="2xl" pt={7} className="heading">Spores 'n More</Heading>
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
                            {categoryData.map((category) => (
                              <div key={category.id}>  
                            <Link to={category.link}>
                            <MenuItem style={{ color: 'black' }}>
                                {category.description}
                            </MenuItem>
                            </Link>
                            </div>
                            ))}
                        </MenuList>
                    </Menu>
                    <Box cursor="pointer">
                        <Icon size="xl" as={FontAwesomeIcon} icon={faShoppingCart} pt={7} pr={5} className="cart"/>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
};

export default Header;
