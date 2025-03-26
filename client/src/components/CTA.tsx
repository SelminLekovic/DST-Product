import logo from "@/assets/DST_Product_Logo 2.svg";
import fb from "@/assets/fb.svg";
import ig from "@/assets/ig.svg";
const CTA = () => {
  return (
    <div className="flex flex-col gap-[15px]  px-[50px] md:px-[15px]">
      <div className="flex flex-col bg-[#114677] rounded-[30px] items-center gap-16 md:gap-[30px] pt-[50px] pb-[15px] px-[55px] md:pt-[28px] md:px-[31px">
        <div className="flex flex-col items-center gap-10 md:gap-[30px]">
          <img src={logo} alt="" className="w-[262px] md:w-[130px]" />
          <div className="flex flex-col gap-5 items-center md:gap-10">
            <div className="text-[36px] text-white md:text-2xl md:text-center">
              Ndjehuni të lirë të na kontaktoni edhe në:
            </div>
            <div className="flex justify-center items-center gap-2.5 md:flex-col md:gap-1">
              <a href="mailto:dst.prouct23@gmail.com" className="text-white">
                {" "}
                dst.prouct23@gmail.com{" "}
              </a>
              <div className="w-2 h-2 bg-[#B3D138] rounded-full md:hidden" />
              <a href="tel:+38349441355" className="text-white">
                {" "}
                +383 49 123 456
              </a>
            </div>
          </div>
        </div>
        <div className="flex border-t-2 border-white w-full pt-[15px] md:pt- justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={fb} alt="" />
            <p className="text-white">N.P DST Product</p>
          </a>
          <a href="/" className="flex items-center gap-2">
            <img src={ig} alt="" />
            <p className="text-white">dst.product</p>
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <a href="/privacy-policy" className="text-black underline ">
          Privacy Policy
        </a>
        <div className="text-black underline">
          All rights reserved to Dst.Product 2025
        </div>
      </div>
    </div>
  );
};

export default CTA;
