// Speaker data for IPAC'27, split by category (plenary + MC1-MC8) for maintainability.
// Used to populate the Invited Speakers page and the Synoptic Table webview.
export type { SpeakerType, SpeakerClassification, SpeakerSession, SpeakerSchedule, PhotoAdjustment, Speaker } from './types';
import type { Speaker, SpeakerType } from './types';

import { plenarySpeakers } from './plenary';
import { mc1Speakers } from './mc1';
import { mc2Speakers } from './mc2';
import { mc3Speakers } from './mc3';
import { mc4Speakers } from './mc4';
import { mc5Speakers } from './mc5';
import { mc6Speakers } from './mc6';
import { mc7Speakers } from './mc7';
import { mc8Speakers } from './mc8';

export {
  plenarySpeakers,
  mc1Speakers,
  mc2Speakers,
  mc3Speakers,
  mc4Speakers,
  mc5Speakers,
  mc6Speakers,
  mc7Speakers,
  mc8Speakers,
};

// NOTE: session/schedule (date, time, room) are not yet finalized for most
// speakers and are left empty; classification is only known for a few talks.
// Populate these once the program committee finalizes the schedule.
export const speakers: Speaker[] = [
  ...plenarySpeakers,
  ...mc1Speakers,
  ...mc2Speakers,
  ...mc3Speakers,
  ...mc4Speakers,
  ...mc5Speakers,
  ...mc6Speakers,
  ...mc7Speakers,
  ...mc8Speakers,
];

/**
 * Get all speakers of a given type (plenary, invited, contributed)
 */
export function getSpeakersByType(type: SpeakerType): Speaker[] {
  return speakers.filter(s => s.type === type);
}

/**
 * Get a speaker by ID
 */
export function getSpeaker(id: string): Speaker | undefined {
  return speakers.find(s => s.id === id);
}

/**
 * Get all speakers within a main classification (e.g. "MC1")
 */
export function getSpeakersByClassification(classification: string): Speaker[] {
  return speakers.filter(s => s.classification === classification);
}

/**
 * Get all speakers for a given session code
 */
export function getSpeakersBySession(sessionCode: string): Speaker[] {
  return speakers.filter(s => s.session?.code === sessionCode);
}

/**
 * Get all speakers scheduled on a given date, sorted by start time
 * Useful for building the synoptic table view
 */
export function getSpeakersByDate(date: string): Speaker[] {
  return speakers
    .filter(s => s.schedule?.date === date)
    .sort((a, b) => (a.schedule?.startTime || '').localeCompare(b.schedule?.startTime || ''));
}
