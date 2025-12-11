import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired — just show a friendly confirmation.
    alert("Thanks for reaching out! I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section
      id="contact-me"
      className="Contact-Section py-12 px-6 bg-gradient-to-b from-[#110f10] via-[#141314] to-[#110f10]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="Header text-2xl md:text-3xl font-bold text-[#e8e8e8]">
            Contact Me
          </h2>
        </div>

        <div className="bg-white/3 backdrop-blur-md border border-[#ffffff10] rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e8e8e8]">
              Lets Connect!!
            </h3>
            <div className="mt-4">
              <p className="text-sm text-[#e8e8e8] font-medium">Quick Links</p>
              <ul className="mt-2 text-sm text-[#9aa0a6] space-y-1">
                <li>
                  Email:{" "}
                  <a
                    className="text-[#80f9ff] hover:underline"
                    href="mailto:sanjitrao1605@gmail.com"
                  >
                    sanjitrao1605@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a className="text-[#80f9ff] hover:underline">
                    +91 9972304273
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    className="text-[#80f9ff] hover:underline"
                    href="https://www.linkedin.com/in/sanjitrao16/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sanjitrao16
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-[#e8e8e8] block mb-2">Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-[#ffffff20] rounded-lg px-3 py-2 text-sm text-[#e8e8e8] placeholder:text-[#8b8b8b] focus:outline-none focus:ring-2 focus:ring-[#80f9ff]/40"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="text-sm text-[#e8e8e8] block mb-2">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-[#ffffff20] rounded-lg px-3 py-2 text-sm text-[#e8e8e8] placeholder:text-[#8b8b8b] focus:outline-none focus:ring-2 focus:ring-[#80f9ff]/40"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="text-sm text-[#e8e8e8] block mb-2">
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-transparent border border-[#ffffff20] rounded-lg px-3 py-2 text-sm text-[#e8e8e8] placeholder:text-[#8b8b8b] focus:outline-none focus:ring-2 focus:ring-[#80f9ff]/40 resize-none"
                placeholder="Short message..."
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#00d9ff] to-[#80f9ff] text-[#0b0b0b] px-4 py-2 rounded-lg font-semibold shadow-sm hover:brightness-110 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
