'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { Main } from '@/components/Main'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title'

export default function Home() {
  const router = useRouter()
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      // 카운트가 끝나면 이동할 경로
      router.push('/child/card/play')
      return
    }
    const timer = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, router])

  return (
    <Layout>
      <Main>
        <ColWrapper className='items-start h-full justify-center gap-12'>
          <Title className='text-center w-full'>
            모든 카드의 짝을
            <br />
            맞춰주세요
          </Title>

          {/* 디자인 건드리지 않고 숫자만 count 상태값으로 */}
          <div className='p-4 bg-[#3182F7] mx-auto w-14 h-14 flex justify-center items-center rounded-4xl text-2xl'>
            {count}
          </div>
        </ColWrapper>
      </Main>
    </Layout>
  )
}
