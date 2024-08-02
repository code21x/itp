
export default function Signin() {
    return <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="border border-slate-800 text-white px-10 py-6 max-w-lg rounded-md text-3xl">
                <div className="font-semibold text-left pr-24">
                    Signin to your Account
                </div>
                <div className="pt-6 pb-4">
                    <div className="text-lg font-semibold pb-3">
                        Email
                    </div>
                    <div className="">
                        <input type="email" className="w-full h-10 rounded-md ring-purple-800 ring-2" />
                    </div>
                </div>
                <div className="pb-4">
                    <div className="text-lg font-semibold pb-3">
                        Password
                    </div>
                    <div>
                        <input type="password" className="w-full h-10 rounded-md ring-purple-800" />
                    </div>
                </div>
                
                <div className="bg-purple-800 text-center py-2 text-black text-lg font-semibold rounded-md">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
}