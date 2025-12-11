import { useEffect, useRef, useState } from "react";
import Club from "../assets/TeamIcon.svg";
import Trophy from "../assets/Trophy.svg";
import Cert from "../assets/Certificate.svg";

export default function Achievements() {
  const cards = [
    {
      id: 1,
      title: "Hackathons & Events",
      icon: Trophy,
      items: [
        "Participant of IndustriAI 24 hour hackathon - IIT Madras",
        "Winner of Technopoly 2025 in Tantrotsav 2025",
      ],
      accent: "from-[#00d9ff]/10 to-[#80f9ff]/4",
    },
    {
      id: 2,
      title: "Certifications",
      icon: Cert,
      items: [
        "Machine Learning course on Coursera",
        "AWS Cloud Foundations",
        "Cisco Networking Basics course",
      ],
      accent: "from-[#7c5cff]/10 to-[#ff7ab6]/6",
    },
    {
      id: 3,
      title: "Club Related",
      icon: Club,
      items: [
        "Organzied and delivered a 90-min extensive workshop on Git and GitHub",
        "Part of the organizing team of TechBiz'25 hackathon",
      ],
      accent: "from-[#80f9ff]/10 to-[#80f9ff]/4",
    },
  ];

  return (
    <section className="Achievements-Section py-12 px-6 bg-gradient-to-r from-[#27729a] via-[#528b8b] to-[#005c7b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="Header text-3xl md:text-4xl font-bold text-[#110f10]">
            Achievements and Others
          </h2>
        </div>

        <Carousel cards={cards} />
      </div>
    </section>
  );
}

function Carousel({ cards }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const autoplayRef = useRef(null);
  const pauseRef = useRef(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    function onResize() {
      setVisible(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function tick() {
      if (!pauseRef.current) setIndex((i) => (i + 1) % cards.length);
    }
    autoplayRef.current = setInterval(tick, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [cards.length]);

  useEffect(() => {
    if (index > cards.length - 1) setIndex(0);
  }, [index, cards.length]);

  function prev() {
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }
  function next() {
    setIndex((i) => (i + 1) % cards.length);
  }

  const itemWidth = 100 / visible;
  const centerOffset = (100 - itemWidth) / 2;
  const translate = -(index * itemWidth) + centerOffset;

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    pauseRef.current = true;
  }
  function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    pauseRef.current = false;
  }

  function onMouseEnter() {
    pauseRef.current = true;
  }
  function onMouseLeave() {
    pauseRef.current = false;
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cards.length]);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out px-4 md:px-0"
          style={{ transform: `translateX(${translate}%)` }}
        >
          {cards.map((c, i) => {
            const isActive = i === index;
            const cardStyle =
              visible === 1 ? { width: `100%` } : { width: `${itemWidth}%` };
            return (
              <div key={c.id} className="flex-shrink-0" style={cardStyle}>
                <div
                  className={`group rounded-2xl p-4 md:p-6 backdrop-blur-md bg-white/3 border border-[#80f9ff]/10 hover:border-[#80f9ff]/30 transition-all duration-300 shadow-md transform ${isActive ? "scale-100" : "scale-95 opacity-85"} ${visible === 1 ? "mx-auto max-w-md" : "mx-2"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${c.accent} border border-[#ffffff10]`}
                    >
                      <img
                        src={c.icon}
                        alt={`${c.title} icon`}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                    <h3 className="text-base md:text-lg font-extrabold text-[#110f10]">
                      {c.title}
                    </h3>
                  </div>

                  <ul className="text-sm md:text-base text-[#110f10] space-y-2 list-inside list-disc">
                    {c.items.map((it, idx) => (
                      <li key={idx}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0f1011]/60 hover:bg-[#0f1011]/80 p-2 rounded-full shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0f1011]/60 hover:bg-[#0f1011]/80 p-2 rounded-full shadow-lg"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-[#80f9ff]" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
