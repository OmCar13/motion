'use client'	

import { useEffect, useState } from "react"

import { SettingsModal } from "@/app/(main)/_components/modals/settings-modal"
import { CoverImageModal } from "@/app/(main)/_components/modals/cover-image-modal"

export function ModalProvider () {

  const [isMounted,setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <SettingsModal/>
      <CoverImageModal/>
    </>
)
}