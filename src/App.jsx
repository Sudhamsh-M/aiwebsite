import { BrowserRouter } from "react-router-dom";
import JourneyTimeline from "./components/JourneyTimeline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsComponent from "./components/EventsComponent";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Scroll Targets */}
      <section id="events">
        <EventsComponent />
      </section>

      <section id="timeline">
        <JourneyTimeline />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </BrowserRouter>
  );
}

export default App;
