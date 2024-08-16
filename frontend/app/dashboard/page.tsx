import { BsClipboard2Data } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

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



export default function DashBoard() {

    return <div className="grid grid-cols-12 h-screen w-screen">
       <div className="col-span-3 pt-36 ml-9 px-4">

        <div className="mt-1 text-xl text-white">
          <ul>
          {sidebarMenuItems.map((item) => (<li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-3 w-fit cursor-pointer transition-all mt-2 border " key={item.title}>
            <span className="text-3xl">{item.icon}</span>
            <span>{item.title}</span>
            </li>))}
          </ul>
        </div>
      </div>

       <div className=""></div>
    </div>
}