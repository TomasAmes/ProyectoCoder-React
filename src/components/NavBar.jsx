import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Stack,
  Badge,
  Text,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect, useMemo } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config/firebase";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cart: cartState,
  } = useContext(CartContext);

  const itemsCount = useMemo(() => {
    return cartState.reduce((acc, item) => acc + 1, 0); 
  }, [cartState]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      zIndex="1000"
      bg={scrolled ? "white" : "whiteAlpha.900"}
      boxShadow={scrolled ? "sm" : "none"}
      py={scrolled ? 2 : 4}
      transition="all 0.3s"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        align="center"
        justify="space-between"
      >
        <ChakraLink
          as={RouterLink}
          to="/"
          display="flex"
          alignItems="center"
          fontWeight="bold"
          fontSize="xl"
          color="blue.600"
          _hover={{ textDecoration: "none", color: "blue.800" }}
        >
          <Text fontSize="2xl" mr={2}>🛍️</Text> Mi Tienda
        </ChakraLink>
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "chakra-text text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                : "chakra-text text-gray-700 hover:text-blue-600"
            }
          >
            Inicio
          </NavLink>
          {!loading &&
            categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "chakra-text text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                    : "chakra-text text-gray-700 hover:text-blue-600"
                }
              >
                {cat.name}
              </NavLink>
            ))}
        </HStack>
        <Flex align="center">
          <ChakraLink as={RouterLink} to="/cart" position="relative" mr={4}>
            <CartWidget />
            {itemsCount > 0 && (
              <Badge
                colorScheme="red"
                borderRadius="full"
                fontSize="0.7em"
                position="absolute"
                top="-1"
                right="-1"
                px={2}
              >
                {itemsCount}
              </Badge>
            )}
          </ChakraLink>
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>
      {isOpen && (
        <Box
          mt={2}
          px={4}
          py={4}
          bg="white"
          shadow="md"
          display={{ md: "none" }}
        >
          <Stack spacing={4} align="center">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Inicio
            </NavLink>
            {!loading &&
              categories.map((cat) => (
                <NavLink
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }
                >
                  {cat.name}
                </NavLink>
              ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
