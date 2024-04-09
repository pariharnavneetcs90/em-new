import React from 'react'
//import vedioBg from '../../../../public/images/vedioBg.mp4'
const VideoSection = () => {
    return (
        <div className='main relative mt-[60px] mb-[50px] '>
            <div className="overlay"></div>
            <div className='flex justify-center items-center h-screen pt-20 pb-20 mb-20 '>
                <video className='w-full h-auto ' src="images/vedioBg.mp4" autoPlay loop muted />
            </div>

            <div className='content absolute '>
                {/* <h2 className='text-5xl'> Hello World</h2>
                <p>to my site</p> */}
            </div>
        </div>
    )
}

export default VideoSection