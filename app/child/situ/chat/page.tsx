// app/page.tsx 또는 pages/index.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { Main } from '@/components/Main'
import { useRouter } from 'next/navigation'
import { ColWrapper } from '@/components/Wrap/ColWrapper'
import { Title } from '@/components/Title'
import { SubTitle } from '@/components/SubTItle'
import { ChatBubble } from '@/components/ChatBubble'
import { Button } from '@/components/Button'
import { RowWrapper } from '@/components/Wrap/RowWrapper'
import { ChatInput } from '@/components/ChatInput'
import { Header } from '@/components/Header'
import { Modal } from '@/components/Modal'

export default function Home() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setShowModal(false)
  const handleFeedback = () => {
    setShowModal(false)
    router.push('feedback')
  }

  return (
    <Layout>
      <Main>
        {/* 모달 */}
        {showModal && (
          <Modal
            onClose={handleClose}
            onContinue={handleClose}
            onFeedback={handleFeedback}
          />
        )}

        {/* 기존 화면 */}
        <ColWrapper className="items-start h-full justify-start gap-4">
          <Header />

          <ColWrapper className="gap-6 w-full">
            <ChatBubble text="나 몸이 아파서 학교 못가겠어" isPrimary />
            <ChatBubble text="나 몸이 아파서 학교 못가겠어" />
            <ChatBubble text="나 몸이 아파서 학교 못가겠어" isPrimary />
            <ChatBubble text="나 몸이 아파서 학교 못가겠어" />
          </ColWrapper>

          <ColWrapper className="w-full gap-4 mt-auto">
            <ChatInput className="" src="/send.svg" />
          </ColWrapper>
        </ColWrapper>
      </Main>
    </Layout>
  )
}
