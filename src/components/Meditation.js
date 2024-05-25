import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

const Meditation = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/meditation_audio.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Text>Press the button to start guided meditation</Text>
      <Button title="Start Meditation" onPress={playSound} />
    </View>
  );
};

export default Meditation;