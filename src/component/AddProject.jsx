import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function AddProject({ onCloseAdding, onAddTodo }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDes, setEnteredDes] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date().toDateString());
  const $Label = "uppercase text-stone-700 font-semibold w-fit";
  // const $Input =
  //   " bg-stone-500 text-white placeholder:text-white px-2 py-4 focus:outline-0 rounded";
  const $InputSection = "flex flex-col";
  const $Btn = "w-fit px-4 py-2 rounded";

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const DesChangeHandler = (event) => {
    setEnteredDes(event.target.value);
  };
  const DateChangeHandler = (event) => {
    console.log(event.toDateString());
    setEnteredDate(event.toDateString());
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
    const Todo = {
      id: Math.random().toString(),
      $Title: enteredTitle,
      $Date: enteredDate,
      $Des: enteredDes,
      array: [],
    };
    console.log(Todo);
    onAddTodo(Todo);
    onCloseAdding();
  };
  return (
    <div className="flex justify-end w-full md:pl-10 p-5 mt-10">
      <form onSubmit={onSubmitHandle} className=" w-full ">
        <div className=" flex justify-end gap-1 md:mb-10 mb-5">
          <div
            onClick={onCloseAdding}
            className={`text-stone-800 cursor-pointer ${$Btn}`}
          >
            Cancel
          </div>
          <Button>Save</Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className={$InputSection}>
            <label className={$Label} for="title">
              Title
            </label>
            <Input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder="Enter your project name"
              required
            />
          </div>
          <div className={$InputSection}>
            <label className={$Label} for="des">
              Description
            </label>
            <Textarea
              id="des"
              placeholder="Enter your description"
              onChange={DesChangeHandler}
              required
            />
          </div>
          <div className={$InputSection}>
            <label className={$Label} for="date">
              Due Date
            </label>
            <Calendar
              mode="single"
              selected={enteredDate}
              onSelect={DateChangeHandler}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
