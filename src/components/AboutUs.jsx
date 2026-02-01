import { Brain, Users, Rocket } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#030707] via-[#010404] to-[#030606]
        py-10 px-6
      "
    >
      

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight
              bg-gradient-to-r from-[#217880] to-[#30b7c4]
              bg-clip-text text-transparent">
              About Krithomedh
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
              Krithomedh is a student-driven technical club of department of AIML & IOT in VNRVJIET dedicated to exploring and advancing the field of Artificial Intelligence and Machine Learning. Our mission is to empower students with AI knowledge and practical skills, enabling them to build intelligent solutions for real-world problems. We conduct workshops, hands-on coding sessions and project-based learning focused on AI, ML, deep learning, and data-driven technologies.
            </p>

          </div>

          {/* RIGHT FEATURE CARDS */}
          <div className="flex items-center justify-center h-full">
            <img
              src="/1.jpeg"
              alt="Kritomedh Logo"
              className="
                w-full
                max-w-[200px] sm:max-w-[240px] md:max-w-[280px]
                object-contain
                opacity-80
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
