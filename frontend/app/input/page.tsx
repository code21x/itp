"use client"
import aggregateHandler from "@/actions/aggregateResearch";
import engine from "@/actions/engine/s2v";
import generateslideHandler from "@/actions/generateSlides";
import generateHandler from "@/actions/streamline/generateslide";
import withAuth from "@/components/withAuth";
import { log } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Input() {
    const [prompt, setPrompt] = useState("");
    const router = useRouter();

    return <div className="grid grid-cols-12 h-screen w-screen">
            
            <div className="col-span-2 border-r border-slate-800 pt-20 overflow-y-auto">
                <div className="p-8">
                    <p className="font-sans text-2xl text-white">Recent</p>
                </div>
            </div>

            <div className="col-span-10 bg-slate-950 pt-28 text-white px-6 overflow-y-auto">
                <div className="rounded-2xl bg-[url('../public/inputBackground_adapted.svg')] bg-center bg-cover flex justify-center p-96">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-4xl pb-10">
                            <span className="font-semibold">Teach me</span> <input onChange={(e) => setPrompt(e.target.value)} className="rounded-full border border-slate-800 bg-black p-5 pb-4" type="text" placeholder="name a topic..." />
                        </div>

                        <div className="">
                            <div className="font-bold bg-white text-black text-2xl rounded-md hover:bg-slate-200 transition-all cursor-pointer">
                                <button className="px-10 py-3" onClick={async () => {
                                    // const res = await aggregateHandler(prompt);
                                    // const lecture = await generateHandler(res, prompt);

                                    // console.log(res);
                                    // console.log(lecture);
                                    const result = await engine(prompt);                                    
                                    router.push("/dashboard");
                                }}>Learn</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
}

export default withAuth(Input);