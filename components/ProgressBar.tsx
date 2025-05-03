// components/ProgressBar.tsx
"use client"

import React from 'react'

interface ProgressBarProps {
  /** 현재 값 */
  value: number
  /** 최대 값 */
  max: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  return (
    <div className="w-full">
      {/* 레이블 */}
      <div className="text-sm text-gray-700 mb-1">
        {value}/{max}pt
      </div>
      {/* 실제 프로그레스 바 */}
      <progress
        value={value}
        max={max}
        className="w-full h-4 bg-gray-200 rounded-xl accent-[#3182F7]"
      />
    </div>
  )
}
