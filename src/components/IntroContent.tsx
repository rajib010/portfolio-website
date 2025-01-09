import React from 'react';
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg";
import { Link } from 'react-router-dom';

const IntroContent = () => {
    return (
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-5 gap-5">
            {/* Image Section */}
            <div className="w-full lg:w-[30%] flex justify-center">
                <img
                    src={userImage}
                    alt="User"
                    className="w-40 sm:w-60 lg:w-64 rounded-full"
                />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[60%] text-center lg:text-left flex flex-col gap-4">
                <h3 className="text-2xl font-bold md:text-4xl">Welcome People !!</h3>
                <h3 className="text-xl sm:text-3xl">I’m Rajib Pokhrel 👋</h3>
                <p className=" md:text-base lg:text-lg">
                    A passionate web developer and software enthusiast, currently
                    pursuing a Bachelor of Computer Application (BCA). With a strong
                    foundation in technologies like PHP, JavaScript, Express, Node,
                    React, MySQL, Mongo DB, and Java, I specialize in creating
                    efficient, visually appealing, and user-friendly web applications.
                </p>
                <Button className="w-full lg:w-auto">
                    <Link to={'/about'}>See More</Link>
                </Button>
            </div>
        </div>
    );
};

export default IntroContent;
