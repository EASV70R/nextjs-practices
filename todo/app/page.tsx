import AddTodo from "@/app/ui/shared/addTodo";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Todo App
      </h1>
      <AddTodo />
    </div>
  );
}