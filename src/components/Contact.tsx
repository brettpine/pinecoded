import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { Nut, Mail, Linkedin, Bird, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            e.currentTarget.submit();
        }, 1500);

        setTimeout(() => {
            setSubmitted(false);
            formRef.current?.reset();
        }, 3500);
    };

    return (
        <SectionWrapper id="contact" className="text-leaf bg-pine">
            <SectionHeader title="PlantASeed" Icon={Nut} textColor="text-leaf" borderColor="border-leaf/50" />

            <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto px-4 gap-8">
                <ScrollReveal direction="left" delay={0.2} className="md:w-1/2">
                    <div className="flex flex-col items-center gap-4">
                        <Bird className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                        <hr className="border-t-2 border-dashed border-leaf/50 w-1/4 mx-auto" />
                        <h3 className="text-xl md:text-2xl font-semibold">Feather Us A Line</h3>
                        <hr className="border-t-2 border-dashed border-leaf/50 w-1/4 mx-auto" />
                        <div className="flex flex-col gap-6 mt-4">
                            <a href="mailto:brett@pinecoded.co.uk" className="flex items-center gap-2 hover:text-leaf/80 transition">
                                <Mail className="w-5 h-5" />
                                brett@pinecoded.co.uk
                            </a>
                            <a href="https://www.linkedin.com/company/pinecoded/" target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-2 hover:text-leaf/80 transition">
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4} className="md:w-1/2">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/brett@pinecoded.co.uk"
                        method="POST"
                        className="bg-leaf/10 p-6 rounded shadow-md flex flex-col gap-4"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New message from your site!" />

                        <label className="flex flex-col text-sm">
                            Name
                            <input type="text" name="name" required className="mt-1 p-2 rounded bg-leaf text-pine focus:outline-none" />
                        </label>

                        <label className="flex flex-col text-sm">
                            Email
                            <input type="email" name="email" required className="mt-1 p-2 rounded bg-leaf text-pine focus:outline-none" />
                        </label>

                        <label className="flex flex-col text-sm">
                            Message
                            <textarea name="message" rows={4} required className="mt-1 p-2 rounded bg-leaf text-pine focus:outline-none resize-none" />
                        </label>

                        <div className="mt-2 h-12 relative flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.button
                                        key="submit"
                                        type="submit"
                                        className="bg-leaf text-pine px-4 py-2 rounded hover:bg-leaf/80 transition"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Release Feather
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        key="feather"
                                        initial={{ y: 0, opacity: 1 }}
                                        animate={{ y: -40, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute"
                                    >
                                        <Feather className="w-8 h-8 text-leaf" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.3 }}
                                    className="absolute text-sm text-leaf mt-16"
                                >
                                    Thanks! Message on its way.
                                </motion.div>
                            )}
                        </div>
                    </form>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
