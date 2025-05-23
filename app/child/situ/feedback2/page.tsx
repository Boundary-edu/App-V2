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
                        <Title className='text-2xl text-center'>
                            상대를 공감해야해요
                        </Title>
                    </ColWrapper>
                    <ColWrapper className='gap-8 mt-8'>
                        <FeedbackBox text='철수와 영희는 내 친구가 아니니까 인사를 해야 한다.' isPrimary />
                        <FeedbackBox text='철수와 영희는 내 친구가 아니니까 인사를 해야 한다.' />
                        <Tip text="친구가 아니라도 인사하는 것은 예의예요" />
                        <PageNav text="3 / 5" />
                        <Button onClick={() => router.push('/child/home')} isPrimary>완료하기</Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}