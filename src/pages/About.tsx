import React from 'react';
import userImage from "@/assets/image.jpg"
import EducationalBackgroundComponent from '@/components/about/EducationalBackgroud';
import ExperienceComponent from '@/components/about/ExperienceCard';
import CVSection from '@/components/home/CV';


const About = () => {
  return (
    <main className="w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-7">
      <EducationalBackgroundComponent />      
      <ExperienceComponent />
      <CVSection />
    </main>
  );
};

export default About;
