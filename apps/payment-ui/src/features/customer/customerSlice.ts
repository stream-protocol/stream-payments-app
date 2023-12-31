import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

export interface ProductDetail {
    id: string;
    name: string;
    image: string;
    description: string;
    creators: string[];
    count: number; // Add this line
}

interface Tier {
    discount: number;
    name: string;
}

interface CustomerState {
    usdcBalance: number | null;
    pointsBalance: number | null;
    tier: Tier | null;
    customerOwns: boolean;
    nextTier: Tier | null;
    error: string | null;
    customerNfts: ProductDetail[];
    amountSpent: number | null;
}

const initalState: CustomerState = {
    usdcBalance: null,
    pointsBalance: null,
    customerOwns: false,
    nextTier: null,
    tier: null,
    error: null,
    customerNfts: [],
    amountSpent: null,
};

type BalanceResponse = {
    usdcBalance: number | null;
    pointsBalance: number | null;
    customerOwns: boolean;
    nextTier: Tier | null;
    tier: Tier | null;
    error: string | null;
    customerNfts: ProductDetail[];
    amountSpent: number | null;
};

export const fetchCustomer = createAsyncThunk<BalanceResponse, string>(
    'customer/fetchCustomer',
    async (pubkey, { getState }): Promise<BalanceResponse> => {
        const state = getState() as RootState;
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        try {
            if (backendUrl == null) {
                throw new Error('There is a fatal error with this app. Please contact the developer.');
            }

            const customerResponse = await axios.get(
                `${backendUrl}/customer-data?customerWallet=${pubkey}&paymentId=${state.paymentDetails.paymentId}`
            );

            const actualData = customerResponse.data.customerResponse;
            const tier = actualData.tier;
            const nextTier = actualData.nextTier;

            return {
                usdcBalance: actualData.usdc,
                pointsBalance: actualData.points,
                tier: {
                    discount: tier ? tier.discount : 0,
                    name: tier ? tier.name : '',
                },
                customerOwns: actualData.customerOwns,
                nextTier: {
                    discount: nextTier ? nextTier.discount : 0,
                    name: nextTier ? nextTier.name : '',
                },
                error: null,
                customerNfts: actualData.customerNfts,
                amountSpent: actualData.amountSpent,
            };
        } catch (error) {
            return {
                usdcBalance: null,
                pointsBalance: null,
                tier: null,
                customerOwns: false,
                nextTier: null,
                error: 'There is a fatal error with this app. Please contact the developer.',
                customerNfts: [],
                amountSpent: null,
            };
        }
    }
);

const customerSlice = createSlice({
    name: 'customer',
    initialState: initalState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCustomer.pending, (state: CustomerState) => {})
            .addCase(fetchCustomer.rejected, (state: CustomerState) => {})
            .addCase(fetchCustomer.fulfilled, (state: CustomerState, action: PayloadAction<BalanceResponse>) => {
                state.error = action.payload.error;
                state.usdcBalance = action.payload.usdcBalance;
                state.pointsBalance = action.payload.pointsBalance;
                state.tier = action.payload.tier;
                state.customerOwns = action.payload.customerOwns;
                state.nextTier = action.payload.nextTier;
                state.customerNfts = action.payload.customerNfts;
                state.amountSpent = action.payload.amountSpent;
            });
    },
});

export default customerSlice.reducer;

export const getBalance = (state: RootState): number | null => state.customer.usdcBalance;
export const getPointsBalance = (state: RootState): number | null => state.customer.pointsBalance;
export const getTier = (state: RootState): Tier | null => state.customer.tier;
export const getNextTier = (state: RootState): Tier | null => state.customer.nextTier;
export const getIsWalletError = (state: RootState): boolean => state.customer.error != null;
export const getWalletError = (state: RootState): string | null => state.customer.error;
export const getCustomerNfts = (state: RootState): ProductDetail[] | null => state.customer.customerNfts;
export const getAmountSpent = (state: RootState): number | null => state.customer.amountSpent;
export const getCustomer = (state: RootState): CustomerState => state.customer;
