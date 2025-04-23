"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { InfoCard } from '@/components/InfoCard';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-center gap-10'>
                    <TitleWrapper className=''>
                        <Title>어렵지 않은 학습</Title>
                        <SubTitle>상황 대처, 게임을 해봅시다</SubTitle>
                    </TitleWrapper>
                    
                    <ColWrapper className='gap-6 w-full'>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}