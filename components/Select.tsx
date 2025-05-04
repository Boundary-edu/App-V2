export const Select = ({ children, isPrimary, onClick }: { children: React.ReactNode, isPrimary?: boolean, onClick: any }) => {
    return (
      <button
        onClick={onClick}
        className={
          `${isPrimary ?
            "bg-white   hover:bg-blue-100 text-black  border-2 border-[#3182F7]" :
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
  