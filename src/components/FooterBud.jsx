import React from 'react'
import tweeter from "../assets/mdi_twitter.png"
import telegram from "../assets/ri_instagram-fill.png"
import facebook from "../assets/ic_baseline-facebook.png"
import tiktok from "../assets/streamline-logos_tiktok-logo-block.png"

const FooterBud = () => {
    return (
        <div className='flex flex-col bg-bud-primary'>
            <div className="container flex flex-col">
                <h1 className='font-semibold text-white text-[20px] xl:mb-[64px] xl:font-medium xl:text-[40px] md:text-center xl:text-start'>BUDDHISM</h1>
                <div className="flex flex-col gap-6 mt-4 md:flex-row md:justify-center xl:justify-between md:items-center xl:items-start">
                    <div className="hidden xl:flex w-[517px] flex-col">
                        <p className='font-sans font-normal text-base leading-6 tracking-[0.5%] text-white'>
                            The Established Buddhism Website is an online platform that shares Buddhist teachings through scriptures, Dharma talks, videos, and live events. It connects practitioners worldwide, enabling chanting, meditation, and prayer from anywhere, and promotes compassion, wisdom, and peace in daily life.
                        </p>
                        <p className='mt-4 font-sans font-medium text-base leading-6 tracking-[0.5%] text-white'>
                            The goal is to provide an accessible online platform where people everywhere can connect with Buddhist teachings and practice. By offering scriptures, Dharma talks, videos, and live events, it supports chanting, meditation, and prayer from anywhere. It strives to preserve and share the Dharma, foster a global community of practitioners, and inspire compassion, wisdom, and peace in everyday life.
                        </p>
                    </div>
                    <div>
                        <h2 className='hidden xl:flex font-sans font-medium text-xl leading-none tracking-[1.2%] text-white mb-7'>Infomation</h2>
                        <h2 className='text-[14px] text-white py-2 xl:text-base'>Address: <span className='font-semibold'>4B Vuong Thua Vu, Ha Noi, Viet Nam</span></h2>
                        <h2 className='text-[14px] text-white py-2 xl:text-base'>Email: <span className='font-semibold'>contact@vnfite.vn</span></h2>
                        <h2 className='text-[14px] text-white py-2 xl:text-base'>Hotline: <span className='font-semibold'>0123456789</span></h2>
                        <div className="flex flex-row xl:flex-col">
                            <h2 className='text-[14px] xl:text-[20px] xl:font-medium xl:py-3 text-white py-2'>Contact Us</h2>
                            <div className="flex flex-row">
                                <img src={tweeter} alt="mdi_twitter" className='w-8 h-8 ml-4 cursor-pointer xl:ml-0' />
                                <img src={telegram} alt="ri_instagram" className='w-8 h-8 ml-4 cursor-pointer' />
                                <img src={facebook} alt="ic_baseline-facebook" className='w-8 h-8 ml-4 cursor-pointer' />
                                <img src={tiktok} className='w-8 h-8 ml-4 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center text-[11px] xl:text-[12px] py-2 xl:py-3 text-neutral-600 bg-bud-secondary">
                <p>@Copyright 2025 by VNFITE SOFTWARE</p>
            </div>
        </div>
    )
}

export default FooterBud