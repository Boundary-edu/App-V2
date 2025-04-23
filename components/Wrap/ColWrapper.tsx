export function ColWrapper({ children, className = "" }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}
