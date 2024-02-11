import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import CreateProjectForm from "../Project/CreateProjectForm";
import { logout } from "@/redux/Auth/Action";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { auth } = useSelector((store) => store);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="border-b  py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="cursor-pointer">Project Managment</p>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">New Project</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="rounded-full border-2 border-gray-500"
              variant="outline"
              size="icon"
            >
              <PersonIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {auth.user?.fullName}
      </div>
    </div>
  );
};

export default Navbar;
