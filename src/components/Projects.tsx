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

    return (
        <SectionWrapper id="projects" className="text-leaf">
            <SectionHeader
                title="SeedsPlanted"
                Icon={Sprout}
                textColor="text-leaf"
                borderColor="border-leaf/50"
            />

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5 gap-3">
                {[...projectData].reverse().map((project, index) => (
                    <ScrollReveal
                        key={project.id}
                        delay={index * 0.2}
                        variants={{
                            hidden: { opacity: 0, scale: 0.9, y: 40, rotate: -5 },
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
                                }
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
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
