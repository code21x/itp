import { BsStars } from "react-icons/bs";
import { AiFillSlackCircle } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";


export default function AppBar() {
    return <div className="py-5 px-10 border-b border-slate-800">
        <div className="flex justify-between">
            <div className="text-white font-bold text-2xl flex flex-col justify-center">
                <div className="flex justify-center gap-2">
                    <div className="flex flex-col justify-center text-5xl text-purple-800 bg-white rounded-full">
                        <AiFillSlackCircle />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                        Learn
                        <span className="text-purple-500">Land</span>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="flex justify-center gap-4">
                <div className="border border-slate-800 px-4 pt-3 pb-2 text-lg text-white font-semibold rounded-lg hover:bg-slate-800 transition-all">
                    Login
                </div>
                <div className="bg-purple-800 px-4 pt-3 pb-2 text-lg text-white font-semibold rounded flex justify-center gap-2 hover:bg-purple-900 transition-all">
                    <div>
                        Join now 
                    </div>
                    <div className="flex flex-col justify-center">
                        <BsStars />
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white font-semibold rounded-lg px-4 py-2 text-lg border border-slate-800 hover:bg-slate-800 transition-all">
                    <BsMoonStars />
                </div>
            </div>
        </div>
    </div>
}