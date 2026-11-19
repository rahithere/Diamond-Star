"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const headingVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const paragraphVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Hero() {
    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-background pt-15">

            {/* Hero Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/hero/bus-hero.jpg"
                    alt="Premium sleeper coach"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[65%_center] md:object-center"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/45" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />

            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" /> */}

            {/* Hero Content */}
            <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-2">

                <div className="max-w-4xl">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="h-px w-10 bg-accent" />

                        <span className="font-body text-xs font-medium uppercase tracking-[0.24em] text-accent md:text-sm">
                            Premium Sleeper Coach Experience
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-heading text-[clamp(3rem,6.5vw,5rem)] font-bold uppercase leading-[1.05] tracking-[-0.045em] text-foreground"
                    >
                        DIAMOND STAR
                        <br />
                        <span className="text-accent">
                            TRAVELS
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={paragraphVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 max-w-[520px] font-body text-base leading-[1.7] text-foreground/80 md:text-xl"
                    >
                        Experience a more comfortable way to travel.
                        Thoughtfully designed journeys, made for the
                        road ahead.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                        className="mt-10"
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-4 rounded-md bg-accent px-6 py-2 font-body text-base font-semibold text-background transition-colors duration-300"
                        >
                            Contact Us

                            <ArrowUpRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>


                    </motion.div>

                </div>
            </div>

        </section>
    );
}

