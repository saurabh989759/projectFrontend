import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'


const UserList = () => {
  return (
   <div className='space-y-2'>
    <div className='border rounded-md'>
<p className='py-2 px-3'>
    {"Ashok"}
</p>

    </div>
    {[1,1,1,1].map((item)=>
    <div key={item} className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
          
          <>
            <Avatar className="">
               <AvatarFallback className="group-hover:bg-gray-400">A</AvatarFallback> 
            </Avatar>
          
          </>
          <div className=" space-y-1">
            <p className="text-sm font-medium leading-none">
              Ashok
            </p>
            <p className="text-xs text-muted-foreground">
              @ashok_zarmariya
            </p>
          </div>
    </div>
    )}
   </div>
        
  )
}

export default UserList