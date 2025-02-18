import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { RootState } from '../store/store';
import Counter from './Counter';
import RichTextEditor from './RichTextEditor';

const Dashboard = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const user = useSelector((state: RootState) => state.auth.user);

  // Mock data for the chart
  const data = [
    { name: 'Jan', visits: 400 },
    { name: 'Feb', visits: 300 },
    { name: 'Mar', visits: 600 },
    { name: 'Apr', visits: 800 },
    { name: 'May', visits: 700 },
  ];

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Welcome, {user?.name || 'User'}!</Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
          {/* Counter Section */}
          <Box
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
            height="400px"
          >
            <Counter />
          </Box>

          {/* User Profile Chart */}
          <Box
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
            height="400px"
          >
            <Heading size="md" mb={4}>Profile Activity</Heading>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* User Information */}
          <Box
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
          >
            <Heading size="md" mb={4}>User Information</Heading>
            {userData ? (
              <VStack align="stretch" spacing={3}>
                <Text><strong>Name:</strong> {userData.name}</Text>
                <Text><strong>Email:</strong> {userData.email}</Text>
                <Text><strong>Address:</strong> {userData.address}</Text>
                <Text><strong>Phone:</strong> {userData.phone}</Text>
              </VStack>
            ) : (
              <Text>No user data available</Text>
            )}
          </Box>

          {/* Rich Text Editor */}
          <Box
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
          >
            <Heading size="md" mb={4}>Notes</Heading>
            <RichTextEditor
              content={`<p>Welcome ${userData?.name || 'User'}! Start editing your notes here...</p>`}
            />
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Dashboard;