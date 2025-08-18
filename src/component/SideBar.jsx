import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
// src/component/SideBar.jsx
import { FaHome, FaUser } from "react-icons/fa";

function SideBar({ onAdding, onShow, Details, onSelect, onCloseAdding }) {
  const $Btn =
    " rounded-lg px-6 py-3 w-fit flex gap-2 justify-center items-center";
  function Toggle() {
    onCloseAdding();
    onAdding();
  }

  return (
    <div>
      <div className=" bg-stone-800 flex flex-col gap-5 md:rounded-lg p-7 pt-10 h-full md:h-full md:fixed md:w-80">
        <h1 className=" uppercase text-white font-bold text-2xl">
          Your Projects
        </h1>
        <Button variant="secondary" onClick={Toggle}>
          <FaPlus /> Add Project
        </Button>
        <ul className=" pl-5 text-white flex flex-col gap-5 ">
          {Details.map((task) => (
            <li
              className={
                onShow ? `bg-transparent cursor-pointer` : `bg-stone-900 p-2`
              }
              key={task.id}
              onClick={() => {
                onShow();
                onSelect(Details.indexOf(task));
              }}
            >
              {task.$Title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
