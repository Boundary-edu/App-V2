import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {

    const router = useRouter()

    return (
      <div 
        className="w-full flex justify-start items-centerx"
      >
        <Image 
            className="hover:cursor-pointer"
            src={"/Back.svg"}
            alt={"none"}
            width={18}
            height={18}
            onClick={() => {router.back()}}
        />
      </div>
    )
  };
  