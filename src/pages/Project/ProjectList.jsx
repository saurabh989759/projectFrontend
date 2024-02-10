import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/redux/Project/Project.Action";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  return (
    <><div className="relative  lg:flex gap-5 justify-center py-5">
      <section className="hidden lg:block">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl tracking-wider">filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>

          <CardContent className="mt-5 ">
            <ScrollArea className="space-y-7 h-[70vh]">
              <div>
                <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                <div className="pt-5">
                  <RadioGroup className="space-y-3" defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">all</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-stack" id="r1" />
                      <Label htmlFor="r1">full stack</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="frontend" id="r2" />
                      <Label htmlFor="r2">frontend</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3">backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-5">
                <h1 className="pb-3 text-gray-400 border-b">Tags</h1>

                <RadioGroup className="space-y-3 pt-5" defaultValue="all">
                  {[
                    "all",
                    "react",
                    "nextjs",
                    "spring boot",
                    "mysql",
                    "mongodb",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id="r1" />
                      <Label htmlFor="r1">{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Input
              className="w-[50%] rounded-fulls pl-9"
              placeholder="search project..."
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" className="rounded-full">
                <span className="pr-2">sort</span>
                <CaretDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>sort by created at</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>new</DropdownMenuItem>
              <DropdownMenuItem>old</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-5 min-h-[80vh]">
          {project.projects.map((item) => (
            <ProjectCard item={item} key={item} />
          ))}

        {project.projects.length>0 ?  <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>:<div className="flex items-center justify-center h-[80vh]">
            <h1>No projects...</h1>
            </div>}
        </div>
      </section>
    </div>
    </>
    
  );
};

export default ProjectList;
