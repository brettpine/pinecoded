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

            <div className="mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
