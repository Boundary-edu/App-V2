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
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { ChatInput } from '@/components/ChatInput';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start gap-4'>
                    <ColWrapper className=''>
                        <Title>상황 대처 학습</Title>
                        <SubTitle>AI와 상황에 맞게 대화해보세요</SubTitle>
                    </ColWrapper>
                    
                    <ColWrapper className='gap-6 w-full'>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' />
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' />
                    </ColWrapper>
                    <ColWrapper className='w-full gap-4 mt-auto'>
                        <RowWrapper className='w-full gap-4'>
                            <Button isPrimary onClick={() => router.push('feedback')}>그만하기</Button>
                            <Button onClick={() => console.log("hello world")}>계속하기</Button>
                        </RowWrapper>
                        <ChatInput className='' src={'/send.svg'}/>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}