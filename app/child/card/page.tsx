"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { NumCard } from '@/components/NumCard'
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start gap-4'>
                    <TitleWrapper className=''>
                        <Title>카드 뒤집기</Title>
                        <SubTitle>카드를 뒤집어 보아요</SubTitle>
                    </TitleWrapper>
                    <CountdownTimer className="w-full flex justify-center"/>
                    <RowWrapper className='gap-8 w-full h-full flex items-center justify-center'>
                        <ColWrapper className='max-w-42 w-full h-full gap-8 flex items-center'>
                            <NumCard  isPrimary/>
                            <NumCard />
                            <NumCard isPrimary/>
                        </ColWrapper>
                        <ColWrapper className='max-w-42 w-full h-full gap-8 flex items-center'>
                            <NumCard />
                            <NumCard isPrimary/>
                            <NumCard />
                        </ColWrapper>
                    </RowWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}   