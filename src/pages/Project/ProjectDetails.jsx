import { ScrollArea } from "@/components/ui/scroll-area";
import { IssueList } from "../Issue/IssueList";
import ChatBox from "./ChatBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectById } from "@/redux/Project/Project.Action";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id]);
  return (
    <>
      {project.projectDetails ? (
        <div className="mt-5 lg:px-10 ">
          <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2">
              <div className="text-gray-400 pb-10 w-full">
                <h1 className="text-lg font-semibold pb-5">
                  {project.projectDetails?.name}
                </h1>

                <div className="space-y-5 pb-10">
                  <p className="w-full md:max-w-lg lg:max-w-xl">
                    {project.projectDetails?.description}
                  </p>
                  <div className="flex">
                    <p className="w-36">Project Lead : </p>
                    <p>{project.projectDetails?.owner?.fullName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Members : </p>
                    <p>Ashok Zarmariya</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Category : </p>
                    <p>{project.projectDetails?.category}</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Deadline : </p>
                    <p>Sun 5, jan</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Status : </p>
                    <p>In Progress</p>
                  </div>
                </div>

                <section>
                  <p className="py-5 border-b text-lg tracking-wider">Tasks</p>
                  <div className="lg:flex md:flex gap-3 justify-between py-5">
                    <IssueList status="pending" title={"Todo List"} />

                    <IssueList status="in_progress" title={"In Progress"} />

                    <IssueList status="done" title={"Done"} />
                  </div>
                </section>
              </div>
            </ScrollArea>

            <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
              <ChatBox />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Data...</div>
      )}
    </>
  );
};

export default ProjectDetails;
