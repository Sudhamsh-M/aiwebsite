import { Link } from "react-router-dom";

function Hero() {
  return (
    
        <section
          id="home"
          className="
            w-screen min-h-screen
            flex items-center
            pt-16
            bg-[linear-gradient(135deg,#020b0a,#031716,#062a2a)]
            bg-[length:300%_300%]
            animate-[slowGlow_6s_ease-in-out_infinite]
          "
        >
        
        <div className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,220,0.18),transparent_45%),
        radial-gradient(circle_at_80%_70%,rgba(0,180,200,0.15),transparent_50%)]">
        </div>

      <div className="max-w-[900px] ml-6 md:ml-24 mr-6">
        {/* Heading */}
        <h1
          className="
            text-white font-black leading-[1.1]
            text-[2.2rem] md:text-[clamp(2.8rem,5vw,4.2rem)]
          "
        >
          <span className="block md:inline">ENGINEERING </span>
          <span className="block md:inline">THE NEXT</span>
          <span
            className="
              block bg-gradient-to-r from-[#32aeb5] to-[#34d6de]
              bg-clip-text text-transparent
            "
          >
            INTELLIGENCE
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[600px] text-[#d2ffff] text-base leading-[1.65]">
          Join the brightest minds for a week of innovation, cutting-edge AI
          workshops, hackathons, and the future of human–AI collaboration.
        </p>

        {/* Link Button */}
        <Link
          to="#events"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("events")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            inline-block mt-8 px-9 py-3 text-base font-bold rounded-full
            bg-gradient-to-r from-[#206a6e] to-[#2eabb1]
            text-[#001212]
            shadow-[0_0_30px_rgba(52,214,222,0.55)]
            transition-all duration-200
            hover:-translate-y-1
            hover:shadow-[0_0_45px_rgba(40,137,142,0.8)]
          "
        >
          View Events
        </Link>
      </div>
    </section>
    

  );
}

export default Hero;
