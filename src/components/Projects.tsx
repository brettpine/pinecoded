import React, { useState } from 'react';
import SectionWrapper from "./SectionWrapper";
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projectData from '../data/projects.json';
import { Sprout } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const projects = [...projectData].reverse();

    const displayedProjects = showAllProjects
        ? projects
        : projects.slice(0, 8);

    const handleToggleProjects = () => {
        if (!showAllProjects) {
            setHasAnimated(true);
        }

        if (showAllProjects) {
            document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        setShowAllProjects(!showAllProjects);
    };

    return (
        <SectionWrapper id="projects" className="text-leaf">
            <SectionHeader
                title="SeedsPlanted"
                Icon={Sprout}
                textColor="text-leaf"
                borderColor="border-leaf/50"
            />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every project starts with a seed.
            </h2>

            <p className="text-lg max-w-3xl mx-auto text-leaf/80 mb-2">
                Browse a selection of projects I've designed and developed, from client websites
                to personal creations, each helping something new grow online.
            </p>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5 gap-3 max-w-[1080px]">
                {displayedProjects.map((project, index) =>
                    showAllProjects || hasAnimated ? (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            image={project.images[0]}
                            title={project.title}
                            images={project.images}
                            onClick={() => setSelectedProject(project)}
                        />
                    ) : (
                        <ScrollReveal
                            key={project.id}
                            delay={index * 0.2}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 40,
                                    rotate: -5,
                                },
                                visible: (delay = 0) => ({
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    rotate: 0,
                                    transition: {
                                        delay,
                                        duration: 0.7,
                                        type: 'spring',
                                        stiffness: 70,
                                        damping: 12,
                                    },
                                }),
                            }}
                        >
                            <ProjectCard
                                id={project.id}
                                image={project.images[0]}
                                title={project.title}
                                images={project.images}
                                onClick={() => setSelectedProject(project)}
                            />
                        </ScrollReveal>
                    )
                )}
            </div>

            {projects.length > 8 && (
                <button
                    onClick={handleToggleProjects}
                    className="
                        mt-6
                        bg-leaf
                        text-pine
                        px-5
                        py-2
                        rounded-md
                        shadow-md
                        hover:bg-pine-light
                        transition
                    "
                >
                    {showAllProjects ? "See Less" : "See More"}
                </button>
            )}
        </SectionWrapper>
    );
};

export default Projects;