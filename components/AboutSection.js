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
        {/* Image animation changed to vertical */}
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

        {/* Text content animation changed to vertical */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[80%] md:w-1/3 h-fit"
        >
          <p className="font-bold text-3xl">I&apos;m Pritam</p>
          <p className="font-semibold pb-2">Full Stack Developer</p>
          <p>
            I am a Full-Stack developer based in Jharkhand, India. I am a Computer Science Engineering
            undergraduate from RCIT. I am very passionate about improving my coding skills & developing
            applications & websites. I build X Clone and Websites using MERN Stack. Working for myself
            to improve my skills. Love to build Full-Stack clones.
          </p>

          <div className="email py-2">
            <span className="text-[blue]">Email</span>&nbsp;:
            <span> pritammehta04@gmail.com</span>
          </div>

          <div className="add">
            <span className="text-[blue]">Place</span>&nbsp;:
            <span> Jharkhand, India - 822114</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="lg:pt-10 md:pt-4"
          >
            <Link href="/Pritam-Mehta-Resume.pdf" download>
              <div className="bg-blue-700 h-10 w-32 rounded-lg flex gap-1 items-center justify-center text-white">
                <span>Resume</span>
                <IoIosArrowDown size={16} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
