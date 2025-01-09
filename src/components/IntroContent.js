import React from 'react';
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg";
import { Link } from 'react-router-dom';
const IntroContent = () => {
    return (React.createElement("div", { className: "w-[90%] mx-auto flex flex-row justify-between py-5" },
        React.createElement("div", { className: "w-[30%] center" },
            React.createElement("img", { src: userImage, alt: "", className: "rounded-lg w-96 lg:w-64 " })),
        React.createElement("div", { className: "w-[60%] center flex-col gap-3" },
            React.createElement("div", { className: " flex flex-col " },
                React.createElement("h3", { className: "text-2xl font-bold mb-3 md:text-4xl" }, "Welcome People !!"),
                React.createElement("h3", { className: " text-xl mb-3 sm:text-3xl" }, "I\u2019m Rajib Pokhrel \uD83D\uDC4B"),
                React.createElement("p", { className: "lg:text-xl" }, "A passionate web developer and software enthusiast, currently pursuing a Bachelor of Computer Application (BCA). With a strong foundation in technologies like PHP, JavaScript, Express, Node, React, MySQL, Mongo DB and Java, I specialize in creating efficient, visually appealing, and user-friendly web applications.")),
            React.createElement(Button, { className: "w-full" },
                React.createElement(Link, { to: '/about' }, "See More")))));
};
export default IntroContent;
