import MERNProjectsComponent from '@/components/projects/MERNProjects'
import { NEXTProjectsComponent } from '@/components/projects/NEXTProjects'
import PHPProjectsComponent from '@/components/projects/PHPProjects'
import ReactMiniProjectsComponent from '@/components/projects/ReactMiniProjects'
import React from 'react'

const Projects = () => {
  return (
    <main className="w-full p-4 center my-[7rem] flex flex-col gap-7">
      <MERNProjectsComponent />
      <ReactMiniProjectsComponent />
      <NEXTProjectsComponent />
      <PHPProjectsComponent />
    </main>
  )
}

export default Projects