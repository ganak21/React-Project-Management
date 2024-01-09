import { image } from "../assets/no-projects.png";

export default function NoProject() {
  return (
    <div>
      <img src={image} alt="no project chosen" />
      <h2>No Project Selected</h2>
      <p>Select a Project or get started with a new one</p>
      <button>Create new Project</button>
    </div>
  );
}
