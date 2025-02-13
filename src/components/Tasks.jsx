function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4">
      {props.tasks.map((task) => (
        <li className="bg-slate-400 text-white p-2 rounded-md">{task.title}</li>
      ))}
    </ul>
  );
}

export default Tasks;
