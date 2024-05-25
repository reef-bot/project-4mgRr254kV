import React from 'react';
import { View, Text, Button } from 'react-native';

const ShareScreen = () => {
  const shareSpectrum = () => {
    // Logic to share color spectrum with friends and family
    console.log('Sharing color spectrum...');
  };

  return (
    <View>
      <Text>Share your color spectrum with friends and family!</Text>
      <Button title="Share" onPress={shareSpectrum} />
    </View>
  );
};

export default ShareScreen;