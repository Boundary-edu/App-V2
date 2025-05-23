"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { useRouter } from 'next/navigation'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Button } from '@/components/Button';
import { FeedbackBox } from '@/components/FeedbackBox';
import { Tip } from '@/components/Tip';
import { PageNav } from '@/components/PageNav';
import { CategoryTabs } from '@/components/ProgressHeader';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-between'>
                    <ColWrapper className='w-full items-center justify-center'>
                        <CategoryTabs />
                        <Title className='text-2xl text-center mt-16 mb-16'>
                            상대를 공감해야해요
                        </Title>
                    </ColWrapper>

                    <div className='bg-white w-full h-full mb-12 rounded-2xl px-8 py-2 text-lg text-black leading-16'>
                        ❌ 아파서 학교 못가겠어  
                        <br />
                        ❌ 너가 핀트를 잘못잡았어  
                        <br />
                        ❌ 이건 이렇게 하면 안 되는 말이야
                    </div>

                    <ColWrapper className='w-full gap-4 mt-8'>
                        <div className='text-center font-light text-sm text-black'>틀린 표현을 아는 것만으로도 큰 걸음이에요!</div>
                        <Button onClick={() => router.push('/child/profit')} isPrimary>다음으로</Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}