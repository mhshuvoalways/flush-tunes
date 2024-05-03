"use client";

import ArrowDown from "@/public/icons/arrowDown.svg";
import ArrowTop from "@/public/icons/arrowTop.svg";
import FaqImg from "@/public/images/faq.svg";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "What is Shitz N Giggles?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 2,
    title: "Does this record me?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 3,
    title: "Can I install it in any toilet?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 4,
    title: "How do I add my own sounds?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 5,
    title: "Is it waterproof?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 6,
    title: "How long does the battery last?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
  {
    id: 7,
    title: "Can I adjust the volume of the sound?",
    des: "Shitz N Giggles is a device designed to enhance your flushing experience",
  },
];

const Faq = () => {
  const [selectItem, setSelectItem] = useState();

  const selectHandler = (id) => {
    if (selectItem === id) {
      setSelectItem();
    } else {
      setSelectItem(id);
    }
  };

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
          {items.map((el) => (
            <div key={el.id} onClick={() => selectHandler(el.id)}>
              {el.id === selectItem ? (
                <div className="bg-royal-blue rounded-[14px] p-9 cursor-pointer shadow text-white transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-righteous text-xl">{el.title}</p>
                      <p className="opacity-50 mt-8">{el.des}</p>
                    </div>
                    <Image src={ArrowTop} alt="" />
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start bg-white rounded-[14px] p-9 cursor-pointer shadow">
                  <p className="font-righteous opacity-50 text-xl">
                    {el.title}
                  </p>
                  <Image src={ArrowDown} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
