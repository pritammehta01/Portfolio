'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React Js', src: '/skills/atom.png', className: '' },
  { name: 'ExpressJS', src: '/skills/nodejs.png', className: '' },
  { name: 'NodeJs', src: '/skills/nod.png', className: 'w-16 h-16' },
  { name: 'Next JS', src: '/skills/nextjs.png', className: 'w-16 h-16' },
  { name: 'TailwindCSS', src: '/skills/tailwindcss.png', className: '' },
  { name: 'Bootstrap', src: '/skills/bootstrap.png', className: '' },
  { name: 'HTML', src: '/skills/html-5.png', className: '' },
  { name: 'CSS3', src: '/skills/text.png', className: 'invert' },
  { name: 'JavaScript', src: '/skills/js.png', className: '' },
  { name: 'Java', src: '/skills/java.png', className: '' },
  { name: 'MongoDB', src: '/skills/leaf.png', className: '' },
  { name: 'Git VCS', src: '/skills/social.png', className: '' },
  { name: 'GitHub', src: '/skills/github.png', className: 'invert' },
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
        className="bg-[#161668d8] w-auto md:w-[80%] h-auto rounded-xl p-3"
      >
        <div className="flex gap-4 flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white w-24 md:w-41 gap-1 md:gap-2 h-20 hover:scale-105 md:h-28 flex flex-col justify-center items-center rounded-xl"
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={40}
                height={40}
                className={`w-10 h-10 ${skill.className}`}
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
