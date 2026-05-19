/**
 * Whisk image generation client.
 * Server-side only -- import in API routes, not client code.
 */

const WHISK_ENDPOINT = process.env.WHISK_API_ENDPOINT ?? '';

interface WhiskRequest {
  stylePrompt: string;
  referenceImageUrls?: string[];
}

interface WhiskResponse {
  imageUrl: string | null;
  error?: string;
}

export async function generateWithWhisk(
  req: WhiskRequest
): Promise<WhiskResponse> {
  if (!WHISK_ENDPOINT) {
    return {
      imageUrl: null,
      error: 'WHISK_API_ENDPOINT is not configured.',
    };
  }

  try {
    const res = await fetch(WHISK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: req.stylePrompt,
        references: req.referenceImageUrls ?? [],
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      return { imageUrl: null, error: `Whisk API ${res.status}: ${errBody}` };
    }

    const data = await res.json();
    return { imageUrl: data?.imageUrl ?? null };
  } catch (err) {
    return {
      imageUrl: null,
      error: err instanceof Error ? err.message : 'Unknown Whisk error',
    };
  }
}
