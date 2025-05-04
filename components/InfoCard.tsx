import { ColWrapper } from "./Wrap/ColWrapper";
import Image from "next/image";

export const InfoCard = ({ src, title, subtitle, onClick, isPrimary=false }: { src: string, title: string, subtitle?: string, onClick: any, isPrimary?:boolean }) => {
    return (
      <ColWrapper 
        className={
          `gap-2  rounded-4xl hover:cursor-pointer w-full h-full relative
           ${isPrimary ? "bg-[#3182F7] text-white" : "bg-[#DEE4FF] text-black"}
           hover:scale-105 transition-all
          `
        }
        onClick={onClick}
      >
        <ColWrapper className="mx-6 mt-4">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm font-normal">{subtitle}ㅤ</div>
        </ColWrapper>   
        <Image className="mx-4 my-6" src={`${src}`} alt="" height={112} width={112}/>
        <div 
          className={
            `absolute bottom-4 right-4 p-2 rounded-2xl  
            ${isPrimary ? "bg-[#7B90FF] " : "bg-[#A4B4FF] "
            }`}
          >
          <Image 
            src={"/ToArrow2.png"}
            alt=""
            width={12}
            height={12}
          />
        </div>
      </ColWrapper>
    )
  };
  