import Transition from "./Anime/Transition";

export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-[400px] h-full bg-gradient-to-b from-[#FFFFFF] to-[#F6F6F6] p-6">
        <Transition>
          {children}
        </Transition>
      </div>
    );
  };
  