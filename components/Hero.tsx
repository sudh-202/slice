import React from 'react';

const Hero = () => {
  return (
    <main className='flex '>
      <video
        className="top-0 left-0 z-0 hidden object-cover w-full h-full pointer-events-none sm:block"
        preload="auto"
        loop
        playsInline
        autoPlay
        muted // Mute the video to allow autoplay
        src="https://res.cloudinary.com/slicepay/video/upload/q_auto/v1715774323/website/sliceit-v3/videos/desktop/slice_account_banner_desktop.webm"
        // type="video/webm"
      >
        
        Your browser does not support the video tag.
      </video>
    </main>
  );
};

export default Hero;
