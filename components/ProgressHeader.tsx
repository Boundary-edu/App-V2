'use client'

import { useState } from 'react';

const TABS = ['해결', '대화', '일상'] as const;

export function CategoryTabs() {
  const [active, setActive] = useState<typeof TABS[number]>('해결');

  return (
    <div className="flex justify-between w-full max-w-md mx-auto">
      {TABS.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative flex-1 py-2 text-center focus:outline-none"
        >
          <span
            className={`
              block
              ${active === tab ? 'text-[#000]' : 'text-gray-300'}
              text-base
              font-bold
              mb-1
            `}
          >
            {tab}
          </span>
          <span className={`
            absolute bottom-0 left-1/18 right-1/18
            h-1.5 bg-[#3182F7] rounded-full
            ${active === tab ? "bg-[#3182F7]" : "bg-[#ccc]"}
          `} />
        </button>
      ))}
    </div>
  );
}