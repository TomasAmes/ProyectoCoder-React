import {
  Box,
  Heading,
  Alert,
  AlertIcon,
  VStack,
  Flex,
  Text,
  HStack,
  IconButton,
  Spacer,
  Divider,
  Image,
  Button,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart: cartState,
    deleteProductFromCart,
    addProductToCart,
    removeProductFromCart,
    getTotalPrice, 
  } = useContext(CartContext);

  const total = getTotalPrice();

  const handleDeleteItem = (itemId) => {
    deleteProductFromCart(itemId);
  };

  return (
    <Box p={6} maxWidth="900px" mx="auto" minHeight="80vh" bg="gray.50" borderRadius="lg" shadow="xl">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="blue.800" fontWeight="extrabold">
        Tu Carrito de Compras
      </Heading>

      {cartState.length === 0 ? (
        <Alert status="info" borderRadius="md" variant="solid" bg="blue.500" color="white" mt={10}>
          <AlertIcon />
          ¡Tu carrito está vacío! Explora nuestros productos y añade algunos.
        </Alert>
      ) : (
        <VStack spacing={6} align="stretch">
          {cartState.map((item) => (
            <Flex
              key={item.id}
              p={5}
              borderWidth="1px"
              borderRadius="xl"
              alignItems="center"
              boxShadow="lg"
              bg="white"
              _hover={{ transform: "translateY(-3px)", boxShadow: "2xl" }}
              transition="all 0.3s ease-in-out"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                boxSize="130px"
                objectFit="cover"
                borderRadius="lg"
                mr={6}
                border="2px solid"
                borderColor="gray.200"
              />
              <Box flex="1">
                <Text fontSize="2xl" fontWeight="bold" color="teal.700" mb={1}>
                  {item.title}
                </Text>
                <HStack spacing={8} mt={3} alignItems="center">
                  <Text fontSize="xl" color="green.700" fontWeight="bold">
                    Precio: ${Number(item.price).toFixed(2)}
                  </Text>
                  <HStack spacing={2} bg="gray.100" p={2} borderRadius="md">
                    <IconButton
                      aria-label="Disminuir cantidad"
                      icon={<MinusIcon />}
                      size="md"
                      onClick={() => removeProductFromCart(item)}
                      isDisabled={item.quantity === 1}
                      colorScheme="red"
                      variant="outline"
                    />
                    <Text fontSize="xl" fontWeight="semibold" color="gray.800">
                      {item.quantity}
                    </Text>
                    <IconButton
                      aria-label="Aumentar cantidad"
                      icon={<AddIcon />}
                      size="md"
                      onClick={() => addProductToCart(item)}
                      isDisabled={item.quantity >= item.stock}
                      colorScheme="green"
                      variant="outline"
                    />
                  </HStack>
                </HStack>
              </Box>
              <Spacer />
              <VStack spacing={2} alignItems="flex-end">
                <Text fontSize="2xl" fontWeight="bold" color="purple.800">
                  Subtotal: ${(Number(item.price) * item.quantity).toFixed(2)}
                </Text>
                <IconButton
                  aria-label="Eliminar producto"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="solid"
                  size="lg" 
                  onClick={() => handleDeleteItem(item.id)}
                  _hover={{ bg: "red.600", transform: "scale(1.05)" }}
                />
              </VStack>
            </Flex>
          ))}
          <Divider borderColor="blue.300" borderWidth="2px" my={6} />
          <Flex alignItems="center" justifyContent="flex-end" pr={5}>
            <Text fontSize="4xl" fontWeight="extrabold" color="blue.900">
              Total Final: ${total.toFixed(2)}
            </Text>
          </Flex>
        </VStack>
      )}

      {cartState.length > 0 && (
        <Button
          mt={10}
          size="lg"
          width="full"
          colorScheme="blue"
          onClick={() => navigate("/checkout")}
          rightIcon={<AddIcon />}
          _hover={{ bg: "blue.700", transform: "translateY(-3px)", boxShadow: "xl" }}
          transition="all 0.3s ease-in-out"
          fontWeight="bold"
          letterSpacing="wide"
        >
          Proceder al Pago
        </Button>
      )}

      {cartState.length === 0 && (
        <Button
          mt={8}
          size="lg"
          width="full"
          colorScheme="teal"
          onClick={() => navigate("/")}
          variant="outline"
          leftIcon={<AddIcon />}
        >
          ¡Explorar Productos!
        </Button>
      )}
    </Box>
  );
};

export default Cart;
