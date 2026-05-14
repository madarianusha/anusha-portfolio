import { useState } from "react"

import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="bg-[#070B14] text-white min-h-screen">

      {activeSection === "home" && (
        <Hero setActiveSection={setActiveSection} />
      )}

      {activeSection === "skills" && (
        <Skills setActiveSection={setActiveSection} />
      )}

      {activeSection === "projects" && (
        <Projects setActiveSection={setActiveSection} />
      )}

      {activeSection === "contact" && (
        <Contact setActiveSection={setActiveSection} />
      )}

    </div>
  )
}

export default App