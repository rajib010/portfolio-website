import React from 'react'
import { Button } from "@/components/ui/button";
import userImage from "@/assets/image.jpg"

const IntroContent = () => {
    return (
        <div className="w-[90%] mx-auto flex flex-row justify-between sm:flex-row-reverse p-10">
            <div className="w-[60%] center flex-col gap-3">
                <div className=" flex flex-col ">
                    <h3 className="text-3xl font-bold mb-3 md:text-4xl">Welcome To My Portfolio!!</h3>
                    <h3 className="text-2xl mb-3 sm:text-3xl">I’m Rajib Pokhrel 👋</h3>
                    <p className="text-xl">A passionate web developer and software enthusiast, currently pursuing a Bachelor of Computer Application (BCA). With a strong foundation in technologies like PHP, JavaScript, Express, Node, React, MySQL, Mongo DB and Java, I specialize in creating efficient, visually appealing, and user-friendly web applications.</p>
                </div>
                <Button className="w-full">See more</Button>
            </div>
            <div className="w-[25%] center">
                <img src={userImage} alt="" className="rounded-lg  lg:w-60 lg:h-60" />
            </div>
        </div>
    )
}

export default IntroContent