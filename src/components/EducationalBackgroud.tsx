import React from 'react'
import { EducationalBackground } from '@/config'
import { Card } from './ui/card'

const EducationalBackgroundComponent = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-left text-3xl font-bold mb-5 ml-16">Educational Background</h1>
            <div className="w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 gap-4">
                {EducationalBackground && EducationalBackground.map((item) => (
                    <Card key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1">
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-semibold text-xl"> {item.label}</h2>
                        <p className="italic">{item.year}</p>
                        <p className="my-1">{item.value}</p>
                        <p className="my-1">{item.location}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default EducationalBackgroundComponent