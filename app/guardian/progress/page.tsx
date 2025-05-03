"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { ProgressBar } from '@/components/ProgressBar';
import { Calendar } from '@/components/Calender';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='h-full gap-4'>
                    <TitleWrapper className=''>
                        <Title>아이 학습 진행도 확인</Title>
                        <SubTitle>아이의 학습 결과를 확인하며 도와주세요.</SubTitle>
                    </TitleWrapper>

                    <ColWrapper className='items-start w-full h-full justify-center gap-4'>
                        <Title><span className='text-[#3182F7]'>신희성</span> 님의 레벨 <span className='text-[#3182F7]'>46</span></Title>
                        <ProgressBar value={50} max={100}></ProgressBar>
                    </ColWrapper>
                    <Calendar></Calendar>
                </ColWrapper>
            </Main>
        </Layout>
    );
}