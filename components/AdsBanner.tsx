'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}


interface AdsBannerProps {
    slot?: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    adClient?: string;
    adSlot?: string;
    customCode?: string;
    responsive?: boolean;
}

export default function AdsBanner({
    slot = 'auto',
    format = 'auto',
    adClient,
    adSlot,
    customCode,
    responsive = true
}: AdsBannerProps) {
    const adRef = useRef<HTMLModElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Determine final clientId
    const finalClientId = adClient;
    // Determine final slotId. Use adSlot if provided, otherwise slot if it's not 'auto' (legacy prop support)
    const finalSlotId = adSlot || (slot !== 'auto' ? slot : undefined);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !finalClientId || !finalSlotId) return;

        // Prevent double injection if strict mode is on or re-renders happen
        const pushAd = () => {
            try {
                if (window.adsbygoogle) {
                    // Check if this specific ad slot has already been filled to avoid "All ins elements in the DOM with class=adsbygoogle already have ads in them" error
                    if (adRef.current && adRef.current.innerHTML === '') {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                    }
                }
            } catch (error) {
                console.error('AdSense error:', error);
            }
        };

        // Small timeout to ensure DOM is ready
        const timer = setTimeout(pushAd, 100);
        return () => clearTimeout(timer);

    }, [finalClientId, finalSlotId, isMounted]);

    if (!isMounted) return <div className="min-h-[280px] bg-gray-50 dark:bg-gray-800/50 animate-pulse rounded-lg" />;

    if (!finalClientId && !customCode) {
        return null;
    }

    // specific rendering rule: If we have client ID but NO slot ID, we cannot render a specific unit safely
    // unless it's some auto-ad container, but standard units require slots.
    // If only client ID is present (Auto Ads), we shouldn't render a blank block here.
    if (finalClientId && !finalSlotId && !customCode) {
        return null;
    }

    return (
        <div className="my-8 flex justify-center items-center overflow-hidden min-h-[100px] w-full">
            {finalClientId && finalSlotId && (
                <div className="w-full flex justify-center">
                    <ins
                        ref={adRef}
                        className="adsbygoogle"
                        style={{ display: 'block', width: '100%' }}
                        data-ad-client={finalClientId}
                        data-ad-slot={finalSlotId}
                        data-ad-format={format}
                        data-full-width-responsive={responsive ? "true" : "false"}
                    />
                </div>
            )}

            {customCode && (
                <div dangerouslySetInnerHTML={{ __html: customCode }} />
            )}
        </div>
    )
}
