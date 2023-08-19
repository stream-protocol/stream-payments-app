export class RiskyWalletError extends Error {
    constructor() {
        super(`Wallet is not safe to transaction with`);
        this.name = 'RiskyWalletError';
        Object.setPrototypeOf(this, RiskyWalletError.prototype);
    }
}
