# Uniswap web app clone.

- This repo is a clone of uniswap web app: [app.uniswap.org](https://app.uniswap.org)

- Although the main code for web app is at apps/web but the whole structure is a monorepo provided by uniswap to hold/handle all of their products
  UI like Uniswap Mobile App (Android/IOS) , Uniswap Extension, Uniswap Web APP.


## Offical instructions by uniswap to run web app...

```shell
$ yarn
$ yarn web start

```

- But unfortunality, by doing this you will run into multiple errors. below I have mentioned how we can solve few of those errors i was able to resolve.

## How to resolve issues.

1. Create this file `.env.defaults` in the root of the project and the this data in it...

```shell
ALCHEMY_API_KEY=key
AMPLITUDE_EXPERIMENTS_DEPLOYMENT_KEY=key
APPSFLYER_API_KEY=key
APPSFLYER_APP_ID=123,
DATADOG_CLIENT_TOKEN=key
DATADOG_PROJECT_ID=123,
INFURA_KEY=key
ONESIGNAL_APP_ID=123,
OPENAI_API_KEY=key
QUICKNODE_ARBITRUM_RPC_URL=https://api.uniswap.org/
QUICKNODE_BNB_RPC_URL=https://api.uniswap.org/
QUICKNODE_MAINNET_RPC_URL=https://api.uniswap.org/
QUICKNODE_SEPOLIA_RPC_URL=https://api.uniswap.org/
QUICKNODE_ZORA_RPC_URL=https://api.uniswap.org/
QUICKNODE_ZKSYNC_RPC_URL=https://api.uniswap.org/
QUICKNODE_BLAST_RPC_URL=https://api.uniswap.org/
QUICKNODE_AVAX_RPC_URL=https://api.uniswap.org/
QUICKNODE_BASE_RPC_URL=https://api.uniswap.org/
QUICKNODE_CELO_RPC_URL=https://api.uniswap.org/
QUICKNODE_OP_RPC_URL=https://api.uniswap.org/
QUICKNODE_POLYGON_RPC_URL=https://api.uniswap.org/
QUICKNODE_WORLDCHAIN_RPC_URL=https://api.uniswap.org/
QUICKNODE_ASTROCHAIN_SEPOLIA_RPC_URL=https://api.uniswap.org/
SENTRY_DSN=http://sentry.com/
SHAKE_CLIENT_ID=123,
SHAKE_CLIENT_SECRET=123,
SIMPLEHASH_API_KEY=key
SIMPLEHASH_API_URL=https://api.simplehash.com/
STATSIG_PROXY_URL=https://api.statsig.com/
TRADING_API_KEY=key
UNISWAP_API_KEY=key
WALLETCONNECT_PROJECT_ID=123,
FIREBASE_APP_CHECK_DEBUG_TOKEN=token
```

2. Create a folder `__generated__` in apps/web/src/utils.

3. You will get an error regarding package `universe@workspace` while downloading modules because `universe@workspace` IS NOT A PACKAGE. you have to remove the "name" & "version" from the root package.json to resolve this.

4. Then you may encounter issue regarding package @apidevtools/json-schema-ref-parser, I'm trying to solve this right now, I have open an issue on uniswap github [click here to view](https://github.com/Uniswap/interface/issues/7835).

