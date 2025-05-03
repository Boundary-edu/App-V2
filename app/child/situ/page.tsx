"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { ChatBubble } from '@/components/ChatBubble';
import { Button } from '@/components/Button';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-center gap-10'>
                    <ColWrapper className=''>
                        <Title>상황 대처 학습 예시</Title>
                        <SubTitle>바운더리에서 상황 대처 학습을 진행해봐요.</SubTitle>
                    </ColWrapper>
                    
                    <ColWrapper className='gap-6 w-full'>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' />
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' />
                    </ColWrapper>
                    <Button isPrimary onClick={() => router.push('situ/chat')}>다음으로</Button>
                </ColWrapper>
            </Main>
        </Layout>
    );
}