src/components/EmotionLog.js:

import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import moment from 'moment';
import { DatabaseService } from '../services/DatabaseService';

const EmotionLog = () => {
  const [emotion, setEmotion] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    // Fetch emotion log data from the database
    const fetchData = async () => {
      try {
        const data = await DatabaseService.getEmotionLog(date);
        if (data) {
          setEmotion(data.emotion);
        }
      } catch (error) {
        console.error('Error fetching emotion log:', error);
      }
    };

    fetchData();
  }, [date]);

  const saveEmotionLog = async () => {
    try {
      await DatabaseService.saveEmotionLog(date, emotion);
      console.log('Emotion log saved successfully');
    } catch (error) {
      console.error('Error saving emotion log:', error);
    }
  };

  return (
    <View>
      <Text>Date: {date}</Text>
      <TextInput
        placeholder="Enter your emotion"
        value={emotion}
        onChangeText={setEmotion}
      />
      <Button title="Save" onPress={saveEmotionLog} />
    </View>
  );
};

export default EmotionLog;