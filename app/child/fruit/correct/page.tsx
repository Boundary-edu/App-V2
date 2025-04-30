"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Button } from '@/components/Button';
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { NumCard } from '@/components/NumCard'

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start gap-8'>
                    <TitleWrapper className=''>
                        <Title>숨은 과일 찾기</Title>
                        <SubTitle>Q. 🍎개수는?</SubTitle>
                    </TitleWrapper>
                    <RowWrapper className='w-full h-full flex items-center justify-center'>
                        <ColWrapper className='max-w-42 w-full h-full gap-5 flex items-center'>
                            <NumCard />
                            <NumCard />
                        </ColWrapper>
                        <ColWrapper className='max-w-42 w-full h-full gap-5 flex items-center'>
                            <NumCard />
                            <NumCard />
                        </ColWrapper>
                    </RowWrapper>
                    <Button isPrimary onClick={()=>{router.push('/child/point')}}>다음으로</Button>
                </ColWrapper>
            </Main>
        </Layout>
    );
}   