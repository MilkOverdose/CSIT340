import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <main
      className={`min-h-screen py-12 flex flex-col items-center gap-10 transition-colors duration-500 ${
        dark ? "bg-gray-900" : "bg-linear-to-br from-indigo-500 to-purple-700"
      }`}
    >
      <h1 className="text-white font-bold text-6xl md:text-8xl">Miguel Sebastian A. Mendoza</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
      >
        {dark ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}