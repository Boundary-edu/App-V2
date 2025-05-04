export function RowWrapper({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: React.FunctionComponent }) {
    return (
        <div onClick={onClick} className={`flex flex-row ${className}`}>
            {children}
        </div>
    );
}