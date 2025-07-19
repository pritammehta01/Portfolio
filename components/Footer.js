// components/Footer.js
"use client";

import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1d1e22] text-white py-10 mt-3 px-6">
      <div className="max-w-6xl mx-auto grid md:flex justify-between gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Pritam&apos;s Portfolio</h2>
          <p className="text-gray-300 text-sm">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
            <br />
            <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>
        <div className="flex  flex-col pb-3 gap-3">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            {["Home", "About", "Skills", "Education", "Work", "Experience"].map(
              (link) => (
                <li key={link} className="flex items-center">
                  <RiArrowRightSLine />
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col pb-3 gap-3">
          <h2 className="text-xl font-semibold">Contact Info</h2>
          <p className="text-gray-300 text-sm">📞 +91 XXX-XXX-XXXX</p>
          <p className="text-gray-300 text-sm">✉️ pritammehta04@gmail.com</p>
          <p className="text-gray-300 text-sm">📍 Jharkhand, India - 822114</p>
          <div className="flex gap-4 pt-3">
            {["github", "linkedin", "twitter", "telegram", "instagram"].map(
              (social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    width={24}
                    height={24}
                    src={`/images/${social}.png`}
                    alt={social}
                  />
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="border-t flex justify-around items-center pt-4 border-gray-700 text-center text-gray-400 text-sm">
        <div className="flex items-center">
          <span>Designed With </span>
          <Image
            width={28}
            height={28}
            src="/images/favorite.png"
            alt="heart"
            className="heartbeat"
          />
          <span>By&nbsp;</span>
          <span className="text-[orange]">Pritam Mehta</span>
        </div>
        © 2025 Pritam Mehta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
