<p align="center"><img src="https://i.imgur.com/1QaZDxm.png" alt="StreamPay_E-Commerce"
# <p align="center">E-Commerce Platform

<p align="center">Shopify <> StreamPay™ integration (Powered by Solana)

<p align="center">StreamPay™ stands as a pioneering payment solution meticulously designed to elevate the payment experience for both merchants and customers. By seamlessly integrating with the Solana blockchain, StreamPay™ offers an array of features and benefits that propel online transactions into a new era of efficiency, security, and ease.
    
<p align="center">
    <b>
        <a href="https://streamprotocol.gitbook.io/streampayments-app-x-commerce-platforms/">Documentation</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://www.youtube.com/channel/UCAbEl-Jr7kx2JqjTjhpoT-Q">Walkthroughs</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://apps.shopify.com/stream-pay">Installation</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://streampaytest1.myshopify.com/">Live store</a>
    </b>
    &nbsp;|&nbsp;
    <b>
        <a href="https://merchant.streampayments.app">Merchant login</a>
    </b>
</p>

## Quickstart

Transact on Shopify using Stream**Pay**™

### Setup Dependencies:

-   [Docker Desktop](https://docs.docker.com/desktop/)
-   [MySql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

### Testing

Use these links to test out the local development flow

[Local Merchant Portal](https://localhost:4004/install)

[Local Payment Simulation](https://localhost:4004/payment)

**Note**

These links redirect you to the frontend local deployments. We included sample development certificates in `backend-serverless` and `mock-shopify-serverless`, however, you might need to ignore browser errors. [Follow this guide](https://blog.simontimms.com/2021/10/12/serverless-offline-https/) to set up your own local dev certificates

For various helper scripts you might need while extending the code, in apps/backend-serverless, you can run

```
node --loader ts-node/esm scripts/nft-setup.ts
```

### Deploying

We use the [Serverless Framework](https://www.serverless.com) and follow their directions to set your appropriate AWS & serverless credentials.

Ensure you set the following dependencies in the respective `.env` files

-   Sentry for logging
-   TRM for scanning for suspicious wallets
-   Helius for Solana rpc
-   Helius for **Stream**Payments RPC (not developed yet)
-   Coingecko for price data
-   Persona for KYB
-   Planet scale (recommended) or any MySQL database provider
-   AWS Lambda for Serverless deployment
-   Vercel for frontend hosting

In `apps/backend-serverless`, deploy with

```
yarn deploy:production: purple
yarn deploy:production: green
```

In `apps/transaction-request-serverless`, deploy with

```
yarn deploy:production
```

(change production to staging for a staging environment)

_Make sure to use more secure JWTs in the .envs when deploying to staging and production_
