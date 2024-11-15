
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Projects from "./projects/page";
import Services from "./services/page";
import Skills from "./skills/page";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Services/>
    <Contact/>
   </div>
  );
}
