import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const backgroundSpring = useSpring({
    from: { height: '0%' },
    to: { height: `${Math.min(count * 2, 100)}%` },
    config: {
      tension: 120,
      friction: 14,
      mass: 1,
      clamp: true,
      velocity: 0,
      precision: 0.01,
      easing: (t: number) => t * t * (3 - 2 * t), // Bezier curve approximation
    },
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box position="relative" h="400px" overflow="hidden">
      <animated.div
        style={{
          ...backgroundSpring,
          position: 'absolute',
          width: '100%',
          bottom: 0,
          background: 'linear-gradient(to top, #4299E1, #90CDF4)',
          zIndex: -1,
        }}
      />
      
      <VStack
        spacing={6}
        justify="center"
        align="center"
        h="100%"
        position="relative"
        zIndex={1}
      >
        <Text fontSize="6xl" fontWeight="bold" color="white" textShadow="0 2px 4px rgba(0,0,0,0.2)">
          {count}
        </Text>
        
        <Box display="flex" gap={4}>
          <Button
            leftIcon={<Plus size={20} />}
            colorScheme="blue"
            onClick={handleIncrement}
            size="lg"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Increment
          </Button>
          
          <Button
            leftIcon={<Minus size={20} />}
            colorScheme="blue"
            onClick={handleDecrement}
            isDisabled={count === 0}
            size="lg"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Decrement
          </Button>
          
          <Button
            leftIcon={<RotateCcw size={20} />}
            colorScheme="blue"
            variant="outline"
            onClick={handleReset}
            size="lg"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Reset
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Counter;