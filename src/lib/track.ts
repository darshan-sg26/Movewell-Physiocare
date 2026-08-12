// Analytics hook stub — lightweight no-op function wired to key interaction points.
// Can be replaced with actual analytics SDK (Google Analytics, Plausible, etc.) when needed.

export type AnalyticsEvent = 
  | "phone_click"
  | "whatsapp_click"
  | "enquiry_started"
  | "enquiry_submitted"
  | "home_visit_request";

export function track(event: AnalyticsEvent, data?: Record<string, unknown>): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Stub] Event: ${event}`, data ?? {});
  }
}
