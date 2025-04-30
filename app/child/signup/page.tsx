"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'
import { TitleWrapper } from '@/components/Wrap/TitleWrapper'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
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
                        <InputText title='이름' placeholder="바운더"/>
                        <InputText title='휴대폰 번호' placeholder="01012345678"/>
                        <InputText title='이메일' placeholder="a12345678@gmail.com"/>
                        <InputText title='집 주소' placeholder="부산광역시 강서구 가락대로 1378"/>
                    </ColWrapper>
                    
                    {/* Buttons */}
                    <ColWrapper className='w-[90%] max-w-92 gap-2 mx-auto'>
                        <Button onClick={() => router.push('/signin')} isPrimary>
                            로그인
                        </Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}