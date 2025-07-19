// app/page.js or pages/index.js
"use client";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useEffect } from "react";
import NavSection from "@/components/NavSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Typewriter from "typewriter-effect";

export default function Home() {
  useEffect(() => {
    const localScript = document.createElement("script");
    localScript.src = "/script.js";
    localScript.async = true;
    document.body.appendChild(localScript);

    return () => {
      document.body.removeChild(localScript);
    };
  }, []);

  return (
    <>
      <NavSection />

      <main>
        {/* Hero Section */}
        <div id="home" className="ui">
          <div id="tr">
            {" "}
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Web Developer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 40, // ↓ Lower value = faster typing
                deleteSpeed: 20, // Optional: control delete speed too
              }}
            />
          </div>
          <div className="container flex justify-around items-center">
            <div className="flex flex-col gap-6 items-center">
              <a href="#about">
                <div className="bg-blue-700 h-10 w-32 rounded-2xl flex items-center justify-center text-white">
                  <span>About Me</span>
                  <IoIosArrowDown size={18} />
                </div>
              </a>

              {/* Social Links */}
              <div className="social flex gap-2 md:gap-4">
                {[
                  [
                    "linkedin",
                    "https://www.linkedin.com/in/pritam-mehta-851405262",
                  ],
                  ["github", "https://github.com/pritammehta01"],
                  ["twitter", "#"],
                  ["telegram", "#"],
                  ["instagram", "#"],
                ].map(([platform, url]) => (
                  <a
                    href={url}
                    key={platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 group relative">
                      <Image
                        src={`/images/${platform}.png`}
                        alt={platform}
                        width={40}
                        height={40}
                      />
                      <span className="absolute left-0 top-full mt-1 hidden text-sm font-semibold text-black group-hover:block">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="image bg relative w-24 h-24 md:w-72 md:h-72 rounded-full md:p-2">
              <Image
                className="object-fit tilt bg-sky-400 rounded-full"
                src="/prof-removebg-preview.png"
                alt="Pritam Profile"
                fill={true}
                // width={288}
                // height={288}
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="h-[2px] bg-gray-500"></div>
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectSection/>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
