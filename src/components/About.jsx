import Education from "../assets/Education.svg";
import Leader from "../assets/UserIcon.svg";

export default function About() {
  return (
    <div className="About-Section min-h-screen bg-gradient-to-b from-[#110f10] via-[#1a1819] to-[#110f10] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="Header text-3xl md:text-5xl font-bold text-[#e8e8e8] mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#80f9ff] to-transparent mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="backdrop-blur-md bg-white/5 border border-[#80f9ff]/20 rounded-2xl p-8 shadow-lg hover:border-[#80f9ff]/40 transition-colors duration-300">
                <p className="text-[#dddddd] text-lg leading-relaxed mb-4">
                  Hello readers, I am Sanjit Rao and am currently in my
                  pre-final year of B.Tech CSE at Amrita Vishwa Vidyapeetham,
                  Chennai. I am a backend developer with strong foundations in
                  programming languages like Python, JavaScript and Java.
                  Additionally, I have also explored and worked in domains like
                  Machine Learning and Artificial Intelligence. I also solve
                  problems on platforms like LeetCode and GeeksForGeeks to
                  enhance my problem-solving skills.
                </p>

                <p className="text-[#dddddd] text-lg leading-relaxed mb-4">
                  Currently I am serving as the Technical Co-Head and Web-Dev
                  Lead at GeeksForGeeks CampusBody Student Club. As a leader and
                  part of the technical team, I've delivered a workshop on
                  "Getting Started with Git & GitHub" along with 2 of my team
                  members, the event gathered 50+ students and also was an
                  organizing member of a 24-hour hackathon called "TechBiz". I
                  have also worked on numerous projects both individually and as
                  part of a team, which you can find below as well as on my
                  resume.
                </p>

                <p className="text-[#dddddd] text-lg leading-relaxed">
                  Besides coding and technology, I play various sports like
                  cricket, badminton and tennis and also watch them whenever
                  there is a match-day. I listen to a lot of podcasts and also
                  enjoy reading stuffs about history and geography.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="group backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#80f9ff]/20 rounded-2xl p-8 hover:border-[#80f9ff]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#80f9ff]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#80f9ff]/20 to-[#80f9ff]/5 rounded-xl flex items-center justify-center border border-[#80f9ff]/30 group-hover:border-[#80f9ff]/60 transition-colors duration-300">
                <img src={Education} alt="Education icon" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#e8e8e8]">Education</h3>
            </div>
            <p className="text-[#8b8b8b] leading-relaxed">
              <span className="block text-[#e8e8e8] font-semibold mb-2">
                Amrita Vishwa Vidyapeetham
              </span>
              <span className="block text-[#80f9ff] font-medium mb-3">
                B.Tech in Computer Science & Engineering
              </span>
              <span className="block mb-2">2023 – Present</span>
              <span className="block">
                CGPA: <span className="text-[#80f9ff] font-semibold">8.97</span>
              </span>
            </p>
          </div>

          <div className="group backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#80f9ff]/20 rounded-2xl p-8 hover:border-[#80f9ff]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#80f9ff]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#80f9ff]/20 to-[#80f9ff]/5 rounded-xl flex items-center justify-center border border-[#80f9ff]/30 group-hover:border-[#80f9ff]/60 transition-colors duration-300">
                <img src={Leader} alt="Leadership icon" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#e8e8e8]">Leadership</h3>
            </div>
            <p className="text-[#8b8b8b] mb-4">
              <span className="block text-[#e8e8e8] font-semibold mb-2">
                GeeksForGeeks Campus Body, AVV Chennai
              </span>
              <span className="block text-[#80f9ff] font-medium">
                Technical Co-Head & Web-Dev Lead
              </span>
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[#8b8b8b]">
                <span className="text-[#80f9ff] mt-1">•</span>
                <span>Led team of 3 developers</span>
              </li>
              <li className="flex items-start gap-3 text-[#8b8b8b]">
                <span className="text-[#80f9ff] mt-1">•</span>
                <span>Delivered 90-min workshop on Git & GitHub</span>
              </li>
              <li className="flex items-start gap-3 text-[#8b8b8b]">
                <span className="text-[#80f9ff] mt-1">•</span>
                <span>Organized 24-hour hackathon "TechBiz 2025"</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
