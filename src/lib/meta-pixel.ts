declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !window.fbq || !META_PIXEL_ID) return;

  if (params) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
}

export function trackLead(source: string) {
  trackMetaEvent("Lead", { content_name: source });
}

export function trackViewContent(name: string, category?: string) {
  trackMetaEvent("ViewContent", {
    content_name: name,
    ...(category ? { content_category: category } : {}),
  });
}

export function trackContact(source: string) {
  trackMetaEvent("Contact", { content_name: source });
}
