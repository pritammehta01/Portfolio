'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="scroll-offset bg-[#cad3f1] p-10 flex flex-col gap-4 items-center h-auto lg:h-[91.5vh]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-black flex gap-3 font-bold"
      >
        <Image
          className="h-12 w-12"
          src="/graduate/graduation-hat.png"
          alt="Graduation Hat"
          width={48}
          height={48}
        />
        <span>My</span> <span className="text-[#57048e]">Education</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Education is not the learning of facts, but the training of the mind to think.
      </motion.p>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg bg-white flex flex-col sm:flex-row w-[95%] md:w-auto"
      >
        <Image
          className="rounded-lg"
          src="/graduate/rcit.jpg"
          alt="RCIT"
          width={300}
          height={200}
        />
        <div className="p-4 flex flex-col gap-4">
          <p className="text-2xl text-blue-900 font-bold">
            Bachelor of Technology In Computer Science Engineering
          </p>
          <p>Ramchandra Chandravansi Institute Of Technology | RCIT</p>
          <span className="text-[green] text-lg font-semibold">
            2021-2025 | Completed
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg bg-white flex flex-col sm:flex-row w-[95%] md:w-[70%]"
      >
        <Image
          className="rounded-lg"
          src="/graduate/gp.jpg"
          alt="Garhwa Polytechnic"
          width={300}
          height={200}
        />
        <div className="p-4 flex flex-col gap-4">
          <p className="text-2xl text-blue-900 font-bold">
            Diploma In Electrical Engineering
          </p>
          <p>Garhwa Polytechnic</p>
          <span className="text-[green] text-lg font-semibold">
            2017-2020 | Completed
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
