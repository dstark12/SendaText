import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function Login(){
    return(
        <div>
            <NavBar/>
            
            <div className = "h-152 flex justify-center items-center">
                <div className = "rounded-2xl p-4 items-center border-gray-500 w-2/5 h-3/5 bg-gray-100">
                    <h1>Welcome</h1>
                    <p>Log In</p>
                    
                    <p>Username</p>
                    <input type = "text" className="rounded w-4/5 border-2 border-gray-500"/>
                    <p>Password</p>
                    <input type = "text" className="rounded w-4/5 border-2 border-gray-500"/>
                    <p className = "underline">Forgot Password?</p>

                    <div className = "grid grid-cols-2 justify-items-center items-center p-4">
                        <p>Don't have an account?</p>
                        <p className = "font-bold">Sign Up</p>
                    </div>
                    
                    
                </div>

            </div>
            
            <BottomLinks/>
        </div>
    );
}