import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

import React from 'react'

function SelectComponent({className ,placeholder="",options=["English"],...props}:Readonly<{className:string,placeholder:React.ReactNode,options:string[]}>) {
  return (
    <div className={cn("w-full",className)}>
        <Select {...props} >
  <SelectTrigger size="default" className={` w-full cursor-pointer`}>
    <SelectValue placeholder={placeholder} />
  </SelectTrigger>
  <SelectContent>
    {
        options?.map((val:string):React.ReactNode=>{
            return (<SelectItem key={val} value={val}>{val}</SelectItem>)
        })
    }
  </SelectContent>
</Select>
    </div>
  )
}

export default SelectComponent