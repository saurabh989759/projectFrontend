import "./Auth.css";
import { Button } from "@/components/ui/button";

import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/login";


const Auth = () => {
  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem] ">
        <div className="login ">
          <div className="loginBox w-full px-10 space-y-5">
            
           {true? <SignupForm/>:<LoginForm/>}

            <div className="flex items-center justify-center">
              <span>already have account ? </span>
              <Button variant="ghost">signup</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
