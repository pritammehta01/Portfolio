'use client';

import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="scroll-offset flex flex-col items-center gap-3 md:pt-10 md:gap-6 lg:gap-16 h-auto lg:h-[91.5vh] py-4 md:py-2"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex text-3xl items-center gap-1 font-bold"
      >
        <Image
          className="w-8 h-8"
          src="/images/user.png"
          alt="User Icon"
          width={32}
          height={32}
        />
        <span>About</span> <span className="text-purple-600">Me</span>
      </motion.div>

      <div className="info container flex flex-col md:flex-row items-center justify-center gap-3 md:gap-24">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="image w-80 box-border h-fit"
        >
          <Image
            className="tilt w-full h-fit object-cover rounded-2xl grayscale-80 hover:grayscale-0"
            src="/images/info.jpg"
            alt="About Info"
            width={320}
            height={320}
            style={{ boxShadow: '0 0 20px rgba(5, 11, 11, 0.6)' }}
            draggable={false}
          />
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[80%] md:w-1/2 h-fit"
        >
          <p className="font-bold text-3xl">I&apos;m Pritam Mehta</p>
          {/* Updated Title */}
          <p className="font-semibold pb-2 text-purple-600 text-xl">DevOps Engineer</p>
          
          {/* Updated Bio focusing on DevOps experience */}
          <p className="leading-relaxed">
            I am a dedicated **DevOps Engineer** based in Jharkhand, India[cite: 3]. Currently, I am 
            working as a **DevOps Intern at Amnex Infotechnologies**, where I gain 
            hands-on exposure to infrastructure automation and production operations.
          </p>
          <p className="pt-2 leading-relaxed">
            With a B.Tech in Computer Science Engineering from RCIT, I specialize in 
            designing and managing production systems using **Docker, Kubernetes, Jenkins, and Nginx**[cite: 6]. 
            I am passionate about automating build and deployment workflows [cite: 7] and managing 
            live applications on **GCP and Linux cloud infrastructure**[cite: 7, 21, 31].
          </p>

          <div className="email pt-4 pb-1">
            <span className="text-[blue] font-semibold">Email</span>&nbsp;:
            <span> pritammehta04@gmail.com</span>
          </div>

          <div className="add pb-4">
            <span className="text-[blue] font-semibold">Place</span>&nbsp;:
            <span> Jharkhand, India - 822114</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link href="/Pritam-Mehta-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="bg-blue-700 h-10 w-36 rounded-lg flex gap-2 items-center justify-center text-white shadow-lg hover:bg-blue-800 transition-colors">
                <span>View Resume</span>
                <IoIosArrowDown size={16} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
