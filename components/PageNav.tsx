import { RowWrapper } from "./Wrap/RowWrapper";

export const PageNav = ({text}:{text:string}) => {
    return (
      <RowWrapper className="w-full justify-center gap-4">
        <img src="/ArrowLeft.svg" alt="" />
        <p className="text-lg text-black">{text}</p>
        <img src="/ArrowRight.svg" alt="" />
      </RowWrapper>
    );
  };
  