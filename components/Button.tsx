export const Button = ({ children, isPrimary, onClick }: { children: React.ReactNode, isPrimary?: boolean, onClick: any }) => {
  return (
    <button
      onClick={onClick}
      className={
        `${isPrimary ?
          "bg-[#3182F7]   hover:bg-[#3182F7] text-white" :
          "bg-white  hover:bg-blue-100 text-black"
        }
        w-full py-3 font-medium rounded-2xl hover:cursor-pointer text-lg 
        `
      }
    >
      {children}
    </button>
  )
};
