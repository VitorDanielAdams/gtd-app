const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Configuração do alias @
config.resolver.alias = {
    '@': path.resolve(__dirname, 'src'),
};

module.exports = config; 