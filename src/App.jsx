import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar REACT para me tornar um programador Full stack.",
      isCompleted: false,
    },
    {
      id: 12,
      title: "Fazer compras",
      description: "Ir no mercado depois do trabalho às 18h e comprar misturas",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler",
      description: "Ler um livro com a luz de leitura ligada até pegar no sono",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
