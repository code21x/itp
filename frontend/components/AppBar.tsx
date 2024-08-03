"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { BsStars } from "react-icons/bs";
import { AiFillSlackCircle } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";

interface AppBarProps {
    login: boolean;
    signup: boolean;
    avatar: React.ReactNode
}

export default function AppBar() {

    const session = useSession();

    return <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-black/80 shadow-sm backdrop-blur-md print:hidden">
    <div className="py-5 px-10">
        <div className="flex justify-between">
            <div className="text-white font-bold text-2xl flex flex-col justify-center">
                <div className="flex justify-center gap-2 hover:bg-slate-900 cursor-pointer">
                    <div className="flex flex-col justify-center text-5xl text-purple-800 bg-white rounded-full">
                        <AiFillSlackCircle />
                    </div>
                    <div className="flex flex-col justify-center">
                        <a href="/">
                            <div>
                            Learn
                            <span className="text-purple-500">Land</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            
            {session.data?.user ? <button className="border border-slate-800 px-4 pt-2 pb-2 text-lg text-white font-semibold rounded-lg hover:bg-slate-800 transition-all cursor-pointer" onClick={() => signOut()}>
                    Logout
                </button> : <div className="flex justify-center gap-4">
                <button className="border border-slate-800 px-4 pt-2 pb-2 text-lg text-white font-semibold rounded-lg hover:bg-slate-800 transition-all cursor-pointer" onClick={() => signIn()}>
                    Login
                </button>
                <div className="bg-purple-800 px-4 pt-2 pb-2 text-lg text-white font-semibold rounded flex justify-center gap-2 hover:bg-purple-900 transition-all cursor-pointer">
                    <button>
                        Join now 
                    </button>
                    <div className="flex flex-col justify-center">
                        <BsStars />
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white font-semibold rounded-lg px-4 py-2 text-lg border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer">
                    <BsMoonStars />
                </div>
            </div>}

        </div>
    </div>
</nav>
}