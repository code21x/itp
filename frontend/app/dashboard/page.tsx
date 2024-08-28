"use client"

import { BsClipboard2Data } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import withAuth from "@/components/withAuth";

interface LearnLandSidebarButton {
    title: string;
    icon: React.ReactNode
}

const sidebarMenuItems: LearnLandSidebarButton[] = [
    {
        title: "statistics",
        icon: <BsClipboard2Data />
      },
      {
        title: "create",
        icon: <FaMagic />
      },
      {
        title: "profile",
        icon: <FaUser />
      }, 
]



function DashBoard() {

    return <div className="grid grid-cols-12 h-screen w-screen">
       <div className="col-span-2 pt-36 ml-9 px-4 border-r border-slate-800">

        <div className="mt-1 text-xl text-white">
          <ul>
            <div>
          {sidebarMenuItems.map((item) => (<li className="w-48 flex justify-start items-center gap-4 hover:bg-gray-800 rounded-md px-4 py-3 cursor-pointer transition-all mt-2 border" key={item.title}>
            <span className="text-lg">{item.icon}</span>
            <span className="text-xl">{item.title}</span>
            </li>))}
            </div>
          </ul>
        </div>
      </div>

       <div className=""></div>
    </div>
}

export default withAuth(DashBoard);