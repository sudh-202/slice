import Logo from "@/public/logo";

const Navbar = () => {
  return (
    <div className="bg-transparent sticky  top-0 z-50 flex justify-between items-center py-5 px-8">
      <Logo />
      <div className="uppercase font-bold text-[16px] font-geist-sans">Help Center</div>
    </div>
  );
};

export default Navbar;
