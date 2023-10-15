'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

const Contact = () => {
    const t = useTranslations('Contact')
    return <div>{t('phone')}</div>
}

export default Contact
