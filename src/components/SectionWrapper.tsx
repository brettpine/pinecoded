import React from 'react';

type SectionWrapperProps = {
        children: React.ReactNode;
        className?: string;
        background?: string;
        id?: string;
    };

const SectionWrapper = ({ children, className, background = 'bg-pine', id }: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={`${background} max-w-[1080px] mx-auto p-6 shadow-md scroll-mt-16 text-cream min-h-[65vh] ${className}`}>
            <div className="flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;