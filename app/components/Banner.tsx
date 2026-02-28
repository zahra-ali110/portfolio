"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["WordPress Developer", "Django Developer", "Tailwind CSS", "Flutter Developer"]; const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280 opacity-90"
                    style={{
                      width: "auto",
                      height: "auto",
                      filter: "hue-rotate(120deg) saturate(1.35) brightness(1.05)",
                    }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am <span className="text-orange-400">Zahra Ali</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10" />
                </div>
              </div>

              {/* Avatar + CSS glow (replaces me-glow.png) */}
              <div className="relative w-[300px] h-[300px]">
                {/* orange glow */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,122,24,0.55), rgba(255,122,24,0.18), transparent 65%)",
                  }}
                />
                {/* soft halo */}
                <div
                  className="absolute inset-6 -z-10 blur-2xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,179,107,0.35), transparent 60%)",
                  }}
                />

                <Image
                  src="/assets/me.png"
                  alt="Zahra Ali - Web Developer and Designer"
                  fill
                  sizes="300px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute opacity-90"
                style={{
                  left: "-100px",
                  top: "-50px",
                  width: "auto",
                  height: "auto",
                  filter: "hue-rotate(120deg) saturate(1.35) brightness(1.05)",
                }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am <span className="text-orange-400">Zahra Ali</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10" />
            </div>

            <div>
              <p className="text-2xl">A Developer who</p>

              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Writes for{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                  humans
                </span>
                ...
              </h1>

              <p className="text-md text-white/80">
                Because computers can read anything, but great software is built by people who understand each other.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse text-orange-400">|</span>
          </p>

          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a Junior Web Developer at</span>
            <span className="flex items-center gap-2">
              
              <span className="text-orange-400 font-semibold">Proteus Technologies,</span>
            </span>
          </p>

          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            A self-taught web and app developer dedicated to building meaningful digital experiences. I translate complex user needs into functional, high-performance products that bridge the gap between human intuition and technical logic.
          </p>
        </div>
      </div>
    </section>
  );
}