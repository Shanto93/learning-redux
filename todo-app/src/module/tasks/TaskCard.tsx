import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteTask,
} from "@/redux/features/tasks/taskSlice";
import { getUsers } from "@/redux/features/users/userSlice";
import type { ITask } from "@/type";
import { FaTrash } from "react-icons/fa";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  console.log(users);
  const assignedUser = users.find((user) => user.u_id === task.assignTo);
  console.log(assignedUser);

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
        <CardContent>
          Assigned To - {assignedUser ? assignedUser.name : "Not Assigned"}
        </CardContent>
        {/* <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Button
          </Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default TaskCard;
