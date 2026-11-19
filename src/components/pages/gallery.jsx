
"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const images = [
    {
        src: "/images/gallery/bus1.jpg",
        alt: "Premium sleeper bus exterior",
        className: "md:col-span-3 md:row-span-2",
    },
    {
        src: "/images/gallery/bus2.jpg",
        alt: "Comfortable sleeper berth",
        className: "md:col-span-2",
    },
    {
        src: "/images/gallery/bus6.jpg",
        alt: "Clean bus interior",
        className: "md:col-span-2",
    },
    {
        src: "/images/gallery/bus3.jpg",
        alt: "Bus exterior",
        className: "md:col-span-5",
    },
];

export default function Gallery() {
    return (
        <section className="bg-white py-20 md:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 max-w-2xl md:mb-16"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#D6A85F]" />
                        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A47B3C]">
                            Our Gallery
                        </span>
                    </div>

                    <h2 className="font-heading text-3xl font-bold leading-tight text-[#0B0B0B] sm:text-4xl md:text-5xl">
                        Every Journey Has
                        <span className="block text-[#A47B3C]">
                            A View.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-black md:text-lg">
                        Take a closer look at the comfort, details
                        and experience of travelling with us.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-[260px_260px_220px] md:gap-5">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`group relative min-h-[260px] overflow-hidden rounded-2xl bg-[#F4F1EA] ${image.className}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
