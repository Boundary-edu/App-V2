"use client"

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import { Title } from '@/components/Title';

export default function Home() {

  const router = useRouter()

  return (
    <Layout>
      <Main>
        <ColWrapper className='items-center justify-between h-full gap-10'>
          <Image
            className='mt-32'
            src="/logo.png"
            alt="시작 아이콘"
            width={256}
            height={256}
          />
          <Title className='text-black font-bold text-center text-4xl leading-12'>
            어렵지 않은 학습
            <br />
            바운더리
          </Title>
          <Button onClick={() => router.push('/choose')} isPrimary>
            시작하기
          </Button>
        </ColWrapper>
      </Main>
    </Layout>
  );
}