import React from 'react'
import CommonProjectCard from '../CommonCard'
import { REACTMINIPROJECTS } from '@/config/'
import { useTranslation } from 'react-i18next'

const ReactMiniProjectsComponent = () => {
  const {t} = useTranslation()
  return (
    <CommonProjectCard
    Information={REACTMINIPROJECTS}
    Cardtitle={`React ${t('mini')} ${t('projects')}` }
    />
  )
}

export default ReactMiniProjectsComponent