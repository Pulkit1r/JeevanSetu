"use client";
import React, { useState ,useEffect} from "react";
import {Avatar,Select,Button} from "./index";
import { useTheme } from "next-themes";
import { useDispatch, UseDispatch,useSelector } from "react-redux";
import { RootState ,AppDispatch } from "@/globalContext/store";
import { IconFileText, IconLanguage, IconList, IconMoon, IconPill, IconRobotFace, IconStethoscope, IconSun } from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink,MobileSidebar, MobileNav } from '@/components/ui/sidebar';
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { login } from "@/globalContext/authSlice";
import { useRouter } from "next/navigation";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Records",
      href: "/records",
      icon: (
        <IconFileText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Consult",
      href: "/consult",
      icon: (
        <IconStethoscope className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Medicines",
      href: "/medicines",
      icon: (
        <IconPill className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "/",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    
  ];
   
  const [open, setOpen] = useState(false);
  const {theme,setTheme} = useTheme()
  const status:boolean = useSelector((state:RootState)=>state.auth.status)
  const dispatch:AppDispatch = useDispatch()
  const router = useRouter()
    const [mounted,setMounted] = useState<boolean|null>(false)
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      // Render nothing on server → avoids mismatch
      return null;
    }
  return (
    <div
      className={cn( 
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-b-sm border border-neutral-200 bg-gray-100 shadow-xl md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
         // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <MobileNav className="flex p-2 py-4 gap-x-0.5 justify-between items-center">
          
          <Link href={'/'} >
            <div className="flex gap-x-1 sm:gap-x-2 items-center ">
              <Avatar className=" h-8 w-8 rounded-lg" src="logo.jpg" alt="
              logo" />
              <h1 className="sm:text-xl text-xs font-bold ">JeevanSetu</h1>
            </div>
          </Link>
          <div className="ml-auto flex gap-x-2 sm:gap-x-4 justify-center items-center">
         <button onClick={()=>setTheme(prev=>prev==="dark"?"light":"dark")} className="cursor-pointer border-black/20 dark:border-white/20 border-2
            rounded-2xl p-1">
            {theme==="dark"?<IconMoon color="white"  />:<IconSun color="black" />}
          </button >
          <Link href='/symptoms' className="cursor-pointer border-black/20 dark:border-white/20 border-2
            rounded-2xl p-1 ">
          <IconRobotFace  />
          </Link>
          <div className="flex relative items-center">
          
          <Select options={["english"]} className="w-16" placeholder={<IconLanguage />} />
          </div>
          {!status?<Button onClick={()=>{router.push('/login')}} className="md:hidden cursor-pointer text-sm px-3 py-1 ">Login</Button>:<MobileSidebar className="px-1 py-auto">

          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div><img  alt="logo" /></div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          </MobileSidebar>}
          </div>
        </MobileNav>
      </Sidebar>
      
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};


