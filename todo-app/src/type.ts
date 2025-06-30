export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  isCompleted: boolean;
}
export interface ITaskForm {
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
}

export interface IUser {
  name: string;
  email: string;
}
