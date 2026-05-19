import { NextRequest, NextResponse } from 'next/server';
import { askGemini } from '@/lib/gemini';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, imageBase64, imageMimeType } = body;

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'A prompt is required.' },
        { status: 400 }
      );
    }

    const result = await askGemini({ prompt, imageBase64, imageMimeType });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({ text: result.text });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
