import Logo from "@/public/images/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between gapBothSide container py-8 items-start relative z-20 h-44">
      <Image src={Logo} alt="" className="w-6/12 sm:w-auto" />
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default Header;
