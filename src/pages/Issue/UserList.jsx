/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { assignedUserToIssue } from "@/redux/Issue/Issue.action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserList = ({ issue }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project, auth } = useSelector((store) => store);

  const handleIssueAssigne = (userId) => {
    dispatch(assignedUserToIssue(
      { 
        userId,
      issueId: issue.id 
    }));
  };

  return (
    <div className="space-y-2">
      <div className="border rounded-md">
        <p className="py-2 px-3">{issue.assignee.fullName || "Unassigne"}</p>
      </div>
      {project.projectDetails?.team.map((item) => (
        <div
          onClick={()=>handleIssueAssigne(item.id)}
          key={item}
          className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
        >
          <Avatar className="">
            <AvatarFallback className="group-hover:bg-gray-400">
              {item.fullName[0]}
            </AvatarFallback>
          </Avatar>

          <div className=" space-y-1">
            <p className="text-sm font-medium leading-none">{item.fullName}</p>
            <p className="text-xs text-muted-foreground">
              @{item.fullName.toLowerCase().split(" ").join("_")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
