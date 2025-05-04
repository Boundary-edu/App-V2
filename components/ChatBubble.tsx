export const ChatBubble = ({ text, isPrimary }: { text:string, isPrimary?: boolean }) => {
    return (
      <div
        className={
          `py-3 font-medium rounded-4xl px-4
            ${isPrimary ?
                "bg-[#3182F7] text-white text-right ml-auto rounded-br-sm" :
                "bg-white text-black mr-auto rounded-bl-sm"
            }
          `
        }
      >
        {text}
      </div>
    )
  };
  