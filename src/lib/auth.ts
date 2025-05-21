import { toast } from 'react-hot-toast';

export interface User {
  id: string;
  email: string;
  fullName: string;
}

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// Simple in-memory storage
const users = new Map<string, { user: User; password: string }>();
let currentUser: User | null = null;

export const auth = {
  signUp: async ({ email, password, fullName }: SignUpData) => {
    if (users.has(email)) {
      throw new Error('User already exists');
    }

    const user: User = {
      id: crypto.randomUUID(),
      email,
      fullName,
    };

    users.set(email, { user, password });
    return { user };
  },

  signIn: async ({ email, password }: SignInData) => {
    const userRecord = users.get(email);
    
    if (!userRecord || userRecord.password !== password) {
      throw new Error('Invalid email or password');
    }

    currentUser = userRecord.user;
    return { user: userRecord.user };
  },

  signOut: async () => {
    currentUser = null;
  },

  getCurrentUser: () => currentUser,

  resetPassword: async (email: string) => {
    if (!users.has(email)) {
      throw new Error('User not found');
    }
    toast.success('Password reset instructions sent to your email');
  },

  updatePassword: async (newPassword: string) => {
    if (!currentUser) {
      throw new Error('No user logged in');
    }
    
    const userRecord = users.get(currentUser.email);
    if (userRecord) {
      users.set(currentUser.email, { ...userRecord, password: newPassword });
    }
  },
};