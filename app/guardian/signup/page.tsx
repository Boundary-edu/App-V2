"use client"

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { InputText } from '@/components/InputText';
import { Header } from '@/components/Header';

export default function Home() {
  const router = useRouter();
  const [showCode, setShowCode] = useState(false);

  const handleNext = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      router.push('/signin');
    }
  };

  return (
    <Layout>
      <Main>
        <ColWrapper className="w-full items-start h-full justify-between gap-10">
          <ColWrapper className="w-full">
            <Header />
            <Title>
              이름을 알려주세요
            </Title>
            <ColWrapper className="w-full gap-8 mt-10">
              {showCode && (
                <InputText
                  title="보호자 코드"
                  placeholder="123456"
                />
              )}
              <InputText
                title="이름"
                placeholder="바운더"
              />
            </ColWrapper>
          </ColWrapper>

          {/* Buttons */}
          <Button onClick={handleNext} isPrimary>
            다음
          </Button>
        </ColWrapper>
      </Main>
    </Layout>
  );
}
