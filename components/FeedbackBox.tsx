export const FeedbackBox = ({isPrimary=false, text} : {isPrimary?:boolean, text:string}) => {
    return (
        <div className="relative text-center bg-white px-10 py-8 text-black rounded-xl">
            <div className={`
                absolute top-[-16] left-4 rounded-3xl text-sm font-bold 
                ${isPrimary ? 
                    "bg-[#3182F7] text-white border-3 border-[#3182F7]" : 
                    "bg-white text-[#3182F7] border-3 border-[#3182F7]"
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