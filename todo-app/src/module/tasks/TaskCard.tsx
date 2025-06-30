import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteTask,
} from "@/redux/features/tasks/taskSlice";
import type { ITask } from "@/type";
import { FaTrash } from "react-icons/fa";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Card className={cn("w-full max-w-sm")}>
        <CardHeader>
          <CardTitle
            className={cn(
              {
                "text-red-500": task.priority === "high",
                "text-yellow-500": task.priority === "medium",
                "text-green-500": task.priority === "low",
              },
              { "line-through": task.isCompleted === true }
            )}
          >
            {task.title}
          </CardTitle>
          <CardDescription>
            {task.description || "No description available."}
          </CardDescription>
          <CardAction>
            <div className="flex gap-2">
              <Checkbox
                checked={task.isCompleted}
                onClick={() => dispatch(toggleCompleteTask(task.id))}
              ></Checkbox>
              <FaTrash
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500"
              />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>//Card Content</CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TaskCard;
