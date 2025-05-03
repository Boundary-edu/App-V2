"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { RowWrapper } from '@/components/Wrap/RowWrapper';

import CountdownTimer from '@/components/CountdownTimer';
import Image from 'next/image';

export default function Home() {

    const APPLE_SIZE = 50  // 픽셀 단위

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-start gap-4'>
                    <ColWrapper className=''>
                        <Title>카드 뒤집기</Title>
                        <SubTitle>카드를 뒤집어 보아요</SubTitle>
                    </ColWrapper>
                    <CountdownTimer className="w-full flex justify-center" />
                    <RowWrapper className='gap-8 w-full h-full flex items-center justify-center'>

                        <ColWrapper className="w-full h-full gap-8">
                            {/* ImageWrapper에 w-full h-full, flex-1, relative 적용 */}
                            <ColWrapper className="relative w-full h-full">
                                <Image
                                    src="/pixel-background.png"
                                    alt="시작 아이콘"
                                    fill
                                    className="object-cover"
                                    sizes="100%" // 선택 사항: srcset 최적화
                                />
                                {[[0,0], [50,50], [100,100]].map((pos, idx) => (
                                    <Image
                                        key={idx}
                                        src="/apple.png"
                                        alt="사과 아이콘"
                                        width={APPLE_SIZE}
                                        height={APPLE_SIZE}
                                        className="absolute z-100"
                                        style={{ top: pos[0], left: pos[1] }}
                                    />
                                ))}
                            </ColWrapper>
                        </ColWrapper>
                    </RowWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}   