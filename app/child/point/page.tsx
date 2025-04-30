"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { ChatBubble } from '@/components/ChatBubble';
import { Button } from '@/components/Button';
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { ChatInput } from '@/components/ChatInput';
import { FeedbackBox } from '@/components/FeedbackBox';
import { Tip } from '@/components/Tip';
import { PageNav } from '@/components/PageNav';
import { NumCard } from '@/components/NumCard'
import CountdownTimer from '@/components/CountdownTimer';
import Image from 'next/image';
export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start'>
                    <TitleWrapper className=''>
                        <Title>포인트 제공</Title>
                        <SubTitle>게임을 성공적으로 완료했어요!</SubTitle>
                    </TitleWrapper>
                    <ColWrapper className='w-full h-full justify-between items-center'>
                        <ColWrapper className='items-center'>
                            <Image src="/result.webp" alt='none' width="330" height="200"/>
                            <Title>저금통에</Title>
                            <Title><span className='text-blue-500'>80 포인트</span>가 추가되었어요</Title>
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