import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import ScrollReveal from './ScrollReveal';
import servicesData from '../data/services.json';
import { LeafyGreen, MonitorSmartphone, Rocket, Palette, Handshake } from 'lucide-react';

const iconMap = {
    MonitorSmartphone: <MonitorSmartphone />,
    Rocket: <Rocket />,
    Palette: <Palette />,
    Handshake: <Handshake />
};

const Services = () => {
    return (
        <SectionWrapper id="services" background="bg-leaf" className="text-pine">
            <SectionHeader title="LeafItToMe" Icon={LeafyGreen} />
            <p className="mt-4 mb-2 max-w-3xl mx-auto text-center text-pine text-md md:text-lg font-bold">
                Simple websites, made easy.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-pine text-md md:text-lg">
                Affordable, approachable websites for local businesses and startups —
                built with care, clear communication, and no unnecessary jargon.
            </p>

            <div className="p-4 mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1680px]">
                {servicesData.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.2}>
                        <ServiceCard
                            icon={iconMap[service.icon as keyof typeof iconMap]}
                            title={service.title}
                            description={service.description}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
