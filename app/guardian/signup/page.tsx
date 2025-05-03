"use client"

import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation'
import { Title } from '@/components/Title';
import { SubTitle } from '@/components/SubTItle';
import { InputText } from '@/components/InputText';
import { Header } from '@/components/Header';


export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-start h-full justify-between gap-10'>
                    <ColWrapper className=''>
                        <Header />
                        <Title>
                            이름을 알려주세요
                        </Title>
                        <InputText title='보호자 코드' placeholder="123456" />
                        <InputText title='이름' placeholder="바운더" />
                    </ColWrapper>



                    {/* Buttons */}
                    <Button onClick={() => router.push('/signin')} isPrimary>
                        다음
                    </Button>
                </ColWrapper>
            </Main>
        </Layout>
    );
}