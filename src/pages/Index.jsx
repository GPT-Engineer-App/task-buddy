import React, { useState } from "react";
import { Box, Heading, VStack, Input, IconButton, HStack, Text, StackDivider, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddClick = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Cannot add empty todo!",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleDeleteClick = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center">Todo App</Heading>
        <HStack>
          <Input placeholder="Add a new task..." value={inputValue} onChange={handleInputChange} />
          <IconButton icon={<FaPlus />} onClick={handleAddClick} aria-label="Add todo" />
        </HStack>
        <VStack divider={<StackDivider />} borderColor="gray.100" borderWidth="2px" p={4} borderRadius="md" boxShadow="md" spacing={4}>
          {todos.map((todo, index) => (
            <HStack key={index} justifyContent="space-between">
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteClick(index)} aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
