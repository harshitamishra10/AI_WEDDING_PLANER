const stylePrompts = {
  "Cinematic Romance":
    "Create a cinematic romantic wedding scene with slow camera movement, soft golden lighting, dreamy atmosphere, elegant motion, emotional storytelling, realistic details and professional wedding film quality.",

  "Traditional Wedding":
    "Create a beautiful traditional Indian wedding cinematic scene with elegant cultural atmosphere, realistic movement, warm lighting, graceful camera motion and professional wedding film quality.",

  "Emotional Memories":
    "Create an emotional cinematic wedding memory scene with gentle natural motion, heartfelt atmosphere, warm nostalgic lighting, subtle camera movement and touching, sincere storytelling.",

  "Bollywood Style":
    "Create a vibrant Bollywood-style wedding cinematic scene with energetic yet elegant motion, rich colorful lighting, dramatic camera movement, festive atmosphere and high-quality professional film style.",

  "Royal Wedding":
    "Create a luxurious royal wedding cinematic scene with grand elegant visuals, rich atmosphere, slow cinematic camera movement, graceful motion and premium wedding film quality.",

  "Soft & Dreamy":
    "Create a soft dreamy wedding cinematic scene with gentle movement, warm pastel lighting, romantic atmosphere, slow camera motion and emotional storytelling.",
};

const basePrompt =
  "Create a beautiful cinematic wedding video from this image. Add subtle natural motion, slow cinematic camera movement, soft golden lighting, elegant romantic atmosphere, realistic movement, professional wedding film style, emotional and dreamy mood, high quality.";

/**
 * Build the final prompt sent to the AI video provider for a given style.
 * Falls back to a sensible generic prompt if the style isn't recognized.
 */
export function generateCinematicPrompt(style) {
  return stylePrompts[style] || basePrompt;
}

export default generateCinematicPrompt;
