import CL from "@/public/images/cl.svg";
import HOB from "@/public/images/hob.svg";
import PS from "@/public/images/ps.svg";
import RT from "@/public/images/rt.svg";
import Image from "next/image";

const Howorks = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/howorksBg.svg)",
      }}
      className="bg-no-repeat bg-cover"
    >
      <div className="gapBothSide container py-72">
        <p className="secTitle">How It Works ?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-[123px] gap-16">
          <div>
            <div className="flex items-center font-righteous gap-[14px]">
              <p className="text-[86px] text-cerulean-blue">1</p>
              <p className="text-2xl">
                Remove
                <br /> toilet lid
              </p>
            </div>
            <Image src={RT} alt="" className="mt-10 w-full" />
          </div>
          <div>
            <div className="flex items-center font-righteous gap-[14px]">
              <p className="text-[86px] text-light-blue">2</p>
              <p className="text-2xl">
                Hook
                <br /> on box
              </p>
            </div>
            <Image src={HOB} alt="" className="mt-10 w-full" />
          </div>
          <div>
            <div className="flex items-center font-righteous gap-[14px]">
              <p className="text-[86px] text-yellow">3</p>
              <p className="text-2xl">
                Place
                <br /> sensor
              </p>
            </div>
            <Image src={PS} alt="" className="mt-10 w-full" />
          </div>
          <div>
            <div className="flex items-center font-righteous gap-[14px]">
              <p className="text-[86px] text-cerulean-blue">4</p>
              <p className="text-2xl">
                Close <br /> Lid
              </p>
            </div>
            <Image src={CL} alt="" className="mt-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howorks;
