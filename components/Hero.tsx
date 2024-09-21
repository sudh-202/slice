import React from "react";

const Hero = () => {
  return (
    <main className="flex ">
      <video
        className="top-0 left-0 z-0 hidden object-cover w-full h-full pointer-events-none sm:block -mt-20"
        preload="auto"
        loop
        playsInline
        autoPlay
        muted
        src="https://res.cloudinary.com/slicepay/video/upload/q_auto/v1715774323/website/sliceit-v3/videos/desktop/slice_account_banner_desktop.webm"
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 flex flex-col items-center justify-center -mt-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:mt-0">
        <h1 className="font-extrabold text-white text-3xl xxs:text-[37px] xxs:leading-[46px] sm:text-6xl xl:text-[75px] xl:leading-[100px] font-quincy text-nowrap tracking-wider">
          Feel easy with
        </h1>

        <div className="w-full aspect-[384/138] xl:aspect-[640/230] relative">
          <img
            alt="hero money banner"
            className="absolute h-full w-full object-cover"
            sizes="100vw"
            srcSet="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_640,q_auto/v1715954643/website/sliceit-v3/images/desktop/slice_account_desktop_hero_money.webp 640w,
          https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_1920,q_auto/v1715954643/website/sliceit-v3/images/desktop/slice_account_desktop_hero_money.webp 1920w"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715954643/website/sliceit-v3/images/desktop/slice_account_desktop_hero_money.webp"
          />
        </div>

        <div className="items-center justify-center hidden py-2.5 mt-6 border border-white rounded-[15px] xl:flex bg-radial-gradient backdrop-blur-sm opacity-100">
          <h2 className="text-[20px] font-geist-sans font-bold !leading-[20px] text-white whitespace-pre text-wrap w-[50%]">
            download slice now
          </h2>
          <img
            alt="Scan to download slice app"
            className="w-[85px] h-[85px]"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_256,q_auto/v1718088222/website/sliceit-v3/images/desktop/download_slice_QR_white.webp"
          />
        </div>

        <a
          href="https://app.adjust.net.in/x97vzg9"
          aria-label="Download slice"
          className="flex items-center justify-center mt-6 xl:hidden"
        >
          <button
            type="button"
            className="py-2.5 px-5 border rounded-[100px] text-sm font-medium text-white bg-radial-gradient backdrop-blur-sm"
          >
            Download slice now
          </button>
        </a>
      </div>

      
    </main>
  );
};

export default Hero;
