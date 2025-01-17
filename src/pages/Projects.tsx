import MERNProjectsComponent from '@/components/projects/MERNProjects'
import { NEXTProjectsComponent } from '@/components/projects/NEXTProjects'
import PHPProjectsComponent from '@/components/projects/PHPProjects'
import ReactMiniProjectsComponent from '@/components/projects/ReactMiniProjects'
import React from 'react'

const Projects = () => {
  return (
    <main className="w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-7 text-[16px]">
      <MERNProjectsComponent />
      <ReactMiniProjectsComponent />
      <NEXTProjectsComponent />
      <PHPProjectsComponent />
    </main>
  )
}

export default Projects