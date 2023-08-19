import { DefaultLayout } from '@/components/DefaultLayout';
import { LoyaltyScreen } from '@/components/LoyaltyScreen';
import Merchant404 from '@/components/Merchant404';
import { isFailed, isOk } from '@/lib/Result';
import { useMerchantStore } from '@/stores/merchantStore';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Loyalty() {
    const merchantInfo = useMerchantStore(state => state.merchantInfo);

    useEffect(() => {
        if (isOk(merchantInfo) && !merchantInfo.data.completed) {
            Router.push('/getting-started');
        }

        if (process.env.NEXT_PUBLIC_FEATURE_FLAG != 'true') {
            Router.push('/merchant');
        }
    }, [merchantInfo]);

    if (isFailed(merchantInfo)) {
        return <Merchant404 />;
    }

    return (
        <>
            <Head>
                <title>StreamPay - Loyalty</title>
                <meta name="description" content="Manage your Shopify Loyalty program" />
            </Head>
            <div className="h-screen w-screen">
                <DefaultLayout accountIsActive className="h-full w-full">
                    <LoyaltyScreen />
                </DefaultLayout>
            </div>
        </>
    );
}
