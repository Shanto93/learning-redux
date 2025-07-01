import AddUser from "@/module/users/AddUser";

const Users = () => {
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
        {/* {users.map((user) => (
          <UserCard key={user.email} user={user}></UserCard>
        ))} */}
      </div>
    </div>
  );
};

export default Users;
