import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { toast } from "sonner";

function ProjectDetails({ Details, onCloseAdding, onAdding, Index }) {
  // const $Btn = "w-fit px-4 py-2 rounded text-nowrap";
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const AddTodo = (event) => {
    event.preventDefault();
    setEnteredText("");
  };

  function Toggle() {
    Details.splice(Index, 1);
    onCloseAdding();
    onAdding();
  }

  return (
    <div className=" flex flex-col gap-5 w-full md:pl-10 p-4">
      <div className="flex w-full justify-between " id={Details[Index].id}>
        <div className=" flex flex-col gap-3">
          <h2 className=" text-stone-900 font-bold text-3xl">
            {Details[Index].$Title}
          </h2>
          <p className=" text-stone-400">{Details[Index].$Date}</p>
        </div>
        <div>
          <Button onClick={Toggle}>Delete</Button>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className=" text-stone-800 text-xl">{Details[Index].$Title}</h2>
        <p>{Details[Index].$Des}</p>
      </div>
      <hr className=" border-2 border-stone-300" />
      <div className=" flex flex-col gap-3">
        <h2 className=" text-stone-900 font-bold text-3xl ">Tasks</h2>
        <form onSubmit={AddTodo} className=" flex gap-2 items-center ">
          <Input
            type="text"
            className="w-full md:w-2/4 p-3"
            required
            value={enteredText}
            onChange={textChangeHandler}
          />
          <Button
            variant="ghost"
            onClick={() => {
              if (enteredText === " " || enteredText === "") {
                toast("Invalid Input", {
                  description: "Opps... looks like you forgot to enter a value",
                  action: {
                    label: "Ok",
                  },
                });
              } else {
                Details[Index].array.push({
                  id: Math.random().toString(),
                  $Text: enteredText,
                });
              }
            }}
          >
            Add Task
          </Button>
        </form>
        <Toaster />
      </div>
      <div className=" w-full md:w-9/12 bg-stone-300 p-5">
        <form onSubmit={AddTodo}>
          {Details[Index].array.map((List) => (
            <li className=" flex justify-between items-center " key={List.id}>
              <p>{List.$Text}</p>
              <Button
                variant="ghost"
                onClick={() => {
                  Details[Index].array.splice(
                    Details[Index].array.indexOf(List),
                    1
                  );
                  setEnteredText(" ");
                }}
              >
                Clear
              </Button>
            </li>
          ))}
        </form>
      </div>
    </div>
  );
}

export default ProjectDetails;
