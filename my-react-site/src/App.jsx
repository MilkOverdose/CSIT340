import { useState } from "react";
import About from "./about";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";


export default function App() {
  const [dark, setDark] = useState(false);

  const projects = [
  { id: 1, title: "Name Page", description: "My first React site." },
  { id: 2, title: "Dark Mode Toggle", description: "Practiced useState." },
  { id: 3, title: "Portfolio", description: "Built with React and Tailwind." },
];

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

export default function Projects() {
  return (
    <section className="max-w-md w-full mx-auto px-4">
      <h2 className="text-2xl font-semibold text-white text-center mb-3">
        Projects
      </h2>
      <div className="grid gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}