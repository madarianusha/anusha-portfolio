function Navbar({ setActiveSection }) {

  return (

    <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/20 backdrop-blur-xl">

      {/* LEFT */}

      <div className="flex items-center gap-3">

        <div className="text-4xl">
          👋
        </div>

        <div>

          <h1 className="text-white text-2xl font-bold">
            Hello
          </h1>

          <p className="text-slate-400 text-sm">
            Welcome to my portfolio
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <ul className="hidden md:flex gap-10 text-slate-300 font-medium">

        <li>
          <button
            onClick={() => setActiveSection("home")}
            className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            Home
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("skills")}
            className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            Skills
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("projects")}
            className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            Projects
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("contact")}
            className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            Contact
          </button>
        </li>

      </ul>

    </div>

  )
}

export default Navbar