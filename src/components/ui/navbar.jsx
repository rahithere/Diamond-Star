
"use client";

import Link from "next/link";
import { Diamond, MessageCircle } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full bg-[#0B0B0B]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12 xl:px-16">

                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-3 text-[#F4F1EA]"
                >
                    <Diamond
                        size={27}
                        strokeWidth={1.6}
                        className="text-[#D6A85F]"
                    />

                    <span className="font-heading text-lg font-bold tracking-[0.12em]">
                        DIAMOND STAR<span className="text-[#D6A85F]">.</span>
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className="font-body text-sm font-medium text-[#F4F1EA]/80 transition-colors hover:text-[#D6A85F]"
                    >
                        Home
                    </Link>

                    <Link
                        href="#contact"
                        className="font-body text-sm font-medium text-[#F4F1EA]/80 transition-colors hover:text-[#D6A85F]"
                    >
                        Contact
                    </Link>
                </div>

                {/* WhatsApp CTA */}
                <a
                    href="https://wa.me/918444090010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md bg-[#D6A85F] px-4 py-3 font-body text-xs font-semibold text-[#0B0B0B] transition-all duration-300 hover:bg-[#F4F1EA] sm:px-5 sm:text-sm"
                >
                    <MessageCircle size={17} />
                    <span>WhatsApp Us</span>
                </a>

            </nav>
        </header>
    );
}
