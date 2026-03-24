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
      setErrorMessage(
        "Impossible d’envoyer votre demande. Veuillez utiliser WhatsApp ou nous appeler."
      );
    }
  };

  return (
    <section
      id="book-now"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3"
        >
          Réserver
        </motion.h2>
        <div className="h-px w-20 bg-gold rounded-full mb-4" aria-hidden />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
          className="text-brown/70 max-w-[55ch] mb-12"
        >
          Envoyez-nous vos coordonnées et nous confirmerons votre rendez-vous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-xl"
        >
          {formState === "success" ? (
            <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5 text-brown relative overflow-hidden shadow-card">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/50" aria-hidden />
              <p className="font-medium mb-1">Demande bien reçue.</p>
              <p className="text-sm text-brown/75">
                Nous vous contacterons sous peu pour confirmer votre rendez-vous.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-beige/80 p-8 md:p-10 shadow-card border border-gold/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-name" className="text-sm font-medium text-brown">
                    Nom
                  </label>
                  <input
                    id="book-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                    disabled={formState === "loading"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-contact" className="text-sm font-medium text-brown">
                    Téléphone ou e-mail
                  </label>
                  <input
                    id="book-contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    placeholder="+212 6XX XXX XXX"
                    disabled={formState === "loading"}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-date" className="text-sm font-medium text-brown">
                    Date souhaitée
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    disabled={formState === "loading"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="book-time" className="text-sm font-medium text-brown">
                    Heure souhaitée
                  </label>
                  <input
                    id="book-time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                    disabled={formState === "loading"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="book-service" className="text-sm font-medium text-brown">
                  Prestation
                </label>
                <select
                  id="book-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors"
                  disabled={formState === "loading"}
                >
                  <option value="">Choisir une prestation</option>
                  <option value="traditional-thai">Massage thaï traditionnel</option>
                  <option value="aromatherapy">Massage à l’aromathérapie</option>
                  <option value="hot-stone">Thérapie aux pierres chaudes</option>
                  <option value="herbal-compress">Compresses herbales thaï</option>
                  <option value="deep-tissue">Tissus profonds</option>
                  <option value="signature-fusion">Fusion signature</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="book-message" className="text-sm font-medium text-brown">
                  Message
                </label>
                <textarea
                  id="book-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-brown/15 bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 focus:ring-offset-0 focus:outline-none transition-colors resize-none"
                  placeholder="Demandes particulières ou remarques"
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
                {formState === "loading" ? "Envoi en cours…" : "Envoyer la demande"}
              </ShimmerButton>
            </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
