const Info2 = () => {
  return (
    <section>
      <div className="relative w-full h-24 sm:h-40 xl:h-52">
        {/* Floating Images for Desktop */}
        <div className="hidden sm:block absolute inset-0 z-[101] w-14 xxs:w-20 xl:w-48 left-[10%] top-1/4 aspect-square" style={{ transform: 'rotate(200.232deg) translateZ(0px)' }}>
          <img
            alt="Rewards floating plus"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715781399/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_plus_2.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="hidden sm:block absolute inset-0 z-[102] w-14 xxs:w-20 xl:w-56 left-[80%] top-1/2 aspect-square" style={{ transform: 'rotate(-200.232deg) translateZ(0px)' }}>
          <img
            alt="Rewards floating ring"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715781404/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_ring.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {/* Floating Images for Mobile */}
        <div className="sm:hidden absolute inset-0 z-[101] w-14 left-0 top-[90%] xxs:top-full aspect-[96/85]" style={{ transform: 'translateY(-4.38px) translateZ(0px)' }}>
          <img
            alt="Rewards floating crystal"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715781698/website/sliceit-v3/images/mobile/slice_account_mobile_rewards_crystal_left.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="sm:hidden absolute inset-0 z-[102] w-36 left-[45%] xxs:left-[60%] top-0 aspect-[256/243]" style={{ transform: 'translateY(6.57px) translateZ(0px)' }}>
          <img
            alt="Rewards floating green flower"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715781700/website/sliceit-v3/images/mobile/slice_account_mobile_rewards_green_flower.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <section className="flex flex-col items-start justify-center px-8 mt-8 xxs:px-12 sm:hidden">
        <div className="text-3xl !leading-6 xxs:text-[50px] xxs:!leading-[50px] font-bold text-white sm:text-8xl xl:text-12xl font-quincy flex flex-col xl:!leading-[87px] whitespace-pre mb-3" style={{ opacity: 0, transform: 'translateY(20px) translateZ(0)' }}>
          rewards made fun
        </div>
        <p className="text-xs text-white whitespace-pre xxs:text-sm xxs:!leading-[20px]" style={{ opacity: 0, transform: 'translateY(20px) translateZ(0)' }}>
          Make payments and invite friends
          Earn fire on every transaction
          Play and win cashback
        </p>
      </section>
      <section className="relative w-full sm:aspect-[168/121] aspect-[15/28] -mt-10 sm:mt-0">
        {/* Background Images */}
        <div className="absolute inset-0 z-[101] w-full sm:aspect-[168/121] aspect-[15/28]" style={{ transform: 'translateY(-5.14729%) translateZ(0px)' }}>
          <img
            alt="Rewards blue flower"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715777720/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_blue_flower.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-[102] w-full sm:aspect-[168/121] aspect-[15/28]">
          <img
            alt="Rewards phone"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715954065/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_phone.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-[103] w-full sm:aspect-[168/121] aspect-[15/28]" style={{ transform: 'translateY(5.92301px) translateZ(0px)' }}>
          <img
            alt="Rewards spring"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715777734/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_spring.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-[104] w-full sm:aspect-[168/121] aspect-[15/28]" style={{ transform: 'translateY(3.94868px) translateZ(0px)' }}>
          <img
            alt="Rewards crystal"
            loading="lazy"
            src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715777725/website/sliceit-v3/images/desktop/slice_account_desktop_rewards_crystal_2.webp"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>
    </section>
  )
}

export default Info2