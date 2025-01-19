import React from 'react'
import { PHPProjects } from '@/config/'
import CommonProjectCard from '../CommonCard'
import { useTranslation } from 'react-i18next'

const PHPProjectsComponent = () => {
  const {t} = useTranslation()
  return (
    <CommonProjectCard 
        Information={PHPProjects}
        Cardtitle={`PHP ${t('projects')}` }
    />
  )
}

export default PHPProjectsComponent