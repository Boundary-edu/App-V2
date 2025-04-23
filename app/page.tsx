import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { ImageWrapper } from '@/components/Wrap/ImageWrapper';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <Layout>
      <Main>
        <ColWrapper className='items-center h-full justify-center gap-10'>
          {/* Image */}
          <ImageWrapper width={64} height={64}>
            <Image
              src="/시작-아이.png"
              alt="Main Illustration"
              fill
              className="object-contain"
              priority
            />
          </ImageWrapper>
          {/* Text */}
          <div className="text-center text-black font-semibold text-xl">
            <p>경계선 지능인 학습</p>
            <p>모두 바운더리에서</p>
          </div>
          {/* Buttons */}
          <ColWrapper className='w-[90%] max-w-92 gap-2'>
            <Button isPrimary>
              로그인
            </Button>
            <Button >
              회원가입
            </Button>
          </ColWrapper>
        </ColWrapper>
      </Main>
    </Layout>
  );
}