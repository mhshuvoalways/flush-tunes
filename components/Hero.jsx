import HeroBg from "@/public/images/heroBg.png";
import PooImg from "@/public/images/poo.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative -top-16 z-10">
      <Image
        src={HeroBg}
        alt=""
        className="w-full absolute h-full xl:h-[770px]"
      />
      <div className="gapBothSide container relative pt-[122px] flex justify-center xl:justify-between items-center flex-wrap xl:flex-nowrap gap-10 xl:gap-0">
        <div>
          <p className="text-3xl font-semibold text-center font-righteous leading-10 tracking-wider">
            Turn Every Trip to the <br /> Bathroom into an Experience
          </p>
          <div
            className="mt-8"
            style={{
              backgroundImage: "url(/images/heroBtnBg.svg)",
            }}
          >
            <div className="flex items-center justify-center relative text-center w-full xl:w-[574px] h-auto xl:h-[580px] p-12">
              <div className="w-full">
                <p className="text-yellow text-3xl font-semibold">Buy Today!</p>
                <p className="text-3xl text-white mt-2">For the Low Price Of</p>
                <div className="relative text-white flex justify-center mt-4">
                  <p className="text-[120px] sm:text-[200px] font-semibold font-righteous z-0">
                    19
                  </p>
                  <p className="text-6xl sm:text-[100px] font-semibold font-righteous relative sm:absolute top-5 right-0 sm:-right-5 xl:right-5 z-10">
                    95
                  </p>
                </div>
                <button className="btn w-full text-3xl">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <Image src={PooImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
