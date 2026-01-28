'use client'

import { useEffect, useRef } from 'react'
import { getSiteConfig } from '@/lib/config'

interface AdsBannerProps {
    slot?: string;
    format?: string;
    adClient?: string;
    adSlot?: string;
    customCode?: string;
}

export default function AdsBanner({
    slot = 'auto',
    format = 'auto',
    adClient,
    adSlot,
    customCode
}: AdsBannerProps) {
    // Determine final clientId from props (passed from server config)
    const finalClientId = adClient;

    // Determine final slotId
    const finalSlotId = adSlot || (slot !== 'auto' ? slot : undefined);

    // Determine final customCode
    const finalCustomCode = customCode;



    const adInitialized = useRef(false)

    useEffect(() => {
        // Initialize Google AdSense
        if (finalClientId && !adInitialized.current) {
            try {
                console.log('Initializing Adsense for:', finalClientId);
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
                adInitialized.current = true
            } catch (error) {
                console.error('AdSense error:', error)
            }
        }
    }, [finalClientId])

    if (!finalClientId && !finalCustomCode) {
        return <div className="p-4 bg-red-100 text-red-800 border border-red-300">Ads Config Missing (Client)</div>;
    }

    return (
        <div className="my-8 flex justify-center overflow-hidden">
            {finalClientId && (
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-client={finalClientId}
                        data-ad-slot={finalSlotId}
                        data-ad-format={format}
                        data-full-width-responsive="true"
                    />
                </div>
            )}

            {finalCustomCode && (
                <div dangerouslySetInnerHTML={{ __html: finalCustomCode }} />
            )}
        </div>
    )
}
