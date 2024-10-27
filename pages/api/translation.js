import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({ apiKey: "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" });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: `Translate the following text to English: "${text}"`,
          },
        ],
      });

      res.status(200).json({ translation: completion.choices[0].message.content });
    } catch (error) {
      console.error("Error translating text:", error);
      res.status(500).json({ error: 'Failed to translate text.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}