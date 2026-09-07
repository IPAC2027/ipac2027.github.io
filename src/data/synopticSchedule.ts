// Configuration for the Synoptic Table webview: conference days and
// scientific track (MC) legend/color-coding. Actual session placement comes
// from each speaker's `session`/`schedule` fields in `speakers.ts`.

export interface ConferenceDay {
  /** ISO date, e.g. "2027-05-24" — must match Speaker.schedule.date to populate this day */
  date: string;
  dayOfWeek: string;
  displayDate: string;
  /** Used to add a short note under the day tab/panel (e.g. "Satellite Meetings") */
  note?: string;
}

// IPAC'27 runs May 23-28, 2027 (see src/data/homeContent.ts). Update dates
// here once the technical program committee finalizes the day-by-day plan.
export const conferenceDays: ConferenceDay[] = [
  { date: "2027-05-23", dayOfWeek: "Sunday", displayDate: "May 23", note: "Satellite Meetings & Registration" },
  { date: "2027-05-24", dayOfWeek: "Monday", displayDate: "May 24" },
  { date: "2027-05-25", dayOfWeek: "Tuesday", displayDate: "May 25" },
  { date: "2027-05-26", dayOfWeek: "Wednesday", displayDate: "May 26" },
  { date: "2027-05-27", dayOfWeek: "Thursday", displayDate: "May 27" },
  { date: "2027-05-28", dayOfWeek: "Friday", displayDate: "May 28", note: "Closing Session" },
];

export interface TrackInfo {
  code: string;
  label: string;
  dotClass: string;
  /** Gradient variant of `dotClass`, same hue, for larger accent areas (e.g. speaker card top bar) */
  gradientClass: string;
  textClass: string;
  borderClass: string;
  bgClass: string;
}

// Main Classifications (MC1-MC8), matching src/content/authors/classification.md
export const tracks: TrackInfo[] = [
  { code: "MC1", label: "Colliders & Related Accelerators", dotClass: "bg-blue-500", gradientClass: "bg-gradient-to-r from-blue-700 to-blue-300", textClass: "text-blue-700 dark:text-blue-300", borderClass: "border-blue-300 dark:border-blue-700", bgClass: "bg-blue-50 dark:bg-blue-900/30" },
  { code: "MC2", label: "Photon Sources & Electron Accelerators", dotClass: "bg-emerald-500", gradientClass: "bg-gradient-to-r from-emerald-700 to-emerald-300", textClass: "text-emerald-700 dark:text-emerald-300", borderClass: "border-emerald-300 dark:border-emerald-700", bgClass: "bg-emerald-50 dark:bg-emerald-900/30" },
  { code: "MC3", label: "Advanced Acceleration Techniques & Novel Sources", dotClass: "bg-amber-500", gradientClass: "bg-gradient-to-r from-amber-700 to-amber-300", textClass: "text-amber-700 dark:text-amber-300", borderClass: "border-amber-300 dark:border-amber-700", bgClass: "bg-amber-50 dark:bg-amber-900/30" },
  { code: "MC4", label: "Hadron Accelerators", dotClass: "bg-rose-500", gradientClass: "bg-gradient-to-r from-rose-700 to-rose-300", textClass: "text-rose-700 dark:text-rose-300", borderClass: "border-rose-300 dark:border-rose-700", bgClass: "bg-rose-50 dark:bg-rose-900/30" },
  { code: "MC5", label: "Beam Dynamics & EM Fields", dotClass: "bg-purple-500", gradientClass: "bg-gradient-to-r from-purple-700 to-purple-300", textClass: "text-purple-700 dark:text-purple-300", borderClass: "border-purple-300 dark:border-purple-700", bgClass: "bg-purple-50 dark:bg-purple-900/30" },
  { code: "MC6", label: "Beam Instrumentation, Controls & Operations", dotClass: "bg-cyan-500", gradientClass: "bg-gradient-to-r from-cyan-700 to-cyan-300", textClass: "text-cyan-700 dark:text-cyan-300", borderClass: "border-cyan-300 dark:border-cyan-700", bgClass: "bg-cyan-50 dark:bg-cyan-900/30" },
  { code: "MC7", label: "Accelerator Technology & Sustainability", dotClass: "bg-orange-500", gradientClass: "bg-gradient-to-r from-orange-700 to-orange-300", textClass: "text-orange-700 dark:text-orange-300", borderClass: "border-orange-300 dark:border-orange-700", bgClass: "bg-orange-50 dark:bg-orange-900/30" },
  { code: "MC8", label: "Applications, Industry & Outreach", dotClass: "bg-fuchsia-500", gradientClass: "bg-gradient-to-r from-fuchsia-700 to-fuchsia-300", textClass: "text-fuchsia-700 dark:text-fuchsia-300", borderClass: "border-fuchsia-300 dark:border-fuchsia-700", bgClass: "bg-fuchsia-50 dark:bg-fuchsia-900/30" },
];

export function getTrack(code?: string): TrackInfo | undefined {
  return tracks.find(t => t.code === code);
}

/**
 * Non-program schedule blocks (lunch, coffee, poster sessions) shown in the
 * Synoptic Table alongside speaker talks. `startTime`/`endTime` are omitted
 * for blocks whose time isn't finalized yet; those are shown as a per-day
 * note instead of a grid row.
 */
export interface ScheduleBreak {
  id: string;
  label: string;
  emoji: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  /** ISO dates (matching ConferenceDay.date) this break applies to */
  dates: string[];
}

const MON_THU = ["2027-05-24", "2027-05-25", "2027-05-26", "2027-05-27"];
const MON_FRI = [...MON_THU, "2027-05-28"];

export const scheduleBreaks: ScheduleBreak[] = [
  { id: "sunday-poster", label: "Student Poster Session", emoji: "🎓", startTime: "16:00", endTime: "18:00", location: "Hall E", dates: ["2027-05-23"] },
  { id: "sunday-reception", label: "Welcome Reception", emoji: "🥂", startTime: "18:00", endTime: "20:00", dates: ["2027-05-23"] },
  { id: "coffee-morning", label: "Morning Coffee Break", emoji: "☕", startTime: "10:30", endTime: "11:00", dates: MON_FRI },
  { id: "lunch", label: "Lunch Break", emoji: "🍽️", startTime: "12:30", endTime: "14:00", dates: MON_THU },
  { id: "poster", label: "Poster Session at Hall E", emoji: "📋", startTime: "16:00", endTime: "18:00", dates: MON_THU },
  { id: "banquet", label: "Conference Banquet", emoji: "🍽️", startTime: "19:00", endTime: "23:00", location: "Marriott at the Renaissance Center", dates: ["2027-05-27"] },
];
