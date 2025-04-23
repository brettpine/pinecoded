import React from 'react';

type ServiceCardProps = {
    icon: React.ReactElement;
    title: string;
    description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="p-6 rounded-xl text-center flex flex-col items-center gap-4 hover:shadow-lg hover:scale-[1.1] rounded-lg duration-300 ease-in-out">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                {React.cloneElement(icon, {
                    className: 'w-full h-full',
                })}
            </div>
            <h3 className="text-lg font-semibold text-pine">{title}</h3>
            <p className="text-sm text-pine">{description}</p>
        </div>
    );
};

export default ServiceCard;
