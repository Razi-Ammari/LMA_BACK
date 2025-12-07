// Example React integration for LMA DocGuide Backend API
// Place this in your React project (e.g., src/services/api.js)

const API_BASE_URL = "http://localhost:5000/api";

// Auth API calls
export const authAPI = {
  // Signup
  signup: async (name, email, password, role = "officer") => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    return await response.json();
  },

  // Login
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  },

  // Logout
  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return await response.json();
  },
};

// Assistant API calls (protected)
export const assistantAPI = {
  // Send message to AI assistant
  sendMessage: async (message) => {
    const response = await fetch(`${API_BASE_URL}/assistant/message`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    
    return await response.json();
  },

  // Get conversation history
  getHistory: async () => {
    const response = await fetch(`${API_BASE_URL}/assistant/history`, {
      method: "GET",
      credentials: "include",
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch history");
    }
    
    return await response.json();
  },
};

// Example usage in React component:
/*
import { authAPI, assistantAPI } from './services/api';

// In your signup component:
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const data = await authAPI.signup(name, email, password, role);
    if (data.user) {
      // Save user to context/state
      setUser(data.user);
      navigate('/dashboard');
    }
  } catch (error) {
    console.error('Signup failed:', error);
    setError('Signup failed. Please try again.');
  }
};

// In your login component:
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const data = await authAPI.login(email, password);
    if (data.user) {
      setUser(data.user);
      navigate('/dashboard');
    }
  } catch (error) {
    console.error('Login failed:', error);
    setError('Invalid credentials');
  }
};

// In your AI assistant chat component:
const handleSendMessage = async () => {
  try {
    const data = await assistantAPI.sendMessage(userMessage);
    setMessages([...messages, 
      { role: 'user', content: userMessage },
      { role: 'assistant', content: data.reply }
    ]);
  } catch (error) {
    console.error('Failed to send message:', error);
    setError('Failed to send message. Please try again.');
  }
};
*/
