import ProjectCard from "./ProjectCard";

const projects = [
  { id: 1, title: "Name Page", description: "My first React site." },
  { id: 2, title: "Dark Mode Toggle", description: "Practiced useState." },
  { id: 3, title: "Portfolio", description: "Built with React and Tailwind." },
];

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