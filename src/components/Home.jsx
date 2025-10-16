import React from "react";
import { motion } from "framer-motion";

// Single-file React component for a modern, attractive homepage
// Component name: Home (JavaScript — not TypeScript)
// Requirements: TailwindCSS + Framer Motion installed in the project.
// Usage: place this file in your React app (e.g., src/components/Home.jsx)
// and import it into your App. Ensure Tailwind is configured.

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20 14.5a7.5 7.5 0 10-1.28 4.02L21 21l-2.5-2.28A7.5 7.5 0 0020 14.5z" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">WhatsBulk</h1>
            <p className="text-xs text-slate-500 -mt-1">WhatsApp Bulk Messaging — Fast. Reliable. Compliant.</p>
          </div>
        </div>

        <div className="md:hidden">
          <button aria-label="open menu" className="px-3 py-2 bg-white rounded-md shadow">Menu</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Send WhatsApp messages to thousands — fast & secure</h2>
              <p className="mt-4 text-slate-600 text-lg">Personalize messages, upload contacts from Excel, attach PDFs, schedule campaigns, and track delivery with real-time analytics — all in one dashboard.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold shadow">Request Demo</a>
                <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">View Pricing</a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 font-semibold">✓</span>
                  <div>
                    <div className="font-medium">Excel & CSV upload</div>
                    <div className="text-xs">Bulk contact import ready</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 font-semibold">🔒</span>
                  <div>
                    <div className="font-medium">Secure & compliant</div>
                    <div className="text-xs">Data privacy & delivery guarantees</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div className="relative" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-2xl">
              {/* Mock dashboard card */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-500">Campaigns</div>
                  <div className="text-2xl font-bold">1,24,368</div>
                </div>
                <div className="text-xs text-slate-500">Today</div>
              </div>

              <div className="h-44 bg-gradient-to-r from-emerald-50 to-slate-50 rounded-xl p-4">
                <svg viewBox="0 0 100 30" className="w-full h-full" aria-hidden>
                  <polyline points="0,18 10,12 20,16 30,10 40,14 50,6 60,9 70,4 80,8 90,2 100,6" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded-lg shadow">Open Rate
                  <div className="text-lg font-semibold">78%</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow">Delivery
                  <div className="text-lg font-semibold">95.2%</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 mt-12">
        <h3 className="text-center text-3xl font-bold">What you get</h3>
        <p className="text-center text-slate-600 mt-2">Everything you need to run compliant and effective WhatsApp campaigns</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <motion.div key={f.title} whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center font-bold text-emerald-600">{f.icon}</div>
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 mt-14">
        <h3 className="text-3xl font-bold text-center">Loved by teams across industries</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-slate-600">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center font-semibold text-emerald-600">{t.initials}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 mt-14 mb-24">
        <div className="bg-gradient-to-r from-emerald-50 to-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Ready to reach customers where they spend more time?</h3>
            <p className="text-slate-600 mt-2">Book a free demo, or start sending in minutes with our simple onboarding.</p>
            <div className="mt-4 flex gap-3">
              <a className="px-5 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold" href="#">Book Demo</a>
              <a className="px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-700" href="#">Talk to Sales</a>
            </div>
          </div>

          <form className="w-full lg:w-1/2 bg-white p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input aria-label="name" className="p-3 border rounded-md" placeholder="Your name" />
              <input aria-label="company" className="p-3 border rounded-md" placeholder="Company" />
            </div>
            <input aria-label="email" className="mt-3 p-3 border rounded-md w-full" placeholder="Email address" />
            <textarea aria-label="message" className="mt-3 p-3 border rounded-md w-full" placeholder="Tell us about your campaign (optional)" rows={3} />
            <div className="mt-3 flex justify-end">
              <button type="submit" className="px-5 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold">Request Demo</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white font-bold">W</div>
              <div>
                <div className="font-semibold">WhatsBulk</div>
                <div className="text-xs text-slate-500">WhatsApp bulk messaging platform</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4 max-w-sm">Trusted by operations teams, marketing, educational institutions, and NGOs to safely reach their audience at scale.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
            <div>
              <div className="font-semibold">Product</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>Features</li>
                <li>Docs</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-500 border-t">© {new Date().getFullYear()} WhatsBulk — Made with care.</div>
      </footer>
    </div>
  );
}

const FEATURES = [
  { title: "Personalized Templates", desc: "Use variables and templates to personalize at scale.", icon: "A" },
  { title: "Excel / CSV Import", desc: "Upload contacts and map columns in one step.", icon: "B" },
  { title: "Attachments & Media", desc: "Send PDFs, images, and documents along with messages.", icon: "C" },
  { title: "Scheduling & Automation", desc: "Schedule campaigns and automate follow-ups.", icon: "D" },
  { title: "Analytics & Reports", desc: "Track opens, deliveries and engagement in real-time.", icon: "E" },
  { title: "APIs & Webhooks", desc: "Integrate with your CRM or apps for seamless workflows.", icon: "F" },
];

const TESTIMONIALS = [
  { name: "Anita Sharma", role: "Marketing Head — RetailCo", initials: "AS", quote: "We scaled promos to 1M+ customers with clear insights and zero downtime." },
  { name: "Rohit Patel", role: "Ops Manager — EduLearn", initials: "RP", quote: "Excel import and templates saved our team huge time — setup was quick." },
  { name: "Meera Joshi", role: "Admin — NGO Care", initials: "MJ", quote: "Great support and predictable pricing for high-volume needs." },
];
