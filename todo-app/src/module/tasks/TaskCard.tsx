import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import type { ITask } from "@/type";
import { FaTrash } from "react-icons/fa";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
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
              <Checkbox checked={task.isCompleted}></Checkbox>
              <FaTrash className="text-red-500" />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>Assigned To - {}</CardContent>
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
