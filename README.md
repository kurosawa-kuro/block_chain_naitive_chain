# block_chain_naitive_chain

## ライブラリ インストール コマンド

```
npm i nodemon --save-dev
npm i crypto-js --save
npm i jest --save-dev
npm i express --save-dev
npm i body-parser --save-dev
npm i ws --save-dev
npm i elliptic --save
```

## 動作テスト コマンド

```
npm run dev-test
```

## jestを使ったテストコード コマンド 

```
npm run test
```

## サーバー起動 コマンド 

```
npm run dev

HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev
```