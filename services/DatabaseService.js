// File: services/DatabaseService.js

import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const DatabaseService = {
  async getUserData(userId) {
    try {
      const userDataRef = db.collection('users').doc(userId);
      const userData = await userDataRef.get();
      if (userData.exists) {
        return userData.data();
      } else {
        throw new Error('User data not found');
      }
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  async updateUserSettings(userId, settings) {
    try {
      const userDataRef = db.collection('users').doc(userId);
      await userDataRef.update({ settings });
      console.log('User settings updated successfully');
    } catch (error) {
      console.error('Error updating user settings:', error);
    }
  },

  async logEmotion(userId, emotionData) {
    try {
      const emotionsRef = db.collection('emotions').doc(userId);
      await emotionsRef.set(emotionData);
      console.log('Emotion logged successfully');
    } catch (error) {
      console.error('Error logging emotion:', error);
    }
  },

  async getEmotions(userId) {
    try {
      const emotionsRef = db.collection('emotions').doc(userId);
      const emotions = await emotionsRef.get();
      if (emotions.exists) {
        return emotions.data();
      } else {
        throw new Error('Emotion data not found');
      }
    } catch (error) {
      console.error('Error getting emotion data:', error);
      return null;
    }
  }
};

export default DatabaseService;