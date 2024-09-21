import Image from "next/image"

const Info3 = () => {
  return (
    <div>
      <div className="relative w-full aspect-[180/29] sm:aspect-[2880/458]">
        <Image
          alt="Upper curve"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715887909/website/sliceit-v3/images/desktop/slice_account_desktop_cards_upper_curve.webp"
          sizes="100vw"
          width={3840}
          height={180}
        />
      </div>
      <section className="relative w-full">
        <ul className="grid grid-cols-1 px-6 bg-white border-white cardContainer sm:p-0 sm:flex sm:items-center sm:justify-center">
          {[
            {
              title: "Teen account",
              bgColor: "#D42358",
              imgSrc: "https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715778170/website/sliceit-v3/images/desktop/slice_account_desktop_teen_account_card.webp",
            },
            {
              title: "Autopay",
              bgColor: "#B106CD",
              imgSrc: "https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715778694/website/sliceit-v3/images/desktop/slice_account_desktop_recurring_payments_card.webp",
            },
            {
              title: "Spend analytics",
              bgColor: "#7025EA",
              imgSrc: "https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715778711/website/sliceit-v3/images/desktop/slice_account_desktop_spend_analytics_card.webp",
            },
          ].map((card, index) => (
            <li
              key={index}
              className={`col-span-1 relative h-[260px] sm:h-auto sm:w-[28%] px-5 py-6 lg:p-10 3xl:p-12 rounded-[20px] xl:rounded-[40px] aspect-[127/130] sm:aspect-[1117/1408] cursor-pointer`}
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="absolute inset-0 z-0 rounded-[20px] xl:rounded-[40px]">
                <Image
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full rounded-[20px] xl:rounded-[40px]"
                  src={card.imgSrc}
                  sizes="100vw"
                  width={3840}
                  height={260}
                />
              </div>
              <div className="relative z-10 flex flex-col gap-3 xl:gap-6">
                <h1 className="text-3xl !leading-[28px] xl:text-6xl font-extrabold text-white whitespace-pre font-quincy xl:!leading-[48px]">
                  {card.title}
                </h1>
                <button className="py-1 px-2 xl:px-6 xl:py-4 text-[#F7EDFB] text-[10px] xl:text-xl font-medium rounded-[50px] w-fit bg-[#FFFFFF66]">
                  Learn more
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Info3