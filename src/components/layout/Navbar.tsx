"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/company";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import Logo from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "navbar-glass fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "shadow-lg shadow-accent-deep/30 py-3" : "py-4 min-[1100px]:py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav className="mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-4 sm:px-6 md:px-8 min-[1100px]:gap-3 min-[1100px]:px-10 xl:px-12">
          <Logo priority imageClassName="h-10 w-auto sm:h-11 min-[1100px]:h-12 xl:h-14" />

          <div className="hidden min-w-0 flex-1 items-center justify-center min-[1100px]:flex">
            <div className="flex flex-nowrap items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-base font-medium transition-colors min-[1100px]:px-2.5 xl:px-3",
                    pathname === link.href
                      ? "text-primary"
                      : "text-white/90 hover:text-primary"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary min-[1100px]:left-2.5 min-[1100px]:right-2.5 xl:left-3 xl:right-3"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden min-[1100px]:block">
              <MagneticButton>
                <Button asChild variant="primary" size="default" className="whitespace-nowrap">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white min-[1100px]:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass min-[1100px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-2 p-8 pt-28"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-8 py-3.5 text-lg font-medium transition-colors",
                      pathname === link.href
                        ? "text-accent-deep bg-primary/10"
                        : "text-slate-700"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Button asChild variant="primary" size="lg">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
