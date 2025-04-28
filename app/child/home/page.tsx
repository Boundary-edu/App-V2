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
                        <InfoCard onClick={() => router.push('situ')} src='/ManWalking.svg' title='상황 대처 학습' subtitle='AI와 대화하며 학습력 UP'/>
                        <InfoCard onClick={() => router.push('choose')} src='/ManWalking.svg' title='행동 선택 학습' subtitle='4지선다 문제로 질문에 맞는 답변 선택'/>
                        <InfoCard onClick={() => router.push('card')} src='/Folder.svg' title='카드 뒤집기' subtitle='같은 카드를 찾으며 기억력 상승'/>
                        <InfoCard onClick={() => router.push('fruit')} src='/Banana.svg' title='숨은 과일 찾기' subtitle='숨은 과일을 찾으며 기억력을 높여요.'/>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}