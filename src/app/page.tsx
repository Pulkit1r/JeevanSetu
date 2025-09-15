"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import {DashBoard, LandingPage} from '@/Page/index'
import { RootState } from '@/globalContext/store'
export default function  Page():React.ReactNode{
  const status = useSelector((state:RootState)=>state.auth.status)
  return <>{!status?<LandingPage />:<DashBoard />}</>
}
