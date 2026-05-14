import profile from "../assets/profile.jpg"

function Hero({ setActiveSection }) {

  return (

    <section className="min-h-screen bg-[#070B14] flex items-center justify-center px-6 py-16 overflow-hidden relative">

      {/* ANIMATED GRID */}

<div className="animated-grid absolute inset-0"></div>

{/* GLOW ORBS */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-blob"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>

<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-blob animation-delay-4000"></div>{/* BACKGROUND GLOW */}

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CARD */}

      <div className="relative z-10 max-w-6xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

        {/* NAVBAR */}

        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">

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

          {/* RIGHT NAV */}

          <ul className="hidden md:flex gap-10 text-slate-300 font-medium">

            <li>
              <button
                onClick={() => setActiveSection("home")}
                className="hover:text-cyan-400 transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveSection("skills")}
                className="hover:text-cyan-400 transition"
              >
                Skills
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className="hover:text-cyan-400 transition"
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className="hover:text-cyan-400 transition"
              >
                Contact
              </button>
            </li>

          </ul>

        </div>

        {/* HERO SECTION */}

        <div className="grid md:grid-cols-2 gap-10 px-8 md:px-12 py-14 items-center">

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-6">

              Cybersecurity • Networking • Full Stack

            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">

              ANUSHA

              <span className="block text-cyan-400">
                MADARI
              </span>

            </h1>

            <p className="text-slate-300 text-lg leading-8 mt-8 max-w-xl">

              Cybersecurity and Networking enthusiast with experience at Accenture, Capgemini, and Teleperformance.

            </p>

            
            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={() => setActiveSection("projects")}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl transition shadow-lg shadow-cyan-500/30 hover:scale-105 duration-300"
              >
                Explore Projects
              </button>

              <a
                href="/resume.pdf"
                download
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-2xl transition hover:scale-105 duration-300"
              >
                Download Resume
              </a>

            </div>

            {/* SKILL TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-cyan-400 hover:-translate-y-2 transition duration-300">
                Cybersecurity
              </div>

              <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-cyan-400 hover:-translate-y-2 transition duration-300">
                Networking
              </div>

              <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-cyan-400 hover:-translate-y-2 transition duration-300">
                Linux
              </div>

              <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-cyan-400 hover:-translate-y-2 transition duration-300">
                Full Stack
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center items-center">

            {/* MAIN GLOW */}

            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            {/* FLOATING CARD 1 */}

            <div className="absolute top-10 right-30 bg-black/40 border border-cyan-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-lg shadow-cyan-500/10 hover:-translate-y-2 transition duration-300 animate-pulse">

              <p className="text-cyan-400 font-bold text-lg">
                🔐 Security
              </p>

              <p className="text-slate-300 text-sm mt-1">
                Network Protection
              </p>

            </div>

            {/* FLOATING CARD 2 */}

            <div className="absolute bottom-16 left-30 bg-black/40 border border-blue-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-lg shadow-blue-500/10 hover:-translate-y-2 transition duration-300 animate-pulse">

              <p className="text-blue-400 font-bold text-lg">
                💻 Full Stack
              </p>

              <p className="text-slate-300 text-sm mt-1">
                React & Node.js
              </p>

            </div>

            {/* PROFILE IMAGE */}

            <img
              src={profile}
              alt="profile"
              className="relative z-10 w-[320px] h-[420px] object-cover rounded-[30px] border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.3)] hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero