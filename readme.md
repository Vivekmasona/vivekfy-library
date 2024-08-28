
# Vivekfy

`vivekfy` ek simple library hai jo ki YouTube URLs se audio stream ko download karta hai.

## Installation

```bash
npm install vivekfy


use this code for access vivekfy

const vivekfy = require('vivekfy');

// YouTube URL to download
const youtubeUrl = 'https://youtu.be/7a7r0uTYxX4?si=d0JFXGCp8r9XyaXR';
const outputPath = './audio.mp3';

// Download the audio
vivekfy.downloadAudio(youtubeUrl, outputPath)
  .then(() => console.log('Download complete!'))
  .catch(err => console.error('Download failed:', err));

