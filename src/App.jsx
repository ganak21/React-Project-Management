import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
  const [show, setShow] = useState({
    projectId: undefined,
    project: [],
  });

  function handleButtonChange() {
    setShow((prevShow) => {
      return {
        ...prevShow,
        projectId: null,
      };
    });
  }

  //function cancelButtonChange() {
  // setShow(false);
  // }

  function handleAddProject(projectData) {
    setShow((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  console.log(show);

  let content;

  if (show.projectId === undefined)
    content = <NoProject Newclick={handleButtonChange} />;
  else if (show.projectId === null)
    content = <NewProject onAdd={handleAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClick={handleButtonChange} />
      {content}
    </main>
  );
}

export default App;
