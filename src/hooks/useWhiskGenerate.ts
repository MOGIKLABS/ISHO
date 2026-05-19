'use client';

import { useMutation } from '@tanstack/react-query';

interface GenerateRequest {
  stylePrompt: string;
  referenceImageUrls?: string[];
}

interface GenerateResponse {
  imageUrl: string | null;
}

async function fetchGeneration(
  req: GenerateRequest
): Promise<GenerateResponse> {
  const res = await fetch('/api/whisk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error ?? `API error ${res.status}`);
  }

  return res.json();
}

/**
 * Hook for triggering Whisk image generation.
 */
export function useWhiskGenerate() {
  return useMutation({
    mutationFn: fetchGeneration,
  });
}
