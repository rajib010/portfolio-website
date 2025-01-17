import React from 'react';
import CommonProjectCard from '../CommonCard';
import { REACTMINIPROJECTS } from '@/config';
const ReactMiniProjectsComponent = () => {
    return (React.createElement(CommonProjectCard, { Information: REACTMINIPROJECTS, Cardtitle: 'React Mini Projects' }));
};
export default ReactMiniProjectsComponent;
