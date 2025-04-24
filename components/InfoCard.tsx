import { ColWrapper } from "./Wrap/ColWrapper";
import { RowWrapper } from "./Wrap/RowWrapper";

export const InfoCard = ({ src, title, subtitle }: { src: string, title: string, subtitle: string }) => {
    return (
      <RowWrapper 
        className={
          `gap-6 items-center bg-white p-4 rounded-2xl hover:bg-gray-100 hover:cursor-pointer`
        }
      >
        <img src={`${src}`} alt="" height={64} width={64}/>
        <ColWrapper className="">
            <div className="text-xl text-black">{title}</div>
            <div className="text-gray-500">{subtitle}</div>
        </ColWrapper>   
      </RowWrapper>
    )
  };
  