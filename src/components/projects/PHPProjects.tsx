import React from 'react'
import { PHPProjects } from '@/config'
import CommonProjectCard from '../CommonCard'

const PHPProjectsComponent = () => {
  return (
    <CommonProjectCard 
        Information={PHPProjects}
        Cardtitle='PHP Projects'
    />
  )
}

export default PHPProjectsComponent