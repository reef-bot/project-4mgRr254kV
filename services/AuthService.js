Filename: AuthService.js

import firebase from 'firebase';

const AuthService = {
  signUp: async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return { success: true, message: 'User created successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  signIn: async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return { success: true, message: 'User signed in successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  signOut: async () => {
    try {
      await firebase.auth().signOut();
      return { success: true, message: 'User signed out successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  resetPassword: async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return { success: true, message: 'Password reset email sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};

export default AuthService;