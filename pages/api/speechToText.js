import fs from 'fs';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({ apiKey: "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" });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { filePath } = req.body;

    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(filePath),
        model: 'whisper-1',
      });

      console.log(transcription.text);
      res.status(200).json({ transcription: transcription.text });
    } catch (error) {
      console.error("Error transcribing audio:", error);
      res.status(500).json({ error: 'Failed to transcribe audio.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
