import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route 
              path="/counter" 
              element={
                <PrivateRoute>
                  <Counter />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/user-form" 
              element={
                <PrivateRoute>
                  <UserForm />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/editor" 
              element={
                <PrivateRoute>
                  <RichTextEditor content="<p>Start editing...</p>" />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;