import React from "react";
// import aboutImage from "@/assets/aboutImage.png";

const stepsItems: StepsItemProps[] = [
  {
    id: 1,
    step: "Hapi 1",
    title: "Ndertimi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 2,
    step: "Hapi 2",
    title: "Ndertimi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 3,
    step: "Hapi 3",
    title: "Ndertimi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/300x200",
  },
  {
    id: 4,
    step: "Hapi 4",
    title: "Ndertimi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/300x200",
  },
];

type StepsItemProps = {
  id: number;
  step: string;
  title: string;
  content: string;
  image: string;
};

const Steps = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-7 items-center w-full relative ">
      <div className="text-center">
        <h1 className=" font-medium md:text-[32px] md:leading-3.5">Procesi i Punës</h1>
      </div>
      <div className=" w-full flex flex-col items-center ">
        {stepsItems.map((data, index) => (
          <StepItem key={data.id} index={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Steps;

const StepItem: React.FC<StepsItemProps & { index: number }> = ({
  step,
  title,
  content,
  image,
}) => {
  return (
    <div className=" sticky top-0 flex flex-row gap-[42px] items-center even:flex-row-reverse  md:flex-col md:even:flex-col bg-[#B3D138] w-full  min-h-screen  px-[50px] md:justify-center md:py-[15px] md:gap-4 md:px-[15px]">
      <div className="flex flex-col gap-[130px] md:gap-4 w-1/2 md:w-full">
        <span className="text-xl font-normal text-white bg-[#114677] w-fit  px-4 rounded-full">
          {step}
        </span>
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-black text-medium text-[48px]">{title}</h2>
          <p className="text-black text-[25px]">{content}</p>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="w-1/2  object-cover rounded-lg md:w-full "
      />
    </div>
  );
};
