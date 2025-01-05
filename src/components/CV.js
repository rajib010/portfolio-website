import React from "react";
const CVSection = () => {
    return (React.createElement("section", { className: "cv-section bg-gray-100 py-12 px-6 text-center" },
        React.createElement("p", { className: "text-lg text-gray-700 mb-6" }, "Interested in working with me? Download my CV and let's collaborate!"),
        React.createElement("a", { href: "/RajibCV.pdf", download: "Rajib_Pokhrel_CV.pdf", className: "px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300" }, "Download CV")));
};
export default CVSection;
