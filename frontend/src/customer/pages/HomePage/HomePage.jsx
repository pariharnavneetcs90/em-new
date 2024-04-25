import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel'

import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import MiddleMassage from '../../components/MiddleMassage/MiddleMassage'

import MiddleBanner from '../../components/MiddleBanner/MiddleBanner'
// import MyCaroselTest from '../../components/MyCaroselTest/MyCaroselTest'
import { mens_kurta } from '../../../Data/mens_kurta'
import VideoSection from '../../components/VideoSection/VideoSection'

export const HomePage = () => {
    return (
        <div>
            <VideoSection />
            <MainCarousel />

            <div className='space-y py-20 flex flex-col justify-center px-5 lg:px-10'>
                < HomeSectionCarosel data={mens_kurta} sectionName={"Top product"} />
                {/* < HomeSectionCarosel data={mens_kurta} sectionName={" product"} /> */}
                {/* < HomeSectionCarosel data={mens_kurta} sectionName={"Top product"} /> */}
            </div>
            {/* <MyCaroselTest /> */}



            <div>
                <MiddleMassage />
            </div>

            <MiddleBanner />
            <div className='space-y py-20 flex flex-col justify-center px-5 lg:px-10'>
                < HomeSectionCarosel />
            </div>

        </div>
    )
}
