"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

function initMetaPixel() {
  if (!META_PIXEL_ID || typeof window === "undefined") return false;
  if (window.fbq) return true;

  type FbqFunction = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[][];
    loaded: boolean;
    version: string;
  };

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args);
    } else {
      fbq.queue.push(args);
    }
  } as FbqFunction;

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  if (!document.getElementById("meta-pixel-script")) {
    const script = document.createElement("script");
    script.id = "meta-pixel-script";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", META_PIXEL_ID);
  return true;
}

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    if (!initMetaPixel() || !window.fbq) return;
    window.fbq("track", "PageView");
  }, [pathname]);

  if (!META_PIXEL_ID) return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
