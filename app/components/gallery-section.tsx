"use client";

import { galleryData } from "@/data/home-page";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Header animation
            gsap.fromTo(
                ".gallery-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: ".gallery-header",
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );

            // Grid items animation
            const items = gsap.utils.toArray(".gallery-item");
            items.forEach((item: unknown, index: number) => {
                gsap.fromTo(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    item as any,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            trigger: item as any,
                            start: "top 90%",
                            toggleActions: "play none none none",
                            once: true,
                        },
                    }
                );
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            id="gallery"
            ref={containerRef}
            className="py-16 md:py-24 primary-bg overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="gallery-header text-center mb-12 md:mb-16 opacity-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {galleryData.title.main}
                        <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                            {galleryData.title.highlight}
                        </span>
                        {galleryData.title.suffix}
                    </h2>
                    <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
                        {galleryData.subtitle}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {galleryData.images.map((src, index) => (
                        <div
                            key={index}
                            className="gallery-item break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
