"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { InfoCard } from '@/components/InfoCard';
import { RowWrapper } from '@/components/Wrap/RowWrapper';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-center gap-10'>
                    <TitleWrapper className=''>
                        <Title>아이의 학습을 확인하세요</Title>
                        <SubTitle>아이의 학습 결과를 확인하며 도와주세요</SubTitle>
                    </TitleWrapper>

                    <RowWrapper className='justify-between items-center gap-8'>
                        <img src="/시작-아이.png" alt="" width={128} height={128}/>
                        <ColWrapper className=''>
                            <div className='text-black text-2xl font-bold'>신희성</div>
                            <div className='text-black'>a2785674@outlook.com</div>
                        </ColWrapper>
                    </RowWrapper>
                    
                    <ColWrapper className='gap-6 w-full'>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                        <InfoCard src='/시작-아이.png' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UPUP'/>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}