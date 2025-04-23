export const Button = ({ children, isPrimary, onClick }: { children: React.ReactNode, isPrimary?: boolean, onClick: any }) => {
  return (
    <button
      onClick={onClick}
      className={
        `${isPrimary ?
          "bg-blue-500   hover:bg-blue-400 text-white" :
          "bg-white text-blue-500 border-2 border-blue-500  hover:bg-blue-100"
        }
        w-full py-3 font-semibold rounded-xl hover:cursor-pointer`
      }
    >
      {children}
    </button>
  )
};
