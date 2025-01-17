import React from "react";
import Skills from "@/components/home/TechnicalSkills";
import OtherSkills from "@/components/home/OtherSkills";
import CVSection from "@/components/home/CV";
import IntroContent from "@/components/home/IntroContent";

function Home() {

  
  return (
    <main className="w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-7">
      <IntroContent />
      <Skills />
      <OtherSkills />
      <CVSection />
    </main>
  );
}

export default Home;
