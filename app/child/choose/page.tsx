"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { ChatBubble } from '@/components/ChatBubble';
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-between gap-10'>
                    <ColWrapper className='w-full items-center justify-center mt-20'>
                        <Title className='text-2xl text-center'>
                            상황에 맞게 정답을
                            <br />
                            선택해요
                        </Title>
                    </ColWrapper>
                    
                    <ColWrapper className='gap-6 w-full bg-white py-2 rounded-2xl mb-12'>
                        <Image src={'/example2.png'} alt='' height={400} width={400}></Image>
                        {/* <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' />
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' isPrimary/>
                        <ChatBubble text='나 몸이 아파서 학교 못가겠어' /> */}
                    </ColWrapper>
                    <Button isPrimary onClick={() => router.push('choose/chat')}>다음으로</Button>
                </ColWrapper>
            </Main>
        </Layout>
    );
}