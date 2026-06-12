import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Apex Solar Infra for a free solar consultation. Phone, email, office address, and inquiry form.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
