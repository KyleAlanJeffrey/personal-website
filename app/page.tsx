"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 left-[25%] w-0.5 h-3/4 bg-gradient-to-b from-gray-400 dark:from-gray-600 to-transparent opacity-60 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/4 left-[40%] w-px h-1/2 bg-gradient-to-b from-transparent via-gray-500 dark:via-gray-500 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-0 left-[55%] w-0.5 h-5/6 bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent opacity-40 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-[70%] w-px h-2/3 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-600 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-0 left-[85%] w-0.5 h-4/5 bg-gradient-to-b from-gray-500 dark:from-gray-500 to-transparent opacity-50 animate-bounce"
          style={{ animationDuration: "3.5s" }}
        ></div>

        {/* Horizontal Lines */}
        <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent animate-pulse"></div>
        <div
          className="absolute top-[30%] left-0 w-3/4 h-0.5 bg-gradient-to-r from-gray-400 dark:from-gray-600 to-transparent opacity-60 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute top-[45%] right-0 w-2/3 h-px bg-gradient-to-l from-gray-500 dark:from-gray-500 to-transparent opacity-40 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-[60%] left-0 w-5/6 h-0.5 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent opacity-50 animate-bounce"
          style={{ animationDuration: "3.2s", animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-[75%] right-0 w-1/2 h-px bg-gradient-to-l from-gray-400 dark:from-gray-600 to-transparent animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-[90%] left-0 w-4/5 h-0.5 bg-gradient-to-r from-gray-500 dark:from-gray-500 to-transparent opacity-30 animate-bounce"
          style={{ animationDuration: "4.5s" }}
        ></div>

        {/* Diagonal Lines */}
        <div
          className="absolute top-[20%] left-[20%] w-32 h-px bg-gray-400 dark:bg-gray-600 opacity-40 rotate-45 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-[50%] right-[30%] w-24 h-0.5 bg-gray-300 dark:bg-gray-700 opacity-60 -rotate-45 animate-bounce"
          style={{ animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute top-[70%] left-[60%] w-20 h-px bg-gray-500 dark:bg-gray-500 opacity-50 rotate-12 animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 md:px-8 z-10">
        {/* Left Sidebar Navigation - Hidden on mobile */}
        <div className="hidden -rotate-90 lg:flex flex-row gap-3 items-center justify-center fixed left-0 h-full z-20 py-40 w-8">
          {/* Dark Mode Toggle in Vertical Bar */}
          <div className="pt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-transparent hover:scale-110 transition-all duration-300 p-0 h-auto w-auto"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className={`blockorigin-center text-sm tracking-[0.3em] font-bold transition-all duration-300 whitespace-nowrap hover:scale-105 ${
              activeSection === "contact"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
            style={{
              fontFamily: "monospace",
            }}
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className={`block origin-center text-sm tracking-[0.3em] font-bold transition-all duration-300 whitespace-nowrap hover:scale-105 ${
              activeSection === "work"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
            style={{
              fontFamily: "monospace",
            }}
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection("github")}
            className={`block  origin-center text-sm tracking-[0.3em] font-bold transition-all duration-300 whitespace-nowrap hover:scale-105 ${
              activeSection === "github"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
            style={{
              fontFamily: "monospace",
            }}
          >
            GITHUB
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`blocktext-sm tracking-[0.3em] font-bold transition-all duration-300 whitespace-nowrap hover:scale-105 ${
              activeSection === "projects"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
            style={{
              fontFamily: "monospace",
            }}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className={`block whitespace-nowrap text-sm tracking-[0.3em] font-bold transition-all duration-300 hover:scale-105 ${
              activeSection === "home"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
            style={{
              fontFamily: "monospace",
            }}
          >
            HOME
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Right Sidebar Text - Hidden on mobile */}
        <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center -mr-24 z-20">
          <div
            className="text-sm text-gray-500 dark:text-gray-400 tracking-[0.3em] font-bold whitespace-nowrap transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-200"
            style={{ transform: "translateY(5px)", fontFamily: "monospace" }}
          >
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Home Section - Mobile responsive */}
        <section id="home" className="max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="mb-6 lg:mb-4">
                <div
                  className="text-xs md:text-sm text-gray-600 dark:text-gray-400 tracking-[0.3em] font-bold mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  ROBOTICS ENGINEER / SOFTWARE ENGINEER
                </div>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
                </div>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-8xl font-black text-black dark:text-white leading-tight mb-8 transition-all duration-300"
                style={{ fontFamily: "monospace", letterSpacing: "0.1em" }}
              >
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  KYLE
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  JEFFREY
                </span>
              </h1>

              <Button
                variant="ghost"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 p-0 h-auto font-bold group transition-all duration-300 tracking-[0.2em]"
                onClick={() => scrollToSection("projects")}
                style={{ fontFamily: "monospace" }}
              >
                <span className="relative">
                  VIEW WORK
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>

            {/* Center Content - Industrial Elements */}
            <div className="lg:col-span-4 relative order-first lg:order-none">
              <div className="flex lg:block gap-4 lg:gap-0 justify-center">
                {/* Industrial Grid Pattern */}
                <div className="relative mb-0 lg:mb-8">
                  <div className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto transform transition-all duration-500 hover:scale-105 relative">
                    <div className="absolute inset-0 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:border-gray-600 dark:hover:border-gray-400">
                      {/* Grid Pattern */}
                      <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-400 dark:hover:bg-gray-600"
                            style={{
                              animationDelay: `${i * 0.1}s`,
                              animation: "pulse 2s infinite",
                            }}
                          ></div>
                        ))}
                      </div>
                      {/* Center Label */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-2xl md:text-4xl font-black text-gray-600 dark:text-gray-400 tracking-[0.2em]"
                          style={{ fontFamily: "monospace" }}
                        >
                          01
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Industrial Element */}
                <div className="relative">
                  <div className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto transform transition-all duration-500 hover:scale-105 relative">
                    <div className="absolute inset-0 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:border-gray-600 dark:hover:border-gray-400">
                      {/* Diagonal Lines Pattern */}
                      <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-full h-0.5 bg-gray-400 dark:bg-gray-600 opacity-60"
                            style={{
                              top: `${i * 12.5}%`,
                              transform: "rotate(45deg)",
                              transformOrigin: "center",
                              animationDelay: `${i * 0.2}s`,
                              animation: "pulse 3s infinite",
                            }}
                          ></div>
                        ))}
                      </div>
                      {/* Center Label */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-2xl md:text-4xl font-black text-gray-600 dark:text-gray-400 tracking-[0.2em]"
                          style={{ fontFamily: "monospace" }}
                        >
                          02
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile responsive */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-4xl font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  HOME
                </h2>
                <h2
                  className="text-2xl md:text-4xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                ></h2>
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                  style={{ fontFamily: "monospace" }}
                >
                  AT
                </div>
                <div
                  className="text-4xl md:text-6xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:scale-105 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  01
                </div>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Mobile responsive */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-1 hidden lg:block">
              <div
                className="text-sm text-gray-500 dark:text-gray-400 tracking-[0.3em] font-bold -rotate-90 origin-center transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300"
                style={{ fontFamily: "monospace" }}
              >
                01
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Hi I'm Kyle! I recieved my degree in robotics where I did a
                Senior Thesis on simulating Milipede movements with cheap leg
                actuators (See Projects Below). For 3 years I worked throughout
                Googles robotics departments, getting robots to pickup kitchens
                (see Project Saycan), dance (see Project Starling), and make
                music (See Project Music Mode). After leaving Google, I've been
                working at Stout Industrial Technology, empowering Farmers with
                plant level data on their fields and improving their yield with
                our autonomous smart cultivator what uses AI vision to detect
                weeds in the field. In my free time I program odds and ends for
                fun.
              </p>

              <Button
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white p-0 h-auto font-bold group transition-all duration-300 tracking-[0.2em]"
                style={{ fontFamily: "monospace" }}
              >
                <span className="relative">
                  — ABOUT PROJECT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black dark:group-hover:bg-white"></span>
                </span>
              </Button>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 transform transition-all duration-500 hover:scale-105 relative">
                <div className="absolute inset-0 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:border-gray-600 dark:hover:border-gray-400">
                  {/* Circuit Pattern */}
                  <div className="absolute inset-4">
                    <div className="w-full h-full relative">
                      {/* Horizontal lines */}
                      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gray-500 dark:bg-gray-500"></div>
                      <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gray-500 dark:bg-gray-500"></div>
                      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gray-500 dark:bg-gray-500"></div>
                      {/* Vertical lines */}
                      <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gray-500 dark:bg-gray-500"></div>
                      <div className="absolute top-0 left-2/4 w-0.5 h-full bg-gray-500 dark:bg-gray-500"></div>
                      <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gray-500 dark:bg-gray-500"></div>
                      {/* Connection points */}
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                      <div className="absolute top-2/4 left-3/4 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                      <div className="absolute top-3/4 left-2/4 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Center Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 tracking-[0.2em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      03
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-end items-center lg:items-end">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-red-500 flex items-center justify-center mb-8 transform transition-all duration-500 hover:scale-110 hover:bg-red-600 hover:shadow-lg border-2 border-red-700">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white flex items-center justify-center transition-all duration-300 hover:rotate-45 border border-red-500">
                  <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-red-500"></div>
                </div>
              </div>

              <Button
                variant="ghost"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 p-0 h-auto font-bold group transition-all duration-300 tracking-[0.2em]"
                onClick={() => scrollToSection("projects")}
                style={{ fontFamily: "monospace" }}
              >
                <span className="relative">
                  NEW PROJECT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-2 text-center lg:text-left">
              <div
                className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.3em] font-bold mb-2"
                style={{ fontFamily: "monospace" }}
              >
                PORTFOLIO
              </div>
              <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
              </div>
              <div
                className="text-6xl font-black text-black dark:text-white mt-6 transition-all duration-300 hover:scale-105 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                02
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-left">
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                FEATURED
              </h2>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                PROJECTS
              </h2>
              <div
                className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                style={{ fontFamily: "monospace" }}
              >
                AT
              </div>
              <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                A curated selection of my recent work, showcasing modern web
                applications built with cutting-edge technologies and thoughtful
                user experience design.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-12">
                <div className="group cursor-pointer p-6 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-2xl font-black text-black dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      E-COMMERCE PLATFORM
                    </h3>
                    <div
                      className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.2em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      01
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                    Modern shopping experience with React & Next.js
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      REACT
                    </span>
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      NEXT.JS
                    </span>
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      TYPESCRIPT
                    </span>
                  </div>
                </div>

                <div className="group cursor-pointer p-6 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-2xl font-black text-black dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      ANALYTICS DASHBOARD
                    </h3>
                    <div
                      className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.2em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      02
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                    Real-time data visualization and insights
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      VUE.JS
                    </span>
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      D3.JS
                    </span>
                    <span
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      NODE.JS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6"></div>

            <div className="lg:col-span-6">
              <div className="group cursor-pointer p-6 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-2xl font-black text-black dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    MOBILE FITNESS APP
                  </h3>
                  <div
                    className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.2em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    03
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                  Cross-platform fitness tracking application
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    REACT NATIVE
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    FIREBASE
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    REDUX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section id="github" className="mt-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="mb-4">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.3em] font-bold mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  DEVELOPMENT
                </div>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
                </div>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                GITHUB
              </h2>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                ACTIVITY
              </h2>
              <div
                className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                style={{ fontFamily: "monospace" }}
              >
                AT
              </div>
              <div
                className="text-6xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:scale-105 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                03
              </div>
              <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Passionate about open source development and continuous
                learning. Here's a snapshot of my recent coding activity and
                contributions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="group border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div
                    className="text-3xl font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    247
                  </div>
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    style={{ fontFamily: "monospace" }}
                  >
                    COMMITS
                  </div>
                  <div
                    className="text-xs text-gray-500 dark:text-gray-500 font-bold tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    THIS YEAR
                  </div>
                </div>
                <div className="group border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div
                    className="text-3xl font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    18
                  </div>
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    style={{ fontFamily: "monospace" }}
                  >
                    REPOSITORIES
                  </div>
                  <div
                    className="text-xs text-gray-500 dark:text-gray-500 font-bold tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    ACTIVE
                  </div>
                </div>
                <div className="group border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div
                    className="text-3xl font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    5
                  </div>
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    style={{ fontFamily: "monospace" }}
                  >
                    LANGUAGES
                  </div>
                  <div
                    className="text-xs text-gray-500 dark:text-gray-500 font-bold tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    PRIMARY
                  </div>
                </div>
                <div className="group border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div
                    className="text-3xl font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    12
                  </div>
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    style={{ fontFamily: "monospace" }}
                  >
                    PULL REQUESTS
                  </div>
                  <div
                    className="text-xs text-gray-500 dark:text-gray-500 font-bold tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    MERGED
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="w-full h-96 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-500 dark:hover:border-gray-500">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-xl font-black text-black dark:text-white transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    RECENT ACTIVITY
                  </h3>
                  <div
                    className="text-sm text-gray-500 dark:text-gray-400 animate-pulse font-bold tracking-[0.2em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    LIVE
                  </div>
                </div>

                {/* Commit Activity Visualization */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4 group cursor-pointer p-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="w-4 h-4 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="flex-1">
                      <div
                        className="text-sm text-black dark:text-white font-bold transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.05em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        UPDATED PORTFOLIO DESIGN
                      </div>
                      <div
                        className="text-xs text-gray-600 dark:text-gray-400 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        2 HOURS AGO • MAIN BRANCH
                      </div>
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      +24 -8
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer p-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="w-4 h-4 bg-gray-500 dark:bg-gray-500 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="flex-1">
                      <div
                        className="text-sm text-black dark:text-white font-bold transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.05em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        ADDED NEW API ENDPOINTS
                      </div>
                      <div
                        className="text-xs text-gray-600 dark:text-gray-400 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        1 DAY AGO • FEATURE/API
                      </div>
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      +156 -12
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer p-2 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="w-4 h-4 bg-gray-700 dark:bg-gray-300 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="flex-1">
                      <div
                        className="text-sm text-black dark:text-white font-bold transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.05em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        REFACTORED AUTH SYSTEM
                      </div>
                      <div
                        className="text-xs text-gray-600 dark:text-gray-400 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        3 DAYS AGO • SECURITY/AUTH
                      </div>
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      +89 -45
                    </div>
                  </div>
                </div>

                {/* Language Stats */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      className="text-sm font-black text-black dark:text-white transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.2em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      TOP LANGUAGES
                    </h4>
                    <div
                      className="text-xs text-gray-500 dark:text-gray-400 font-bold tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      LAST 30 DAYS
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gray-700 dark:bg-gray-300 transition-all duration-300 group-hover:scale-110"></div>
                        <span
                          className="text-sm text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:text-black dark:group-hover:text-white font-bold tracking-[0.1em]"
                          style={{ fontFamily: "monospace" }}
                        >
                          TYPESCRIPT
                        </span>
                      </div>
                      <div className="flex-1 mx-4 bg-gray-300 dark:bg-gray-600 h-2 overflow-hidden border border-gray-400 dark:border-gray-500">
                        <div
                          className="bg-gray-700 dark:bg-gray-300 h-2 transition-all duration-1000 hover:bg-gray-600 dark:hover:bg-gray-200"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span
                        className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        45%
                      </span>
                    </div>
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:scale-110"></div>
                        <span
                          className="text-sm text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:text-black dark:group-hover:text-white font-bold tracking-[0.1em]"
                          style={{ fontFamily: "monospace" }}
                        >
                          JAVASCRIPT
                        </span>
                      </div>
                      <div className="flex-1 mx-4 bg-gray-300 dark:bg-gray-600 h-2 overflow-hidden border border-gray-400 dark:border-gray-500">
                        <div
                          className="bg-gray-600 dark:bg-gray-400 h-2 transition-all duration-1000 hover:bg-gray-500 dark:hover:bg-gray-300"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <span
                        className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        30%
                      </span>
                    </div>
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gray-500 dark:bg-gray-500 transition-all duration-300 group-hover:scale-110"></div>
                        <span
                          className="text-sm text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:text-black dark:group-hover:text-white font-bold tracking-[0.1em]"
                          style={{ fontFamily: "monospace" }}
                        >
                          PYTHON
                        </span>
                      </div>
                      <div className="flex-1 mx-4 bg-gray-300 dark:bg-gray-600 h-2 overflow-hidden border border-gray-400 dark:border-gray-500">
                        <div
                          className="bg-gray-500 dark:bg-gray-500 h-2 transition-all duration-1000 hover:bg-gray-400 dark:hover:bg-gray-400"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <span
                        className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-bold tracking-[0.1em]"
                        style={{ fontFamily: "monospace" }}
                      >
                        25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="mt-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="mb-4">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.3em] font-bold mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  CAREER
                </div>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
                </div>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                WORK
              </h2>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                EXPERIENCE
              </h2>
              <div
                className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                style={{ fontFamily: "monospace" }}
              >
                AT
              </div>
              <div
                className="text-6xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:scale-105 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                04
              </div>
              <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
              </div>
            </div>

            <div className="lg:col-span-6 text-center lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Here's my journey as a developer, from learning the fundamentals
                to building complex applications and leading teams to create
                amazing digital experiences.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
              <div className="lg:col-span-2 text-center lg:text-left">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold mb-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                  style={{ fontFamily: "monospace" }}
                >
                  2022 - PRESENT
                </div>
                <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
                </div>
                <div
                  className="text-2xl font-black text-black dark:text-white mt-4 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  01
                </div>
              </div>

              <div className="lg:col-span-7 text-center lg:text-left">
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-2 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  SENIOR FRONTEND
                </h3>
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  DEVELOPER
                </h3>
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                  style={{ fontFamily: "monospace" }}
                >
                  AT
                </div>
                <h4
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-bold tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  TECHCORP SOLUTIONS
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                  Leading frontend development for enterprise applications,
                  mentoring junior developers, and architecting scalable
                  React-based solutions. Improved application performance by 40%
                  and reduced bundle size by 30%.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    REACT
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    TYPESCRIPT
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    NEXT.JS
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    AWS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                  <div
                    className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    TC
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
              <div className="lg:col-span-2 text-center lg:text-left">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold mb-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                  style={{ fontFamily: "monospace" }}
                >
                  2020 - 2022
                </div>
                <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
                </div>
                <div
                  className="text-2xl font-black text-black dark:text-white mt-4 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  02
                </div>
              </div>

              <div className="lg:col-span-7 text-center lg:text-left">
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-2 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  FULL STACK
                </h3>
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  DEVELOPER
                </h3>
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                  style={{ fontFamily: "monospace" }}
                >
                  AT
                </div>
                <h4
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-bold tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  STARTUPXYZ
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                  Developed and maintained full-stack web applications using
                  modern technologies. Built RESTful APIs, implemented
                  authentication systems, and created responsive user
                  interfaces. Collaborated with design team to deliver
                  pixel-perfect implementations.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    VUE.JS
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    NODE.JS
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    MONGODB
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    DOCKER
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                  <div
                    className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    SX
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
              <div className="lg:col-span-2 text-center lg:text-left">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold mb-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                  style={{ fontFamily: "monospace" }}
                >
                  2019 - 2020
                </div>
                <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
                </div>
                <div
                  className="text-2xl font-black text-black dark:text-white mt-4 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  03
                </div>
              </div>

              <div className="lg:col-span-7 text-center lg:text-left">
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-2 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  JUNIOR
                </h3>
                <h3
                  className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  DEVELOPER
                </h3>
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                  style={{ fontFamily: "monospace" }}
                >
                  AT
                </div>
                <h4
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-bold tracking-[0.1em]"
                  style={{ fontFamily: "monospace" }}
                >
                  DIGITAL AGENCY PRO
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                  Started my professional journey building websites and web
                  applications for various clients. Gained experience in
                  frontend technologies, version control, and agile development
                  practices. Contributed to over 15 client projects.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    JAVASCRIPT
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    HTML/CSS
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    WORDPRESS
                  </span>
                  <span
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    GIT
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                  <div
                    className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    DA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-40 mb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="mb-4">
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.3em] font-bold mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  GET IN TOUCH
                </div>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
                </div>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                LET'S WORK
              </h2>
              <h2
                className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                TOGETHER
              </h2>
              <div
                className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
                style={{ fontFamily: "monospace" }}
              >
                AT
              </div>
              <div
                className="text-6xl font-black text-black dark:text-white mb-4 transition-all duration-300 hover:scale-105 tracking-[0.1em]"
                style={{ fontFamily: "monospace" }}
              >
                05
              </div>
              <div className="w-16 h-1 bg-black dark:bg-white mx-auto lg:mx-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full transition-transform duration-500 hover:translate-x-0"></div>
              </div>
            </div>

            <div className="lg:col-span-6 text-center lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                I'm always excited to connect with fellow developers and work on
                interesting projects. Drop me a line if you want to collaborate
                or just chat about tech!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group cursor-pointer p-4 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                    <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      EMAIL
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                      hello@kyle.dev
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer p-4 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      GITHUB
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                      @kyle-dev
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Check out my latest projects
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer p-4 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                    <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      LINKEDIN
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                      Kyle
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Let's connect professionally
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer p-4 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600 dark:group-hover:border-gray-400">
                    <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black text-black dark:text-white mb-1 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      LOCATION
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                      San Francisco, CA
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Open to remote work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 font-medium"
                      placeholder="Your name"
                      style={{ fontFamily: "monospace" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                      style={{ fontFamily: "monospace" }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 font-medium"
                      placeholder="your@email.com"
                      style={{ fontFamily: "monospace" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 font-medium"
                    placeholder="What's this about?"
                    style={{ fontFamily: "monospace" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-black text-black dark:text-white mb-2 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 tracking-[0.1em]"
                    style={{ fontFamily: "monospace" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent resize-none transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 font-medium"
                    placeholder="Tell me about your project..."
                    style={{ fontFamily: "monospace" }}
                  />
                </div>

                <Button
                  className="w-full md:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-black tracking-[0.1em] transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-black dark:border-white"
                  style={{ fontFamily: "monospace" }}
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
