import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  if (!global.crypto) {
    const { getRandomValues } = require('react-native-get-random-values');
    global.crypto = {
      getRandomValues,
      subtle: undefined as any,
      randomUUID: undefined as any,
    };
  }
  
  if (!global.crypto.getRandomValues) {
    const { getRandomValues } = require('react-native-get-random-values');
    global.crypto.getRandomValues = getRandomValues;
  }
} 