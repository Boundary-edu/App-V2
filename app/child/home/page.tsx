"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { useRouter } from 'next/navigation'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title';
import { InfoCard } from '@/components/InfoCard';
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { Header } from '@/components/Header'

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-between h-full justify-between gap-10'>
                    <ColWrapper className='w-full'>
                        <Header/>
                        <Title>오늘도 반가워요!</Title>
                    </ColWrapper>
                    
                    <ColWrapper className='gap-3 w-full'>
                        <RowWrapper className='gap-3 w-full'>
                            <InfoCard isPrimary onClick={() => router.push('situ')} src='/thinking-face.svg' title='상황 대처 학습' subtitle='대화형'/>
                            <InfoCard onClick={() => router.push('choose')} src='/thinking-face2.svg' title='행동 선택 학습' subtitle='선택형'/>
                        </RowWrapper>
                        <RowWrapper className='gap-3 w-full'>
                            <InfoCard onClick={() => router.push('card')} src='/joker.svg' title='카드 뒤집기'/>
                            <InfoCard isPrimary onClick={() => router.push('fruit')} src='/watermelon.svg' title='숨은 과일 찾기'/>
                        </RowWrapper>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}