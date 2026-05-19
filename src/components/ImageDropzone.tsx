'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageDropzoneProps {
  onFilesAccepted: (files: File[]) => void;
}

export function ImageDropzone({ onFilesAccepted }: ImageDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesAccepted(acceptedFiles);
    },
    [onFilesAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 6,
  });

  return (
    <div
      {...getRootProps()}
      className={`lab-card flex min-h-[240px] cursor-pointer flex-col items-center justify-center gap-3 border-dashed transition-all ${
        isDragActive
          ? 'border-lab-neon bg-lab-neon/5'
          : 'hover:border-lab-chrome/30'
      }`}
    >
      <input {...getInputProps()} />
      <span className="text-4xl">{isDragActive ? '⬇' : '📎'}</span>
      <p className="text-sm text-lab-chrome text-center max-w-[220px]">
        {isDragActive
          ? 'Drop your images here'
          : 'Drag and drop reference images, or tap to browse'}
      </p>
      <p className="text-xs text-lab-chrome/50">JPG, PNG, WebP up to 10MB</p>
    </div>
  );
}
