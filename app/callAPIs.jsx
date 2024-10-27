// Inside your React component
const { useState } = require('react');

const AudioProcessor = () => {
  const [result, setResult] = useState({ transcription: '', translation: '', audioFilePath: '' });
  
  const handleProcess = async () => {
    try {
      // Make the API call to your transcription route
      const transcriptionResponse = await fetch('./api/speech-to-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath: './app/audio/combiende.mp3' }),
      });

      if (!transcriptionResponse.ok) {
        const errorMessage = await transcriptionResponse.text(); // Read the error message
        console.error('Transcription API response:', transcriptionResponse.status, errorMessage);
        throw new Error(`Transcription error: ${transcriptionResponse.statusText}`);;
      }

      const transcriptionData = await transcriptionResponse.json();
      console.log('Transcription Data:', transcriptionData);

      // Assuming you have a translation function set up in your API
      const translationResponse = await fetch('/api/translation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcriptionData.transcription }),
      });

      const translationData = await translationResponse.json();
      console.log('Translation Data:', translationData);

      // Update the state with the results
      setResult({
        transcription: transcriptionData.transcription,
        translation: translationData.translatedText, // Adjust based on your response structure
        audioFilePath: './audio/combiende.mp3', // Update accordingly
      });
    } catch (error) {
      console.error("Error processing audio:", error);
    }
  };

  return (
    <div>
      <button onClick={handleProcess}>Process Audio</button>
      <p>Transcription: {result.transcription}</p>
      <p>Translation: {result.translation}</p>
      <p>Audio File Path: {result.audioFilePath}</p>
    </div>
  );
};

export default AudioProcessor;