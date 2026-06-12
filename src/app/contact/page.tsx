"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInView from "@/components/animations/FadeInView";
import MagneticButton from "@/components/animations/MagneticButton";
import { company } from "@/data/company";
import { images } from "@/data/images";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Ready to go solar? Get in touch for a free consultation and customized proposal."
        image={images.commercial}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <FadeInView>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Fill out the form and our team will respond within 24 hours.
                    </p>

                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 rounded-2xl bg-primary/10 p-8 text-center"
                      >
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                          <Send className="h-7 w-7 text-accent-deep" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                        <p className="mt-2 text-slate-600">
                          We&apos;ve received your inquiry and will get back to you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium">Full Name</label>
                            <Input required placeholder="Your name" />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-medium">Phone Number</label>
                            <Input required type="tel" placeholder="+91 XXXXX XXXXX" />
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Email Address</label>
                          <Input required type="email" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Project Type</label>
                          <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white/80 px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                            <option>Residential Solar</option>
                            <option>Commercial Solar</option>
                            <option>Industrial Solar</option>
                            <option>EPC Services</option>
                            <option>Maintenance & Support</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Message</label>
                          <Textarea required placeholder="Tell us about your project..." rows={4} />
                        </div>
                        <MagneticButton>
                          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                            Schedule a Free Consultation
                            <Send className="h-4 w-4" />
                          </Button>
                        </MagneticButton>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeInView>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <FadeInView delay={0.1}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                    <ul className="mt-5 space-y-4">
                      {[
                        { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
                        { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                        { icon: MapPin, label: "Address", value: company.address },
                        { icon: Clock, label: "Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <item.icon className="h-4 w-4 text-accent-deep" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-slate-500">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent-deep">
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm font-medium text-foreground">{item.value}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInView>

              <FadeInView delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">Quick Inquiry</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Prefer WhatsApp? Chat with us directly for instant responses.
                    </p>
                    <Button asChild variant="outline" className="mt-4 w-full">
                      <a
                        href={`https://wa.me/${company.whatsapp}?text=Hi, I'm interested in solar solutions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInView>
            </div>
          </div>

          <FadeInView className="mt-12">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Apex Solar Office Location"
                src="https://maps.google.com/maps?q=Apex+Solar+Infra+Pvt+Ltd,+Garhi+Bolni+Road,+Rewari,+Haryana+123401&hl=en&z=15&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
