"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { ChatBubble } from '@/components/ChatBubble';
import { Button } from '@/components/Button';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-between gap-10'>
                    <ColWrapper className='w-full items-center justify-center mt-20'>
                        <Title className='text-2xl text-center'>
                            AI와 상황에 맞게
                            <br/>
                            대화해요
                        </Title>
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