import { useAppSelector } from "@/hooks/hooks";
import AddUser from "@/module/users/AddUser";
import UserCard from "@/module/users/UserCard";
import { getUsers } from "@/redux/features/users/userSlice";

const Users = () => {
  const users = useAppSelector(getUsers);

  return (
    <div>
      <div className="flex justify-between mt-5 mb-10">
        <div className="ml-3">
          <h2 className="text-xl font-semibold text-center">All Users</h2>
        </div>

        <div className="mr-3">
          <AddUser></AddUser>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.email} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
