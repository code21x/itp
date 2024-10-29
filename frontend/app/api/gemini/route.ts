import type { NextApiRequest, NextApiResponse } from "next";

type GeminiResponse = {
  reply: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<GeminiResponse>) {
  if (req.method === "POST") {
    const { input } = req.body;

    try {
      // Replace with your actual Gemini API endpoint and API key
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      res.status(200).json({ reply: data.reply || "No response available." });
    } catch (error) {
      console.error("Gemini API error:", error);
      res.status(500).json({ reply: "Server error. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
