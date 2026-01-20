'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Skills updated to match DevOps Engineer Resume profile
const skills = [
  // DevOps & Cloud (Priority)
  { name: 'Docker', src: '/skills/docker.png', className: '' }, // [cite: 16]
  { name: 'Kubernetes', src: '/skills/kubernetes.png', className: '' }, // [cite: 18]
  { name: 'Jenkins', src: '/skills/jenkins.png', className: '' }, // [cite: 17]
  { name: 'Nginx', src: '/skills/nginx.png', className: '' }, // [cite: 19]
  { name: 'GCP', src: '/skills/gcp.png', className: '' }, // [cite: 21]
  { name: 'Linux', src: '/skills/linux.png', className: '' }, // [cite: 20]
  
  // Version Control
  { name: 'Git', src: '/skills/social.png', className: '' }, // 
  { name: 'GitHub', src: '/skills/github.png', className: 'invert' }, // [cite: 24]

  // Development Stack
  { name: 'NodeJs', src: '/skills/nod.png', className: 'w-16 h-16' },
  { name: 'React Js', src: '/skills/atom.png', className: '' },
  { name: 'Next JS', src: '/skills/nextjs.png', className: 'w-16 h-16' },
  { name: 'JavaScript', src: '/skills/js.png', className: '' },
  { name: 'MongoDB', src: '/skills/leaf.png', className: '' },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="skills scroll-offset flex flex-col items-center pt-10 gap-9 h-auto lg:h-[91.5vh]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-white flex gap-3 font-bold"
      >
        <Image
          className="h-10 w-10 invert"
          src="/images/critical-thinking.png"
          alt="Programming Icon"
          width={40}
          height={40}
        />
        <span>Skills &</span> <span className="text-yellow-400">Abilities</span>
      </motion.div>

      {/* Skill Cards Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#161668d8] w-auto md:w-[80%] h-auto rounded-xl p-6 shadow-2xl"
      >
        <div className="flex gap-4 flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white w-24 md:w-40 gap-1 md:gap-2 h-24 hover:scale-110 md:h-32 flex flex-col justify-center items-center rounded-xl transition-transform border border-slate-800"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className={`object-contain ${skill.className}`}
                />
              </div>
              <p className="text-xs md:text-sm font-medium text-center px-1">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}