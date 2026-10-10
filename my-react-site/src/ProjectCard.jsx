export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-white text-left">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
}