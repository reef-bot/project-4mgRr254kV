screens/HomeScreen.js:

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { DatabaseService } from '../services/DatabaseService';
import { ColorSpectrum } from '../components/ColorSpectrum';
import { EmotionLog } from '../components/EmotionLog';
import { CalendarService } from '../services/CalendarService';

const HomeScreen = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DatabaseService.getEmotions();
        setEmotions(data);
      } catch (error) {
        console.error('Error fetching emotions: ', error);
      }
    };

    fetchData();
  }, []);

  const handleLogEmotion = (emotion) => {
    try {
      DatabaseService.logEmotion(emotion);
      setEmotions([...emotions, emotion]);
    } catch (error) {
      console.error('Error logging emotion: ', error);
    }
  };

  const handleSetReminder = (date) => {
    try {
      CalendarService.setReminder(date);
    } catch (error) {
      console.error('Error setting reminder: ', error);
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <ColorSpectrum emotions={emotions} />
      <EmotionLog onLogEmotion={handleLogEmotion} />
      <Button title="Set Reminder" onPress={() => handleSetReminder(new Date())} />
    </View>
  );
};

export default HomeScreen;