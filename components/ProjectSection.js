'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from 'react-icons/fa';

// Motion variant for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

// Language tag colors
const languageColors = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  Python: 'bg-green-500',
  Java: 'bg-red-500',
  'C++': 'bg-pink-500',
  'C#': 'bg-purple-500',
  PHP: 'bg-indigo-500',
  Ruby: 'bg-red-600',
  Go: 'bg-cyan-500',
  Dart:"bg-sky-500",
  Rust: 'bg-orange-500',
  HTML: 'bg-orange-600',
  CSS: 'bg-blue-600',
  SCSS: 'bg-pink-600',
  Vue: 'bg-green-600',
  React: 'bg-cyan-600',
};

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.github.com/users/pritammehta01/repos?sort=updated&per_page=100'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const repos = await response.json();

        const filteredRepos = repos
          .filter((repo) => {
            const isHTMLRepo = repo.language === 'HTML';
            const hasDescription = repo.description !== null;
            return !repo.fork && (hasDescription || isHTMLRepo);
          })
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description provided.',
            github: repo.html_url,
            demo: repo.homepage || null,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics || [],
            updated: new Date(repo.updated_at).toLocaleDateString(),
            created: new Date(repo.created_at).getFullYear(),
          }))
          .slice(0, 6); // Limit to 6 projects

        setProjects(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 🌀 Loading State
  if (loading) {
    return (
      <SectionWrapper title="Projects" icon="/images/critical-thinking.png">
        <LoadingIndicator />
      </SectionWrapper>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <SectionWrapper title="Projects" icon="/images/critical-thinking.png">
        <ErrorDisplay message={error} />
      </SectionWrapper>
    );
  }

  // ✅ Main UI
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="projects scroll-offset flex flex-col items-center py-10 gap-9 h-auto lg:h-[91.5vh]"
    >
      <Header title="Projects" icon="/images/programming.png" />

      {/* Projects Grid */}
      <div className="grid px-3 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group relative  bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Project Card */}
            <div className="p-3 pb-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <Metric icon={<FaStar />} value={project.stars} color="text-yellow-600" />
                  <Metric icon={<FaCodeBranch />} value={project.forks} color="text-blue-600" />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="px-6 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.language && (
                  <Tag color={languageColors[project.language] || 'bg-gray-500'} text={project.language} />
                )}
                {project.topics.slice(0, 2).map((topic) => (
                  <Tag key={topic} text={topic} />
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <ActionLink href={project.github} icon={<FaGithub />} text="Code" />
                {project.demo && <ActionLink href={project.demo} icon={<FaExternalLinkAlt />} text="Demo" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center my-12"
      >
        <Link
          href="https://github.com/pritammehta01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaGithub />
          View All Projects on GitHub
        </Link>
      </motion.div>
    </motion.section>
  );
}

// 🔸 Helper Components
const SectionWrapper = ({ title, icon, children }) => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="projects scroll-offset flex flex-col items-center pt-10 gap-9 h-auto lg:h-[91.5vh]"
  >
    <Header title={title} icon={icon} />
    {children}
  </motion.section>
);

const Header = ({ title, icon }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="text-4xl text-white flex gap-3 font-bold"
  >
    <Image className="h-10 w-10" src={icon} alt={`${title} Icon`} width={40} height={40} />
    <span>My</span> <span className="text-yellow-400">{title}</span>
  </motion.div>
);

const LoadingIndicator = () => (
  <div className="flex justify-center items-center py-16">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
    </div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="flex justify-center items-center py-16">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      <p className="text-red-600 dark:text-red-400 font-medium mb-4">
        {message || 'Unable to load projects from GitHub.'}
      </p>
      <a
        href="https://github.com/pritammehta01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn-primary"
      >
        <FaGithub />
        View GitHub Profile
      </a>
    </div>
  </div>
);

const Metric = ({ icon, value, color }) => (
  <div className={`flex items-center gap-1 ${color}`}>
    {icon}
    <span className="font-medium">{value}</span>
  </div>
);

const Tag = ({ color = 'bg-gray-200', text }) => (
  <span
    className={`inline-flex items-center gap-1 px-3 py-1 ${color} text-xs rounded-full font-medium text-white`}
  >
    {text}
  </span>
);

const ActionLink = ({ href, icon, text }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {icon}
    {text}
  </motion.a>
);
