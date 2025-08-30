"use client";

import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../app/firebaseConfig";

async function addDataToFireStore(name, email, subject, message) {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });
    console.log("Document written with ID:", docRef.id);
    return { ok: true };
  } catch (error) {
    console.error("Error adding document:", error);
    return { ok: false, error };
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const { name, email, subject, message } = formData;
    const res = await addDataToFireStore(name, email, subject, message);

    if (res.ok) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus({ type: "success", msg: "Thanks! Your message was sent. I’ll get back to you soon." });
    } else {
      setStatus({ type: "error", msg: "Something went wrong. Please try again in a moment." });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-500">Let’s work together</p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">Contact</h2>
          <p className="mx-auto mt-2 max-w-prose text-neutral-700">
            Tell me about your idea, timeline, and goals. I’ll reply promptly.
          </p>
        </div>

        {/* Status message */}
        {status.msg && (
          <div
            className={`mx-auto mt-6 w-full max-w-2xl rounded-xl p-3 text-sm ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
            role="status"
          >
            {status.msg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto mt-6 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-800">
              Your name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-800">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-neutral-800">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Project idea / collaboration / question"
              autoComplete="off"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-800">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Tell me a bit about what you’re building and your timeline."
            />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="text-sm text-neutral-600">
              Or email directly: <span className="font-medium">erickfprogrammer@gmail.com</span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition ${
                loading ? "opacity-60" : "hover:opacity-90"
              }`}
            >
              {loading ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
