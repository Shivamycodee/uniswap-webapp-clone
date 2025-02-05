# Uniswap web app clone.

- This repo is a clone of uniswap web app: [app.uniswap.org](https://app.uniswap.org)

- Although the main code for the web app is located in `apps/web`, the whole structure follows a monorepo setup provided by Uniswap to manage all of their UI products, including the **Uniswap Mobile App (Android/iOS), Uniswap Extension, and Uniswap Web App**.



## Official Instructions by Uniswap to Run the Web App

```shell
$ git clone https://github.com/Uniswap/interface
$ cd interface
$ yarn
$ yarn web start

```

- Unfortunately, running these commands will result in multiple errors. Below, I have outlined how to resolve some of the issues I encountered.

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

3. You will encounter an error related to the package `universe@workspace` while installing dependencies. This is because `universe@workspace` is **not a valid package**. To resolve this, remove the `"name"` and `"version"` fields from the root `package.json` or you can add `"private":true`.

4. You may also face an issue related to the package `@apidevtools/json-schema-ref-parser`. I am currently working on resolving this and have opened an issue on Uniswap's GitHub. You can track the issue here: [GitHub Issue](https://github.com/Uniswap/interface/issues/7835).

- Update -> The installation is failing because of a script: `tradingapi:generate` , The tradingapi:generate script is trying to read api.json, but it does not exist at the expected path `(D:\unniswap-webapp-clone\node_modules\@apidevtools\json-schema-ref-parser\dist\src\data\tradingApi\api.json)` .

- Another error we get with this is regaridng `root-workspace-0b6124@workspace` ,  the root workspace is being built parallelly could be interfering with the process in a way—if it's locking dependencies, preventing proper symlinking, or failing before everything is properly set up.
