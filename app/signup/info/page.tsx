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
import { InputText } from '@/components/InputText';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-center gap-10'>
                    <TitleWrapper className=''>
                        <Title>회원가입</Title>
                        <SubTitle>자신의 정보를 입력해주세요.</SubTitle>
                    </TitleWrapper>
                    
                    <ColWrapper className='gap-10 w-full mb-24'>
                        <InputText title='이름' />
                        <InputText title='휴대폰 번호' />
                        <InputText title='이메일' />
                        <InputText title='집 주소' />
                    </ColWrapper>
                    
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