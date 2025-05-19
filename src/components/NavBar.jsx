import { Flex, Text, Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
  

const NavBar = () => {

  const navigate = useNavigate()

    return (
      <Flex 
        alignItems="center" 
        justifyContent="space-between" 
        width="100vw" 
        padding="10px"
        border="2px"
        >
            <Menu>
                <MenuButton as={Button}>
                Lentes
                </MenuButton>
                <MenuList>
                <MenuItem>America</MenuItem>
                <MenuItem>Europa</MenuItem>
                <MenuItem>Asia</MenuItem>
                </MenuList>
            </Menu>
            <Text fontWeight="bold" fontSize="xl" onClick = {() => navigate("/")} cursor = {'pointer'}>Logo Tienda</Text>
            <CartWidget />
      </Flex>
    );
  };
  
  export default NavBar;