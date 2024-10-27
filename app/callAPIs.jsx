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
      const translationResponse = await fetch('./api/translations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcriptionData.transcription }),
      });

      const translationData = await translationResponse.json();
      console.log('Translation Data:', translationData);

      const ttsResponse = await fetch('./api/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: translationData.translation }),
      });

      if (!ttsResponse.ok) {
        const errorMessage = await ttsResponse.text();
        console.error('Text-to-Speech API response:', ttsResponse.status, errorMessage);
        throw new Error(`Text-to-Speech error: ${ttsResponse.statusText}`);
      }

      const ttsData = await ttsResponse.json();
      console.log('Text-to-Speech Data:', ttsData);

      // Update state with results
      setResult({
        transcription: transcriptionData.transcription,
        translation: translationData.translation,
        audioFilePath: ttsData.audioFilePath, // Assume response includes audio file path
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