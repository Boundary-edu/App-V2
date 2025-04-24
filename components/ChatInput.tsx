import React from 'react';

interface ChatInputProps {
  src?: any;
  className: string,
}

export const ChatInput: React.FC<ChatInputProps> = ({ src, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder='여기에 메세지를 입력하세요.'
        className={`
          bg-white text-black 
          border-2 shadow-lg shadow-gray-200 border-none 
          w-full p-4 pl-6 rounded-4xl
          ${src ? 'pr-12' : ''}
        `}
      />
      {src && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img src={`${src}`} alt="" height={28} width={28}/>
        </div>
      )}
    </div>
  );
};
