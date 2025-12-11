import GitHub from "../assets/GitHub.svg";
import Internet from "../assets/Internet.svg";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "ButlerAI- AI powered Local File Organizer",
      description:
        "ButlerAI is an AI powered local file organizer application, which smartly renames files and organizes your cluttered file directory, everything happens locally and respects user privacy.",
      technologies: [
        "Python",
        "Ollama",
        "Python Tesseract OCR",
        "Local AI Models",
        "Gemma3:4b",
      ],
      github:
        "https://github.com/sanjitrao16/ButlerAI-AI-powered-Local-File-Organizer",
    },
    {
      id: 2,
      title: "Tantrotsav 2025 Tech Fest Website",
      description:
        'Developed the official website of my college\'s flagship annual tech event "Tantrotsav 2025" using the MERN stack, delivering a seamless and modern user experience for thousands of participants. Also collaborated with 3 of my college-mates in the development of this project.',
      technologies: [
        "ReactJS",
        "JavaScript",
        "MongoDB",
        "Production-Oriented Development",
        "Payment Gateways",
        "Software Development",
        "TailWindCSS",
      ],
      github: "https://github.com/sanjitrao16/tantrotsav-2025",
      website: "https://tantrotsav.amrita.edu/",
    },
    {
      id: 3,
      title: "Text Highlighter Google Chrome Extension",
      description:
        "Created a chrome extension where users can highlight texts in a webpage and also stores the highlights in memory for future revisits",
      technologies: [
        "JavaScript",
        "Chrome Extensions",
        "Web Browsers",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/sanjitrao16/Text-Highlighter",
    },
    {
      id: 4,
      title: "GeeksForGeeks Club Offical Website",
      description:
        "Developed and built the official website of Amrita Chennai's GeeksForGeeks Campus Body Student Club, thereby establishing a central hub for club activities and information. The website is created using ReactJS and TailwindCSS",
      technologies: ["ReactJS", "JavaScript", "TailwindCSS"],
      github:
        "https://github.com/sanjitrao16/GeeksForGeeks-Amrita-Club-Website",
    },
  ];

  return (
    <section id="projects">
      <div className="Project-Section min-h-screen bg-gradient-to-b from-[#110f10] via-[#1a1819] to-[#110f10] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="Header text-2xl md:text-5xl font-bold text-[#e8e8e8] mb-4">
              Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#80f9ff] to-transparent mx-auto mb-6"></div>
            <p className="text-[#8b8b8b] text-base md:text-lg max-w-2xl mx-auto">
              Explore some of my recent projects...
            </p>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#80f9ff]/20 rounded-2xl overflow-hidden hover:border-[#80f9ff]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#80f9ff]/10 flex flex-col h-full"
              >
                <div className="h-1 bg-gradient-to-r from-[#80f9ff] via-[#00d9ff] to-transparent"></div>
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e8e8e8] mb-3 group-hover:text-[#80f9ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8b8b8b] text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-[#80f9ff] font-semibold mb-3 uppercase tracking-wider">
                      Tech Stack and Skills used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs sm:text-sm text-[#e8e8e8] bg-[#80f9ff]/10 border border-[#80f9ff]/30 px-2 sm:px-3 py-1 rounded-lg hover:border-[#80f9ff]/60 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="Project-Links flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#80f9ff] font-semibold hover:text-[#e8e8e8] transition-colors duration-300 group/link"
                    >
                      <img
                        src={GitHub}
                        alt="GitHub"
                        className="w-5 h-5 invert"
                      />
                      <span className="group-hover/link:underline">
                        View on GitHub
                      </span>
                    </a>
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#80f9ff] font-semibold hover:text-[#e8e8e8] transition-colors duration-300 group/link"
                      >
                        <img
                          src={Internet}
                          alt="Website"
                          className="w-5 h-5 invert"
                        />
                        <span className="group-hover/link:underline">
                          Visit Website
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center backdrop-blur-md bg-gradient-to-r from-[#80f9ff]/8 to-transparent border border-[#80f9ff]/18 rounded-xl p-6 hover:border-[#80f9ff]/30 transition-colors duration-200">
            <h2 className="text-xl md:text-3xl font-bold text-[#e8e8e8] mb-3">
              Want to see more?
            </h2>
            <p className="text-[#9aa0a6] mb-4 max-w-xl mx-auto text-sm md:text-base">
              Check out my GitHub profile for more projects, contributions, and
              collaborative work.
            </p>
            <a
              href="https://github.com/sanjitrao16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#80f9ff] to-[#00d9ff] text-black font-semibold rounded-md hover:shadow-md hover:shadow-[#80f9ff]/30 transition-all duration-200"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
