'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';

interface SelectableButtonGroupProps {
  /** 버튼에 들어갈 텍스트 리스트 */
  labels: string[];
  /** 선택이 변경될 때 호출되는 콜백 (optional) */
  onChange?: (selectedIndex: number) => void;
}

export const SelectableButtonGroup: React.FC<SelectableButtonGroupProps> = ({
  labels,
  onChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setSelectedIndex(idx);
    onChange?.(idx);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {labels.map((label, idx) => (
        <Button
          key={idx}
          /** 선택된 인덱스에만 Primary 스타일 적용 */
          isPrimary={selectedIndex === idx}
          /** 클릭 시 단순히 ‘선택’만 처리 */
          onClick={() => handleClick(idx)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
