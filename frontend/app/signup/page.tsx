"use client"
import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Signup() {

    const router = useRouter();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [checkingPassword, setCheckingPassword] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState: any) => !prevState);
    }


    return <div className="flex justify-center h-screen">
    <div className="flex flex-col justify-center pt-32">
        <div className="border border-slate-800 text-white px-10 pb-12 pt-8 max-w-lg rounded-md text-3xl">
            <div className="font-semibold text-left pr-24">
                Create an account
            </div>
            <div className="pt-7 pb-4">
                    <div className="text-lg font-semibold pb-4">
                        Full name
                    </div>
                    <div className="">
                        <input type="text" placeholder="Monish" className="w-full h-12 rounded-md border border-slate-800 bg-black p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                    </div>
            </div>
            <div className="pb-4">
                <div className="text-lg font-semibold pb-4">
                    Email
                </div>
                <div className="">
                    <input type="email" placeholder="name@email.com" className="w-full h-12 rounded-md border border-slate-800 bg-black p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                </div>
            </div>
            <div className="pb-4">
                <div className="text-lg font-semibold pb-4">
                    Password
                </div>
                <div>
                    <input type={isPasswordVisible ? 'text' : 'password'} placeholder="••••••••" className="w-full h-12 rounded-md bg-black border border-slate-800 p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                    
                </div>
            </div>
            
            <Button onClick={async () => {
                alert("Success");
                console.log("monish");
                router.push("/signin")}}>Continue</Button>
        </div>
    </div>
</div>
}