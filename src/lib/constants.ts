export const APP_NAME = 'Ishō';
export const APP_VERSION = '0.1.0';

/** Max file upload size in bytes (10MB) */
export const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;

/** Allowed image MIME types for reference uploads */
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
] as const;

/** Body zones available in the doll editor */
export const BODY_ZONES = ['hair', 'torso', 'legs', 'accessories'] as const;
export type BodyZone = (typeof BODY_ZONES)[number];
