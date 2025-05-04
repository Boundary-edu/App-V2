'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { Main } from '@/components/Main'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title'

type Fruit = {
  id: number
  xPct: number
  yPct: number
}

export default function FruitCountGame() {
  const router = useRouter()
  const TOTAL_TIME = 10
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_TIME)
  const [fruits, setFruits] = useState<Fruit[]>([])

  // 1초마다 타이머 ↓1, 과일 추가
  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setTimeout(() => {
      setSecondsLeft((s) => s - 1)
      setFruits((arr) => [
        ...arr,
        {
          id: Date.now(),
          xPct: Math.random() * 90,
          yPct: Math.random() * 80, 
        },
      ])
    }, 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft])

  // 0초가 되면 즉시 리다이렉트
  useEffect(() => {
    if (secondsLeft === 0) {
      router.push('/child/fruit/correct')
    }
  }, [secondsLeft, router])

  return (
    <Layout>
      <Main>
        <ColWrapper className="flex flex-col h-full">
          {/* 타이틀 */}
          <Title className="text-center w-full mb-4">
            과일이 몇 개나
            <br />
            나타날까요?
          </Title>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-1 mb-4 rounded">
            <div
              className="h-1 rounded bg-[#3182F7]"
              style={{
                width: `${(secondsLeft / TOTAL_TIME) * 100}%`,
                transition: 'width 1s linear',
              }}
            />
          </div>

          {/* 배경 & 과일 영역 */}
          <div
            className="relative flex-1 overflow-hidden rounded-xl bg-[#eee]"
          >
            {fruits.map((f) => (
              <img
                key={f.id}
                src="/apple.webp"
                alt="apple"
                className="absolute w-8 h-8"
                style={{
                  left: `${f.xPct}%`,
                  top: `${f.yPct}%`,
                }}
              />
            ))}
          </div>
        </ColWrapper>
      </Main>
    </Layout>
  )
}
