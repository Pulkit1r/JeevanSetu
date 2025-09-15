import { Button } from "@/components/ui/button"
import React from "react"

export function ButtonDemo({children,onClick,className='',...props}:Readonly<{children:React.ReactNode,onClick:undefined|(()=>void),className:string}>) {
  return (
    <div className={` flex flex-wrap items-center gap-2 md:flex-row`}>
      <Button onClick={onClick} {...props} className={className} >{children}</Button>
    </div>
  )
}
