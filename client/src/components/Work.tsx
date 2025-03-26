import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Work = () => {
  return (
    <div className="flex flex-col gap-[55px] md:gap-8 items-center  px-[50px] md:px-[15px]">
      <div className="flex flex-col gap-[9px] justify-center items-center w-2/3">
        <h1 className="text-[64px] md:text-4xl font-medium">Projektet</h1>
      </div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full"
        modules={[Navigation]}
        loop={true}
      >
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>{" "}
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>{" "}
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>{" "}
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>{" "}
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>{" "}
        <SwiperSlide className="w-full">
          <ProjectItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Work;

const ProjectItem = () => {
  return (
    <div className="flex flex-col grow gap-2.5">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="z-40 w-full rounded-[30px]"
      >
        <SwiperSlide className="w-full rounded-[30px]">
          <img src="https://placehold.co/400x400" alt="" className=" w-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full rounded-[30px]">
          <img src="https://placehold.co/400x400" alt="" className=" w-full" />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col gap-2.5">
        <div className="text-[33px]"> Kulmi</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
    </div>
  );
};
