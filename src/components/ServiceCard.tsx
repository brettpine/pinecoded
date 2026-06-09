import React from 'react';

type ServiceCardProps = {
    icon: React.ReactElement;
    title: string;
    description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="
  p-6
  h-full
  rounded-xl
  text-center
  flex
  flex-col
  items-center
  gap-4
  bg-pine/90
  text-leaf
  hover:-translate-y-2
  hover:shadow-xl
  transition-all
  duration-300
">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18">
                {React.cloneElement(icon, {
                    className: 'w-full h-full',
                })}
            </div>
            <h3 className="text-lg font-semibold text-leaf">{title}</h3>
            <p className="text-sm text-leaf">{description}</p>
        </div>
    );
};

export default ServiceCard;
