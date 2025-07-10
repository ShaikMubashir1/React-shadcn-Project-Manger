import { Button } from "@/components/ui/button";

function NewProject({ onAdding }) {
  return (
    <div className=" flex justify-center w-full mt-10 md:py-10">
      <div className=" flex flex-col justify-start items-center gap-5 ">
        <img src="./no-projects.png" alt="Image" className=" w-20 md:w-40 " />
        <h2 className=" text-stone-600 font-bold text-2xl">
          No Project Selected
        </h2>
        <p className="text-stone-700">
          Select a new project to get started with a new one
        </p>
        <Button onClick={onAdding}>Create new project</Button>
      </div>
    </div>
  );
}

export default NewProject;
