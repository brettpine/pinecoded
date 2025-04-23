import React, { useState, useEffect } from 'react';
import SectionWrapper from "./SectionWrapper";
import {Trees, Quote, LeafyGreen} from "lucide-react";
import testimonials from '../data/testimonials.json';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from "./SectionHeader";
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <SectionWrapper id="testimonials" background="bg-leaf" className="text-pine">
            <SectionHeader title="FeedBackFromTheForest" Icon={Trees} />

            <div className="flex items-center justify-center gap-6 mb-6 flex-col sm:flex-row">
                {/* Left Branch */}
                <img
                    src="/assets/icons/branch-left.svg"
                    alt="Branch Left"
                    className="hidden sm:block w-24 sm:w-32 md:w-40 lg:w-52 h-auto"
                />

                {/* Testimonial Box */}
                <ScrollReveal
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.3,
                                duration: 0.6,
                                ease: 'easeOut'
                            }
                        }
                    }}
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px]
                       sm:h-[420px] md:h-[250px]
                       p-6 bg-pine text-cream rounded shadow-md text-center
                       flex flex-col justify-between"
                        >
                            <Quote className="w-8 h-8 mx-auto mb-2" />
                            <p className="italic mb-4 text-lg">"{testimonials[currentIndex].quote}"</p>
                            <img
                                src={
                                    testimonials[currentIndex].image ||
                                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                        testimonials[currentIndex].name
                                    )}&background=E6ECE8&color=314126`
                                }
                                alt={testimonials[currentIndex].name}
                                className="w-12 h-12 mx-auto rounded-full mb-2"
                            />
                            <p className="font-semibold">{testimonials[currentIndex].name}</p>
                        </motion.div>
                    </AnimatePresence>
                </ScrollReveal>



                {/* Right Branch */}
                <img
                    src="/assets/icons/branch-right.svg"
                    alt="Branch Right"
                    className="hidden sm:block w-24 sm:w-32 md:w-40 lg:w-52 h-auto"
                />
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
