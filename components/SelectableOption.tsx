import React from 'react';

interface SelectableOptionProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const SelectableOption: React.FC<SelectableOptionProps> = ({ label, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`
        w-full text-center py-4 rounded-xl cursor-pointer text-base font-semibold
        ${isSelected ? 'bg-blue-500 text-white' : 'bg-white text-black border border-gray-300'}
      `}
    >
      {label}
    </div>
  );
};
