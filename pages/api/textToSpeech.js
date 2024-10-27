import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({ apiKey: "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" });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const speech = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: text,
      });

      // Create and save the audio file
      const speechFilePath = path.resolve('./speech.mp3');
      const buffer = Buffer.from(await speech.arrayBuffer());
      await fs.promises.writeFile(speechFilePath, buffer);

      res.status(200).json({ message: 'Audio file created successfully', filePath: speechFilePath });
    } catch (error) {
      console.error("Error generating audio:", error);
      res.status(500).json({ error: 'Failed to generate audio.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}