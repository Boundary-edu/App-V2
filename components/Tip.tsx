export const Tip = ({ text }: { text: string }) => {
    return (
      <div className="w-full bg-white rounded-2xl p-4 text-black">
        <p>💡  {text}</p>
      </div>
    );
  };
  