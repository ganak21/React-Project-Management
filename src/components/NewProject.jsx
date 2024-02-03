import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./modal.jsx";

export default function NewProject({ onAdd, handleCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  function saveData() {
    const titleData = title.current.value;
    const descriptionData = description.current.value;
    const dateData = date.current.value;

    //validate
    if (
      titleData.trim() === "" ||
      descriptionData.trim() === "" ||
      dateData.trim() === ""
    ) {
      dialog.current.open();
      return;
    }
    onAdd({
      title: titleData,
      description: descriptionData,
      dueDate: dateData,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2>You forgot to enter some value</h2>
        <p>Please fill all the input fields</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
