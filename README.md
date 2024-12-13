# Connectify - NewHacks 2024

## Inspiration
Imagine you’re on the line with customer support, trying to resolve a billing error that’s been causing you stress for weeks. As you describe the issue, you sense the agent’s hesitation—their responses don’t fully address your concerns, and you quickly realize it’s because English isn’t your first language, and they’re struggling to understand you. Frustration mounts on both sides, and you hang up feeling defeated, the problem still unresolved. 

Our team began with scenarios like this in mind, recognizing that language barriers are a common challenge for many customers navigating telecommunications support. This mission drives us to build a customer support system that empowers every individual to communicate confidently, ensuring that all customers feel understood and respected, no matter the language they’re most comfortable using.

## What it does
Our tool enables speech detection in any foreign language—such as French, Spanish, Chinese, and more—and converts this speech into text, translating it instantly into English. The translation is then provided to the customer support agent both through audio and text, allowing them to understand and communicate with clients more effectively, bridging language gaps and enhancing the overall support experience.

## How we built it
We created the tool as a Next.js React app, integrating OpenAI APIs for seamless audio transcription, translation, and text-to-speech functionalities. On the frontend, we used React and Tailwind CSS, while the backend was developed with Node.js and JavaScript/TypeScript. For speech-to-text and text-to-speech processing, we utilized OpenAI’s Whisper-1, and for accurate translation, we incorporated GPT-4.

## Learn more
https://devpost.com/software/connectify-jq1ml4
