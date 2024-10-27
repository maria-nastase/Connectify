import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI();

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