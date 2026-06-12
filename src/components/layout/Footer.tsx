import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { services } from "@/data/services";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent-deep text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo
              href="/"
              imageClassName="h-16 w-auto sm:h-[4.25rem] md:h-[4.75rem]"
            />
            <p className="mt-5 text-base leading-relaxed text-white/75">
              {company.description}
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/75 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-base text-white/75 transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold uppercase tracking-wider text-primary">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-white/75">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-base text-white/75">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="hover:text-primary">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-base text-white/75">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-base text-white/55">
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base text-primary transition-colors hover:text-primary-light"
          >
            Chat on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
