import LeetCode from "../assets/LeetCodeLogo.svg";
import HackerRank from "../assets/HackerRankLogo.svg";
import GFG from "../assets/GeeksForGeeksLogo.svg";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Java", "C"],
      color: "from-violet-500/20 to-violet-500/5",
      borderColor: "border-violet-400/30",
      hoverBorder: "hover:border-violet-400/60",
      textColor: "text-violet-300",
      accentColor: "bg-violet-400/10",
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Django"],
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-400/30",
      hoverBorder: "hover:border-blue-400/60",
      textColor: "text-blue-300",
      accentColor: "bg-blue-400/10",
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "TailwindCSS", "HTML", "CSS"],
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-cyan-400/30",
      hoverBorder: "hover:border-cyan-400/60",
      textColor: "text-cyan-300",
      accentColor: "bg-cyan-400/10",
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-400/30",
      hoverBorder: "hover:border-emerald-400/60",
      textColor: "text-emerald-300",
      accentColor: "bg-emerald-400/10",
    },
    {
      category: "Data & AI",
      skills: ["Machine Learning", "AI", "Numpy", "Pandas", "OpenCV"],
      color: "from-pink-500/20 to-pink-500/5",
      borderColor: "border-pink-400/30",
      hoverBorder: "hover:border-pink-400/60",
      textColor: "text-pink-300",
      accentColor: "bg-pink-400/10",
    },
    {
      category: "Other Technologies",
      skills: ["Chrome Extensions", "MERN Stack"],
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "border-orange-400/30",
      hoverBorder: "hover:border-orange-400/60",
      textColor: "text-orange-300",
      accentColor: "bg-orange-400/10",
    },
  ];

  const codingPlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/sanjitrao_16/",
      logo: LeetCode,
      color: "from-yellow-500/20 to-yellow-500/5",
      borderColor: "border-yellow-400/30",
      hoverBorder: "hover:border-yellow-400/60",
      textColor: "text-yellow-300",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/sanjitrao1605",
      logo: HackerRank,
      color: "from-green-500/20 to-green-500/5",
      borderColor: "border-green-400/30",
      hoverBorder: "hover:border-green-400/60",
      textColor: "text-green-300",
    },
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/profile/sanjitrbvpc",
      logo: GFG,
      color: "from-red-500/20 to-red-500/5",
      borderColor: "border-red-400/30",
      hoverBorder: "hover:border-red-400/60",
      textColor: "text-red-300",
    },
  ];

  return (
    <section id="skills">
      <div className="Skills-Section bg-gradient-to-b from-[#110f10] via-[#1a1819] to-[#110f10] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header - Centered */}
          <div className="text-center mb-16">
            <h2 className="Header text-3xl md:text-5xl font-bold text-[#e8e8e8] mb-6">
              Skills & Competencies
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#80f9ff] to-transparent"></div>
            </div>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className={`group backdrop-blur-md bg-gradient-to-br ${category.color} border ${category.borderColor} ${category.hoverBorder} rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#80f9ff]/5`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-3 h-3 rounded-full ${category.accentColor} border ${category.borderColor}`}
                  ></div>
                  <h3
                    className={`text-lg font-bold ${category.textColor} group-hover:text-[#e8e8e8] transition-colors duration-300`}
                  >
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`text-xs md:text-sm text-[#e8e8e8] ${category.accentColor} border ${category.borderColor} px-3 py-1.5 rounded-lg ${category.hoverBorder} hover:bg-opacity-30 transition-all duration-300 font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-[#80f9ff]/10">
            <h3 className="Header text-2xl font-bold text-[#e8e8e8] text-center mb-8">
              Coding Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {codingPlatforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group backdrop-blur-md bg-gradient-to-br ${platform.color} border ${platform.borderColor} ${platform.hoverBorder} rounded-xl p-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#80f9ff]/5 text-center cursor-pointer transform hover:scale-105`}
                >
                  <div
                    className={`mb-4 flex items-center justify-center w-20 h-20 rounded-full mx-auto border-2 ${platform.borderColor} bg-white/5`}
                  >
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 object-contain invert"
                    />
                  </div>
                  <h4
                    className={`text-xl font-bold ${platform.textColor} group-hover:text-[#e8e8e8] transition-colors duration-300 mb-2`}
                  >
                    {platform.name}
                  </h4>
                  <p className="text-[#8b8b8b] text-sm group-hover:text-[#e8e8e8] transition-colors duration-300">
                    View Profile →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
