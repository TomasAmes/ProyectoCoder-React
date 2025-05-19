import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from "./layouts/MainLayout";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    <ChakraProvider>
      {/*<ItemListContainer welcome="Triple B: 'Buenos, Bonitos y Baratos'"/> */}
      <RouterProvider router = {router} />
    </ChakraProvider>
  );
};


export default App;
