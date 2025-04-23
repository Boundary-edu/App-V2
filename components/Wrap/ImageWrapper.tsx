export function ImageWrapper({ children, width = 64, height = 64 }: { children: React.ReactNode, width?: Number, height?: Number }) {
    return (
        <div className={`relative w-${width} h-${height}`}>
            {children}
        </div>
    );
}
