// Shared type definitions for IPAC'27 speaker data
// Used to populate the Invited Speakers page and the Synoptic Table webview

/**
 * Type of speaker/presentation slot
 */
export type SpeakerType = 'plenary' | 'invited' | 'contributed';

/**
 * Main classification (track) of the presentation, e.g. "MC7"
 * (see authors/classification.md for the full list of MC codes)
 */
export type SpeakerClassification = string;

/**
 * Session/track information the talk belongs to
 */
export interface SpeakerSession {
  code?: string;      // Session code, e.g. "MOZ1"
  name?: string;       // Session title, e.g. "Opening Plenary"
  track?: string;      // Track name, e.g. "Colliders and Related Accelerators"
}

/**
 * Scheduling information for the presentation, used by the synoptic table
 */
export interface SpeakerSchedule {
  date?: string;       // ISO date, e.g. "2027-05-24"
  startTime?: string;  // "09:00"
  endTime?: string;    // "09:30"
  room?: string;       // Room/location name
}

/**
 * Fine-tuning for how a speaker's photo is cropped/positioned within its
 * (fixed-size, circular) frame. Useful when submitted photos have different
 * aspect ratios, framing, or the subject isn't centered.
 *
 * NOTE: `position` only has a visible effect when the image has room to move
 * within the frame (i.e. its aspect ratio differs from the frame, and/or
 * `zoom` > 1 is set to crop in). If a photo is already square/matches the
 * frame's aspect ratio, set `zoom` > 1 first, then adjust `position`.
 */
export interface PhotoAdjustment {
  /** CSS object-position value, e.g. "center 20%", "top", "50% 30%". Defaults to "center". */
  position?: string;
  /** Zoom factor applied to the image, e.g. 1.2 for 20% zoom-in. Defaults to 1. */
  zoom?: number;
}

export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  country?: string;
  photo?: string;
  /** Optional adjustment to better frame the photo (cropping/position/zoom) */
  photoAdjustment?: PhotoAdjustment;
  bio?: string;
  type: SpeakerType;

  // Presentation details
  title: string;
  abstract?: string;
  classification?: SpeakerClassification;
  session?: SpeakerSession;
  schedule?: SpeakerSchedule;

  featured?: boolean;
}
