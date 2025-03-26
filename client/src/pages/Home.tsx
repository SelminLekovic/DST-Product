import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Work from "@/components/Work";

const Home = () => {
  return (
    <div className="flex flex-col py-[15px] w-full gap-[55px]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Steps />
      <Work />
      <Contact />
      <CTA />
    </div>
  );
};

export default Home;
