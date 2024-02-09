import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { AvatarFallback,Avatar } from "@/components/ui/avatar";

const formSchema = z.object({
  content: z.string().min(2, {
    message: "issue name must be at least 2 characters.",
  }),
});

export function CreateCommentForm() {
   
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          content: "",
        },
      })
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <Form {...form}>
    <form 
    onSubmit={form.handleSubmit(onSubmit)} 
    className="flex gap-2">
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <div className="flex gap-2">
                <div>
                  <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>  
                </div>
                
                 <FormControl>
              <Input className="w-[20rem]" placeholder="add a comment..." {...field} />
            </FormControl>
            </div>
           
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">save</Button>
    </form>
  </Form>
  );
}
