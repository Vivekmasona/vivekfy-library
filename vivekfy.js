// vivekfy.js

const axios = require('axios');
const fs = require('fs');

/**
 * Function to download audio from YouTube URL using a custom API
 * @param {string} url - The YouTube video URL
 * @param {string} outputFilePath - The path where the audio file will be saved
 * @returns {Promise} - Resolves when the download is complete
 */
async function downloadAudio(url, outputFilePath) {
  try {
    // Construct the API URL using the provided YouTube URL
    const apiUrl = `https://vivekfy.vercel.app/vivekfy?url=${encodeURIComponent(url)}`;

    // Call the API to get the audio stream URL
    const response = await axios.get(apiUrl);

    if (response.data && response.data.audio_url) {
      const audioUrl = response.data.audio_url;

      // Download the audio stream from the obtained URL
      const audioStream = await axios.get(audioUrl, { responseType: 'stream' });

      // Save the audio stream to a local file
      const writer = fs.createWriteStream(outputFilePath);
      audioStream.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    } else {
      throw new Error('Audio URL not found in API response.');
    }
  } catch (error) {
    console.error('Error downloading audio:', error);
    throw error;
  }
}

// Exports
module.exports = {
  downloadAudio,
};
