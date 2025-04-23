import { motion } from 'framer-motion';
import React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: Direction;
};

const getVariants = (direction: Direction = 'up') => {
    const distance = 40;
    switch (direction) {
        case 'down':
            return {
                hidden: { opacity: 0, y: -distance },
                visible: (delay = 0) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay, duration: 0.6, ease: 'easeOut' }
                })
            };
        case 'left':
            return {
                hidden: { opacity: 0, x: -distance },
                visible: (delay = 0) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay, duration: 0.6, ease: 'easeOut' }
                })
            };
        case 'right':
            return {
                hidden: { opacity: 0, x: distance },
                visible: (delay = 0) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay, duration: 0.6, ease: 'easeOut' }
                })
            };
        case 'up':
        default:
            return {
                hidden: { opacity: 0, y: distance },
                visible: (delay = 0) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay, duration: 0.6, ease: 'easeOut' }
                })
            };
    }
};

const ScrollReveal = ({
                          children,
                          className,
                          delay = 0,
                          direction = 'up'
                      }: ScrollRevealProps) => {
    const variants = getVariants(direction);

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={delay}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
