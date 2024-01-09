import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  function handleButtonChange() {
    setShow(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClick={handleButtonChange} />
      {show ? <NewProject /> : <NoProject />}
    </main>
  );
}

export default App;
