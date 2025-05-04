// pages/child/question.tsx
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { Main } from '@/components/Main'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'

export default function QuestionPage() {
  const router = useRouter()
  const labels = ['1', '2', '3', '4']
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  return (
    <Layout>
      <Main>
        <ColWrapper className="items-start h-full justify-between">
          {/* 질문 타이틀 */}
          <Title className="text-2xl text-center mt-24 mb-16">
            사과의 개수는?
          </Title>

          {/* 2×2 그리드 */}
          <div className="grid grid-cols-2 gap-4 px-4 w-full h-full mb-12">
            {labels.map((label, idx) => {
              const isSelected = selectedIdx === idx
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={[
                    'w-full  flex justify-center items-center text-2xl rounded-3xl border-2',
                    'cursor-pointer select-none transition',
                    isSelected
                      ? 'bg-[#3182F7] border-[#3182F7] text-white'
                      : 'bg-white border-[#EEE] text-black',
                  ].join(' ')}
                >
                  {label}
                </div>
              )
            })}
          </div>

          {/* 다음으로 버튼 (선택 전엔 무시/반투명, 선택 후 활성화) */}
          <div className="w-full mt-4 flex justify-center">
            <Button
              isPrimary
              onClick={() => {
                if (selectedIdx !== null) {
                  router.push('/child/profit')
                }
              }}
            //   className={`${selectedIdx === null ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              다음으로
            </Button>
          </div>
        </ColWrapper>
      </Main>
    </Layout>
  )
}
