import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
  Text,
} from '@chakra-ui/react';
import { login } from '../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    if (email && password) {
      dispatch(login({ email, name: email.split('@')[0] }));
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from);
      
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      bg="gray.50"
    >
      <Box 
        w="full" 
        maxW="md" 
        p={8} 
        borderWidth={1} 
        borderRadius="lg"
        bg="white"
        boxShadow="xl"
      >
        <VStack spacing={6}>
          <Heading size="lg">Welcome Back</Heading>
          <Text color="gray.600">Sign in to access your dashboard</Text>
          
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  size="lg"
                />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  size="lg"
                />
              </FormControl>
              
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                mt={4}
              >
                Sign In
              </Button>
            </VStack>
          </form>

          <Text color="gray.600" fontSize="sm">
            This is a demo application. Use any email and password to sign in.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;