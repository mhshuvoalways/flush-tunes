import ArrowDown from "@/public/icons/arrowDown.svg";
import ArrowTop from "@/public/icons/arrowTop.svg";
import FaqImg from "@/public/images/faq.svg";
import Image from "next/image";

const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/faqBg.svg)",
      }}
      className="bg-no-repeat bg-cover"
    >
      <div className="px-5 sm:px-0 w-full sm:w-7/12 mx-auto container pb-20">
        <Image src={FaqImg} alt="" className="mx-auto relative -top-16" />
        <div className="mt-5 space-y-5">
          <div className="bg-royal-blue rounded-[14px] p-9 cursor-pointer shadow text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-righteous text-xl">
                  What is Shitz N Giggles?
                </p>
                <p className="opacity-50 mt-8">
                  Shitz N Giggles is a device designed to enhance your flushing
                  experience
                </p>
              </div>
              <Image src={ArrowTop} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              Does this record me?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              Can I install it in any toilet?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              How do I add my own sounds?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              Is it waterproof?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              How long does the battery last?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
          <div className="flex justify-between items-start bg-white rounded-[14px] px-9 py-[18px] cursor-pointer shadow">
            <p className="font-righteous opacity-50 text-xl">
              Can I adjust the volume of the sound?
            </p>
            <Image src={ArrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
