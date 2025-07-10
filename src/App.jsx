import { useState } from "react";
import AddProject from "./component/AddProject";
import NewProject from "./component/NewProject";
import SideBar from "./component/SideBar";
import ProjectDetails from "./component/ProjectDetails";

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const str  = " "+" "+" "+" King "+" "+" "+" "
  const strt = str.trim.length

  console.log(strt)

  const TaskLists = [
    {
      id: "t1",
      $Title: "Learning React",
      $Date: "Wed May 08 2024",
      $Des: "Learning the core concepts",
      array: [
        {
          id: "e1",
          $Text: "Will be completing todo app today",
        },
      ],
    },
  ];

  const [taskList, setTaskList] = useState(TaskLists);

  const $AddList = (Todo) => {
    setTaskList((pervtodo) => {
      return [...pervtodo, Todo];
    });
  };

  const [selectedId, setSelectedId] = useState(0);

  const sendOnSelect = (Select) => {
    setSelectedId(Select);
  };
  const IndexOf = selectedId;

  return (
    <>
      <header className=" md:h-10 "></header>
      <main className=" flex flex-col md:flex-row h-screen ">
        <aside className="md:w-96 h-1/2 bg-stone-800 md:bg-white">
          <SideBar
            onAdding={() => setShowTask(false)}
            onShow={() => setShowTask(true)}
            onCloseAdding={() => setIsAdding(false)}
            Details={taskList}
            onSelect={sendOnSelect}
          />
        </aside>
        <section className=" w-full ">
          {showTask ? (
            <ProjectDetails
              onAdding={() => setShowTask(false)}
              onCloseAdding={() => setIsAdding(false)}
              Details={taskList}
              Index={IndexOf}
            />
          ) : isAdding ? (
            <AddProject
              onCloseAdding={() => setIsAdding(false)}
              onAddTodo={$AddList}
            />
          ) : (
            <NewProject onAdding={() => setIsAdding(true)} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
