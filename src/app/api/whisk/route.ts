import { NextRequest, NextResponse } from 'next/server';
import { generateWithWhisk } from '@/lib/whisk';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { stylePrompt, referenceImageUrls } = body;

    if (!stylePrompt || typeof stylePrompt !== 'string') {
      return NextResponse.json(
        { error: 'A stylePrompt is required.' },
        { status: 400 }
      );
    }

    const result = await generateWithWhisk({ stylePrompt, referenceImageUrls });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({ imageUrl: result.imageUrl });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
