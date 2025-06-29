import AddTask from "@/module/tasks/AddTask";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div>
      <div className="flex justify-between mt-5 mb-10">
        <div className="ml-3">
          <h2 className="text-xl font-semibold text-center">Tasks</h2>
        </div>
        <div className="mr-3">
          <AddTask></AddTask>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
