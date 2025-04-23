export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {children}
    </div>
  );
};
