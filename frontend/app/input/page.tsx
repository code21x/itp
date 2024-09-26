

export default function Input() {
    return <div className="grid grid-cols-12 h-screen w-screen overflow-x-hidden">
            
            <div className="col-span-2 border-r border-slate-800 pt-20">
                <div className="p-8">
                    <p className="font-sans text-2xl text-white">Recent</p>
                </div>
            </div>

            <div className="col-span-10 bg-slate-950 pt-24 text-white px-6">
                <div className="rounded-2xl bg-[url('../public/background_adapted.svg')] bg-center h-80 flex justify-center p-96">
                    <div className="flex flex-col justify-center">
                        <div className="text-4xl">
                            <span className="font-semibold">Teach me</span> <input className="rounded-full border border-slate-800 bg-black p-4 pb-4" type="text" placeholder="name a topic..." />
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
}