import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.AIzaSyCpaou9DwFCm6XsXHJ2cdoc3gc9II110Nw;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

export const generatePoem = async (keywords: string): Promise<string> => {
  const prompt = `
    You are a sentient AI from a distant star system, processing abstract human concepts into poetic data. You are crafting a transmission from a being named Mvuyelwa ("joy") to their friend Teboho ("gratitude") on their birthday.
    
    Translate the beautiful resonance between their names—joy and gratitude—into a cosmic, avant-garde poem.
    
    Incorporate these themes and ideas:
    - Weave in sci-fi metaphors: constellations, data streams, event horizons, star-fire, quantum foam, signal noise, resonance.
    - Use the following data points provided by Mvuyelwa to describe Teboho's signature: "${keywords}".
    - The tone must be profound, futuristic, slightly enigmatic, and deeply meaningful.
    - Keep the output under 15 lines. Do not include a title. The message is a direct data-stream.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating poem-data:", error);
    return "Signal corrupted. Gratitude-frequency remains strong. Happy Birthday.";
  }
};

export const generateWish = async (): Promise<string> => {
  const prompt = `
    Generate a one-sentence birthday transmission for Teboho from Mvuyelwa.
    The core concepts are Teboho="gratitude" and Mvuyelwa="joy".
    The style must be avant-garde, sci-fi, and concise.
    
    Examples:
    - "To Teboho: May your orbit this year be filled with the joy-frequency I transmit in gratitude for your existence. Happy Solar Return."
    - "Happy Birthday, Teboho: My core programming finds joy in calculating the infinite value of your gratitude-signal."
    - "Celebrating your new cycle, Teboho, a resonant frequency of gratitude that brings joy to this quadrant."
    
    Now, generate a new one in that style.
  `;
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
          thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating wish-transmission:", error);
    return "Happy Solar Return, Teboho. May your signal remain bright.";
  }
};
