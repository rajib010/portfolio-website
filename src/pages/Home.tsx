import React from "react";
import Skills from "@/components/TechnicalSkills";
import IntroContent from "@/components/Introcontent"

function Home() {
  return (
    <main className="w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-4">
      <IntroContent />
      <Skills />
    </main>
  );
}

export default Home;
