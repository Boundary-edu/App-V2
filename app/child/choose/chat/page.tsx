

// pages/index.tsx (or wherever Home component lives)
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { Main } from '@/components/Main';
import { ColWrapper } from '@/components/Wrap/ColWrapper';
import { Title } from '@/components/Title';
import { SelectableButtonGroup } from '@/components/SelectableButtonGroup';
import { CategoryTabs } from '@/components/ProgressHeader';
import { Button } from '@/components/Button';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>('');

  const options = [
    { label: '다음으로', value: 'opt1' },
    { label: '다음으로', value: 'opt2' },
    { label: '다음으로', value: 'opt3' },
    {
      label: '다음으로',
      value: 'opt4',
      onClick: () => router.push('/child/profit'), // custom navigation on the "primary" option
    },
  ];

  const handleChange = (value: string) => {
    setSelected(value);
    // default navigation for non-custom options
    if (value !== 'opt4') router.push('/child/profit');
  };

  return (
    <Layout>
      <Main>
        <ColWrapper className="items-start h-full justify-between">
          <ColWrapper className="w-full items-center justify-center">
            <CategoryTabs />
            <Title className="text-2xl text-center mt-24 mb-16">
              철수와 영희가 내 앞에 있다
              <br />
              인사를 해야할까?
            </Title>
          </ColWrapper>

          <SelectableButtonGroup
            labels={['다음으로', '다음으로', '다음으로', '다음으로']}
          />
          <Button isPrimary onClick={() => router.push('feedback')}>다음으로</Button>
        </ColWrapper>
      </Main>
    </Layout>
  );
}
