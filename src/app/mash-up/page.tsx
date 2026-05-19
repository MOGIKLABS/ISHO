'use client';

import { ImageDropzone } from '@/components/ImageDropzone';
import { useState } from 'react';

export default function MashUpPage() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 animate-fade-in">
        <p className="lab-badge mb-2">Mash-up Studio</p>
        <h1 className="font-display text-3xl font-bold">Style Remix</h1>
        <p className="mt-2 text-lab-chrome">
          Drop in reference images. The AI analyses them and suggests outfit
          combinations you haven't thought of.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <ImageDropzone
            onFilesAccepted={(accepted) =>
              setFiles((prev) => [...prev, ...accepted])
            }
          />
        </div>

        <div
          className="lab-card flex flex-col gap-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-xs font-mono uppercase tracking-wider text-lab-chrome">
            Uploaded references ({files.length})
          </p>
          {files.length === 0 ? (
            <p className="text-sm text-lab-chrome/60">
              Nothing uploaded yet. Drop some images to get started.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {files.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center gap-2 text-sm text-lab-white"
                >
                  <span className="text-lab-pink">◆</span>
                  {file.name}
                </li>
              ))}
            </ul>
          )}

          {files.length > 0 && (
            <button className="lab-button mt-auto w-full">
              ⚡ Analyse and remix
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
