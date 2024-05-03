import Ads from "@/public/images/ads.svg";
import Imfn from "@/public/images/imfn.svg";
import NowaitBg from "@/public/images/nowaitBg.svg";
import Pwyp from "@/public/images/pwyp.svg";
import Tuot from "@/public/images/tuot.svg";
import Image from "next/image";

const NoMoreWait = () => {
  return (
    <div className="gapBothSide container mt-28">
      <p className="secTitle">What are you waiting for?</p>
      <div className="flex flex-wrap justify-center mt-[123px] lg:mt-64 items-center relative">
        <div className="flex lg:block items-center justify-center flex-wrap">
          <Image src={Pwyp} alt="" className="lg:block hidden" />
          <Image src={Tuot} alt="" className="lg:block hidden" />
        </div>
        <Image
          src={NowaitBg}
          alt=""
          className="absolute mx-auto w-8/12 hidden lg:block"
        />
        <div className="relative mx-auto w-full p-10 lg:w-5/12 text-center bg-cerulean-blue lg:bg-transparent rounded-3xl">
          <p className="text-yellow text-3xl font-semibold">Buy Today!</p>
          <p className="text-3xl text-white mt-2">For the Low Price Of</p>
          <div className="relative text-white flex justify-center mt-4">
            <p className="text-[120px] sm:text-[200px] font-semibold font-righteous">
              19
            </p>
            <p className="text-6xl sm:text-[100px] font-semibold font-righteous relative top-8 sm:top-12">
              95
            </p>
          </div>
          <button className="btn w-full text-3xl">Buy Now</button>
        </div>
        <div className="grid grid-cols-2 items-center lg:block mt-2">
          <Image src={Pwyp} alt="" className="block lg:hidden" />
          <Image src={Tuot} alt="" className="block lg:hidden" />
          <Image src={Imfn} alt="" />
          <Image src={Ads} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoMoreWait;
