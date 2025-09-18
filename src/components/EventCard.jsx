import React from 'react'
import { Card } from './ui/card'
import { CalendarDaysIcon } from 'lucide-react'
import imgDemo from "../assets/img_demo_3.png"

const EventCard = ({index}) => {
    return (
        <Card
            className="flex flex-row gap-4 p-4 transition-all duration-200 border-0 cursor-pointer md:p-0 md:flex-col sm:flex-row hover:bg-amber-50 shadow-custom-md hover:shadow-custom-lg animate-fade-in group"
        >
            <div className="w-full sm:w-48 md:w-full aspect-[3/2] flex-1">
                <img
                    src={imgDemo}
                    alt="img-demo"
                    className="object-cover w-full h-full rounded-lg md:rounded-b-none"
                />
            </div>

            <div className="flex flex-col text-left flex-2 md:px-4">
                <h1 className="font-semibold text-md line-clamp-2">The first Buddha Dharma Day is celebrated on the 15th day of the 6th lunar month.</h1>
                <div className="flex flex-row items-center">
                    <CalendarDaysIcon className='my-4 mr-2 size-6 text-muted-foreground' />
                    <p className="text-base text-neutral-400">19:00 - 01/08/2025</p>
                </div>
            </div>
        </Card>
    )
}

export default EventCard