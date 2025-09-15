import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

function AvatarComponent({className,src,alt}:Readonly<{ className:string,alt:string,src?:string}>) {
  return (
    <div>
        <Avatar className={className}>
  <AvatarImage alt={alt} src={src} />
  <AvatarFallback></AvatarFallback>
</Avatar>
    </div>
  )
}

export default AvatarComponent