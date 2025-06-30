import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useAppDispatch } from "@/hooks/hooks";
import { addUser } from "@/redux/features/users/userSlice";
import type { IUser } from "@/type";
import { useForm } from "react-hook-form";

const AddUser = () => {
  // Provide default values and proper typing
  const form = useForm<IUser>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: IUser) => {
    dispatch(addUser(data));
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">ADD USER</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">
            Fillup this form
          </DialogDescription>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle> {/* Changed from "Add Task" */}
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl className="border-2 rounded-md px-3 py-2 mb-3">
                      <input {...field} type="text" />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl className="border-2 rounded-md px-3 py-2 mb-3">
                      <input {...field} type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button className="mt-5" type="submit">
                  ADD USER
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
