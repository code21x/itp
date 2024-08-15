"use client"
import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/actions/user";


export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [checkingPassword, setCheckingPassword] = useState(false);
    const router = useRouter();

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
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="john doe" className="w-full h-12 rounded-md border border-slate-800 bg-black p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                    </div>
            </div>
            <div className="pb-4">
                <div className="text-lg font-semibold pb-4">
                    Email
                </div>
                <div className="">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@email.com" className="w-full h-12 rounded-md border border-slate-800 bg-black p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                </div>
            </div>
            <div className="pb-4">
                <div className="text-lg font-semibold pb-4">
                    Password
                </div>
                <div>
                    <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVisible ? 'text' : 'password'} placeholder="••••••••" className="w-full h-12 rounded-md bg-black border border-slate-800 p-4 pb-4 text-lg focus:border-purple-800 focus:outline-none focus:ring-2 ring-purple-800" />
                    
                </div>
            </div>
            
            <Button onClick={async () => {
                const response = await signup(name, email, password);
                alert("Success");
                console.log("monish");
                router.push("/signin")}}>Continue</Button>
        </div>
    </div>
</div>
}