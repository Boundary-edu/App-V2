"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { ImageWrapper } from '@/components/Wrap/ImageWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Figure } from '@/components/Figure'
import { Header } from '@/components/Header'

export default function Home() {
  const [selected, setSelected] = useState<'child' | 'guardian' | null>(null)
  const router = useRouter()

  const handleNext = () => {
    if (!selected) {
        alert("선택해주세요")
    }
    const path = selected === 'child' ? '/child/signup' : '/guardian/signup'
    router.push(path)
  }

  return (
    <Layout>
      <Main>
        <ColWrapper className='items-start h-full justify-between gap-10'>
          <ColWrapper>
            <Header/>
            <Title>
              계정 유형을
              <br/>
              선택해주세요
            </Title>
          </ColWrapper>

          {/* Image 선택지 */}
          <RowWrapper className='w-full justify-around mb-24'>
            {/** 아이 선택 카드 */}
            <ColWrapper
              className={`items-center p-4 border-2 rounded-3xl cursor-pointer transition-colors bg-white\
                ${selected === 'child' ? 'border-[#3182F7]' : 'border-[#ddd]'}`}
            >
              <Image
                src="/child.png"
                alt="아이 아이콘"
                width={128}
                height={128}
                onClick={() => setSelected('child')}
              />
              <Figure>아이로 회원가입</Figure>
            </ColWrapper>

            {/** 부모 선택 카드 */}
            <ColWrapper
              className={`items-center p-4 border-2 rounded-3xl cursor-pointer transition-colors bg-white \
                ${selected === 'guardian' ? 'border-[#3182F7]' : 'border-[#ddd]'}`}
            >
              <Image
                src="/guardian.png"
                alt="부모 아이콘"
                width={128}
                height={128}
                onClick={() => setSelected('guardian')}
              />
              <Figure>부모로 회원가입</Figure>
            </ColWrapper>
          </RowWrapper>

          {/* 다음 버튼 */}
          <ColWrapper className='w-[90%] max-w-92 gap-2 mx-auto'>
            <Button
              onClick={handleNext}
              isPrimary
            >
              다음
            </Button>
          </ColWrapper>
        </ColWrapper>
      </Main>
    </Layout>
  )
}