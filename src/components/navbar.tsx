'use client'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"
import { useTheme } from "next-themes";
import { RootState ,AppDispatch } from "@/globalContext/store";
import { Avatar, Select, Button } from '@/components/index'
import { IconMoon, IconSun, IconRobotFace } from "@tabler/icons-react";
import React, { useEffect, useState } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { login } from "@/globalContext/authSlice";
import { useRouter } from "next/navigation";


export default function NavigationMenuDemo({ className }: Readonly<{ className?: string }>) {
  type components = Readonly<{
    title: string,
    href: string,
    child: {
      name: string,
      description: string,
      href: string
    }[]
  }>

   const status:boolean = useSelector((state:RootState)=>state.auth.status)
  const [active, setActive] = useState<string | null>(null)
  const patientsHref: string = "/records"
  const medicineHref: Readonly<string> = "/medicines"
  const consultHref: string = '/consult'
  const Components: components[] = [
    {
      title: "Consult",
      href: consultHref,
      child: [
        {
          name: "Primary Care Doctors",
          description: "Provide general health care, preventive care, and manage common illnesses.",
          href: `${consultHref}/primary`
        },
        {
          href: `${consultHref}/surgical`,
          name: "Surgical Specialists",
          description: "Perform surgeries on various parts of the body."
        },
        {
          href: `${consultHref}/medical`,
          name: "Medical Specialists",
          description: "Diagnose and treat specific organ systems or diseases."
        },
        {
          href: `${consultHref}/ob-gyn`,
          name: "OB-GYN",
          description: "Focus on women’s reproductive health, pregnancy, and childbirth."
        },
        {
          href: `${consultHref}/others`,
          name: "Others",
          description: "Include doctors like anesthesiologists, radiologists, pathologists, and geriatricians with specialized roles."
        },
        {
          name: "All Doctors",
          description: "Explore all categories of doctors and specialists in one place.",
          href: consultHref
        }

      ]

    },


    {
      title: "Patients Records",
      href: patientsHref,
      child: [
        {
          name: "Active Patients",
          description: "Patients who are currently under treatment.",
          href: `${patientsHref}/personal-info`,
        },
        {
          name: "Medical History",
          description: "Past illnesses, surgeries, allergies, and ongoing health conditions.",
          href: `${patientsHref}/medical-history`,
        },
        {
          name: "Lab Reports",
          description: "Blood tests, X-rays, scans, and other diagnostic reports.",
          href: `${patientsHref}/lab-reports`,
        },
        {
          name: "Prescriptions",
          description: "Current and past medications prescribed by doctors.",
          href: `${patientsHref}/prescriptions`,
        },
        {
          name: "Appointments",
          description: "Scheduled, upcoming, and past doctor visits or telemedicine sessions.",
          href: `${patientsHref}/appointments`,
        },
        {
          name: "All Records",
          description: "Access all patient information and medical records in one place.",
          href: patientsHref
        }
      ],
    },
    {
      title: "Medicines",
      href: medicineHref,
      child: [
        { name: "Antibiotics", description: "Treat bacterial infections and prevent their spread.", href: `${medicineHref}/antibiotics` },
        { name: "Painkillers", description: "Relieve mild to severe pain and inflammation.", href: `${medicineHref}/painkillers` },
        { name: "Vitamins & Supplements", description: "Support nutrition, immunity, and overall health.", href: `${medicineHref}/vitamins` },
        { name: "Chronic Disease Medications", description: "Manage conditions like diabetes, hypertension, and asthma.", href: `${medicineHref}/chronic` },
        { name: "Cold & Flu Remedies", description: "Relieve symptoms of colds, flu, and respiratory issues.", href: `${medicineHref}/cold-flu` },
        { name: "Allergy Medications", description: "Control allergies, hay fever, and asthma triggers.", href: `${medicineHref}/allergy` },
        { name: "Digestive Health", description: "Support gut health, treat acidity, and indigestion.", href: `${medicineHref}/digestive` },
        { name: "Skin Treatments", description: "Creams, ointments, and medications for skin conditions.", href: `${medicineHref}/skin` },
        { name: "More...", description: "", href: medicineHref }
      ]

    },

  ]

  if(!status) return null


  return (
    <div className={cn(`inset-x-0  max-w-2xl mx-auto z-50`, className)}>
      <Menu setActive={setActive} className={cn("dark:bg-gray-900 shadow-xl dark:shadow-white/10 inline-flex justify-center py-2 px-3 ")} >

        <div className="inline-flex gap-5">
          {Components.map((item: components, index) => (
            <MenuItem key={item.title} setActive={setActive} active={active} className={`py-2  hover:bg-gray-200 dark:hover:bg-gray-500/30  rounded-2xl px-3`} item={item.title} >


              <ul className="grid md:max-w-xl md:grid-cols-2">
                {item.child.map((link: components["child"][number], index, item) => {
                  return (
                    <li key={link.name} className=" col-span-1 dark:hover:bg-gray-500/30 hover:bg-gray-200 transition rounded-lg p-1.5 px-2 " >
                      {item.length > 6 ? (<HoveredLink href={link.href}>{link.name}</HoveredLink>) : (<ProductItem title={link.name} className={`w-full`} href={link.href} description={link.description} />)}
                    </li>
                  )
                })}


              </ul>
            </MenuItem>


          ))}
          <Link href={`/awareness`}><MenuItem setActive={setActive} active={active} className={`py-2 hover:bg-gray-200 dark:hover:bg-gray-500/30  rounded-2xl px-3`} item='Awareness' /></Link>
        </div>

      </Menu>

    </div >
  )
}

export function Header() {
  const { theme, setTheme } = useTheme()
  const status:boolean = useSelector((state:RootState)=>state.auth.status)
  const router = useRouter()
  const [mounted, setMounted] = useState<boolean | null>(false)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing on server → avoids mismatch
    return null;
  }




  return (
    <div className="w-full md:flex rounded-b-md hidden shadow-[0_0_10px] dark:shadow-white/30  flex-wrap justify-center gap-y-4">
      <div className="flex w-full justify-between p-2 py-1.5 lg:p-4 shadow">
        <Link href={'/'} className="outline-none">
          <div className="flex gap-x-2 items-center ">
            <Avatar className=" w-14 h-14 rounded-2xl" src="logo.jpg" alt="logo" />
            <h1 className="sm:text-xl font-bold ">JeevanSetu</h1>
          </div>
        </Link>
        <div className="flex sm:gap-x-4 items-center">
          <button onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")} className="cursor-pointer border-black/20 dark:border-white/20 border-2
            rounded-2xl p-1">
            {theme === "dark" ? <IconMoon color="white" /> : <IconSun color="black" />}
          </button >
          <Link href='/symptoms' className="cursor-pointer border-black/20 dark:border-white/20 border-2
            rounded-2xl p-1 ">
            <IconRobotFace />
          </Link>
          <Select className="" options={["English"]} placeholder="Language" />
          {!status?<Button onClick={()=>router.push("/login")} className="hidden sm:block cursor-pointer ">Login/SignUp</Button>:<Link href="/profile"><Avatar className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10" alt="avatar" src="avatar.png" /></Link>}

        </div>
      </div>

    </div>
  )
}