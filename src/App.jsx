import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/selectedProject";

function App() {
  const [show, setShow] = useState({
    projectId: undefined,
    project: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setShow((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.ProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setShow((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectedProject(id) {
    setShow((prevShow) => ({
      ...prevShow,
      projectId: id,
    }));
  }

  function handleButtonChange() {
    setShow((prevShow) => ({
      ...prevShow,
      projectId: null,
    }));
  }

  function cancelProject() {
    setShow((prevShow) => ({
      ...prevShow,
      projectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setShow((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        projectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setShow((prevstate) => ({
      ...prevstate,
      projectId: undefined, // Set projectId to null or undefined as appropriate
      project: prevstate.project.filter(
        (project) => project.id !== setShow.projectId,
      ),
    }));
  }

  let content = (
    <SelectedProject
      project={show.project.find((project) => project.id === show.projectId)}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={show.tasks}
    />
  );

  if (show.projectId === undefined)
    content = <NoProject Newclick={handleButtonChange} />;
  else if (show.projectId === null)
    content = (
      <NewProject handleCancel={cancelProject} onAdd={handleAddProject} />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        handleSelect={handleSelectedProject}
        projects={show.project}
        handleClick={handleButtonChange}
      />
      {content}
    </main>
  );
}

export default App;
