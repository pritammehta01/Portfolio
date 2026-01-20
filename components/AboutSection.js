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
          <p className="font-semibold pb-2 text-purple-600 text-xl">
            DevOps Engineer | CI/CD | Docker | Kubernetes | Nginx | Linux | GCP
          </p>
          
          <div className="leading-relaxed space-y-4">
            <p>
              I am a <strong>DevOps Engineer</strong> with hands-on experience in designing, 
              deploying, and managing production systems using <strong>Docker, Docker Compose, 
              Jenkins CI/CD pipelines, Kubernetes, Nginx reverse proxy, and Linux</strong>.
            </p>
            <p>
              Currently, I am working as a <strong>DevOps Intern at Amnex Infotechnologies</strong>, 
              where I have gained real-world exposure to infrastructure automation and production operations. 
              I have a proven ability to manage live applications on cloud instances and automate build 
              and deployment workflows.
            </p>
            <p>
              I hold a <strong>B.Tech in Computer Science Engineering</strong> from 
              Ramchandra Chandravanshi Institute Of Technology (RCIT) and a 
              Diploma in Electrical Engineering from Garhwa Polytechnic.
            </p>
          </div>

          <div className="email pt-6 pb-1">
            <span className="text-blue-600 font-bold">Email</span>&nbsp;:
            <span> pritammehta04@gmail.com</span>
          </div>

          <div className="add pb-6">
            <span className="text-blue-600 font-bold">Place</span>&nbsp;:
            <span> Jharkhand, India - 822114</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link href="/Pritam-Mehta-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="bg-blue-700 h-10 w-40 rounded-lg flex gap-2 items-center justify-center text-white shadow-lg hover:bg-blue-800 transition-colors">
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