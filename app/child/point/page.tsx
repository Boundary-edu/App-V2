"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Button } from '@/components/Button';
import Image from 'next/image';
export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start'>
                    <ColWrapper className=''>
                        <Title>포인트 제공</Title>
                        <SubTitle>게임을 성공적으로 완료했어요!</SubTitle>
                    </ColWrapper>
                    <ColWrapper className='w-full h-full justify-between items-center'>
                        <ColWrapper className='items-center'>
                            <Image src="/result.webp" alt='none' width="330" height="200"/>
                            <Title>저금통에</Title>
                            <Title><span className='text-[#3182F7]'>80 포인트</span>가 추가되었어요</Title>
                        </ColWrapper>
                        <ColWrapper className='items-center w-full gap-2'>
                            <SubTitle>성공적으로 학습을 마쳤어요!</SubTitle>
                            <Button isPrimary onClick={()=>{router.push('/child/home')}}>다음으로</Button>
                        </ColWrapper>    
                    </ColWrapper>
                    
                </ColWrapper>
            </Main>
        </Layout>
    );
}   