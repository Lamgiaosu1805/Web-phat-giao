import React from 'react'

const TitleLine = ({ title }) => {
    return (
        <div className="flex flex-row items-center">
            <h1 className="pr-2 sm:pr-4 md:pr-6 xl:pr-8 text-base leading-6 text-bud-primary tracking-[0] font-semibold sm:text-lg sm:leading-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9 xl:text-[34px] xl:leading-10">{title}</h1>
            <div className="relative flex flex-1">
                <div
                    className="w-8 h-2 sm:w-12 sm:h-3 md:w-16 md:h-4 xl:w-20 xl:h-5 bg-bud-primary"
                    style={{
                        clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"
                    }}
                ></div>
                <div className=" absolute top-1/2 w-full h-[2px] bg-bud-primary -translate-y-1/2"></div>
            </div>
        </div>
    )
}

export default TitleLine