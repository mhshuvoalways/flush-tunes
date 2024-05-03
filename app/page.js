import BathroomXperience from "@/components/BathroomXperience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Howorks from "@/components/Howorks";
import NoMoreWait from "@/components/NoMoreWait";
import WhatSays from "@/components/WhatSays";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BathroomXperience />
      <Howorks />
      <WhatSays />
      <Faq />
      <NoMoreWait />
      <Footer />
    </div>
  );
};

export default Home;
