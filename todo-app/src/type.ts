export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignTo: string | null;
  priority: "low" | "medium" | "high";
  isCompleted: boolean;
}

export interface IUser {
  u_id: string;
  name: string;
  email: string;
}
