import { TentTree } from "lucide-react";
import Marquee from "react-fast-marquee";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const brands = [
    {
        name: "Antoinette",
        logo: "/assets/partners/antoinette.png",
        partner: true,
    },
    {
        name: "A Matter Of Code",
        logo: "/assets/partners/amoc.svg",
        partner: true,
    },
    {
        name: "BPP Detailing",
        logo: "/assets/partners/bpp.png",
    },
    {
        name: "Dance4Dayz",
        logo: "/assets/partners/d4d-svg.svg",
    },
    {
        name: "Amelia June Photography",
        logo: "/assets/partners/ajp.svg",
    },
];

const GrowingForest = () => {
    return (
        <SectionWrapper
            id="forest"
            background="bg-leaf"
            className="text-pine"
        >
            <SectionHeader
                title="GrowingForest"
                Icon={TentTree}
            />

            <div className="p-4 max-w-4xl mx-auto text-center mt-12 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    A forest doesn't grow from a single tree.
                </h2>

                <p className="text-lg max-w-3xl mx-auto text-pine/80">
                    Every project, client, and collaboration helps PineCoded grow a little
                    further. I'm proud to work with these businesses and grateful for the
                    trust they've placed in me.
                </p>
            </div>

            <div className="relative">
                {/* Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-leaf to-transparent z-10 pointer-events-none" />

                {/* Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-leaf to-transparent z-10 pointer-events-none" />

                <div className=" w-full
    max-w-[300px]
    sm:max-w-[500px]
    md:max-w-[700px]
    lg:max-w-[1200px]
    mx-auto
    overflow-hidden">
                    <Marquee
                        speed={20}
                        gradient={false}
                        autoFill={true}
                        style={{ width: "100%" }}
                    >
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="
                relative
                mx-4
                flex-shrink-0
                bg-white/15
                rounded-xl
                px-8
                py-6
                w-[220px]
                h-[140px]
                flex
                items-center
                justify-center
              "
                        >
                            {brand.partner && (
                                <span
                                    className="
                    absolute
                    top-3
                    right-3
                    bg-pine
                    text-leaf
                    text-xs
                    font-medium
                    px-2
                    py-1
                    rounded-full
                  "
                                >
                  Partner
                </span>
                            )}

                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="
                  max-h-20
                  max-w-[160px]
                  object-contain
                "
                            />
                        </div>
                    ))}
                </Marquee>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default GrowingForest;