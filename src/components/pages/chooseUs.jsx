
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    BedDouble,
    BatteryCharging,
    Sparkles,
    Utensils,
    Snowflake,
    Luggage,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {

    const amenities = [
        {
            number: "01",
            title: "Full Sleeper",
            description: "Relax and enjoy a comfortable sleeping experience.",
            icon: BedDouble,
        },
        {
            number: "02",
            title: "Charging Ports",
            description: "Keep your devices powered throughout the journey.",
            icon: BatteryCharging,
        },
        {
            number: "03",
            title: "Neat & Clean Interior",
            description: "A clean and well-maintained travel environment.",
            icon: Sparkles,
        },
        {
            number: "04",
            title: "Food & Refreshments",
            description: "Food and refreshment facilities for your journey.",
            icon: Utensils,
        },
        {
            number: "05",
            title: "Air Conditioning",
            description: "Enjoy a comfortable cabin environment.",
            icon: Snowflake,
        },
        {
            number: "06",
            title: "Luggage Space",
            description: "Dedicated space for your travel belongings.",
            icon: Luggage,
        },
        {
            number: "07",
            title: "Reading Lights",
            description: "Personal lighting for added convenience.",
            icon: Lightbulb,
        },
        {
            number: "08",
            title: "Travel Assistance",
            description: "Support and assistance throughout your journey.",
            icon: ShieldCheck,
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <>
            <section className="overflow-hidden bg-white py-20 md:py-24 lg:py-28">

                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">

                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12 max-w-2xl md:mb-16"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D6A85F]" />

                            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A47B3C]">
                                why choose us
                            </span>
                        </div>

                        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl md:text-5xl">
                            Why choose Diamond star
                            <span className="block text-[#D6A85F]">
                                Travels
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-black md:text-lg">
                            More than just getting from one place to another.
                            Experience thoughtful comfort, convenient facilities
                            and a journey designed around you.
                        </p>
                    </motion.div>

                    {/* Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative w-full"
                    >
                        <Image
                            src="/images/sections/bus-features1.png"
                            alt="Travel facilities and passenger benefits"
                            width={1346}
                            height={376}
                            sizes="100vw, 1280px"
                            className="h-auto w-full object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* // AMENITIES */}

            <section className="bg-white py-20 md:py-24 lg:py-20">

                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">

                    {/* Section Heading */}
                    <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

                        <div className="max-w-2xl">

                            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl md:text-5xl">
                                Everything You Need
                                <span className="block text-[#A47B3C]">
                                    For The Journey.
                                </span>
                            </h2>

                        </div>

                        <p className="max-w-md font-body text-base leading-relaxed text-black md:text-lg">
                            Thoughtful amenities and convenient facilities
                            designed to make every journey more comfortable.
                        </p>

                    </div>

                    {/* Amenities Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
                    >

                        {amenities.map((amenity) => {
                            const Icon = amenity.icon;

                            return (
                                <motion.div
                                    key={amenity.number}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="group relative flex aspect-square cursor-default flex-col justify-between overflow-hidden rounded-2xl bg-[#D6A85F] p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6 md:p-7"
                                >

                                    {/* Card Number */}
                                    <div className="flex items-start justify-between">
                                        <span className="font-body text-xs font-semibold tracking-wider text-black/50">
                                            {amenity.number}
                                        </span>

                                        <motion.div
                                            whileHover={{ rotate: 12, scale: 1.12 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Icon
                                                size={30}
                                                strokeWidth={1.6}
                                                className="text-[#0B0B0B] sm:size-9"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative z-10">
                                        <h3 className="mb-2 font-heading text-base font-bold leading-snug text-[#0B0B0B] sm:text-lg lg:text-xl">
                                            {amenity.title}
                                        </h3>

                                        <p className="font-body text-xs leading-relaxed text-black/65 sm:text-sm">
                                            {amenity.description}
                                        </p>
                                    </div>

                                    {/* Decorative Circle */}
                                    <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-black/10 transition-transform duration-500 group-hover:scale-150" />

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>
            </section>
        </>
    );
}
