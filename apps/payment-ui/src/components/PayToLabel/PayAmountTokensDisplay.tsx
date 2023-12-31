import { PayingToken, getPayingToken, setPayingToken } from '@/features/payment-options/paymentOptionsSlice';
import { AppDispatch } from '@/store';
import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentTokenSelector = () => {
    const dispatch = useDispatch<AppDispatch>();
    const payingToken = useSelector(getPayingToken);

    const handlePayingTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPayingToken(event.target.value as PayingToken));
    };

    return (
        <div className="flex flex-row justify-end items-center w-full">
            <div className="pr-2 text-md text-gray-600">Pay with</div>
            <div className="tooltip tooltip-left" data-tip="More tokens coming soon!">
                <select
                    disabled
                    value={payingToken}
                    onChange={handlePayingTokenChange}
                    data-theme="mytheme"
                    className="select select-bordered w-fit max-w-xs"
                >
                    <option disabled>Currency</option>
                    {Object.values(PayingToken).map(token => {
                        return <option key={token}>{token}</option>;
                    })}
                </select>
            </div>
        </div>
    );
};

export const PayAmountTokensDisplay = (props: { amount: number }) => {
    return (
        <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-col">
                <div className="text-5xl flex flex-row items-center space-x-1">
                    <Icon icon="cryptocurrency:usdc" className="text-3xl" />
                    <p>{props.amount.toFixed(2)}</p>
                </div>
                {/* <div className="text-sm text-gray-500"> (Discount on payment)</div> */}
            </div>
            <PaymentTokenSelector />
        </div>
    );
};

export const PayAmountTokensLoading = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center animate-pulse">
            <div className="rounded-full bg-gray-200 h-6 w-32" />
            <div className="w-2/3">
                <PaymentTokenSelector />
            </div>
        </div>
    );
};
