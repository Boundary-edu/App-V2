export const FeedbackBox = ({isPrimary=false, text} : {isPrimary?:boolean, text:string}) => {
    return (
        <div className="relative text-center bg-white px-8 py-12 text-black rounded-xl border-3 border-blue-500">
            <div className={`
                absolute top-[-16] left-4 rounded-3xl text-sm font-bold 
                ${isPrimary ? 
                    "bg-blue-500 text-white border-3 border-blue-500" : 
                    "bg-white text-blue-500 border-3 border-blue-500"
                } px-3 py-1
                `}
            >
                {isPrimary ? "내가 선택한 답" : "정답"}
            </div>
            <p className='text-xl font-bold'>
                {text}
            </p>
        </div>
    )
}