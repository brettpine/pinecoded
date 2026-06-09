import { TreePine, FolderKanban, Users, Smartphone, MessageCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const stats = [
    {
        icon: FolderKanban,
        value: "9",
        label: "Projects Launched",
    },
    {
        icon: Users,
        value: "5",
        label: "Businesses Supported",
    },
    {
        icon: Smartphone,
        value: "100%",
        label: "Responsive Builds",
    },
    {
        icon: MessageCircle,
        value: "1:1",
        label: "Collaboration",
    },
];

const About = () => {
    return ( <SectionWrapper id="about" className="text-leaf"> <SectionHeader
        title="BehindTheBranches"
        Icon={TreePine}
        textColor="text-leaf"
        borderColor="border-leaf/50"
    />

        <div className="p-4 grid lg:grid-cols-2 gap-4 items-center max-w-6xl mx-auto">
            {/* Left Column */}
            <div>

                <p className="uppercase tracking-widest text-leaf/70 text-base">
                    Built for local businesses
                </p>
                <p className="uppercase tracking-widest text-leaf/70 text-base mb-4">
                    Designed around people.
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    The thinking behind PineCoded.
                </h2>

                <div className="space-y-6 text-base md:text-lg text-leaf/90">
                    <p>
                        PineCoded was founded with a simple goal:
                        <span className="font-semibold text-leaf">
                            {" "}make professional websites accessible to local businesses,
                            startups, and independent creators.
                        </span>
                    </p>

                    <p>
                        Starting a business is challenging enough without confusing
                        technical jargon, expensive agency quotes, or services you don't
                        need.

                        <span className="font-semibold text-leaf">
                            {" "}That's why PineCoded focuses on affordable, approachable
                            websites built with care, clear communication, and honest advice.
                        </span>
                    </p>
                </div>
            </div>

            {/* Right Column */}
            <div className="relative flex items-center justify-center min-h-[400px]">
                {/* Watermark Logo */}
                <img
                    src="/assets/logos/Pinecoded-logo-cream.svg"
                    alt=""
                    className="
                            absolute
                            inset-0
                            m-auto
                            w-64
                            md:w-80
                            opacity-5
                            pointer-events-none
                            select-none
                            "
                />

                {/* Stats */}
                <div className="relative grid grid-cols-2 gap-4 w-full">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="
                bg-leaf/10
                backdrop-blur-sm
                border
                border-leaf/20
                rounded-xl
                p-6
                text-center
              "
                            >
                                <Icon className="mx-auto mb-3 h-6 w-6" />

                                <p className="text-2xl md:text-3xl font-bold">
                                    {stat.value}
                                </p>

                                <p className="text-sm text-leaf/80 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </SectionWrapper>

);
};

export default About;
