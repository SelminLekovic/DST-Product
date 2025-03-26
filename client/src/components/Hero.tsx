import hero from "@/assets/hero.png";
const Hero = () => {
  return (
    <div className="flex flex-col mt-[127px] md:mt-[93px] gap-5 w-full px-[50px]  md:px-5">
      <div className="font-normal leading-none text-[80px] md:text-[28px] flex flex-row gap-4  uppercase">
        <div className="font-medium">Vizioni Juaj,</div> Krijimi Ynë.
      </div>
      <div className="flex rounded-[30px] object-cover md:w-full md:aspect-square md:object-none md:object-[20%]">
        <img
          src={hero}
          alt=""
          className="rounded-[30px] w-full object-cover md:object-[55%]"
        />
      </div>
    </div>
  );
};

export default Hero;
