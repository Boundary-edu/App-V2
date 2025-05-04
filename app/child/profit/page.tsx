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
import Image from 'next/image';

export default function Home() {

    const router = useRouter()

    return (
        <Layout>
            <Main>
                <ColWrapper className='items-center h-full justify-between'>
                    <div>
                        <Image src={"/result.webp"} alt={"asd"} width={400} height={400} className='mt-24'/>
                        <Title className='text-2xl text-center mt-0'>
                            저금통에
                            <br/>
                            80포인트가 
                            <br/>
                            추가되었어요
                        </Title>
                    </div>
                    <ColWrapper className='w-full gap-4 mt-8'>
                        <Button onClick={() => router.push('/child/home')} isPrimary>다음으로</Button>
                    </ColWrapper>
                </ColWrapper>
            </Main>
        </Layout>
    );
}