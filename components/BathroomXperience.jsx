import FlagIcon from "@/public/icons/flag.svg";
import Rightton1 from "@/public/icons/rington1.svg";
import Rightton2 from "@/public/icons/rington2.svg";
import AmountBgImg from "@/public/images/amountBg.svg";
import BuyBgImg from "@/public/images/buyBg.svg";
import Ibe from "@/public/images/ibeBg.svg";
import IbeRightSide from "@/public/images/ibeRightSide.svg";
import Image from "next/image";

const BathroomXperience = () => {
  return (
    <div className="mt-24 relative">
      <Image src={FlagIcon} alt="" className="absolute left-0 top-5" />
      <Image src={Rightton1} alt="" className="absolute right-0 -top-10" />
      <div className="gapBothSide container relative">
        <p className="secTitle">Innovate your Bathroom experience</p>
        <p className="text-dark-gray mt-4 w-full md:w-6/12 mx-auto text-[20px] text-center opacity-60 leading-[26px]">
          In our relentless pursuit of redefining bathroom rituals, we proudly
          introduce a cutting-edge toilet experience, seamlessly blending
          unmatched luxury with the pinnacle of technological innovation.
          Elevate your essentials with unparalleled comfort and state-of-the-art
          features, ensuring every visit is nothing short of revolutionary.
        </p>
        <div className="mt-10 flex justify-center flex-wrap xl:flex-nowrap">
          <div className="relative right-0 xl:-right-[7%]">
            <Image src={Ibe} alt="" className="absolute hidden xl:block" />
            <div className="relative flex justify-center items-center w-full xl:w-[913px] h-auto xl:h-[598px] py-5 px-5 sm:px-20 md:px-40 text-white bg-cerulean-blue xl:bg-transparent rounded-3xl">
              <div>
                <p className="secTitle">
                  Elevate
                  <br />
                  Your Bathroom Experience
                </p>
                <p className="opacity-80 font-light my-9 text-center">
                  Discover the next level of bathroom luxury with Schitz N
                  Giggles™. Our innovative toilet flushing sound system
                  transforms your bathroom
                </p>
                <div className="text-xl grid grid-cols-1 lg:grid-cols-2 gap-[27px] mt-14">
                  <p>🔊 High-Quality Sound</p>
                  <p>🎵 Customizable Sounds</p>
                  <p>🔋 Long Battery Life</p>
                  <p>🛠️ Easy Installation</p>
                  <p>🎚️ Adjustable Volume</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="relative -top-5 -right-0 xl:-top-20 xl:-right-[30%]">
                <Image src={BuyBgImg} alt="" className="absolute" />
                <p className="w-[126px] sm:w-[255px] h-[65px] sm:h-[132px] relative flex items-center justify-center text-md sm:text-3xl font-bold">
                  Buy Today
                </p>
              </div>
              <div className="relative -top-5 right-5 xl:-top-[170px] xl:-right-[20%]">
                <Image src={AmountBgImg} alt="" className="absolute" />
                <p className="w-[102px] sm:w-[205px] h-[80px] sm:h-[169px] relative flex items-center justify-center text-md sm:text-3xl font-bold text-white">
                  $19.95
                </p>
              </div>
            </div>
          </div>
          <Image
            src={IbeRightSide}
            alt=""
            className="relative left-0 xl:-left-[7%]"
          />
        </div>
      </div>
      <Image src={Rightton2} alt="" className="absolute left-0 bottom-[15%]" />
    </div>
  );
};

export default BathroomXperience;
