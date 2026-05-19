/**
 * Server-side Gemini client.
 * Only import this in API routes or server components -- never in client code.
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? '';

if (!GEMINI_API_KEY && process.env.NODE_ENV === 'production') {
  console.warn('[Ishō] GEMINI_API_KEY is not set. AI features will fail.');
}

interface GeminiRequest {
  prompt: string;
  imageBase64?: string;
  imageMimeType?: string;
}

interface GeminiResponse {
  text: string;
  error?: string;
}

export async function askGemini({
  prompt,
  imageBase64,
  imageMimeType,
}: GeminiRequest): Promise<GeminiResponse> {
  try {
    const parts: Record<string, unknown>[] = [
      { text: prompt },
    ];

    if (imageBase64 && imageMimeType) {
      parts.unshift({
        inline_data: {
          mime_type: imageMimeType,
          data: imageBase64,
        },
      });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts }],
        }),
      }
    );

    if (!res.ok) {
      const errBody = await res.text();
      return { text: '', error: `Gemini API ${res.status}: ${errBody}` };
    }

    const data = await res.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return { text };
  } catch (err) {
    return {
      text: '',
      error: err instanceof Error ? err.message : 'Unknown Gemini error',
    };
  }
}
