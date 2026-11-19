
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "918444090010";

        const message = `
        New Travel enquiry
        Name: ${form.name}
        Phone: ${form.phone}
        Message: ${form.message}
        `;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
        setForm({
            name: "",
            phone: "",
            message: ""
        })
        setStatus("success");
    };


    return (
        <section
            id="contact"
            className="bg-[#D6A85F] py-20 md:py-24 lg:py-28"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 xl:px-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-between"
                >
                    <div>
                        <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.2em] text-black/65">
                            Get In Touch
                        </p>

                        <h2 className="max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#0B0B0B] sm:text-5xl lg:text-6xl">
                            Have a journey in mind?
                            <span className="mt-2 block">
                                Let's talk.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-black/70 md:text-lg">
                            Planning your next trip or have a question
                            about our services? Get in touch with us.
                            We're here to help.
                        </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="mt-12 flex flex-col gap-3">

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918444090010"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20BD5A] hover:-translate-y-1"
                        >
                            <MessageCircle size={19} />
                            WhatsApp Us
                            <span className="font-normal">+91 84440 90010</span>
                        </a>

                        {/* Call Button */}
                        <a
                            href="tel:+918444090010"
                            className="flex w-full items-center justify-center gap-3 bg-[#176F91] px-6 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#125D79] hover:-translate-y-1"
                        >
                            <Phone size={19} />
                            Call Us
                            <span className="font-normal">+91 84440 90010</span>
                        </a>

                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="rounded-xl bg-[#F4F1EA] p-6 sm:p-8 lg:p-10"
                >
                    <div className="mb-8">
                        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
                            Start a Conversation
                        </p>

                        <h3 className="font-heading text-2xl font-bold text-[#0B0B0B] md:text-3xl">
                            Send us an enquiry.
                        </h3>

                        <div className="mt-5 h-px w-20 bg-[#D6A85F]" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className="w-full rounded-sm border border-black/10 bg-white px-5 py-4 font-body text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#D6A85F]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            maxLength={20}
                            pattern="[+0-9 ()-]{7,20}"
                            className="w-full rounded-sm border border-black/10 bg-white px-5 py-4 font-body text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#D6A85F]"
                        />

                        <textarea
                            name="message"
                            placeholder="Tell us about your journey..."
                            value={form.message}
                            onChange={handleChange}
                            required
                            maxLength={2000}
                            rows={5}
                            className="w-full resize-none rounded-sm border border-black/10 bg-white px-5 py-4 font-body text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#D6A85F]"
                        />

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="group flex w-full items-center justify-center gap-3 rounded-sm bg-[#0B0B0B] px-6 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-black/80 disabled:opacity-60"
                        >
                            {status === "loading" ? "Sending Enquiry..." : "Send Enquiry"}

                            {status !== "loading" && (
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            )}
                        </button>

                        {status === "success" && (
                            <p role="status" className="text-sm text-green-700">
                                Your enquiry has been sent successfully.
                            </p>
                        )}

                        {status === "error" && (
                            <p role="alert" className="text-sm text-red-700">
                                Unable to send your enquiry. Please try again.
                            </p>
                        )}

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
