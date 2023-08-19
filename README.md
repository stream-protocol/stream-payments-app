# **Stream**Payments App

Shopify <> StreamPay™ integration (Powered by Solana)

<p align="center"><img src="apps/docs/docs/assets/streampay_ecommerce.jpeg" alt="StreamPay_E-Commerce"/></p>

<p align="center">
    <b>
        <a href="https://commercedocs.streampayments.app">documentation</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://www.youtube.com/channel/UCAbEl-Jr7kx2JqjTjhpoT-Q">walkthroughs</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://apps.shopify.com/stream-pay">installation</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://streampaytest1.myshopify.com/">live store</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://merchant.streampayments.app">merchant login</a>
    </b>
</p>

Transact on Shopify using **Stream**Pay™

# Quickstart

Pre Setup Dependencies:

-   [Docker Desktop](https://docs.docker.com/desktop/)
-   [MySql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

Installation:

```
git clone https://github.com/stream-protocol/stream-payments-app
yarn install
yarn setup:env
```

In `apps/backend-serverless/.env.dev`, add a Keypair secret for a wallet with SOL to pay for gas
In `apps/backend-serverless/.env.dev`, setup a [Helius API key](https://www.helius.dev)

To run:

```
yarn dev
yarn seed
```

## Testing

Use these links to test out the local development flow

[Local Merchant Portal](https://localhost:4004/install)

[Local Payment Simulation](https://localhost:4004/payment)

** Note **

These links redirect you to the frontend local deployments. We included sample development certificates in `backend-serverless` and `mock-shopify-serverless`, however, you might need to ignore browser errors. [Follow this guide](https://blog.simontimms.com/2021/10/12/serverless-offline-https/) to setup your own local dev certificates

For various helper scripts you might need while extending the code, in apps/backend-serverless, you can run

```
node --loader ts-node/esm scripts/nft-setup.ts
```

## Deploying

We use the [Serverless Framework](https://www.serverless.com), follow their directions to setup your appropriate aws & serverless credentials.

Ensure you setup the following dependencies in the respective `.env` files

-   Sentry for logging
-   TRM for scanning for suspicious wallets
-   Helius for Solana rpc
-   Helius for **Stream**Payments rpc (not developed yet)
-   Coingecko for price data
-   Persona for KYB
-   Planetscale (recommended) or any mysql database provider
-   AWS Lambda for Serverless deployment
-   Vercel for frontend hosting

In `apps/backend-serverless`, deploy with

```
yarn deploy:production:purple
yarn deploy:production:green
```

In `apps/transaction-request-serverless`, deploy with

```
yarn deploy:production
```

(change production to staging for a staging environment)

_Make sure to use more secure JWTs in the .envs when deploying to staging and production_
