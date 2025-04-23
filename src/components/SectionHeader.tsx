import React from 'react';

type SectionHeaderProps = {
    title: string;
    Icon: React.ElementType;
    textColor?: string;
    borderColor?: string;
};

const SectionHeader = ({ title, Icon, textColor = 'text-pine', borderColor = 'border-pine/50' }: SectionHeaderProps) => {
    return (
        <>
            <div className={`flex items-center justify-center gap-2 ${textColor} text-lg md:text-xl lg:text-2xl font-bold`}>
                <span>&lt;</span>
                <h2>{title}</h2>
                <span>/&gt;</span>
            </div>

            <div className="flex w-full justify-around items-center">
                <hr className={`my-8 border-t-2 border-dashed ${borderColor} w-1/4 mx-auto`} />
                <Icon className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                <hr className={`my-8 border-t-2 border-dashed ${borderColor} w-1/4 mx-auto`} />
            </div>
        </>
    );
};

export default SectionHeader;
