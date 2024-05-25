SettingsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import { DatabaseService } from '../services/DatabaseService';

const SettingsScreen = () => {
  const [remindersEnabled, setRemindersEnabled] = useState(false);

  useEffect(() => {
    // Fetch user settings from the database and update the state
    const fetchUserSettings = async () => {
      try {
        const userSettings = await DatabaseService.getUserSettings();
        setRemindersEnabled(userSettings.remindersEnabled);
      } catch (error) {
        console.error('Error fetching user settings:', error);
      }
    };

    fetchUserSettings();
  }, []);

  const toggleReminders = async () => {
    try {
      // Toggle the reminders setting in the database
      await DatabaseService.updateUserSettings({ remindersEnabled: !remindersEnabled });
      setRemindersEnabled((prev) => !prev);
    } catch (error) {
      console.error('Error updating reminders setting:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Enable Reminders</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={remindersEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleReminders}
          value={remindersEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
});

export default SettingsScreen;