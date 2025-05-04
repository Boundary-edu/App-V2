export function ColWrapper({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?:any }) {
    return (
        <div 
            className={`flex flex-col ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
