export const Button = ({ children, isPrimary }: { children: React.ReactNode, isPrimary?: boolean }) => {
  return (
    <button 
      className={
        `${isPrimary ? 
          "bg-blue-500 text-white": 
          "bg-white text-blue-500 border-2 border-blue-500" 
         }
        w-full py-3 font-semibold rounded-md hover:cursor-pointer`
      }
    >
      {children}
    </button>
  )
};
