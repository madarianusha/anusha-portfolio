import Navbar from "./Navbar"

import {
  ShieldCheck,
  HeartPulse,
  Leaf,
  Database
} from "lucide-react"

function Projects({ setActiveSection }) {

  const projects = [

    {
      title: "RSA Encryption",

      description:
        "Developed a secure data encryption and decryption application using the RSA cryptographic algorithm in C#. The system integrated Microsoft Access as the backend database and demonstrated secure asymmetric encryption concepts through a Windows Forms interface.",

      icon: <ShieldCheck size={50} />,
       skills: [
    "C#",
    ".NET",
    "RSA",
    "Cryptography"
  ]
    },

    {
      title:
        "Heart Disease Prediction System",

      description:
        "Built an intelligent heart disease prediction system using K-Means Clustering and Naïve Bayes algorithms. The model analyzed medical datasets to predict heart disease in patients.",

      icon: <HeartPulse size={50} />,
      skills: [
    "Python",
    "TensorFlow",
    "CNN",
    "OpenCV",
    "Machine Learning"]
    },

    {
      title:
        "Plant Disease Detection Using CNN",

      description:
        "Developed a deep learning–based plant disease detection system using Convolutional Neural Networks (CNNs). The project identified and classified plant leaf diseases from images using computer vision techniques.",

      icon: <Leaf size={50} />,
       skills: [
    "C#",
    ".NET",
    "RSA",
    "Cryptography"
  ]
    },

    {
      title:
        "Movie Database System",

      description:
        "Designed and developed a Movie Database Management System using Python and MySQL with CRUD operations and database management functionalities.",

      icon: <Database size={50} />,
       skills: [
    "C#",
    ".NET",
    "RSA",
    "Cryptography"
  ]
    }

  ]

  return (

    <section className="min-h-screen bg-[#070B14] text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* BACKGROUND GRID */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Navbar setActiveSection={setActiveSection} />

      <div className="relative z-10">

        {/* TITLE */}

        <h1 className="text-5xl font-bold text-center mb-16">

          Featured <span className="text-cyan-400">Projects</span>

        </h1>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group perspective h-[350px]"
            >

              {/* FLIP CARD */}

              <div className="flip-card">

                {/* FRONT SIDE */}

                <div className="
                  front-card
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  backdrop-blur-xl
                  p-8
                  flex flex-col
                  justify-center
                  items-center
                  text-center
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
                ">

                  <div className="text-cyan-400 mb-6">

                    {project.icon}

                  </div>

                  <h2 className="text-3xl font-bold text-cyan-400">

                    {project.title}

                  </h2>

                  <p className="text-slate-400 mt-4">

                    Hover to explore

                  </p>

                </div>

                {/* BACK SIDE */}

                <div className="
                  back-card
                  bg-cyan-500/10
                  border border-cyan-400
                  rounded-3xl
                  backdrop-blur-xl
                  p-8
                  overflow-y-auto
                ">

                  <h2 className="text-2xl font-bold text-cyan-300 mb-5">

                    {project.title}

                  </h2>

                  <p className="text-slate-200 leading-7">

                    {project.description}

                  </p>

                 {/* SKILLS USED */}

<div className="mt-6">

  <h3 className="text-cyan-300 font-semibold mb-3">

    Skills Used

  </h3>

  <div className="flex flex-wrap gap-2">

    {project.skills.map((skill, i) => (

      <span
        key={i}
        className="
        px-3
        py-1
        rounded-full
        bg-white/10
        border
        border-white/10
        text-cyan-200
        text-sm
      "
      >

        {skill}

      </span>

    ))}

  </div>

</div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects