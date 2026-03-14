"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ShimmerButton";

type FormState = "idle" | "loading" | "success" | "error";

export default function BookNow() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setFormState("loading");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, date, time, service, message }),
      });
      if (!res.ok) throw new Error("Something went wrong");
      setFormState("success");
      setName("");
      setContact("");
      setDate("");
      setTime("");
      setService("");
      setMessage("");
    } catch {
      setFormState("error");
      setErrorMessage("Could not send your request. Please try WhatsApp or call us.");
    }
  };

  return (
    <section
      id="book-now"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-tight mb-2"
        >
          Book Now
        </motion.h2>
        <div className="h-0.5 w-20 bg-gold/70 rounded-full mb-4" aria-hidden />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
          className="text-sage/90 max-w-[55ch] mb-12"
        >
          Send us your details and we will confirm your appointment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-xl"
        >
          {formState === "success" ? (
            <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5 text-charcoal relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/40" aria-hidden />
              <p className="font-medium mb-1">Request received.</p>
              <p className="text-sm text-charcoal/75">
                We will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-name" className="text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    id="book-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    placeholder="Your name"
                    disabled={formState === "loading"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-contact" className="text-sm font-medium text-charcoal">
                    Phone or email
                  </label>
                  <input
                    id="book-contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    placeholder="+212 6XX XXX XXX"
                    disabled={formState === "loading"}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-date" className="text-sm font-medium text-charcoal">
                    Preferred date
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    disabled={formState === "loading"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-time" className="text-sm font-medium text-charcoal">
                    Preferred time
                  </label>
                  <input
                    id="book-time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    disabled={formState === "loading"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="book-service" className="text-sm font-medium text-charcoal">
                  Service
                </label>
                <select
                  id="book-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                  disabled={formState === "loading"}
                >
                  <option value="">Select a service</option>
                  <option value="traditional-thai">Traditional Thai Massage</option>
                  <option value="aromatherapy">Aromatherapy Massage</option>
                  <option value="hot-stone">Hot Stone Therapy</option>
                  <option value="herbal-compress">Thai Herbal Compress</option>
                  <option value="deep-tissue">Deep Tissue</option>
                  <option value="signature-fusion">Signature Fusion</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="book-message" className="text-sm font-medium text-charcoal">
                  Message
                </label>
                <textarea
                  id="book-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-charcoal/20 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests or notes"
                  disabled={formState === "loading"}
                />
              </div>
              {formState === "error" && (
                <p className="text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              )}
              <ShimmerButton
                type="submit"
                disabled={formState === "loading"}
                className="w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? "Sending…" : "Send inquiry"}
              </ShimmerButton>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
