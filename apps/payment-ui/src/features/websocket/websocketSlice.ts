import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

export enum WebsocketSessionState {
    fresh, // on page load
    readyToConnect, // websocket is ready to try and connect again
    connected, // websocket is connected
    closed, // websocket is closed
    error, // terminal error state
}

export interface WebsocketState {
    sessionState: WebsocketSessionState;
}

const initalState: WebsocketState = {
    sessionState: WebsocketSessionState.fresh,
};

const websocketSlice = createSlice({
    name: 'websocket',
    initialState: initalState,
    reducers: {
        setWebsocketReadyToConnect: state => {
            state.sessionState = WebsocketSessionState.readyToConnect;
        },
        setWebsocketConnected: state => {
            state.sessionState = WebsocketSessionState.connected;
        },
        setWebsocketClosed: state => {
            state.sessionState = WebsocketSessionState.closed;
        },
        setWebsocketError: state => {
            state.sessionState = WebsocketSessionState.error;
        },
    },
});

export const { setWebsocketReadyToConnect, setWebsocketConnected, setWebsocketClosed, setWebsocketError } =
    websocketSlice.actions;

export default websocketSlice.reducer;

export const getWebsocketSessionState = (state: RootState): WebsocketSessionState => state.websocket.sessionState;
