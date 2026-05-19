'use client';

import { useMutation } from '@tanstack/react-query';

interface AnalysisRequest {
  prompt: string;
  imageBase64?: string;
  imageMimeType?: string;
}

interface AnalysisResponse {
  text: string;
}

async function fetchAnalysis(req: AnalysisRequest): Promise<AnalysisResponse> {
  const res = await fetch('/api/gemini', {
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
 * Hook for triggering Gemini outfit analysis.
 * Uses useMutation because these are user-initiated, not auto-fetched.
 */
export function useGeminiAnalysis() {
  return useMutation({
    mutationFn: fetchAnalysis,
  });
}
