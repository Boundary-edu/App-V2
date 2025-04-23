"use client"

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { ImageWrapper } from '@/components/Wrap/ImageWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'
import { RowWrapper } from '@/components/Wrap/RowWrapper';
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { Figure } from '@/components/Figure'

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-center gap-10'>
                    <TitleWrapper className=''>
                        <Title>회원가입</Title>
                        <SubTitle>아이와 부모님을 선택해주세요.</SubTitle>
                    </TitleWrapper>
                    {/* Image */}
                    <RowWrapper className='w-full justify-around mb-24'>
                        <ColWrapper className='items-center'>
                            <Image
                                src="/시작-아이.png"
                                alt="시작 아이콘"
                                width={256}
                                height={256}
                            />
                            <Figure>아이로 회원가입</Figure>
                        </ColWrapper>
                        <ColWrapper className='items-center'>
                            <Image
                                src="/시작-아이.png"
                                alt="시작 아이콘"
                                width={256}
                                height={256}
                            />
                            <Figure>아이로 회원가입</Figure>
                        </ColWrapper>
                    </RowWrapper>
                    {/* Buttons */}
                    <ColWrapper className='w-[90%] max-w-92 gap-2 mx-auto'>
                        <Button onClick={() => router.push('signup/info')} isPrimary>
                            로그인
                        </Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}