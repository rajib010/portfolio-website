import React from 'react'
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg"
import { Link } from 'react-router-dom';

const IntroContent = () => {
    return (
        <div className="w-[90%] mx-auto flex flex-row justify-between py-5">
            <div className="w-[30%] center">
                <img src={userImage} alt="" className="rounded-lg w-96 lg:w-64 " />
            </div>  
            <div className="w-[60%] center flex-col gap-3">
                <div className=" flex flex-col ">
                    <h3 className="text-2xl font-bold mb-3 md:text-4xl">Welcome People !!</h3>
                    <h3 className=" text-xl mb-3 sm:text-3xl">I’m Rajib Pokhrel 👋</h3>
                    <p className="lg:text-xl">A passionate web developer and software enthusiast, currently pursuing a Bachelor of Computer Application (BCA). With a strong foundation in technologies like PHP, JavaScript, Express, Node, React, MySQL, Mongo DB and Java, I specialize in creating efficient, visually appealing, and user-friendly web applications.</p>
                </div>
                <Button className="w-full">
                    <Link to={'/about'}>See More</Link>
                </Button>
            </div>

        </div>
    )
}

export default IntroContent