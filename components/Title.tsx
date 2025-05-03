export const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={`text-2xl text-black font-semibold mt-10 ${className}`}>
        {children}
      </div>
    );
  };
  