const { useState } = require('react');
import ScreenB from "./components/ScreenB/ScreenB";
import './globals.css';
import { FaPaperPlane } from 'react-icons/fa';

const AudioProcessor = () => {
  const [result, setResult] = useState({ transcription: '', translation: '', audioFilePath: '' });

  const handleProcess = async () => {
    try {
      const transcriptionResponse = await fetch('./api/speech-to-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath: './public/recording/speech.webm' }),
      });

      if (!transcriptionResponse.ok) {
        const errorMessage = await transcriptionResponse.text(); // Read the error message
        console.error('Transcription API response:', transcriptionResponse.status, errorMessage);
        throw new Error(`Transcription error: ${transcriptionResponse.statusText}`);;
      }

      const transcriptionData = await transcriptionResponse.json();
      console.log('Transcription Data:', transcriptionData);

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

      setResult({
        transcription: transcriptionData.transcription,
        translation: translationData.translation,
        audioFilePath: ttsData.audioFilePath, // Assume response includes audio file path
      });
    } catch (error) {
      console.error("Error processing audio:", error);
    }
  };

  // const ScreenB = ({transcription, translation}) => {
  return (
    <div className="fields">
      <ScreenB translation={result.translation}/>
      <p className="textField dropdown-content text-to-customer bottom-space" id="transcription"><b>You: </b>{result.transcription}</p>
      <button 
  className="send w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-purple-500"
  onClick={handleProcess}
>
  <FaPaperPlane size={20} />
</button>
      <p className="textField dropdown-content text-to-customer" id="translation"><b>Client: </b>{result.translation}</p>
    </div>


  );
};

export default AudioProcessor;