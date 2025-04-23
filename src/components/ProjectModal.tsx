import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    Minimize2,
    SquareChevronLeft,
    SquareChevronRight,
    CircleDot,
    Circle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectDataType = {
    id: string;
    title: string;
    summary: string;
    images: string[];
    siteUrl: string;
    codeUrl: string;
};

type ProjectModalProps = {
    project: ProjectDataType;
    onClose: () => void;
};

const swipeConfidenceThreshold = 50;

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);
    const hasInteracted = useRef(false);

    useEffect(() => {
        project.images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [project.images]);

    const goToNext = useCallback(() => {
        if (currentImageIndex < project.images.length - 1) {
            setDirection(1);
            setCurrentImageIndex((prev) => prev + 1);
            hasInteracted.current = true;
        }
    }, [currentImageIndex, project.images.length]);

    const goToPrev = useCallback(() => {
        if (currentImageIndex > 0) {
            setDirection(-1);
            setCurrentImageIndex((prev) => prev - 1);
            hasInteracted.current = true;
        }
    }, [currentImageIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const distance = touchStartX.current - e.changedTouches[0].clientX;
        if (distance > swipeConfidenceThreshold) goToNext();
        if (distance < -swipeConfidenceThreshold) goToPrev();
        touchStartX.current = null;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'Escape') onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [goToNext, goToPrev, onClose]);

    const imageVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 overflow-y-auto pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 40 }}
                className="bg-leaf text-pine w-full h-[100dvh] md:h-auto max-w-none md:max-w-3xl md:max-h-[90vh] mx-auto my-6 p-6 sm:p-8 md:rounded-lg shadow-lg relative"
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 hover:text-pine/40 transition"
                >
                    <Minimize2 className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>

                <div className="flex items-center justify-center gap-4 mb-4">
                    <button
                        onClick={goToPrev}
                        disabled={currentImageIndex === 0}
                        className={`transition ${currentImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-pine/40'}`}
                        aria-label="Previous image"
                    >
                        <SquareChevronLeft className="w-8 h-8" />
                    </button>

                    <div
                        className="relative w-full max-w-full overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                custom={direction}
                                variants={hasInteracted.current ? imageVariants : undefined}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="rounded shadow-md max-h-[60vh] object-contain mx-auto"
                            />
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={goToNext}
                        disabled={currentImageIndex === project.images.length - 1}
                        className={`transition ${
                            currentImageIndex === project.images.length - 1
                                ? 'opacity-30 cursor-not-allowed'
                                : 'hover:text-pine/40'
                        }`}
                        aria-label="Next image"
                    >
                        <SquareChevronRight className="w-8 h-8" />
                    </button>
                </div>

                <div className="flex justify-center gap-1 mb-4">
                    {project.images.map((_, index) =>
                        index === currentImageIndex ? (
                            <CircleDot key={index} className="w-4 h-4 text-pine" />
                        ) : (
                            <Circle key={index} className="w-4 h-4 text-pine/40" />
                        )
                    )}
                </div>

                <p className="mb-6 text-center text-sm md:text-base">{project.summary}</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pine text-cream px-4 py-2 rounded hover:bg-pine-light text-center"
                    >
                        View Site
                    </a>
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pine text-cream px-4 py-2 rounded hover:bg-pine-light text-center"
                    >
                        View Code
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
