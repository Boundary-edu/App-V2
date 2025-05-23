export function ColWrapper({ children }: { children: React.ReactNode, className?: string }) {
    return (
        <div className='gap-4'>
            {children}
        </div>
    );
}