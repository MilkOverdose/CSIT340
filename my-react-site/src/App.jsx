import { useState } from "react";
import About from "./about";
import Skills from "./Skills";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center gap-6 transition-colors duration-500 ${
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
    </main>
  );
}