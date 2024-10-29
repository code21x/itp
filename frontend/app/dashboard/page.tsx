"use client"
import React from "react";
import Head from 'next/head';
import Chat from "@/components/chat";
import Chatbot from "@/components/chatbot";
import { useState } from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import withAuth from "@/components/withAuth";
// import { VideoPlayer } from "@/components/videoPlayer/videoPlayer";

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
        title: "notes",
        icon: <SlNote />
      }, 
]



function DashBoard() {
  const [extended, setExtended] = useState(false);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=mt-9V0qL1X0",
        type: "video/mp4",
      },
    ],
  };

    return <div className="grid grid-cols-12 h-screen w-screen">
       <div className={`${extended ? "col-span-2": "col-span-1"} pt-28 ml-8 border-r border-slate-800`}>

       <div className="text-white text-5xl pb-10 font-bold">
          <RxHamburgerMenu onClick={() => setExtended(prev => !prev)} className="p-2 hover:cursor-pointer hover:bg-gray-800 hover:rounded-md" />
        </div>

        <div className="mt-1 text-xl text-white">
          <ul>
            <div>
          {sidebarMenuItems.map((item) => (<li className={`${extended ? "w-48" : "w-16"} flex justify-start items-center gap-4 hover:bg-gray-800 rounded-md px-4 py-3 cursor-pointer transition-all mt-2 border`} key={item.title}>
            <span className={`${extended ? "text-lg" : "text-2xl"}`}>{item.icon}</span>
            {extended ? <span className="text-xl">{item.title}</span> : null}
            </li>))}
            </div>
          </ul>
        </div>
      </div>

       <div className={`text-white bg-slate-950 ${extended ? "col-span-10" : "col-span-11"} pt-28`}>

       {/* <VideoPlayer options={videoJsOptions} /> */}

       <video width="75%" height="auto" controls>
        <source src="../final_lecture_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
      <Chatbot apiKey="AIzaSyBppTrddsvEBRgQH_OA9jR5pxqR5kon6b0" />
      
      
       </div>
    </div>
}

export default withAuth(DashBoard);