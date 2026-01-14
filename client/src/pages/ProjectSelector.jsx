export default function ProjectSelector({ projects, onSelect }) {
  return (
    <div>
      <h3>Select Project</h3>
      {projects.map(p => (
        <button key={p._id} onClick={() => onSelect(p._id)}>
          {p.name}
        </button>
      ))}
    </div>
  );
}
