import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Load initial state from localStorage
const loadInitialState = (): AuthState => {
  try {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      return JSON.parse(savedAuth);
    }
  } catch (error) {
    console.error('Error loading auth from localStorage:', error);
  }
  return {
    isAuthenticated: false,
    user: null,
  };
};

const initialState: AuthState = loadInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // Save to localStorage
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Remove from localStorage
      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;