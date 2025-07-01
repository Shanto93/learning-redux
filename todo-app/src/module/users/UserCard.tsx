import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { IUser } from "@/type";
import { FaTrash } from "react-icons/fa";

interface IUserProps {
  user: IUser;
}

const UserCard = ({ user }: IUserProps) => {
  return (
    <div>
      <Card className={cn("w-full max-w-sm")}>
        <CardHeader>
          <CardTitle className={cn()}>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
          <CardAction>
            <div className="flex gap-2">
              <FaTrash className="text-red-500" />
            </div>
          </CardAction>
          <CardAction></CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UserCard;
