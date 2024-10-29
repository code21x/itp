import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import aggregateHandler from './aggregateResearch';

export default async function generateslideHandler(query: string) {
  const { data } = await aggregateHandler(query);



  try {
    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const geminiApiKey = process.env.GEMINI_API_KEY ?? "";

    const response = await axios.post(
      geminiApiUrl,
      { data, tokenLimit: 1500000 },
      {
        headers: {
          'Authorization': `Bearer ${geminiApiKey}`,
        },
      }
    );

    const slides = response.data;
    return { slides };
  } catch (error) {
    return {
        error
    }
  }
}
