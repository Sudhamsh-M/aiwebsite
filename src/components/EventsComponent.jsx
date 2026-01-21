import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  X, 
  ArrowRight, 
  Cpu, 
  Terminal, 
  Zap, 
  Brain, 
  Network, 
  Code2, 
  Sparkles 
} from 'lucide-react';

// --- Configuration & Data ---
const eventsData = [
  {
    id: 1,
    title: "AI tools workshop",
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    teaser: "Kickstarting AI Week with industry leaders discussing AGI and the future of work.",
    description: "Join us for an electrifying opening ceremony. Dr. Sarah Connor (Chief AI Scientist) will discuss the transition from Narrow AI to AGI and what it means for the next decade of software engineering.",
    date: "9th Feb, 2026",
    time: "10:30 AM - 01:00 PM",
    venue: "classroom",
    capacity: "120 Seats"
  },
  {
    id: 2,
    title: "Robotics Workshop",
    icon: <Network className="w-8 h-8 text-emerald-400" />,
    teaser: "A beginner-friendly workshop on how ro build machines.",
    description: "bulding your own robot.",
    date: "9th Feb, 2026",
    time: "2:00 PM - 4:40 PM",
    venue: "Lab Complex B",
    capacity: "50 Seats"
  },
  {
    id: 3,
    title: "Startup expo",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    teaser: "Explore ai in startups.",
    description: "A showcase of the startups in out college, judged by jury",
    date: "10th Feb, 2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Atrium Hall",
    capacity: "Open for all"
  },
  {
    id: 4,
    title: "ML challenge + Data creation",
    icon: <Terminal className="w-8 h-8 text-rose-400" />,
    teaser: "ML challenge to train ML models on a dataset.",
    description: "You will be provided with a topic and dataset, develop the perfect ML model",
    date: "11th Feb, 2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Innovation Hub",
    capacity: "20 Teams"
  },
  {
    id: 5,
    title: "Vibe Coding Hackathon",
    icon: <Cpu className="w-8 h-8 text-amber-400" />,
    teaser: "No need to code, ai is all you need",
    description: "Use required AI tools to build an application, best one wins.",
    date: "12th Feb, 2026",
    time: "Round-1: 10:00 AM - 01:00 PM  Round-2: 02:00 PM to 05:00 PM",
    venue: "Seminar Hall 1",
    capacity: "100 Seats"
  },
  {
    id: 6,
    title: "Agentic AI + Deployment of applications workshop",
    icon: <Zap className="w-8 h-8 text-orange-400" />,
    teaser: "building AI is fun, but integrating it in applications is cooler.",
    description: "In this workshop, you will be taught how to develop your own agentic AI and deploy it in the application you developed and much more.",
    date: "13th Feb, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "classroom",
    capacity: "120"
  }
];

// --- Styles Injection ---
const customStyles = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 4s ease infinite;
  }
  .glass-panel {
  background: rgba(6, 22, 24, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(44, 190, 194, 0.12);
}
  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #090b0b; }
  ::-webkit-scrollbar-thumb { background: #1f3735; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #025f40; }
`;



const EventModal = ({ event, onClose }) => {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (event) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRender(true);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
      document.body.style.overflow = 'auto';
      setTimeout(() => setRender(false), 300);
    }
  }, [event]);

  if (!render) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        show ? 'bg-black/90 backdrop-blur-sm opacity-100' : 'bg-black/0 opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
    onClick={(e) => e.stopPropagation()}
    className={`
    glass-panel relative w-full max-w-2xl
    max-h-[90vh] md:max-h-[85vh]
    rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)]
    overflow-hidden
    transition-all duration-300 transform
    ${show ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'}
   `}
>

        {/* Header - Smoother gradient */}
        <div className="bg-gradient-to-r from-emerald-950/40 to-green-950/40 p-6 flex justify-between items-start border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              {event?.icon}
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-100 leading-tight">{event?.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white hover:rotate-90 transition-all duration-300">
            <X size={28} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 md:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">

          
          {/* Logistics Grid - Darker background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-black/20 p-4 rounded-xl border border-white/5">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="block text-xs text-gray-600 uppercase font-bold tracking-wider">Date</span>
                {event?.date}
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="block text-xs text-gray-600 uppercase font-bold tracking-wider">Time</span>
                {event?.time}
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="block text-xs text-gray-600 uppercase font-bold tracking-wider">Venue</span>
                {event?.venue}
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <Cpu className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="block text-xs text-gray-600 uppercase font-bold tracking-wider">Capacity</span>
                {event?.capacity}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-500/90 mb-2">Event Details</h3>
            <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-teal-500/30 pl-3">

              {event?.description}
            </p>
          </div>

          {/* Action Button - Richer, darker gradient */}
          <button 
            onClick={() => alert(`Registered for ${event?.title}`)}
            className="w-full py-4 bg-gradient-to-r from-cyan-900 via-emerald-800 to-cyan-900 animate-gradient-x text-white font-bold text-lg rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 transition-all active:scale-95 border border-white/10 hover:border-emerald-500/30"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, onClick }) => {
  return (
    <div 
      className="relative group h-full cursor-pointer"
      style={{ WebkitTapHighlightColor: 'transparent' }}
      onClick={onClick}
    >
      {/* Glow Effect - Much more subtle and blended */}

        <div 
          className="absolute inset-0 rounded-2xl blur-2xl opacity-0 
          transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(44,190,194,0.15), rgba(14,59,63,0.4))"
          }}
        />



      {/* Card Content */}
      <div className="
        glass-panel relative h-full rounded-2xl p-6 flex flex-col justify-between
        transition-all duration-500 transform
        group-hover:-translate-y-1
        group-active:scale-[0.99]
        border-white/5
        hover:border-[#2CBEC2]/40
        hover:bg-[rgba(8,34,36,0.85)]
      ">

        
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors duration-500 text-gray-400">
              {event.icon}
            </div>
            
          </div>

          <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-cyan-200 transition-colors duration-300">
            {event.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.teaser}
          </p>
        </div>

        <button 
          className="flex items-center text-sm font-semibold text-emerald-600/80 hover:text-emerald-400 transition-all group-hover:translate-x-2"
        >
          View more to Register <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- Main Layout ---
const EventsComponent = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 py-12 px-4 md:px-8 relative font-sans selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      {/* Inject custom styles */}
      <style>{customStyles}</style>
      
      {/* Ambient Background Glows - Deeper and more subtle */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-950/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Title - Smoother gradient */}
        {/* <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-emerald-300 to-cyan-200 opacity-90">
              AI Week 2026
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Immerse yourself in the future. Seven days of innovation, workshops, and competition.
          </p>
        </div> */}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
          {eventsData.map((event, index) => (
            <div 
              key={event.id}
              className={index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <EventCard 
                event={event} 
                onClick={() => setSelectedEvent(event)} 
              />
            </div>
          ))}
        </div>

        {/* Footer
        <div className="mt-20 text-center border-t border-white/5 pt-8">
          <p className="text-gray-600 text-sm">
            Designed for the future. © 2024 College Tech Society.
          </p>
        </div> */}
      </div>

      {/* Modal Popup */}
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
};

export default EventsComponent;