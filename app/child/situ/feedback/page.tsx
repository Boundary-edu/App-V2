"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Button } from '@/components/Button';
import { FeedbackBox } from '@/components/FeedbackBox';
import { Tip } from '@/components/Tip';
import { PageNav } from '@/components/PageNav';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start gap-4'>
                    <TitleWrapper className=''>
                        <Title>학습 결과</Title>
                        <SubTitle>배운 결과를 함께 살펴봐요</SubTitle>
                    </TitleWrapper>
                    <ColWrapper className='gap-8 mt-8'>
                        <FeedbackBox text='철수와 영희는 내 친구가 아니니까 인사를 해야 한다.' isPrimary/>
                        <FeedbackBox text='철수와 영희는 내 친구가 아니니까 인사를 해야 한다.'/>
                        <Tip text="친구가 아니라도 인사하는 것은 예의예요"/>
                        <PageNav text="3 / 5"/>
                        <Button onClick={() => router.push('/child/home')} isPrimary>완료하기</Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}