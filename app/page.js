"use client"
import Link from "next/link";
import AudioProcessor from './callAPIs.jsx';

const HomePage = () => {
  return (
    <div>
      <h1>Audio Processing App</h1>
      <AudioProcessor />
      <p id="transcription"></p>
      <p id="translation"></p>
      <p id="audio"></p> 
    </div>
  );
};

export default HomePage;
