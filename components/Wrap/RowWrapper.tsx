export function RowWrapper({ children, className = "" }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    );
}