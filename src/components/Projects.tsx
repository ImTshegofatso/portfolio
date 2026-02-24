import React from 'react';
import ytdownloader from '../assets/ytdownloader.png';
import aimusic from '../assets/aimusic.png';
import superbalist from '../assets/superbalist.jpg';

type Project = {
  title: string;
  description: string;
  image: string;   
  tags: string[];
  link: string;    
  github: string;  
};

const projects: Project[] = [
  {
    title: 'Superbalist Clone Website',
    description:
      'A lightweight, modern web app that analyzes audio files and predicts whether a song was AI-created or human-made. Built with React, TypeScript, and TailwindCSS.',
    image: superbalist,
    tags: ['Vite/React', 'TypeScript', 'TailwindCSS'],
    link: 'https://superbalistclone.netlify.app/',
    github: 'https://github.com/ImTshegofatso/superbalist-clone',
  },
  {
    title: 'AI Music Detector',
    description:
      'Analyzes uploaded audio and predicts whether it is AI-generated or human-composed. Drag-and-drop UI, animated analysis, and clear feedback.',
    image: aimusic,
    tags: ['Vite/React', 'TypeScript', 'TailwindCSS'],
    link: 'https://aimusicdetector.netlify.app/',
    github: 'https://github.com/ImTshegofatso/ai-music-detector',
  },
  {
    title: 'YouTube Downloader',
    description:
      'React + TypeScript YouTube‑to‑MP3 downloader with preview, progress tracking, and multiple MP3 qualities (Cobalt API).',
    image: ytdownloader,
    tags: ['Vite/React', 'TypeScript', 'TailwindCSS'],
    link: 'https://y2download.netlify.app/',
    github: 'https://github.com/ImTshegofatso/youtube-downloader',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing a blend of design innovation and technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white/5 rounded-lg overflow-hidden border border-white/10"
            >
              {/* Image wrapper — fixed aspect ratio with object-contain for full image visibility */}
              <div className="relative w-full aspect-[4/3] bg-black/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-500/20 text-indigo-100 hover:bg-indigo-500/30 hover:text-white px-4 py-2 font-medium transition"
                  >
                    <i className="ri-external-link-line" />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white hover:bg-white/10 px-4 py-2 font-medium transition"
                  >
                    <i className="ri-github-fill" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects — Button that links to GitHub profile */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ImTshegofatso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 font-semibold transition"
          >
            View All Projects
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;