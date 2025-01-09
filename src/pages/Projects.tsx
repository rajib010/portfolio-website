import MERNProjectsComponent from '@/components/MERNProjects'
import NEXTProjectsComponent from '@/components/NEXTProjects'
import PHPProjectsComponent from '@/components/PHPProjects'
import ReactMiniProjectsComponent from '@/components/ReactMiniProjects'
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