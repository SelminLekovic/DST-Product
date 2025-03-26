import React, { useState } from "react";
import { motion } from "framer-motion";

type AccordionItemProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const accordionData: AccordionItemProps[] = [
  {
    id: 1,
    title: "Serr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Serr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Serr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Serr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    image: "https://placehold.co/600x400",
  },
];

const Services = () => {
  const [openId, setOpenId] = useState<number>(accordionData[0].id); // Ensure at least one is always open

  const handleToggle = (id: number) => {
    if (id !== openId) {
      setOpenId(id);
    }
  };

  return (
    <div className="flex flex-col gap-[55px] md:gap-[30px] items-center  px-[50px] md:px-5">
      <div className="flex flex-col gap-[9px] justify-center items-center w-2/3">
        <h1 className="md:text-[32px]">Services</h1>
      </div>
      <div className="flex w-full justify-center gap-5 md:flex-col">
        {accordionData.map((data) => (
          <AccordionItem
            key={data.id}
            {...data}
            isOpened={openId === data.id}
            onClick={() => handleToggle(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const AccordionItem: React.FC<
  AccordionItemProps & { isOpened: boolean; onClick: () => void }
> = ({ id, title, description, image, isOpened, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col bg-[#114677] w-[220px] justify-between overflow-hidden md:w-full md: ${
        isOpened ? "grow" : ""
      } h-[600px] md:h-fit p-4 rounded-[30px] text-white cursor-pointer transition-all duration-300`}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-[100%] h-1/2 md:h-full object-cover rounded-[15px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0, height: isOpened ? 100 : 0, }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div className={`flex flex-col gap-2.5 justify-start `}>
        {/* Static Number (Always Visible) */}
        <div className="flex gap-2 mt-3 md:mt-0 md:h-full">
          <motion.h3
            initial={{ y: 200 }}
            animate={{ y: isOpened ? 0 : 20 ,  lineHeight: isOpened ? 1.5: 1 }}
       
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className={`text-[56px] font-medium opacity-100  ${
              isOpened && "hidden opacity-0 "
            }`}
          >
            {"0" + id}
          </motion.h3>
          {/* Animated Title */}
          <motion.h3
            className="text-[56px] font-medium "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpened ? 1 : 0, y: isOpened ? 0 : 20, lineHeight: isOpened ? 1.5: 0}}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0, y: 20 }}
          animate={{
            opacity: isOpened ? 1 : 0,
            y: isOpened ? 0 : 20,
            height: isOpened ? 100 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
