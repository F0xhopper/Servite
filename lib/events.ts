/**
 * Upcoming events shown on the homepage.
 *
 * ⚠ This list is empty on purpose. It previously held three invented events —
 * with invented venues — which would have gone out under the fraternity's name
 * at launch. Add only events that are actually happening.
 *
 * Past events drop off on their own: the homepage asks for upcoming ones and
 * anything before today is filtered out, so a forgotten entry goes quiet rather
 * than advertising a date that has been and gone. When nothing is scheduled the
 * section simply says so and invites the visitor to get in touch.
 *
 * To add one:
 *
 *   {
 *     id: "our-lady-of-sorrows-2026",
 *     date: "2026-09-15",
 *     title: "Feast of Our Lady of Sorrows",
 *     location: "St. Mary's Priory · Bristol",
 *     body: "Mass and evening prayer for the principal feast of the Order. All are welcome.",
 *   }
 */

export interface SiteEvent {
  id: string;
  /** The day it falls on, as `YYYY-MM-DD`. */
  date: string;
  title: string;
  /** Venue and town, or "Online" — whatever a visitor needs to turn up. */
  location: string;
  body: string;
}

export const events: SiteEvent[] = [];

/** Parsed as UTC so the listing does not shift a day either side of midnight. */
function parseEventDate(event: SiteEvent): Date {
  const [year, month, day] = event.date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export interface DatedEvent {
  event: SiteEvent;
  date: Date;
}

/** Today's events count as upcoming; yesterday's do not. */
export function getUpcomingEvents(
  count?: number,
  { from = new Date() }: { from?: Date } = {}
): DatedEvent[] {
  const today = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());

  const upcoming = events
    .map((event) => ({ event, date: parseEventDate(event) }))
    .filter(({ date }) => date.getTime() >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return count === undefined ? upcoming : upcoming.slice(0, count);
}
