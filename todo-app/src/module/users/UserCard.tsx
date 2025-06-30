import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import { deleteUser } from "@/redux/features/users/userSlice";

import type { IUser } from "@/type";
import { FaTrash } from "react-icons/fa";

interface IUserProps {
  user: IUser;
}

const UserCard = ({ user }: IUserProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Card className={cn("w-full max-w-sm")}>
        <CardHeader>
          <CardTitle className={cn()}>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
          <CardAction>
            <div className="flex gap-2">
              <FaTrash
                onClick={() => dispatch(deleteUser(user.email))}
                className="text-red-500"
              />
            </div>
          </CardAction>
          <CardAction></CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UserCard;
