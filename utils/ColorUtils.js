// File: utils/ColorUtils.js

const ColorUtils = {
  generateColorSpectrum: (emotions) => {
    const colorSpectrum = [];
    
    emotions.forEach((emotion) => {
      let color = '';
      
      switch (emotion) {
        case 'happy':
          color = 'yellow';
          break;
        case 'sad':
          color = 'blue';
          break;
        case 'angry':
          color = 'red';
          break;
        case 'calm':
          color = 'green';
          break;
        default:
          color = 'grey';
      }
      
      colorSpectrum.push(color);
    });
    
    return colorSpectrum;
  },
  
  validateColor: (color) => {
    const validColors = ['yellow', 'blue', 'red', 'green'];
    
    if (validColors.includes(color)) {
      return true;
    } else {
      return false;
    }
  }
};

export default ColorUtils;