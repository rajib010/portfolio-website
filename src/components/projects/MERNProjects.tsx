import React from 'react'
import CommonProjectCard from '../CommonCard'
import { MERNProjects } from '@/config'
import { useTranslation } from 'react-i18next'

const MERNProjectsComponent = () => {
  const {t} = useTranslation();
  return (
    <CommonProjectCard
    Information={MERNProjects}
    Cardtitle={`MERN ${t('projects')}` }
    />
  )
}

export default MERNProjectsComponent