'use client';

import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { IoMdChatbubbles } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="scroll-offset bg-[#7a97f7] p-10 flex gap-4 flex-col items-center lg:h-[91.5vh]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-black flex gap-3 font-bold"
      >
        <Image
          width={48}
          height={48}
          src="/graduate/customer-support.png"
          alt="contact icon"
        />
        <span>Get In </span> <span className="text-[#57048e]">Touch</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg relative bg-white flex flex-col md:flex-row md:justify-around md:gap-10 w-[95%]"
      >
        {/* Image with vertical motion */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full md:w-56 md:h-56 lg:w-full lg:h-full aspect-[4/3]">
            <Image
              src="/graduate/contactme.png"
              alt="contact illustration"
              fill={true}
              className="rounded-lg object-contain"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 14rem, 100vw"
              priority
            />
          </div>
        </motion.div>

        {/* Form with vertical motion */}
        <motion.div
          className="p-4 flex flex-col gap-4 w-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <div className="p-1 bg-[#e3eafd] group focus-within:border-[purple] border-2 rounded-sm items-center flex gap-2">
              <IoPersonSharp className="group-focus-within:text-[purple]" />
              <input
                className="outline-none bg-transparent w-full"
                placeholder="Name"
                type="text"
                required
              />
            </div>
            <div className="p-1 bg-[#e3eafd] group focus-within:border-[purple] border-2 rounded-sm items-center flex gap-2">
              <MdEmail className="group-focus-within:text-[purple]" />
              <input
                className="outline-none bg-transparent w-full"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className="p-1 bg-[#e3eafd] group focus-within:border-[purple] border-2 rounded-sm items-center flex gap-2">
              <FaPhone className="group-focus-within:text-[purple]" />
              <input
                className="outline-none bg-transparent w-full"
                placeholder="Phone"
                type="number"
              />
            </div>
            <div className="p-1 bg-[#e3eafd] group focus-within:border-[purple] border-2 rounded-sm flex items-start gap-2">
              <IoMdChatbubbles className="group-focus-within:text-[purple]" />
              <textarea
                className="outline-none bg-transparent resize-none w-full h-24"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex gap-1 bg-blue-600 hover:bg-blue-700 p-3 rounded-2xl text-white w-fit"
            >
              <span>Submit</span>
              <Image
                width={24}
                height={24}
                src="/images/telegram.png"
                alt="send"
              />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default ContactSection;
