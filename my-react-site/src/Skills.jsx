const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

export default function Skills() {
  return (
    <section className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold text-white mb-3">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-white/15 text-white text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}