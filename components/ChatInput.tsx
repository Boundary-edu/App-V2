// components/ChatInput.tsx

import React from 'react';

interface ChatInputProps {
  /** 아이콘으로 사용할 이미지 URL (없으면 입력 칸 우측 영역은 빈 공간) */
  src?: string;
  /** 추가적인 클래스네임이 필요할 때 */
  className?: string;
}

/**
 * 채팅 입력창 컴포넌트
 *
 * - placeholder 폰트 크기(text-lg), 불투명도(100%), 색상(gray-400)을 명시적으로 지정
 * - 실제 텍스트는 text-lg, text-black
 * - 우측에 src가 주어지면 아이콘을 표시
 */
export const ChatInput: React.FC<ChatInputProps> = ({ src, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder="여기에 메세지를 입력하세요."
        className={`
          bg-white text-black
          text-base
          border-2 border-[#eee]
          w-full p-4 rounded-2xl
          ${src ? 'pr-12' : ''}
        `}
      />
      {src && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <img src={src} alt="icon" width={28} height={28} />
        </div>
      )}
    </div>
  );
};
