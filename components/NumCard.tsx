export const NumCard = ({ isPrimary = false }: { isPrimary?: boolean }) => {
  return (
    <div
      className=
      {`${isPrimary ? 
          "text-white border-6 border-[#3182F7] bg-[#3182F7]" : 
          "text-[#3182F7] border-6 border-[#3182F7] bg-white"}
          
          max-w-36 w-full h-full  flex justify-center items-center text-black font-bold text-6xl rounded-2xl hover:cursor-pointer`}
    >
      1
    </div>
  );
};
