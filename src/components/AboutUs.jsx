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
              About Kritomedh
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
              AI Week is a celebration of innovation, curiosity, and collaboration.
              We bring together students, educators, and industry experts to explore
              artificial intelligence through hands-on learning and real-world ideas.
            </p>

            <p className="mt-4 text-gray-500 max-w-xl">
              From beginner-friendly sessions to advanced AI deployments,
              our goal is to empower minds and spark future-ready innovation.
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
