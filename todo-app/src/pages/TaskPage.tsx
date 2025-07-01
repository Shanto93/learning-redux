import { TabsList, TabsTrigger } from "@/components/ui/tabs";

import AddTask from "@/module/tasks/AddTask";
import TaskCard from "@/module/tasks/TaskCard";
import { useGetAllTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/type";

import { Tabs } from "@radix-ui/react-tabs";

const TaskPage = () => {
  // const tasks = useSelector(selectTasks);

  const { data, isLoading, isError } = useGetAllTasksQuery(undefined);
  console.log(data, isLoading, isError);

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (isError) {
    return <div>Error loading tasks</div>;
  }

  if (!data || !data.tasks) {
    return <div>No tasks found</div>;
  }

  return (
    <div>
      <div className="flex justify-between mt-5 mb-10">
        <div className="ml-3">
          <h2 className="text-xl font-semibold text-center">Tasks</h2>
        </div>
        <div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger
                // onClick={() => dispatch(filterTasksByPriority("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTasksByPriority("high"))}
                value="high"
              >
                High
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTasksByPriority("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTasksByPriority("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="mr-3">
          <AddTask></AddTask>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.tasks.map((task: ITask) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
