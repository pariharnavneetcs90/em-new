import React from 'react';

const VideoSection = () => {
    return (
        <div className='video-section relative mt-16 mb-12'>

            {/* Flex container for centering video */}
            <div className='flex justify-center items-center h-screen'>
                {/* Video element */}
                <video className='w-full h-auto' src="images/vedioBg.mp4" autoPlay loop muted onError={handleError}>
                    {/* Fallback content in case video fails to load */}
                    <p>Sorry, the video cannot be played.</p>
                </video>
            </div>
        </div>
    );
}
const handleError = (e) => {
    console.error('Error loading video:', e);
}

export default VideoSection;
