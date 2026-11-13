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
  /** Small colour dot; the ring keeps pale colours visible on white */
  dotClass: string;
  /** Gradient variant of `dotClass`, same hue, for larger accent areas (e.g. speaker card top bar) */
  gradientClass: string;
  textClass: string;
  borderClass: string;
  /** Block background (e.g. talks in the Program at a Glance) */
  bgClass: string;
}

// Main Classifications (MC1-MC8), matching src/content/authors/classification.md.
// Colours follow the official IPAC'27 MC colour code: fills use the official
// colour as-is; text and borders use a darker shade of the same hue so they
// stay readable on white.
export const tracks: TrackInfo[] = [
  { code: "MC1", label: "Colliders & Related Accelerators", dotClass: "bg-[#4fc4a5] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#1f7c63] to-[#4fc4a5]", textClass: "text-[#1f7c63] dark:text-[#4fc4a5]", borderClass: "border-[#1f7c63]/40 dark:border-[#4fc4a5]/50", bgClass: "bg-[#4fc4a5] dark:bg-[#4fc4a5]/30" },
  { code: "MC2", label: "Photon Sources & Electron Accelerators", dotClass: "bg-[#a6c9ec] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#2871ba] to-[#a6c9ec]", textClass: "text-[#2871ba] dark:text-[#a6c9ec]", borderClass: "border-[#2871ba]/40 dark:border-[#a6c9ec]/50", bgClass: "bg-[#a6c9ec] dark:bg-[#a6c9ec]/30" },
  { code: "MC3", label: "Advanced Acceleration Techniques & Novel Sources", dotClass: "bg-[#fffba4] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#767100] to-[#fffba4]", textClass: "text-[#767100] dark:text-[#fffba4]", borderClass: "border-[#767100]/40 dark:border-[#fffba4]/50", bgClass: "bg-[#fffba4] dark:bg-[#fffba4]/30" },
  { code: "MC4", label: "Hadron Accelerators", dotClass: "bg-[#ffd983] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#926500] to-[#ffd983]", textClass: "text-[#926500] dark:text-[#ffd983]", borderClass: "border-[#926500]/40 dark:border-[#ffd983]/50", bgClass: "bg-[#ffd983] dark:bg-[#ffd983]/30" },
  { code: "MC5", label: "Beam Dynamics & EM Fields", dotClass: "bg-[#bbb2e4] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#705ad6] to-[#bbb2e4]", textClass: "text-[#705ad6] dark:text-[#bbb2e4]", borderClass: "border-[#705ad6]/40 dark:border-[#bbb2e4]/50", bgClass: "bg-[#bbb2e4] dark:bg-[#bbb2e4]/30" },
  { code: "MC6", label: "Beam Instrumentation, Controls & Operations", dotClass: "bg-[#f2ceef] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#bb2faf] to-[#f2ceef]", textClass: "text-[#bb2faf] dark:text-[#f2ceef]", borderClass: "border-[#bb2faf]/40 dark:border-[#f2ceef]/50", bgClass: "bg-[#f2ceef] dark:bg-[#f2ceef]/30" },
  { code: "MC7", label: "Accelerator Technology & Sustainability", dotClass: "bg-[#f1a983] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#b94e15] to-[#f1a983]", textClass: "text-[#b94e15] dark:text-[#f1a983]", borderClass: "border-[#b94e15]/40 dark:border-[#f1a983]/50", bgClass: "bg-[#f1a983] dark:bg-[#f1a983]/30" },
  { code: "MC8", label: "Applications, Industry & Outreach", dotClass: "bg-[#daf2d0] ring-1 ring-black/20", gradientClass: "bg-gradient-to-r from-[#3b7d1f] to-[#daf2d0]", textClass: "text-[#3b7d1f] dark:text-[#daf2d0]", borderClass: "border-[#3b7d1f]/40 dark:border-[#daf2d0]/50", bgClass: "bg-[#daf2d0] dark:bg-[#daf2d0]/30" },
];

export function getTrack(code?: string): TrackInfo | undefined {
  return tracks.find(t => t.code === code);
}

/** Block background for plenary talks (they have no MC track); official IPAC'27 plenary colour */
export const plenaryBgClass = "bg-[#c9fbfb] dark:bg-[#c9fbfb]/25";

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
  /** Grid room (column) the block sits in, e.g. "Grand Riverview Ballroom B"; omit to span all rooms */
  room?: string;
  /** ISO dates (matching ConferenceDay.date) this break applies to */
  dates: string[];
}

/**
 * Rows (time blocks) of the "Program at a Glance" table on the Scientific
 * Program page. Cells are filled automatically from the speakers' talks and
 * the schedule blocks below, so the overview always matches the Synoptic Table.
 */
export interface ProgramBlock {
  startTime: string;
  endTime: string;
  /** Shown instead of the time range, e.g. "Evening" */
  label?: string;
}

export const programBlocks: ProgramBlock[] = [
  { startTime: "09:00", endTime: "10:30" },
  { startTime: "10:30", endTime: "11:00" },
  { startTime: "11:00", endTime: "12:30" },
  { startTime: "12:30", endTime: "14:00" },
  { startTime: "14:00", endTime: "16:00" },
  { startTime: "16:00", endTime: "18:00" },
  { startTime: "18:00", endTime: "23:00", label: "Evening" },
];

const MON_THU = ["2027-05-24", "2027-05-25", "2027-05-26", "2027-05-27"];
const MON_FRI = [...MON_THU, "2027-05-28"];

export const scheduleBreaks: ScheduleBreak[] = [
  { id: "sunday-poster", label: "Student Poster Session", emoji: "🎓", startTime: "16:00", endTime: "18:00", location: "Hall E", dates: ["2027-05-23"] },
  { id: "sunday-reception", label: "Welcome Reception", emoji: "🥂", startTime: "18:00", endTime: "20:00", dates: ["2027-05-23"] },
  { id: "coffee-morning", label: "Morning Coffee Break", emoji: "☕", startTime: "10:30", endTime: "11:00", dates: MON_FRI },
  { id: "lunch", label: "Lunch Break", emoji: "🍽️", startTime: "12:30", endTime: "14:00", dates: MON_THU },
  { id: "poster", label: "Poster Session at Hall E", emoji: "📋", startTime: "16:00", endTime: "18:00", dates: MON_THU },
  { id: "awards", label: "Award Session", emoji: "🏆", startTime: "14:00", endTime: "16:00", room: "Grand Riverview Ballroom B", dates: ["2027-05-27"] },
  { id: "closing", label: "Closing Remarks", emoji: "🎤", startTime: "12:30", endTime: "13:00", room: "Grand Riverview Ballroom B", dates: ["2027-05-28"] },
  { id: "banquet", label: "Conference Banquet", emoji: "🍽️", startTime: "19:00", endTime: "23:00", location: "Marriott at the Renaissance Center", dates: ["2027-05-27"] },
];

/**
 * Session chairs, shown at the top of each session in the printable programme
 * (PDF). `startTime` is the start of the session's first talk; omit `room` for
 * a session that uses every room.
 */
export interface SessionChair {
  date: string;
  startTime: string;
  room?: string;
  chair: string;
}

export const sessionChairs: SessionChair[] = [
  // { date: "2027-05-25", startTime: "09:00", room: "Grand Riverview Ballroom A", chair: "Jane Doe" },
];
