import Fb from "@/public/icons/fb.svg";
import Social from "@/public/icons/social.svg";
import Twitter from "@/public/icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-[200px]">
      <div
        style={{
          backgroundImage: "url(/images/footerBg.svg)",
        }}
        className="bg-no-repeat bg-cover"
      >
        <div className="gapBothSide container h-[430px] flex items-center justify-center">
          <div>
            <p className="secTitle text-white text-center">
              Interested in Poopy News?
            </p>
            <p className="text-white text-center font-righteous mt-3">
              Subscribe to our Newsletter
            </p>
            <div className="w-full bg-white rounded-xl p-2 flex items-center justify-between mt-9">
              <input
                type="text"
                className="w-full outline-0"
                placeholder="Enter your mail here..."
              />
              <button className="btn font-righteous">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bg-dark-blue text-center py-9 flex items-center justify-center">
          <p className="text-white font-proza-libre">
            © 2024 | Schitz N’ Giggles LLC. All rights are reserved.
          </p>
          <div className="flex items-center gap-10 absolute right-5">
            <Image src={Fb} alt="" className="cursor-pointer" />
            <Image src={Twitter} alt="" className="cursor-pointer" />
            <Image src={Social} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
