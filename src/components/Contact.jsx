import Navbar from "./TempNavbar"

function Contact({ setActiveSection }) {

  return (

    <section className="min-h-screen bg-[#070B14] text-white overflow-hidden">

      {/* NAVBAR */}

      <Navbar setActiveSection={setActiveSection} />

      {/* CONTACT SECTION */}

      <div className="flex items-center justify-center px-6 py-20 relative">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        {/* CONTACT CARD */}

        <div className="relative z-10 max-w-4xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-12 text-center shadow-2xl">

          {/* TITLE */}

          <h1 className="text-5xl font-black mb-8">

            Contact <span className="text-cyan-400">Me</span>

          </h1>

          {/* DESCRIPTION */}

          <p className="text-slate-300 text-lg leading-8 max-w-2xl mx-auto mb-14">

            Let’s connect and collaborate on cybersecurity, networking, and full stack development projects.

          </p>

         {/* CONTACT CARDS */}

<div className="grid md:grid-cols-3 gap-8">

  {/* EMAIL */}

  <a
    href="mailto:anushamadari@gmail.com"
    className="bg-white/5 border border-white/10 rounded-3xl p-8
    hover:-translate-y-3 hover:border-cyan-400
    hover:shadow-[0_0_35px_rgba(0,255,255,0.25)]
    transition duration-300 text-center"
  >

    <div className="text-5xl mb-5">
      📧
    </div>

    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
      Email
    </h2>

    <p className="text-slate-300">
      anushamadari@gmail.com
    </p>

  </a>

  {/* LINKEDIN */}

  <a
    href="https://www.linkedin.com/in/anushamadari/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 rounded-3xl p-8
    hover:-translate-y-3 hover:border-cyan-400
    hover:shadow-[0_0_35px_rgba(0,255,255,0.25)]
    transition duration-300 text-center"
  >

    <div className="text-5xl mb-5">
      💼
    </div>

    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
      LinkedIn
    </h2>

    <p className="text-slate-300">
      Connect with me
    </p>

  </a>

  {/* GITHUB */}

  <a
    href="https://github.com/madarianusha"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 rounded-3xl p-8
    hover:-translate-y-3 hover:border-cyan-400
    hover:shadow-[0_0_35px_rgba(0,255,255,0.25)]
    transition duration-300 text-center"
  >

    <div className="text-5xl mb-5">
      💻
    </div>

    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
      GitHub
    </h2>

    <p className="text-slate-300">
      View my projects
    </p>

  </a>

</div>

      
        </div>

      </div>

    </section>
  )
}

export default Contact