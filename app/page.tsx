"use client"

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { ImageWrapper } from '@/components/Wrap/ImageWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
    <Layout>
      <Main>
        <ColWrapper className='items-center h-full justify-center gap-10'>
          {/* Image */}
          <ImageWrapper>
            <Image
              src="/시작-아이.png"
              alt="시작 아이콘"
              width={256} 
              height={256}
            />
          </ImageWrapper>
          {/* Text */}
          <div className="text-center text-black font-semibold text-xl">
            <p>경계선 지능인 학습</p>
            <p>모두 바운더리에서</p>
          </div>
          {/* Buttons */}
          <ColWrapper className='w-[90%] max-w-92 gap-2'>
            <Button onClick={() => router.push('/signin')} isPrimary>
              로그인
            </Button>
            <Button onClick={() => router.push('/signup')} >
              회원가입
            </Button>
          </ColWrapper>
        </ColWrapper>
      </Main>
    </Layout>
  );
}