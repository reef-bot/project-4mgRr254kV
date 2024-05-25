src/components/ColorSpectrum.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRandomColor } from '../utils/ColorUtils';

const ColorSpectrum = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColorSpectrum();
  }, []);

  const generateColorSpectrum = () => {
    const newColors = [];
    for (let i = 0; i < 5; i++) {
      newColors.push(getRandomColor());
    }
    setColors(newColors);
  };

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.colorBox, { backgroundColor: color }]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ColorSpectrum;