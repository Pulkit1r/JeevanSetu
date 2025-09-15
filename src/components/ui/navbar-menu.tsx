"use client";
import React, { useEffect } from "react";
import { motion, ValueAnimationTransition } from "motion/react";
import Link from "next/link";



const transition:ValueAnimationTransition<{type: string,
  mass:number,
  damping: number,
  stiffness:number,
  restDelta:number,
 restSpeed: number}> = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
 restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  className,
  
  children,
  ...props
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  className?:string|null
  key?:string|number
  children?: React.ReactNode;
}) => {
  
  
  return (
    <div  onMouseEnter={() => setActive(item)} {...props} className={` relative ${className} `}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{  scaleX: 0.85,  }}
          animate={{  scaleX: 1 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="  dark:bg-gray-900 bg-white rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?:string|null
  
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative rounded-full border border-transparent bg-white  dark:border-white/[0.2]  shadow-input justify-center space-x-4 ${className} `}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  className,
  

}: {
  title: string;
  description?: string;
  href: string;
  src?: string;
  className?:string|null
  key?:string|number
}) => {
  return (
    <a href={href} className={`flex ${className} space-x-2`}>
      {src && <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />}
      <div>
        <h4 className="text-sm font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        {description && (<p className="text-neutral-700 text-sm md:hidden lg:block dark:text-neutral-300">
          {description}
        </p>)}
      </div>
    </a>
  );
};

export const HoveredLink = ({ children,href, ...rest }: {children:React.ReactNode,href:string,rest?:React.ComponentProps<"a">}) => {
  return (
    <Link
    href={href}
      {...rest}
      className="inline-block w-full dark:hover:text-white hover:text-black "
    >
      {children}
    </Link>
  );
};
