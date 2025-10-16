import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";



export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
            {/* NAV */}
            <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-md">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M20 14.5a7.5 7.5 0 10-1.28 4.02L21 21l-2.5-2.28A7.5 7.5 0 0020 14.5z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">CampusConnect</h1>
                        <p className="text-xs text-slate-500 -mt-1">Instant WhatsApp Communication for Colleges & Schools</p>
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
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Stay connected with every student — instantly and effectively
                            </h2>
                            <p className="mt-4 text-slate-600 text-lg">
                                Send attendance alerts, exam updates, results, fee reminders, and important notices directly on WhatsApp — from your admin dashboard.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold shadow">
                                    Try Now
                                </a>
                                <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                                    Explore Features
                                </a>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-500">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 font-semibold">📘</span>
                                    <div>
                                        <div className="font-medium">Attendance Alerts</div>
                                        <div className="text-xs">Auto-send absentees’ info to parents</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 font-semibold">📅</span>
                                    <div>
                                        <div className="font-medium">Exam Notifications</div>
                                        <div className="text-xs">Remind students of upcoming schedules</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-sm text-slate-500">Messages Sent Today</div>
                                    <div className="text-2xl font-bold">12,548</div>
                                </div>
                                <div className="text-xs text-slate-500">Live</div>
                            </div>

                            <div className="h-44 bg-gradient-to-r from-emerald-50 to-slate-50 rounded-xl p-4">
                                <svg viewBox="0 0 100 30" className="w-full h-full">
                                    <polyline points="0,18 10,12 20,16 30,10 40,14 50,6 60,9 70,4 80,8 90,2 100,6" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                <div className="bg-white p-3 rounded-lg shadow">
                                    Delivery Rate
                                    <div className="text-lg font-semibold">98%</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow">
                                    Response Rate
                                    <div className="text-lg font-semibold">82%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* FEATURES */}
            <section id="features" className="max-w-7xl mx-auto px-6 mt-12">
                <h3 className="text-center text-3xl font-bold">Why Schools Love CampusConnect</h3>
                <p className="text-center text-slate-600 mt-2">
                    Simplify communication between admin, teachers, students, and parents
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((f) => (
                        <motion.div key={f.title} whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center font-bold text-emerald-600">
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{f.title}</h4>
                                    <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CONTACT / CTA */}
            <section id="contact" className="max-w-7xl mx-auto px-6 mt-14 mb-24">
                <div className="bg-gradient-to-r from-emerald-50 to-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold">
                            Connect instantly with every student and parent
                        </h3>
                        <p className="text-slate-600 mt-2">
                            Start sending important messages in minutes — no tech setup required.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <NavLink
                                to="/message"
                                className="px-5 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold"
                            >
                                Get Started
                            </NavLink>
                            <NavLink
                                to="/message"
                                className="px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-700"
                            >
                                Learn More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 text-center">
                    © {new Date().getFullYear()} CampusConnect — Empowering educational communication.
                </div>
            </footer>
        </div>
    );
}

const FEATURES = [
    { title: "Attendance Alerts", desc: "Notify parents instantly when students are absent.", icon: "📘" },
    { title: "Exam Updates", desc: "Send exam dates and seating arrangements automatically.", icon: "📅" },
    { title: "Fee Reminders", desc: "Remind students and parents of due payments instantly.", icon: "💰" },
    { title: "Result Announcements", desc: "Share exam results securely via WhatsApp.", icon: "🏆" },
    { title: "Circulars & Notices", desc: "Send digital notices and updates to all batches.", icon: "📢" },
    { title: "Teacher–Student Chat", desc: "Enable direct communication through official accounts.", icon: "💬" },
];
