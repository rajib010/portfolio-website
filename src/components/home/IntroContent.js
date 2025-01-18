import React from 'react';
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg";
import { Link } from 'react-router-dom';
const IntroContent = () => {
    return (React.createElement("div", { className: "w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-5 gap-5 text-black dark:text-white" },
        React.createElement("div", { className: "w-full lg:w-[30%] flex justify-center" },
            React.createElement("img", { src: userImage, alt: "User", className: "w-40 sm:w-60 lg:w-64 rounded-full" })),
        React.createElement("div", { className: "w-full lg:w-[60%] text-center lg:text-left flex flex-col gap-4" },
            React.createElement("h3", { className: "text-2xl font-bold md:text-4xl" }, "Welcome People !!"),
            React.createElement("h3", { className: "text-xl sm:text-3xl" }, "I\u2019m Rajib Pokhrel \uD83D\uDC4B"),
            React.createElement("p", { className: " md:text-base lg:text-lg" }, "A passionate web developer and software enthusiast, currently pursuing a Bachelor of Computer Application (BCA). With a strong foundation in technologies like PHP, JavaScript, Express, Node, React, MySQL, Mongo DB, and Java, I specialize in creating efficient, visually appealing, and user-friendly web applications."),
            React.createElement(Button, { className: "bg-slate-200 hover:bg-slate-400 shadow-xl dark:bg-slate-900 dark:hover:bg-slate-950" },
                React.createElement(Link, { to: '/about', className: 'text-black dark:text-white ' }, "See More")))));
};
export default IntroContent;
