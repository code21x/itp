"use client"
import withAuth from "@/components/withAuth";
import { useRouter } from "next/navigation";

function Input() {
    const router = useRouter();

    return <div className="grid grid-cols-12 h-screen w-screen overflow-x-hidden">
            
            <div className="col-span-2 border-r border-slate-800 pt-20">
                <div className="p-8">
                    <p className="font-sans text-2xl text-white">Recent</p>
                </div>
            </div>

            <div className="col-span-10 bg-slate-950 pt-24 text-white px-6">
                <div className="rounded-2xl bg-[url('../public/background_adapted.svg')] bg-center h-80 flex justify-center p-96 ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-4xl pb-10">
                            <span className="font-semibold">Teach me</span> <input className="rounded-full border border-slate-800 bg-black p-5 pb-4" type="text" placeholder="name a topic..." />
                        </div>

                        <div className="">
                            <div className="font-bold bg-white text-black text-2xl rounded-md hover:bg-slate-200 transition-all cursor-pointer">
                                <button className="px-10 py-3" onClick={() => router.push("/dashboard")}>Learn</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
}

export default withAuth(Input);