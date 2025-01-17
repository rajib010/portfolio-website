import React from 'react'
import CommonProjectCard from '../CommonCard'
import { MERNProjects } from '@/config'

const MERNProjectsComponent = () => {
  return (
    <CommonProjectCard
    Information={MERNProjects}
    Cardtitle='MERN Projects'
    />
  )
}

export default MERNProjectsComponent