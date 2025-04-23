import React from 'react';
import {Expand, Images} from 'lucide-react';

type ProjectCardProps = {
    id: string;
    image: string;
    title: string;
    images: string[];
    onClick: () => void;
}

const ProjectCard = ({ id, image, title, images, onClick }: ProjectCardProps) => {
    return (
        <div
            className="relative rounded-sm aspect-square cursor-pointer overflow-hidden drop-shadow-md border-leaf border-solid border-2 transition-transform hover:scale-105"
            onClick={onClick}
        >
            {images.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/50 p-1 rounded">
                    <Images className="w-4 h-4 text-white" />
                </div>
            )}
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute flex justify-center items-center inset-0 backdrop-blur-sm transition-b bg-black/40 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                <Expand className="w-8 h-8 text-white" />
            </div>
        </div>

    );
}

export default ProjectCard;