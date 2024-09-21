const Info1 = () => {
  return (
    <section className="relative w-full aspect-[375/554] sm:aspect-[168/121] sm:mt-0 -mt-8">
      {/* Layer 1 */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715954064/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_phone.webp"
          alt="Borrow phone"
          className="absolute h-full w-full object-cover z-[101]"
        />
      </div>

      {/* Layer 2 */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776545/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_green_eye.webp"
          alt="Borrow green eye"
          className="absolute h-full w-full object-cover z-[102] translate-y-[14.9%]"
        />
      </div>

      {/* Layer 3 */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776554/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_yellow_eye.webp"
          alt="Borrow yellow eye"
          className="absolute h-full w-full object-cover z-[100] -translate-y-[14.9%]"
        />
      </div>

      {/* Layer 4 (hidden on small screens) */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776673/website/sliceit-v3/images/mobile/slice_account_mobile_borrow_plus.webp"
          alt="Borrow plus"
          className="absolute h-full w-full object-cover z-[105] -translate-y-[2.3px]"
        />
      </div>

      {/* Layer 5 */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776543/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_crystal.webp"
          alt="Borrow crystal"
          className="absolute h-full w-full object-cover z-[106]"
        />
      </div>

      {/* Layer 6 (hidden on mobile) */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776542/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_ball.webp"
          alt="Borrow ball"
          className="absolute h-full w-full object-cover z-[107] -translate-y-[10.5px]"
        />
      </div>

      {/* Layer 7 (hidden on mobile) */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="https://res.cloudinary.com/slicepay/image/upload/f_auto,c_limit,w_3840,q_auto/v1715776549/website/sliceit-v3/images/desktop/slice_account_desktop_borrow_ring.webp"
          alt="Borrow ring"
          className="absolute h-full w-full object-cover z-[108] translate-y-[13.1px]"
        />
      </div>
    </section>
  )
}

export default Info1