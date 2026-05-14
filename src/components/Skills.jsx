import Navbar from "./Navbar"
function Skills({ setActiveSection }) {

  const skills = [

    {
      title: "Cybersecurity",
      icon: "🔐",
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
      description:
        "Network security, penetration testing, Linux administration, and threat analysis.",
      tech: ["Linux", "Wireshark", "Networking"]
    },

    {
      title: "Networking",
      icon: "🌐",
      gradient: "from-blue-400 via-indigo-500 to-cyan-500",
      description:
        "Routing, switching, subnetting, packet analysis, and network troubleshooting.",
      tech: ["TCP/IP", "Subnetting", "Packet Analysis"]
    },

    {
      title: "Full Stack",
      icon: "💻",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      description:
        "Building responsive and secure web applications using modern technologies.",
      tech: ["React", "Node.js", "JavaScript"]
    },

    {
      title: "AI & ML",
      icon: "🤖",
      gradient: "from-green-400 via-emerald-500 to-cyan-500",
      description:
        "Machine learning, CNN models, intelligent systems, and data analysis.",
      tech: ["Python", "TensorFlow", "OpenCV"]
    }

  ]

  return (

     <section className="min-h-screen bg-[#070B14] text-white px-6 md:px-16 py-20 overflow-hidden">

  <Navbar setActiveSection={setActiveSection} />

  {/* TITLE */}

      

      {/* TITLE */}

      <h1 className="text-5xl font-black text-center mb-20">

        My <span className="text-cyan-400">Skills</span>

      </h1>

      {/* SKILL CARDS */}

      <div className="flex flex-wrap justify-center gap-10">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="relative group w-[300px] h-[380px]"
          >

            {/* GLOW BACKGROUND */}

            <div
              className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-[30px] blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 rotate-6`}
            ></div>

            {/* GLASS CARD */}

<div className="
relative
z-10
h-full
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-[30px]
p-8
overflow-hidden
hover:-translate-y-3
hover:border-cyan-400
transition
duration-500

flex
flex-col
justify-between
">
              {/* ICON */}

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl border border-white/10">

                {skill.icon}

              </div>

              {/* TITLE */}

              <h2 className="text-3xl font-bold text-white mt-8">

                {skill.title}

              </h2>

              {/* DESCRIPTION */}

              <p className="text-slate-300 mt-5 leading-7 text-sm">

                {skill.description}

              </p>

              {/* TECH TAGS */}

<div className="flex flex-wrap gap-3 mt-8 items-start">
                {skill.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-white/10 text-cyan-300 px-4 py-2 rounded-xl text-sm border border-white/10 hover:bg-cyan-500/10 transition"
                  >

                    {tech}

                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills