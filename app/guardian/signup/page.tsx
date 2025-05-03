"use client"

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import { Title } from '@/components/Title';
import { InputText } from '@/components/InputText';
import { Header } from '@/components/Header';
import { AnimatedItem } from '@/components/Anime/AnimetedItem';

// 부드러운 스프링 애니메이션

export default function Home() {
  const router = useRouter();
  const [showCode, setShowCode] = useState(false);

  const handleNext = () => {
    if (!showCode) setShowCode(true);
    else router.push('home');
  };

  return (
    <Layout>
      <Main>
        <ColWrapper className="w-full items-start h-full justify-between gap-10">
          <ColWrapper className="w-full">
            <Header />
            <Title>이름을 알려주세요</Title>

            <ColWrapper className="w-full gap-8 mt-10">
              {/* 보호자 코드 입력 (AnimatePresence로 mount/unmount) */}
                {showCode && (
                  <AnimatedItem key="code-input" delay={0}>
                    <InputText title="보호자 코드" placeholder="123456" />
                  </AnimatedItem>
                )}

              {/* 이름 입력: 항상 표시, 지연 적용 */}
              <AnimatedItem key="name-input" delay={showCode ? 0.1 : 0}>
                <InputText title="이름" placeholder="바운더" />
              </AnimatedItem>
            </ColWrapper>
          </ColWrapper>

          {/* Buttons */}
          <Button onClick={handleNext} isPrimary>다음</Button>
        </ColWrapper>
      </Main>
    </Layout>
  );
}
