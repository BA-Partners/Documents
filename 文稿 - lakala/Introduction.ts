
Last login: Fri Jan 16 07:07:40 on ttys012
ajin@lakala ~ % vi send_usdt.js
ajin@lakala ~ % node send_usdt.js                                               
[dotenv@17.2.3] injecting env (0) from .env -- tip: 📡 add observability to secrets: https://dotenvx.com/ops
/Users/ajin/send_usdt.js:4
const tronWeb = new TronWeb({
                ^

TypeError: TronWeb is not a constructor
    at Object.<anonymous> (/Users/ajin/send_usdt.js:4:17)
    at Module._compile (node:internal/modules/cjs/loader:1706:14)
    at Object..js (node:internal/modules/cjs/loader:1839:10)
    at Module.load (node:internal/modules/cjs/loader:1441:32)
    at Function._load (node:internal/modules/cjs/loader:1263:12)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.22.0
ajin@lakala ~ % npm install tronweb

up to date, audited 49 packages in 1s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
ajin@lakala ~ % cp node_modules/tronweb/dist/TronWeb.js ./js/tronweb.js
cp: ./js/tronweb.js: No such file or directory
ajin@lakala ~ % <script src="./js/tronweb.js"><script>
zsh: parse error near `<'
ajin@lakala ~ % const { TronWeb } = require('tronweb');
zsh: parse error near `}'
ajin@lakala ~ % import { TronWeb } from 'tronweb';
zsh: parse error near `}'
ajin@lakala ~ % const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': 'your api key' },
  privateKey: 'your private key'
});
zsh: unknown file attribute: \n
ajin@lakala ~ % await tronWeb.trx.getBlockByNumber(12345);
{
  blockID: '000000000000303987c7c8ab3f5967c107a619fa47819940597e9938811a1764',
  block_header: {
    raw_data: {
      number: 12345,
      txTrieRoot: '0000000000000000000000000000000000000000000000000000000000000000',
      witness_address: '414b4778beebb48abe0bc1df42e92e0fe64d0c8685',
      parentHash: '0000000000003038c0a3aa1806236bc5b281633728b5fe8a14a51062522e651d',
      timestamp: 1529928585000
    },
    witness_signature: 'cb889103aa9ce691d39df8030b54b50b12b77984684281f3490e0b802cbc364c13af773ede8d9314add0fa4d247165be82fa28721f17493c88761b7039ba1c1100'
  }
}
zsh: parse error near `}'
ajin@lakala ~ % await tronWeb.trx.getBlockByNumber(12345);
{
  blockID: '000000000000303987c7c8ab3f5967c107a619fa47819940597e9938811a1764',
  block_header: {
    raw_data: {
      number: 12345,
      txTrieRoot: '0000000000000000000000000000000000000000000000000000000000000000',
      witness_address: '414b4778beebb48abe0bc1df42e92e0fe64d0c8685',
      parentHash: '0000000000003038c0a3aa1806236bc5b281633728b5fe8a14a51062522e651d',
      timestamp: 1529928585000
    },
    witness_signature: 'cb889103aa9ce691d39df8030b54b50b12b77984684281f3490e0b802cbc364c13af773ede8d9314add0fa4d247165be82fa28721f17493c88761b7039ba1c1100'
 const transaction = await tronWeb.transactionBuilder.sendTrx("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 100, "TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL");
{
    "visible": false,
    "txID": "9f62a65d0616c749643c4e2620b7877efd0f04dd5b2b4cd14004570d39858d7e",
    "raw_data": {
        "contract": [
            {
                "parameter": {
                    "value": {
                        "amount": 100,
                        "owner_address": "418840e6c55b9ada326d211d818c34a994aeced808",
                        "to_address": "41d3136787e667d1e055d2cd5db4b5f6c880563049"
                    },
                    "type_url": "type.googleapis.com/protocol.TransferContract"
                },
                "type": "TransferContract"
            }
        ],
        "ref_block_bytes": "0add",
        "ref_block_hash": "6c2763abadf9ed29",
        "expiration": 1581308685000,
        "timestamp": 1581308626092
    },
    "raw_data_hex": "0a020add22086c2763abadf9ed2940c8d5deea822e5a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15418840e6c55b9ada326d211d818c34a994aeced808121541d3136787e667d1e055d2cd5db4b5f6c880563049186470ac89dbea822e"
} }
}
zsh: parse error near `}'
ajin@lakala ~ % const abi = [...];       
const instance = await tronWeb.contract(abi,'contractAddress');
zsh: no matches found: [...]
zsh: number expected
ajin@lakala ~ % const result = await contract.function_name(param1,param2,...).call();
function> const result = await contract.function_name(param1,param2,...).send({
  feeLimit:100_000_000,
  callValue:0,
  tokenId:1000036,
  tokenValue:100,
  shouldPollResponse:true
});
zsh: no matches found: contract.function_name(param1,param2,...).call
ajin@lakala ~ % python3
Python 3.14.1 (main, Dec  2 2025, 12:51:37) [Clang 17.0.0 (clang-1700.4.4.1)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> contract.functions.function_name(param1, param2).call()
Traceback (most recent call last):
  File "<python-input-0>", line 1, in <module>
    contract.functions.function_name(param1, param2).call()
    ^^^^^^^^
NameError: name 'contract' is not defined
>>> nano test.py
  File "<python-input-1>", line 1
    nano test.py
    ^^^^
SyntaxError: invalid syntax. Did you mean 'not'?
>>> from web3 import Web3
... 
... # 示例
... result = contract.functions.function_name(param1, param\
2).call()
... print(result)
... python3 test.py
... 
KeyboardInterrupt
>>> python3 test.py
  File "<python-input-2>", line 1
    python3 test.py
            ^^^^
SyntaxError: invalid syntax
>>> const transaction = await tronWeb.transactionBuilder.se\
ndTrx(
...   "TL5kZFo1K7yVq4xrLKm3SH4is6dtMhbpoL", // 接收方
...   10000,                              // 金额（Sun）
...   "TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL" // 发送方
... )
... 
KeyboardInterrupt
>>> transactionBuilder.sendTrx()
... 
Traceback (most recent call last):
  File "<python-input-3>", line 1, in <module>
    transactionBuilder.sendTrx()
    ^^^^^^^^^^^^^^^^^^
NameError: name 'transactionBuilder' is not defined
>>> tronWeb.trx.signb17ed17972414ddefe510369c225175e5af2e02\
737a64eb69547499565b204e0()
... tronWeb.trx.sendRawTransaction()
... const TronWeb = require('tronweb');
... 
... const tronWeb = new TronWeb({
...   fullHost: 'https://api.trongrid.io',
...   privateKey: 'b17ed17972414ddefe510369c225175e5af2e027\
37a64eb69547499565b204e0（TNPeeaa...对应的）'
... });
... const tx = await tronWeb.transactionBuilder.sendTrx(
...   'TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr',
...   10000, // 10000 Sun = 0.0001 TRX
...   'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... );
... const signedTx = await tronWeb.trx.sign(tx);
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
... 
... console.log(result);
... {
...   "result": true,
...   "txid": "b17ed17972414ddefe510369c225175e5af2e027\37a\
64eb69547499565b204e0"
... }b17ed17972414ddefe510369c225175e5af2e027\
... 37a64eb69547499565b204e0
... 
  File "<python-input-4>", line 22
    37a64eb69547499565b204e0
     ^
SyntaxError: invalid decimal literal
>>> 
>>> 
>>> 
>>> 
>>> 
>>> tronWeb.trx.signb17ed17972414ddefe510369c225175e5af2e02\
737a64eb69547499565b204e0()
... tronWeb.trx.sendRawTransaction()
... const TronWeb = require('tronweb');
... 
... const tronWeb = new TronWeb({
...   fullHost: 'https://api.trongrid.io',
...   privateKey: 'b17ed17972414ddefe510369c225175e5af2e027\
37a64eb69547499565b204e0（TNPeeaa...对应的）'
... });
... const tx = await tronWeb.transactionBuilder.sendTrx(
...   'TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr',
...   10000, // 10000 Sun = 0.0001 TRX
...   'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... );
... const signedTx = await tronWeb.trx.sign(tx);
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
... 
... console.log(result);
... {
...   "result": true,
...   "txid": "b17ed17972414ddefe510369c225175e5af2e027\37a\
64eb69547499565b204e0"
... }"owner_address": "TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL"
... await tronWeb.trx.getTransaction("9f62a65d0616c749643c4\
e2620b7877efd0f04dd5b2b4cd14004570d39858d7e")
... const abi = [...];       
... const instance = await tronWeb.contract(abi,'contractAd\
dress');const result = await contract.function_name(param1,\
param2,...).call();
... const result = await contract.function_name(param1,para\
m2,...).send({
...   feeLimit:100_000_000,
...   callValue:0,
...   tokenId:1000036,
...   tokenValue:100,
...   shouldPollResponse:true
... });
... const account = tronWeb.createAccount();
... const tx = await tronWeb.trx.sendTrx(account.address.ba\
se58, 1_000_000);
... const tronWeb = new TronWeb({
...   fullHost: 'https://api.nillex.io',
...   privateKey: '', // your private key here
... });
... console.log(await tronWeb.trx.getBalance(account.addres\
s.base58));
... const signedTx = await tronWeb.trx.sign(tx, 'privateKey\
');
... const receipt = await tronWeb.trx.sendRawTransaction(si\
gnedTx);
... tronWeb.toUtf8(receipt.message);
... const sendTRXtx = await tronWeb.transactionBuilder.send\
Trx('toAddress', 1_000_000, 'fromAddress');
... const sendTRC10tx = await tronWeb.transactionBuilder.se\
ndToken('toAddress', 1_000_000, 'tokenId', 'fromAddress');
... const sendTRC20tx = await tronWeb.transactionBuilder.tr\
iggerSmartContract(
...   'TRC20ContractAddress',
...   'transfer(address,uint256)',
...   {
...     txLocal: true,
...   },
...   ['toAddress', 1_000_000],
...   'fromAddress',
... );
... const sendTRC721tx = await tronWeb.transactionBuilder.t\
riggerSmartContract(
...   'TRC721ContractAddress',
...   'transferFrom(address,address,uint256)',
...   {
...     txLocal: true,
...   },
...   ['fromAddress', 'toAddress', 100001],
...   'fromAddress',
... );
... const tron = window.tron;
... const tronWeb = tron.tronWeb;
... const signedTx = await tronWeb.trx.sign(tx);
... await tronWeb.trx.sendRawTransaction(signedTx);
... let abi = [
...   {
...     'outputs': [{ 'type': 'uint256' }],
...     'constant': true,
...     'inputs': [{ 'name': 'who', 'type': 'address' }],
...     'name': 'balanceOf',
...     'stateMutability': 'View',
...     'type': 'Function'
...   },
...   {
...     'outputs': [{ 'type': 'bool' }],
...     'inputs': [
...       { 'name': '_to', 'type': 'address' },
...       { 'name': '_value', 'type': 'uint256' }
...     ],
...     'name': 'transfer',
...     'stateMutability': 'Nonpayable',
...     'type': 'Function'
...   }
... ];
... let contract = await tronWeb.contract(abi, 'USDT_ADDRES\
S');
... let result = await contract.balanceOf('ACCOUNT_ADDRESS'\
).call();
... console.log(result.toString(10));
... // result is big number, using toString method to conve\
rt it to string.
... let abi = [...];
... let contract = await tronWeb.contract(abi, 'USDT_ADDRES\
S');
... let txID = await contract.transfer('ACCOUNT_ADDRESS', 1\
00).send();
... // now you can visit web page https://nile.tronscan.org\
/#/transaction/${txID} to view the transaction detail.
... // or using code below:
... let result = await tronWeb.trx.getTransaction(txID);
... 
... const parameter = [{ type: 'address', value: 'ACCOUNT_A\
DDRESS' }]
... const result = await tronWeb.transactionBuilder.trigger\
ConstantContract('USDT_ADDRESS', functionSelector, {}, para\
meter);
... 
... // result is as bellow. We can see the constant_result \
returns the correct balance value of ACCOUNT_ADDRESS
... {
...   "result": {
...     "result": true
...   },
...   "energy_used": 935,
...   "constant_result": [
...     "00000000000000000000000000000000000000000000000000\
00000000000064"
...   ],
...   "transaction": {
...     "ret": [
...       {}
...     ],
...     "visible": false,
...     "txID": "a1c6d9b7d3c6cf8485fa1fff023a377123ab0d5285\
b4bc410ac1f017572fc5c9",
...     "raw_data": {
...       "contract": [
...         {
...           "parameter": {
...             "value": {
...               "data": "70a08231000000000000000000000000\
526f3626eaccc3f5fadd8f5f51fd9c49ce53b090",
...               "owner_address": "4175f09e51f8ecb695a0be1\
701581ec9493b164495",
...               "contract_address": "41eca9bc828a3005b9a3\
b909f2cc5c2a54794de05f"
...             },
...             "type_url": "type.googleapis.com/protocol.T\
riggerSmartContract"
...           },
...           "type": "TriggerSmartContract"
...         }
...       ],
...       "ref_block_bytes": "39c0",
...       "ref_block_hash": "20db92bea2aa0929",
...       "expiration": 1677062004000,
...       "timestamp": 1677061945989
...     },
...     "raw_data_hex": "0a0239c0220820db92bea2aa092940a0ba\
bdc5e7305a8e01081f1289010a31747970652e676f6f676c65617069732\
e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e74\
7261637412540a154175f09e51f8ecb695a0be1701581ec9493b1644951\
21541eca9bc828a3005b9a3b909f2cc5c2a54794de05f222470a0823100\
0000000000000000000000526f3626eaccc3f5fadd8f5f51fd9c49ce53b\
0907085f5b9c5e730"
...   }
... }
... 

SS'},{type:'uint256',value:100}]
... const tx = await tronWeb.transactionBuilder.triggerSmar\
tContract('USDT_ADDRESS', functionSelector, {}, parameter);
... const signedTx = await tronWeb.trx.sign(tx.transaction)\
;
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
... // the result looks like below:
... {
...   "result": true,
...   "txid": "bea6cff8d62d62209f87810396a9a26802b93f566cb0\
8f925ec91a071002060f",
...   "transaction": {
...     "visible": false,
...     "txID": "bea6cff8d62d62209f87810396a9a26802b93f566c\
b08f925ec91a071002060f",
...     "raw_data": {
...       "contract": [
...         {
...           "parameter": {
...             "value": {
...               "data": "a9059cbb000000000000000000000000\
526f3626eaccc3f5fadd8f5f51fd9c49ce53b0900000000000000000000\
>>> 






















































































































































50565b600061053882610549565b9050919050565b60008190509190505\
65b600073ffffffffffffffffffffffffffffffffffffffff8216905091\
9050565b600074ffffffffffffffffffffffffffffffffffffffffff821\
69050919050565b6000819050919050565b600080fd5b600080fd5b6105\
a781610569565b81146105b257600080fd5b50565b6105be8161058a565\
b81146105c957600080fd5b5056fea26474726f6e5822122003e6f6fe8a\
db4a16e48e773436d2d36d3bcf3d16227953199ec68896e85b82b264736\
... };
... (async () => {
...   const transaction = await tronWeb.transactionBuilder.\
createSmartContract({
...     abi: funcABIV2_4.abi,
...     bytecode: funcABIV2_4.bytecode
...   });
...   await tronWeb.trx.sendRawTransaction(await tronWeb.tr\
x.sign(transaction));
...   while (true) {
...     const tx = await tronWeb.trx.getTransaction(transac\
tion.txID);
...     if (Object.keys(tx).length === 0) {
...       await new Promise(r => setTimeout(r, 3000));
...       continue;
...     } else {
...       break;
...     }
...   }
...   const deployed = await tronWeb.contract(funcABIV2_4.a\
bi, transaction.contract_address);
... 
...   // Then, set tuple data. Note here we describe tuple \
as array. You have to set values from top to bottom of the \
structure of Struct47985BF5FB. Because this method change d\
ata on chain, we also have to wait for broadcasting.
... 
...   let txID = await deployed
...     .setStruct(['TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY', 1\
000100, 'TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY'])
...     .send();
...   while (true) {
...     const tx = await tronWeb.trx.getTransaction(txID);
...     if (Object.keys(tx).length === 0) {
...       await new Promise(r => setTimeout(r, 3000));
...       continue;
...     } else {
...       console.log(tx);
...       break;
...     }
...   }
... 
...   // Finally, checkout the 0 item of the map:
...   let result = await deployed.s(0).call();
...   console.log(result);
...   // The output addresses are the hex format of the add\
resses provided.
... })();
... "notValid@
... @
... createSmartContract@
... @
... step@
... @
... Promise@[native code]
... @
... $csb$eval@
... J@https://2-19-8-sandpack.codesandbox.io/static/js/sand\
box.8a7d01a44.js:1:159102
... evaluate@https://2-19-8-sandpack.codesandbox.io/static/\
js/sandbox.8a7d01a44.js:1:171817
... evaluateModule@https://2-19-8-sandpack.codesandbox.io/s\
tatic/js/sandbox.8a7d01a44.js:1:181720
... @https://2-19-8-sandpack.codesandbox.io/static/js/sandb\
ox.8a7d01a44.js:1:354456
... n@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:607
... u@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:819"
... const functionSelector = 'transfer(address,uint256)';
... const parameter = [{type:'address',value:'ACCOUNT_ADDRE\
SS'},{type:'uint256',value:100}]
... const result = await tronWeb.transactionBuilder.estimat\
eEnergy('USDT_ADDRESS', functionSelector, {}, parameter);
... // the result looks like below:
... {
...   "result": {
...     "result": true
...   },
...   "energy_required": 16482
... }
required": 16482
... }
... 



















...    * JSON format for contract function.
...    * For example: `{ "type":"function", "inputs": [{"na\
me":"a","type":"uint256"}], "name":"foo", "outputs": [] }`.
...    * If exists, the `parameters` will be ignored.
...    * Optional.
...    */
...   funcABIV2?: AbiFragment;
...   /**
...    * The parameters of the function specified by `funcA\
BIV2`.
...    * Required if `funcABIV2` exists.
...    */
...   parametersV2?: unknown[];
...   /**
...    * Raw parameters encoded according to [ABI Specifica\
tion](https://docs.soliditylang.org/en/latest/abi-spec.html\
).
...    * If exists, the `parametersV2` and `parameters` wil\
l be ignored.
...    * For example: 0x00000000000000000000000000000000000\
00000000000000000000000000001.
...    * Optional.
...    */
...   shieldedParameter?: string;
...   /**
...    * Alias of `shieldedParameter`. If exists, the `shie\
ldedParameter`, `parametersV2` and `parameters` will be ign\
ored.
...    */
...   rawParameter?: string;
...   /**
...    * If `functionSelector` is not specified, this param\
eter will be used as data.
...    */
...   input?: string;
...   /**
...    * Create transaction locally.
...    */
...   txLocal?: boolean;
...   /**
...    * For multi-signature use.
...    * Optional.
...    */
...   permissionId?: number;
...   blockHeader?: {
...     ref_block_bytes: string;
...     ref_block_hash: string;
...     expiration: number;
...     timestamp: number;
...   };
...   _isConstant?: boolean;
...   /**
...    * If use solidity node to trigger smart contract.
...    */
...   confirmed?: boolean;
... }
... const receiverAddress = '';
... const amount = 1e6; // unit in sun.
... const tx = await tronWeb.transactionBuilder.sendTrx(rec\
eiverAddress, amount);
... const signedTx = await tronWeb.trx.sign(tx);
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
... const receiverAddress = '';
... const amount = 100;
... const tokenId = '1000086';
... const tx = await tronWeb.transactionBuilder.sendToken(r\
eceiverAddress, amount, tokenId);
... const signedTx = await tronWeb.trx.sign(tx);
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
saction(signedTx);
... 
SS'},{type:'uint256',value:100}]
... const tx = await tronWeb.transactionBuilder.triggerSmar\
tContract('USDT_ADDRESS', functionSelector, {}, parameter);
... const signedTx = await tronWeb.trx.sign(tx.transaction)\
;
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTx);
... // the result looks like below:
... {
...   "result": true,
...   "txid": "bea6cff8d62d62209f87810396a9a26802b93f566cb0\
8f925ec91a071002060f",
...   "transaction": {
...     "visible": false,
...     "txID": "bea6cff8d62d62209f87810396a9a26802b93f566c\
b08f925ec91a071002060f",
...     "raw_data": {
...       "contract": [
...         {
...           "parameter": {
...             "value": {
...               "data": "a9059cbb000000000000000000000000\
526f3626eaccc3f5fadd8f5f51fd9c49ce53b0900000000000000000000\
000000000000000000000000000000000000000000064",
...               "owner_address": "4175f09e51f8ecb695a0be1\
701581ec9493b164495",
...               "contract_address": "41eca9bc828a3005b9a3\
b909f2cc5c2a54794de05f"
...             },
...             "type_url": "type.googleapis.com/protocol.T\
riggerSmartContract"
...           },
...           "type": "TriggerSmartContract"
...         }
...       ],
...       "ref_block_bytes": "3bc7",
...       "ref_block_hash": "a5b57140c2f487fa",
...       "expiration": 1677063573000,
...       "fee_limit": 150000000,
...       "timestamp": 1677063515485
...     },
...     "raw_data_hex": "0a023bc72208a5b57140c2f487fa40889c\
9dc6e7305aae01081f12a9010a31747970652e676f6f676c65617069732\
e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e74\
7261637412740a154175f09e51f8ecb695a0be1701581ec9493b1644951\
7261637412740a154175f09e51f8ecb695a0be1701581ec9493b1644951\
21541eca9bc828a3005b9a3b909f2cc5c2a54794de05f2244a9059cbb00\
0000000000000000000000526f3626eaccc3f5fadd8f5f51fd9c49ce53b\
09000000000000000000000000000000000000000000000000000000000\
0000006470ddda99c6e730900180a3c347",
...     "signature": [
...       "c1dddbc3812ad0b93d245b304506f6df54c0ff8e56167a52\
211e560ca1bb8aea45329c9ed2f3a0e959412cf1099f3042f5f716677bb\
196df1d02e0bf27d5dec800"
...     ]
...   }
... }
... const { TronWeb, providers } = require('tronweb')
... 
... const HttpProvider = providers.HttpProvider;
... const fullNode = new HttpProvider("https://nile.trongri\
d.io");
... const fullNode = new HttpProvider("https://nile.trongri\
d.io");
... const solidityNode = new HttpProvider("https://nile.tro\
ngrid.io");
d.io");
... const solidityNode = new HttpProvider("https://nile.tro\
ngrid.io");
... const eventServer = new HttpProvider("https://nile.tron\
grid.io");
... const privateKey = "your private key";
... const tronWeb = new TronWeb(fullNode,solidityNode,event\
Server,privateKey);
... 
... async function trc721_transferFrom() {
...     const trc721ContractAddress = "TRio4FwnDvtYN2ogss6Q\
m7Hn2EaTLwWMNs";//contract address
... 
...     try {
...         let abi = [...];
...         let contract = await tronWeb.contract(abi, trc7\
21ContractAddress);
...         //Use send to execute a non-pure or modify smar\
t contract method on a given smart contract that modifies o\
r changes values on the blockchain.
...         // These methods consume resources(bandwidth an\
d energy) to perform as the changes need to be broadcasted \
out to the network.
...         await contract.transferFrom(
...             "TA1g2WQiXbU5GnYBTJ5Cp22dvSjT3ug9uK", //add\
ress _from
...             "TM8vRhebJD7zeoBLWAnr9SrYrhWNrHjBgC", //add\
ress _to
...             666 //uint256 tokenId
...         ).send({
...             feeLimit: 100000000
...         }).then(output => {console.log('- transferFrom \
hash:', output, '\n');});
...     } catch(error) {
...         console.error("trigger smart contract error",er\
ror)
...     }
... }
... trc721_transferFrom()
... const account = await tronWeb.createAccount();
... const transaction = await tronWeb.trx.sendTrx(
...   account.address,
...   1000000
... );
... const tx = await tronWeb.transactionBuilder.createAccou\
nt(account.address);
... const signTx = await tronWeb.trx.sign(tx);
... const receipt = await tronWeb.trx.sendRawTransaction(si\
gnTx);
... import { TronWeb } from 'tronweb';
... const tronWeb = new TronWeb({
...   fullHost: 'http://127.0.0.1:9090',
...   privateKey: 'your private key',
... });
... npm install
... PRIVATE_KEY=you_private_key npm run test
... interface PluginInterfaceReturn {
...     requires: string;
...     components?: Record<string | number | symbol, any>;
...     fullClass?: boolean;
... }
... import { TronWeb } from 'tronweb';
... class MyPlugin1 {
...     tronWeb: TronWeb;
...     constructor(tronWeb: TronWeb) {
...         this.tronWeb = tronWeb;
...     }
...     pluginInterface() {
...         return {
...             requires: '>=6.0.0',
...             fullClass: true,
...         };
...     }
...     myPlugin1Method() {
...         console.log('MyPlugin1 method');
...     }
... }
... import { TronWeb } from 'tronweb';
... class MyPlugin2 {
...     tronWeb: TronWeb;
...     constructor(tronWeb: TronWeb) {
...         this.tronWeb = tronWeb;
...     }
...     pluginInterface() {
...         return {
...             requires: '>=6.0.0',
...             fullClass: false,
...             components: {
...                 trx: {
...                     myPlugin2Method: this.myPlugin2Meth\
od,
...                 },
...             },
...         };
...     }
...     myPlugin2Method() {
...         console.log('MyPlugin2 method');
...     }
... }
... const tronWeb = new TronWeb({
...     fullHost: 'http://127.0.0.1:9090',
... });
... tronWeb.plugin.register(MyPlugin1);
... tronWeb.plugin.register(MyPlugin2);
... tronWeb.myPlugin1.myPlugin1Method();
... tronWeb.trx.myPlugin2Method();
... import { TronWeb } from 'tronweb';
... class MyPlugin1 {
...     tronWeb: TronWeb;
...     constructor(tronWeb: TronWeb) {
...         this.tronWeb = tronWeb;
...     }
...     pluginInterface() {
...         return {
...             requires: '>=6.0.0',
...             fullClass: true,
...         };
...     }
...     myPlugin1Method() {
...         console.log('MyPlugin1 method');
...     }
... }
... class MyPlugin2 {
...     tronWeb: TronWeb;
...     constructor(tronWeb: TronWeb) {
...         this.tronWeb = tronWeb;
...     }
...     pluginInterface() {
...         return {
...             requires: '>=6.0.0',
...             fullClass: false,
...             components: {
...                 trx: {
...                     myPlugin2Method: this.myPlugin2Meth\
od,
...                 },
...             },
...         };
...     }
...     myPlugin2Method() {
...         console.log('MyPlugin2 method');
...     }
... }
... const tronWeb = new TronWeb({
...     fullHost: 'http://127.0.0.1:9090',
... });
... tronWeb.plugin.register(MyPlugin1);
... tronWeb.plugin.register(MyPlugin2);
... tronWeb.myPlugin1.myPlugin1Method();
... tronWeb.trx.myPlugin2Method();
... 
yPlugin2Method();
... 
  File "<python-input-10>", line 5
    // Don't use your real private key in test!
          ^
SyntaxError: unterminated string literal (detected at line 5)
>>> "MyPlugin1 method"
... "MyPlugin2 method"\
... const { TronWeb, Trx } = require('tronweb');
... // way1: initiate a tronWeb instance and pass the priva\
te key
... const tronWeb = new TronWeb({fullHost: 'xxx', privateKe\
y: 'privateKey'});
... const signature = tronWeb.trx.signMessageV2('message')
... // way2: just call by Trx Class without initiating tron\
Web
... const signature = Trx.signMessageV2('message', 'private\
Key');
... const signature = tronWeb.trx.signMessageV2('message');
... const base58Address = await tronWeb.trx.verifyMessageV2\
(messge, signature);
... const base58Address = await tronWeb.trx.verifyMessageV2\
(messge, signature);
... import { TronWeb, utils as TronWebUtils, Trx, Transacti\
onBuilder, Contract, Event, Plugin } from 'tronweb';
... await tronWeb.trx.sign(transaction, pk);
... const result = {
...   transaction,
...   receipt: await tronWeb.trx.sendRawTransaction(transac\
tion),
... };
... const signedTransaction = await tronWeb.trx.sign(transa\
ction, pk);
... const result = {
...   transaction,
...   receipt: await tronWeb.trx.sendRawTransaction(signedT\
ransaction),
... };
... TronWeb.createRandom(options)为TronWeb.createRandom(pas\
sword, path, wordlist)
... TronWeb.fromMnemonic(mnemonic, path, wordlist)为TronWeb\
.fromMnemonic(mnemonic, path, password, wordlist)
... utils.abi.decodeParams(names: string[], types: string[]\
, output: string, ignoreMethodHash = false)
... utils.code.hexStr2byteArray
... // Normally the third parameter is 'fromAddress', and t\
he forth is options.
... await tronWeb.transactionBuilder.sendTrx('toAddress', 1\
0, 'fromAddress', { permissionId: 2 });
... 
... // If the third parameter is object, it will be treated\
 as options and fromAddress will be tronWeb.defaultAddress.
... await tronWeb.transactionBuilder.sendTrx('toAddress', 1\
0, { permissionId: 2 });
... try {
...   await tronWebV5.transactionBuilder.clearABI('contract\
Address');
... } catch (e) {
...   console.log(typeof e); // will print 'string'
... }
... try {
...   await tronWeb.transactionBuilder.clearABI('contractAd\
dress');
... } catch (e) {
...   console.log(typeof e); // will print 'object'
...   console.log(e.message);
... }
... // previous version
... const transaction = await tronWeb.transactionBuilder.tr\
iggerSmartContract(
...   contractAddress,
...   functionSelector,
...   1000000000, // feelimit
...   0, // callValue
...   parameters,
...   ownerAddress,
... );
... 
... // In v6
... const transaction = await tronWeb.transactionBuilder.tr\
iggerSmartContract(
...   contractAddress,
...   functionSelector,
...   {
...     feeLimit: 1000000000,
...     callValue: 0,
...   },
...   parameters,
...   ownerAddress,
... );
... contract.someEvent().watch()
... {
...     "success":true,
...     "data": [
...       {
...           "block_number": 42054864,
...           "block_timestamp": 1700704884000,
...           "caller_contract_address": "TPYwAC9Y4uUcT2QH3\
WPPjqxzJSJWymMoMS",
...           "contract_address": "TPYwAC9Y4uUcT2QH3WPPjqxz\
JSJWymMoMS","event_index": 1,
...           "event_name": "Transfer",
...           "result": {
...              "0": "0x65fa68800fff5a10346d1a3aa1fb2ce92f\
2e2971",
...              "1": "0xbbd6d9c36cf31f73b01ad2415b12d9d2bd\
a7fb08",
...              "2": "27000000","from":"0x65fa68800fff5a10\
346d1a3aa1fb2ce92f2e2971",
...              "to": "0xbbd6d9c36cf31f73b01ad2415b12d9d2b\
da7fb08","value": "27000000"
...           },
...           "result_type": {
...             "from":"address",
...             "to":"address",
...             "value":"uint256"
...           },
...           "event": "Transfer(address indexed from, addr\
ess indexed to, uint256 value)",
...           "transaction_id": "9c9e4776de1ee889aad48be360\
262e3dd6d1a1e3d4e0d7c72dc50075260846df"
...         }
...     ],
...     "meta": {
...         "at":1700720666204,
...         "page_size": 1
...     }
... }
... declare namespace globalThis {
...     interface MyTronWeb extends TronWeb {
...         trx: {
...             getCurrentBlock(): Promise<Block & { fromPl\
ugin: true }>;
...             getLatestBlock(): Promise<Block & { fromPlu\
gin: true }>;
...             getSomeParameter(): string;
...         } & Trx;
...     }
... }
... const tronWeb = new TronWeb() as globalThis.MyTronWeb;
... const someParameter = 'someParameter';
... const result = tronWeb.plugin.register(MyPlugin, {
...     someParameter,
... });
... 
... const result2 = await tronWeb.trx.getCurrentBlock();
... assert.isTrue(result2.fromPlugin);
... assert.equal(result2.blockID.length, 64);
... 
... const result3 = await tronWeb.trx.getSomeParameter();
... assert.equal(result3, someParameter);
... getEventsByBlockNumber
... getEventsOfLatestBlock
... {
...       test: /\.cjs$/,
...       type: 'javascript/auto'
... }
... alias: {
...   'crypto': 'crypto-browserify',
...   'buffer': 'buffer/',
...   'stream': 'readable-stream',
... },
... app: {
...   head: {
...     script: [{ children: "window.global ||= window;" }]\
,
...   },
... },
... API List
... Version: 6.1.0 - 6.1.1
... const abi = [
...   {
...     "constant": true,
...     "inputs": [{ "name": "input_value", "type": "uint25\
6" }],
...     "name": "getValue",
...     "outputs": [{ "name": "output_value", "type": "uint\
256" }],
...     "payable": false,
...     "stateMutability": "view",
...     "type": "function"
...   }
... ] as const;
... const contract = tronWeb.contract(abi, 'contractAddress\
');
... const value = await contract.getValue(100).call();
... const abi = [
...   {
...     "constant": true,
...     "inputs": [{ "name": "input_value", "type": "uint25\
6" }],
...     "name": "getValue",
...     "outputs": [{ "name": "output_value", "type": "uint\
256" }],
...     "payable": false,
...     "stateMutability": "view",
...     "type": "function"
...   }
... ] as const;
... const contract = tronWeb.contract(abi, 'contractAddress\
');
... const value = await contract.getValue(100).call();
... //Example 1
... let abi = [...] as const;       
... let instance = await tronWeb.contract(abi,'contractAddr\
ess'); 
... //Example 1
... let abi = [...] as const;
... let contract = await tronWeb.contract(abi, 'contractAdd\
ress');
... let result = await contract.function_name(param1,param2\
,...).call();
... 
... //Example 2
... let abi = [...] as const;
... let contract = await tronWeb.contract(abi, 'contractAdd\
ress');
... let result = await contract["function_selector"](param1\
,param2,...).call();
... //example 1
... async function triggercontract(){
...    let abi = [...];
...    let instance = await tronWeb.contract(abi, 'contract\
Address');
...    let res = await instance.totalSupply().call();
...    console.log(res);
... }
... triggercontract();
... 
... //example 2
... async function triggercontract(){
...    let abi = [...];
...    let instance = await tronWeb.contract(abi, 'contract\
Address');
...    let res = await instance["totalSupply"]().call();
...    console.log(res);
... }
... triggercontract();
... 
... //example 3：the ABI of the smart contract is not on-ch\
ain
... async function triggercontract(){
...    let abi = [];
...    let instance = await tronWeb.contract(abi, 'contract\
Address');
...    instance.loadAbi([{"constant":true,"inputs":[],"name\
":"name","outputs":[{"name":"","type":"string"}],"payable":\
false,"stateMutability":"view","type":"function"}]);
...    let res = await instance.name().call({_isConstant:tr\
ue})
...    console.log(res);
... }
... triggercontract();
... let abi = [...] as const;
... let contract = await tronWeb.contract(abi, 'contractAdd\
ress'); 
... let result = await contract.function_name(param1,param2\
,...).send({
...   feeLimit:100_000_000,
...   callValue:0,
...   tokenId:'1000036',
...   tokenId:'1000036',
...   tokenValue:100,
...   shouldPollResponse:true
... });
... async function triggercontract(){
...     try {
...         let abi = [...] as const;
...         let instance = await tronWeb.contract(abi, 'TQQ\
g4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK');
...         let res = await instance.transfer('TWbcHNCYzqAG\
brQteKnseKJdxfzBHyTfuh',500).send({
...             feeLimit:100_000_000,
...             callValue:0,
...             shouldPollResponse:true
...         });
... 
...         console.log(res);
... 
...     } catch (error) {
...         console.log(error);
...     }
... }
... 
... triggercontract();
... let abi = 'some abi for contract';
... let code = 'bytecode';
... async function deploy_contract(){
...   let contract_instance = await tronWeb.contract().new(\
{
...     abi:JSON.parse(abi),
...     bytecode:code,
...     feeLimit:1000000000,
...     callValue:0,
...     userFeePercentage:1,
...     originEnergyLimit:10000000,
...     parameters:[param1, param2, param3,...]
...   });
...   console.log(contract_instance.address);
... }
... let abi = 'some abi for contract';
... let code = 'bytecode';
... async function deploy_contract(){
...   let contract_instance = await tronWeb.contract().new(\
{
...     abi:JSON.parse(abi),
...     bytecode:code,
...     feeLimit:1_00_000_000,
...     callValue:0,
...     userFeePercentage:1,
...     originEnergyLimit:10_000_000
...   });
...   console.log(contract_instance.address);
... }
... 
... deploy_contract();// Execute the function
... b17ed17972414ddefe510369c225175e5af2e02737a64eb69547499\
565b204e0
... tronWeb.contract(abi,contractAddress);
... //example 1:Create the contract object through contract\
 address and ABI
... let instance = await tronWeb.contract([{"constant":true\
,"inputs":[],"name":"name","outputs":[{"name":"","type":"st\
ring"}],"payable":false,"stateMutability":"view","type":"fu\
nction"}],"contractAddress")
... 
... //example 2:First create an empty contract object, and \
then specify the contract address by at() function. If the \
abi is on the chain, at() function will load ABI automatica\
lly , else you need to load it manually 
... let abi = [...] as const;
... let instance = await tronWeb.contract(abi, "contractAdd\
ress");
... //example 1
... let instance =await tronWeb.contract([{"constant":true,\
"inputs":[],"name":"name","outputs":[{"name":"","type":"str\
ing"}],"payable":false,"stateMutability":"view","type":"fun\
ction"}],"contractAddress")
... let res = await instance.name().call({_isConstant:true}\
)
... 
... //example 2
... let abi = [];
... let instance = await tronWeb.contract(abi, "contractAdd\
ress");
... instance.loadAbi([{"constant":true,"inputs":[],"name":"\
name","outputs":[{"name":"","type":"string"}],"payable":fal\
se,"stateMutability":"view","type":"function"}]);
... let res = await instance.name().call({_isConstant:true}\
)
... {
...     "success":true,
...     "data": [
...       {
...           "block_number": 42054864,
...           "block_timestamp": 1700704884000,
...           "caller_contract_address": "TPYwAC9Y4uUcT2QH3\
WPPjqxzJSJWymMoMS",
...           "contract_address": "TPYwAC9Y4uUcT2QH3WPPjqxz\
JSJWymMoMS","event_index": 1,
...           "event_name": "Transfer",
...           "result": {
...              "0": "0x65fa68800fff5a10346d1a3aa1fb2ce92f\
2e2971",
...              "1": "0xbbd6d9c36cf31f73b01ad2415b12d9d2bd\
a7fb08",
...              "2": "27000000","from":"0x65fa68800fff5a10\
346d1a3aa1fb2ce92f2e2971",
...              "to": "0xbbd6d9c36cf31f73b01ad2415b12d9d2b\
da7fb08","value": "27000000"
...           },
...           "result_type": {
...             "from":"address",
...             "to":"address",
...             "value":"uint256"
...           },
...           "event": "Transfer(address indexed from, addr\
ess indexed to, uint256 value)",
...           "transaction_id": "9c9e4776de1ee889aad48be360\
262e3dd6d1a1e3d4e0d7c72dc50075260846df"
...         }
...     ],
...     "meta": {
...         "at":1700720666204,
...         "page_size": 1
...     }
... }
... const events = await tronWeb.event.getEventsByBlockNumb\
er(
...     blockNumber,
...     options
...   );
...   interface GetEventResultOptions {
...     /**
...      * Only query confirmed transaction events.
...      * Default is false.
...      */
...     only_confirmed?: boolean;
...     /**
...      * Number of transactions per page.
...      * Default 20, max 200
...      */
...     limit?: number;
...     /**
...      * The fingerprint in the meta data to get to the n\
ext page; when using it, the other parameters and filters s\
hould remain the same.
...      */
...     fingerprint?: string;
... }
... const events = await tronWeb.event.getEventsByBlockNumb\
er(
...     42062172,
...     { only_confirmed: true }
...   );
... console.log(events);
... {
...     "data": [
...         {
...             "block_number": 42062172,
...             "block_timestamp": 1691146032000,
...             "caller_contract_address": "TRz7J6dD2QWxBou\
mfYt4b3FaiRG23pXfop",
...             "contract_address": "TRz7J6dD2QWxBoumfYt4b3\
FaiRG23pXfop",
...             "event_index": 0,
...             "event_name": "Transfer",
...             "result": {
...                 "0": "0x573708726db88a32c1b9c828fef5085\
77cfb8483",
...                 "1": "0x7b550beadccf4c92b8b4772a993e34f\
5afaa6eb6",
...                 "2": "5000000000000000000",
...                 "from": "0x573708726db88a32c1b9c828fef5\
08577cfb8483",
...                 "to": "0x7b550beadccf4c92b8b4772a993e34\
f5afaa6eb6",
...                 "value": "5000000000000000000"
...             },
...             "result_type": {
...                 "from": "address",
...                 "to": "address",
...                 "value": "uint256"
...             },
...             "event": "Transfer(address indexed from, ad\
dress indexed to, uint256 value)",
...             "transaction_id": "028f0565c1fefc6790da474c\
32fcfe42769d4317e20fdfad521fd3007684d6d3"
...         }
...     ],
...     "success": true,
...     "meta": {
...         "at": 1700727510461,
...         "page_size": 1
...     }
... }
... const events = await tronWeb.event.getEventsByContractA\
ddress(
...     contractAddress,
...     options
...   );
...   interface GetEventResultOptions {
...     /**
...      * Name of the event to filter by.
...      */
...     eventName?: string;
...     /**
...      * Specific block number to query.
...      */
...     blockNumber?: number;
...     /**
...      * Maximum number returned.
...      */
...     limit?: number;
...     /**
...      * When the data volume of the query result is larg\
e, the returned result of one query will not contain all th\
e data, and it takes multiple queries to obtain the complet\
e data. Therefore, the fingerprint field will appear in the\
 last piece of data in the returned result. After specifyin\
g this field as the content of the fingerprint in the resul\
t of the previous query in the next query, the query will r\
eturn subsequent data. If there is no such field in the las\
t data of the query result, it means that there is no more \
...      */
...     fingerprint?: string;
...     /**
...      * If set to true, only returns confirmed transacti\
ons.
...      */
...     onlyConfirmed?: boolean;
...     /**
...      * If set to true, only returns unconfirmed transac\
tions.
...      */
...     onlyUnconfirmed?: boolean;
...     /**
...      * Specify the query order, whether to query forwar\
d or backward from the sinceTimestamp.
...      * The value can be 'block_timestamp,desc' for time\
 sequence or 'block_timestamp,asc' for the reverse.
...      * Default is 'block_timestamp,desc'.
...      */
...     orderBy?: 'block_timestamp,desc' | 'block_timestamp\
,asc';
...     /**
...      * Specifies the starting timestamp of the query, i\
n milliseconds, default value is the current time.
...      */
...     minBlockTimestamp?: number;
...     /**
...      * Specifies the ending timestamp of the query, in \
milliseconds.
...      */
...     maxBlockTimestamp?: number;
... }
... const events = await tronWeb.event.getEventsByContractA\
ddress(
...   'TPYwAC9Y4uUcT2QH3WPPjqxzJSJWymMoMS',
...   {
...     eventName: 'Transfer'
...   }
... );
... console.log(events);
... {
...     "success":true,
...     "data": [
...       {
...           "block_number": 42054864,
...           "block_timestamp": 1700704884000,
...           "caller_contract_address": "TL5kZFo1K7yVq4xrL\
Km3SHis6dtMhbpLo",
...           "contract_address": "TPYwAC9Y4uUcT2QH3WPPjqxz\
JSJWymMoMS","event_index": 1,
...           "event_name": "Transfer",
...           "result": {
...              "0": "0x65fa68800fff5a10346d1a3aa1fb2ce92f\
2e2971",
...              "1": "0xbbd6d9c36cf31f73b01ad2415b12d9d2bd\
a7fb08",
...              "2": "27000000","from":"0x65fa68800fff5a10\
346d1a3aa1fb2ce92f2e2971",
...              "to": "0xbbd6d9c36cf31f73b01ad2415b12d9d2b\
da7fb08","value": "27000000"
...           },
...           "result_type": {
...             "from":"address",
...             "to":"address",
...             "value":"uint256"
...           },
...           "event": "Transfer(address indexed from, addr\
ess indexed to, uint256 value)",
...           "transaction_id": "9c9e4776de1ee889aad48be360\
262e3dd6d1a1e3d4e0d7c72dc50075260846df"
...         }
...     ],
...     "meta": {
...         "at":1700720666204,
...         "page_size": 1
...     }
... }
... const events = await tronWeb.event.getEventsByTransacti\
onID(
...     txID,
...     options
...   );
...   interface GetEventResultOptions {
...   /**
...    * Only query unconfirmed transaction events.
...    * Default is false.
...    */
...   only_unconfirmed?: boolean;
...   only_unconfirmed?: boolean;
...   /**
...    * Only query confirmed transaction events.
...    * Default is false.
...    */
...   only_confirmed?: boolean;
... }
... const events = await tronWeb.event.getEventsByTransacti\
onID(
...     '028f0565c1fefc6790da474c32fcfe42769d4317e20fdfad52\
1fd3007684d6d3',
...     { only_confirmed: true }
...   );
... console.log(events);
... {
...     "data": [
...         {
...             "block_number": 39025446,
...             "block_timestamp": 1691146032000,
...             "caller_contract_address": "TRz7J6dD2QWxBou\
mfYt4b3FaiRG23pXfop",
...             "contract_address": "TRz7J6dD2QWxBoumfYt4b3\
FaiRG23pXfop",
...             "event_index": 0,
...             "event_name": "Transfer",
...             "result": {
...                 "0": "0x573708726db88a32c1b9c828fef5085\
77cfb8483",
...                 "1": "0x7b550beadccf4c92b8b4772a993e34f\
5afaa6eb6",
...                 "2": "5000000000000000000",
...                 "from": "0x573708726db88a32c1b9c828fef5\
08577cfb8483",
...                 "to": "0x7b550beadccf4c92b8b4772a993e34\
f5afaa6eb6",
...                 "value": "5000000000000000000"
...             },
...             "result_type": {
...                 "from": "address",
...                 "to": "address",
...                 "value": "uint256"
...             },
...             "event": "Transfer(address indexed from, ad\
dress indexed to, uint256 value)",
...             "transaction_id": "028f0565c1fefc6790da474c\
32fcfe42769d4317e20fdfad521fd3007684d6d3"
...         }
...     ],
...     "success": true,
...     "meta": {
...         "at": 1700727510461,
...         "page_size": 1
...     }
...         "page_size": 1
...     }
...     }
... }
... const events = await tronWeb.event.getEventsOfLatestBlo\
...     }
... }
... }
...     }
... }
... const events = await tronWeb.event.getEventsOfLatestBlo\
... }
... const events = await tronWeb.event.getEventsOfLatestBlo\
ck( options );
... interface GetEventResultOptions {
...     /**
...      * Only query confirmed transaction events.
...      * Default is false.
...      */
...     only_confirmed?: boolean;
... }
... const events = await tronWeb.event.getEventsOfLatestBlo\
ck();
... console.log(events);
... {
...     "data": [
...         {
...             "block_number": 42062172,
...             "block_timestamp": 1691146032000,
...             "caller_contract_address": "TRz7J6dD2QWxBou\
mfYt4b3FaiRG23pXfop",
...             "contract_address": "TRz7J6dD2QWxBoumfYt4b3\
...             "contract_address": "TRz7J6dD2QWxBoumfYt4b3\
FaiRG23pXfop",
...             "event_index": 0,
...             "event_name": "Transfer",
...             "result": {
...                 "0": "0x573708726db88a32c1b9c828fef5085\
77cfb8483",
...                 "1": "0x7b550beadccf4c92b8b4772a993e34f\
5afaa6eb6",
...                 "2": "5000000000000000000",
...                 "from": "0x573708726db88a32c1b9c828fef5\
08577cfb8483",
...                 "to": "0x7b550beadccf4c92b8b4772a993e34\
f5afaa6eb6",
...                 "value": "5000000000000000000"
...             },
...             "result_type": {
...                 "from": "address",
...                 "to": "address",
...                 "value": "uint256"
...             },
...             "event": "Transfer(address indexed from, ad\
dress indexed to, uint256 value)",
...             "transaction_id": "028f0565c1fefc6790da474c\
32fcfe42769d4317e20fdfad521fd3007684d6d3"
...         }
...     ],
...     "success": true,
...     "meta": {
...         "at": 1700727510461,
...         "page_size": 1
...     }
... }
... 版本: 6.1.0 - 6.1.1
... trx
... tronWeb.trx.ecRecover(signedTransaction)
... const pk1 = '...';
... const pk2 = '...';
... const tx = await tronWeb.transactionBuilder.sendTrx('to\
', 100);
... const signedTransaction = await tronWeb.trx.sign(tx, pk\
1);
... 
... // Recover address of a signed transaction with one sig\
ner.
... const a = await tronWeb.trx.ecRecover(signedTransaction\
);
... // a === tronWeb.address.fromPrivateKey(pk1);
... 
... // Recover addresses of a signed transaction with more \
than one signer.
... const signedTx = await tronWeb.trx.sign(tx, pk2);
... const b = await tronWeb.trx.ecRecover(signedTx);
... // b is deep equal to [tronWeb.address.fromPrivateKey(p\
k1), tronWeb.address.fromPrivateKey(pk2)].
... tronWeb.trx.getAccount(address);
ess);
... 












00, expire_time: 1577588400000 },
...     latest_consume_time_for_energy: 1577342304000
...   },
...     latest_consume_time_for_energy: 1577342304000
...   },
...   owner_permission: { permission_name: 'owner', thresho\
ld: 1, keys: [ [Object] ] },
...   active_permission: [
...     {
...       type: 'Active',
...       id: 2,
...       permission_name: 'active',
...       threshold: 1,
...       operations: '7fff1fc0033e010000000000000000000000\
0000000000000000000000000000',
...       keys: [Array]
...     }
...   ],
...   assetV2: [ { key: '1000001', value: 0 } ],
...   free_asset_net_usageV2: [ { key: '1000001', value: 0 \
} ]
... }
... 
...  //Parameter HexString
... await tronWeb.trx.getAccount('41BF97A54F4B829C4E9253B26\
024B1829E1A3B1120').then(result => console.log(result))
... {
...   address: '41bf97a54f4b829c4e9253b26024b1829e1a3b1120'\
,
...   balance: 29340074430,
...   frozen: [ { frozen_balance: 12000000, expire_time: 15\
77615814000 } ],
...   create_time: 1575710031000,
...   latest_opration_time: 1578635577000,
...   latest_consume_time: 1578635577000,
...   latest_opration_time: 1578635577000,
...   latest_consume_time: 1578635577000,
...   latest_consume_free_time: 1577356614000,
...   account_resource: {
...     frozen_balance_for_energy: { frozen_balance: 120000\
00, expire_time: 1577588400000 },
...     latest_consume_time_for_energy: 1578047682000
...   },
...   owner_permission: { permission_name: 'owner', thresho\
ld: 1, keys: [ [Object] ] },
...   active_permission: [
...     {
...       type: 'Active',
...       id: 2,
...       permission_name: 'active12323',
...       threshold: 2,
...       operations: '7fff1fc0033e000000000000000000000000\
0000000000000000000000000000',
...       keys: [Array]
...     }
...   ],
...   assetV2: [ { key: '1000001', value: 1000000000 } ],
...   free_asset_net_usageV2: [ { key: '1000001', value: 0 \
} ]
... }
... tronWeb.trx.getAccountResources(address);
... //Parameter Base58
... await tronWeb.trx.getAccountResources('TTSFjEG3Lu9WkHdp\
4JrWYhbGP6K1REqnGQ');
... {
...   freeNetLimit: 5000,
...   NetLimit: 483512,
...   assetNetUsed: [ { key: '1000001', value: 0 } ],
...   assetNetLimit: [ { key: '1000001', value: 0 } ],
...   TotalNetLimit: 43200000000,
...   TotalNetWeight: 1072155,
...   EnergyLimit: 4949344,
...   TotalEnergyLimit: 971444468045,
...   TotalEnergyWeight: 2355329
... }
... 
... 
... //Parameter HexString
... await tronWeb.trx.getAccountResources('41BF97A54F4B829C\
4E9253B26024B1829E1A3B1120');
... {
...   freeNetLimit: 5000,
...   NetLimit: 448135,
...   assetNetUsed: [ { key: '1000001', value: 0 } ],
...   assetNetUsed: [ { key: '1000001', value: 0 } ],
...   assetNetLimit: [ { key: '1000001', value: 0 } ],
...   TotalNetLimit: 43200000000,
...   TotalNetWeight: 1156792,
...   EnergyLimit: 1778164,
...   TotalEnergyLimit: 381032718821,
...   TotalEnergyWeight: 2571411
... }
... tronWeb.trx.getApprovedList(transactionObj);
... await tronWeb.trx.getApprovedList({'visible': true, 'si\
gnature': ['1fd210045f5bdcf375cd478cf46ff735f132281b990bc19\
gnature': ['1fd210045f5bdcf375cd478cf46ff735f132281b990bc19\
9acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6\
a6a2422edb313b9139075300'], 'txID': 'ee188aaf5cf78729d2d14d\
4db698126da2d75ef78a43837dafd6e6f591d103a2', 'raw_data': {'\
contract': [{'parameter': {'value': {'amount': 125000000, '\
owner_address': 'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 'to_a\
ddress': 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ'}, 'type_url':\
 'type.googleapis.com/protocol.TransferContract'}, 'type': \
'TransferContract'}], 'ref_block_bytes': 'c251', 'ref_block\
_hash': '5c685c92bf035e72', 'expiration': 1578299967000, 't\
imestamp': 1578299909600}, 'raw_data_hex': '0a02c25122085c6\
85c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f\
imestamp': 1578299909600}, 'raw_data_hex': '0a02c25122085c6\
85c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f\
676c65617069732e636f6d2f70726f746f636f6c2e5472616e736665724\
36f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7\
140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2c\
140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2c\
d3b70e0cb85d0f72d'});
... {
...   result: {},
...   approved_list: [ 'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP'\
 ],
...   transaction: {
...     result: { result: true },
...     txid: 'ee188aaf5cf78729d2d14d4db698126da2d75ef78a43\
837dafd6e6f591d103a2',
...     transaction: {
...       signature: [Array],
...       txID: 'ee188aaf5cf78729d2d14d4db698126da2d75ef78a\
43837dafd6e6f591d103a2',
...       raw_data: [Object],
...       raw_data_hex: '0a02c25122085c685c92bf035e7240988c\
89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e5472616e73666572436f6e74726163741233\
0a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54\
f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d'
...     }
...   }
... }
... tronWeb.trx.getAvailableUnfreezeCount(address, options)\
;
... await tronWeb.trx.getAvailableUnfreezeCount('TL5kZFo1K7\
yVq4xrLKm3SH4is6dt
... Mhbp oL');
... {
...     "count": 32
... }
... tronWeb.trx.getBalance(address);
... //Parameter Base58
... await tronWeb.trx.getBalance('TTSFjEG3Lu9WkHdp4JrWYhbGP\
6K1REqnGQ');
... 29887074430
...          
... //Parameter HexString
... await tronWeb.trx.getBalance('41BF97A54F4B829C4E9253B26\
024B1829E1A3B1120');
... 29340074430
... tronWeb.trx.getBandwidth(address);
... //Example 1
... await tronWeb.trx.getBandwidth('TVJ6njG5EpUwJt4N9xjTrqU\
5za78cgadS2');
... 5000
... 
... //Example 2
... await tronWeb.trx.getBandwidth('41D3FD1B6F3F3A86303E292\
5844456C49876C4561F');
... 5000
... tronWeb.trx.getBandwidthPrices();
... //Example 1
... await tronWeb.trx.getBandwidthPrices();
... "0:10"
... tronWeb.trx.getBlock(blockNumberOrBlockId);
kId);
... 

















...   }
... }
... }
... 
... //Example 2
... await tronWeb.trx.getBlock('000000000000303987c7c8ab3f5\
967c107a619fa47819940597e9938811a1764');
... {
...   blockID: '000000000000303987c7c8ab3f5967c107a619fa478\
19940597e9938811a1764',
...   block_header: {
...     raw_data: {
...       number: 12345,
...       txTrieRoot: '000000000000000000000000000000000000\
0000000000000000000000000000',
...       witness_address: '414b4778beebb48abe0bc1df42e92e0\
fe64d0c8685',
...       parentHash: '0000000000003038c0a3aa1806236bc5b281\
633728b5fe8a14a51062522e651d',
...       timestamp: 1529928585000
...     },
...     witness_signature: 'cb889103aa9ce691d39df8030b54b50\
b12b77984684281f3490e0b802cbc364c13af773ede8d9314add0fa4d24\
7165be82fa28721f17493c88761b7039ba1c1100'
...   }
... }
... 
... //Example 3
... await tronWeb.trx.getBlock('latest').then(result => {co\
nsole.log(result)});
... {
...   blockID: '0000000000000000de1aa88295e1fcf982742f773e0\
419c5a9c134c994a9059e',
...   block_header: {
...     raw_data: {
...       txTrieRoot: 'ea97ca7ac977cf2765093fa0e4732e561dc4\
ff8871c17e35fd2bcabb8b5f821d',
...       witness_address: '414b4778beebb48abe0bc1df42e92e0\
fe64d0c8685',
...       parentHash: '957dc2d350daecc7bb6a38f3938ebde0a0c1\
cedafe15f0edae4256a2907449f6'
...     }
...   },
...   transactions: [
...     {
...       txID: 'abda6c8b1e8954dbe1d5a06a774a3e6923b003d29b\
...       txID: 'abda6c8b1e8954dbe1d5a06a774a3e6923b003d29b\
b4ce286998f23452e3b04a',
...       raw_data: [Object],
...       raw_data_hex: '5a6f0801126b0a2d747970652e676f6f67\
6c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436\
f6e7472616374123a0a1730783030303030303030303030303030303030\
30303030121541f16412b9a17ee9408646e2a21e16478f72ed1e9518fff\
fa7ec85afd1b101'
...     },
... 
...  ... // Contains the block contents (transactions, IDs,\
 hashes, timestamps, etc.)
...  tronWeb.trx.getBlockByHash(blockId);
...  await tronWeb.trx.getBlockByHash('00000000006acfc007dc\
3ec1d8022c1388268ce7bbd836015558103ee4fb75b5');
... {
...   blockID: '00000000006acfc007dc3ec1d8022c1388268ce7bbd\
836015558103ee4fb75b5',
...   block_header: {
...     raw_data: {
...       number: 7000000,
...       txTrieRoot: '16b4b520748c59e5bfdd1b61ca596d74f9bf\
3df836c359e36a6528ffa5fb2cdb',
...       txTrieRoot: '16b4b520748c59e5bfdd1b61ca596d74f9bf\
3df836c359e36a6528ffa5fb2cdb',
...       witness_address: '414d1ef8673f916debb7e2515a8f3ec\
af2611034aa',
...       parentHash: '00000000006acfbf335be34db135169d9e63\
2d5e464f1573c5980152acf45cb3',
...       version: 6,
...       timestamp: 1551102291000
...     },
...     witness_signature: '2dbe28c99d22e871604f06457aca347\
4ae07b5f58f6bc28d3bebe09d27793d535a55350df433e5822724326026\
38fc2b79518c8f745a35151cbea07b00c6ed6101'
...   },
...   transactions: [
...     {
...       ret: [Array],
...       signature: [Array],
...       txID: '0daa9f2507c4e79e39391ea165bb76ed018c4cd69d\
7da129edf9e95f0dae99e2',
...       raw_data: [Object],
...       raw_data_hex: '0a02cfbe2208071499db194adbc440a8fe\
9da7922d5af001081f12eb010a31747970652e676f6f676c65617069732\
e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e74\
7261637412b5010a1541880e4776dfcf38dfe00d399d31738abc773634e\
8121541eb8f23b15acbc0245a4dbbd820b9bde368b02d61228401497746\
83000000000000000000000000ce3747fa895a899209c10ef1b4a41141b\
51b8a48e7636a372dc6d1fa95122bc282de912888dace410099e5c28d9a\
86ec9421be5800000000000000000000000000000000000000000000000\
00000000000502984000000000000000000000000000000000000000000\
0000000000000000989680708dc59aa7922d900180ade204'
...     },
...     
...     ... // Contains the block contents (transactions, I\
Ds, hashes, timestamps, etc.)
...     tronWeb.trx.getBlockByNumber(blockHeight)
...     await tronWeb.trx.getBlockByNumber(12345);
... {
...   blockID: '000000000000303987c7c8ab3f5967c107a619fa478\
19940597e9938811a1764',
...   block_header: {
...     raw_data: {
...       number: 12345,
...       txTrieRoot: '000000000000000000000000000000000000\
0000000000000000000000000000',
...       witness_address: '414b4778beebb48abe0bc1df42e92e0\
fe64d0c8685',
...       parentHash: '0000000000003038c0a3aa1806236bc5b281\
633728b5fe8a14a51062522e651d',
...       timestamp: 1529928585000
...     },
...     witness_signature: 'cb889103aa9ce691d39df8030b54b50\
b12b77984684281f3490e0b802cbc364c13af773ede8d9314add0fa4d24\
7165be82fa28721f17493c88761b7039ba1c1100'
...   }
... }
... tronWeb.trx.getBlockRange(StartingBlock, EndingBlock);
... tronWeb.trx.getBlockRange(StartingBlock, EndingBlock);
... await tronWeb.trx.getBlockRange(15816492,15816493);
... [
...   {
...     blockID: '0000000000f1572c60fe671e379f4cb3dcc4245aa\
6eca50edbfb64c66a3672c7',
...     block_header: {
...       raw_data: [Object],
...     block_header: {
...       raw_data: [Object],
...       witness_signature: 'f7b17ae291128adde41f0349b70f2\
b1fba72b2f7260650e27e231e9a8ceae112353bce76237409d7f256c4f4\
01114234abf521e666890e9f3d090bcc99ae723501'
...     },
...     },
...     transactions: [
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object]
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object]
...     ]
...   },
...   {
...     blockID: '0000000000f1572d90c32bcaec30eb2fb72df772c\
5c4fda23b5a79ddba6c3e62',
...     block_header: {
...       raw_data: [Object],
...       witness_signature: 'eba61099d8e498f43ab57de081dbe\
fb28cee9b6a4ceb1a298830969b47877c4538d771232eb8e68a01e651f4\
a256c0611f32fc29a039cd838a9d96bc42e4eb6300'
...     },
...     transactions: [
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object], [Object]
...     ]
...   }
... ]
... tronWeb.trx.getBlockTransactionCount(blockHeightOrBlock\
Hash)
... await tronWeb.trx.getBlockTransactionCount(16012520);
... 35
... 35
... await tronWeb.trx.getBlockTransactionCount("0000000000f\
454e84edbee2365fbf1bf34bc98283ded06e68311bb6e5bea3cf6");
... 35
... tronWeb.trx.getBrokerage(address);
... await tronWeb.trx.getBrokerage("TBtrUZ2DXdsBGhpquSPkoEc\
D2KbWx2rZvE");
... 20
... tronWeb.trx.getCanDelegatedMaxSize(address, resource，o\
ptions);
... await tronWeb.trx.getCanDelegatedMaxSize('TMVQGm1qAQYVd\
etCeGRRkTWYYrLXuHK2HC'，'BANDWIDTH');
... {
...     "max_size": 100000000
... }
... tronWeb.trx.getCanWithdrawUnfreezeAmount(address, times\
tamp, options);
... await tronWeb.trx.getCanWithdrawUnfreezeAmount('TMVQGm1\
qAQYVdetCeGRRkTWYYrLXuHK2HC', Date.now());
... {
...     "amount": 9000000
... }
... tronWeb.trx.getChainParameters();
... await tronWeb.trx.getChainParameters();
... [ { key: 'getMaintenanceTimeInterval', value: 21600000 \
},
...   { key: 'getAccountUpgradeCost', value: 9999000000 },
...   { key: 'getCreateAccountFee', value: 100000 },
...   { key: 'getTransactionFee', value: 10 },
...   { key: 'getAssetIssueFee', value: 1024000000 },
...   { key: 'getWitnessPayPerBlock', value: 32000000 },
...   { key: 'getWitnessStandbyAllowance', value: 115200000\
000 },
...   { key: 'getCreateNewAccountFeeInSystemContract' },
...   { key: 'getCreateNewAccountBandwidthRate', value: 1 }\
,
...   { key: 'getAllowCreationOfContracts', value: 1 },
...   { key: 'getRemoveThePowerOfTheGr', value: -1 },
...   { key: 'getEnergyFee', value: 10 },
...   { key: 'getExchangeCreateFee', value: 1024000000 },
...   { key: 'getMaxCpuTimeOfOneTx', value: 50 },
...   { key: 'getAllowUpdateAccountName' },
...   { key: 'getAllowSameTokenName', value: 1 },
...   { key: 'getAllowDelegateResource', value: 1 },
...   { key: 'getTotalEnergyLimit', value: 100000000000 },
...   { key: 'getAllowTvmTransferTrc10', value: 1 },
...   { key: 'getTotalEnergyCurrentLimit', value: 100000000\
000 },
...   { key: 'getAllowMultiSign' },
...   { key: 'getAllowAdaptiveEnergy' },
...   { key: 'getTotalEnergyTargetLimit', value: 6944444 },
...   { key: 'getTotalEnergyAverageUsage' },
...   { key: 'getUpdateAccountPermissionFee', value: 100000\
000 },
...   { key: 'getMultiSignFee', value: 1000000 } ]
...   tronWeb.trx.getConfirmedTransaction(transactionID);
...   { key: 'getMultiSignFee', value: 1000000 } ]
...   tronWeb.trx.getConfirmedTransaction(transactionID);
...   await tronWeb.trx.getConfirmedTransaction("0daa9f2507\
c4e79e39391ea165bb76ed018c4cd69d7da129edf9e95f0dae99e2");
... {
... "ret": [
...   {
...     "contractRet": "SUCCESS"
...   }
... ],
... "signature": [
...   "220307de6341f7b59ff9563f50db3ab23ae53df0548aacdc6b56\
9b094463cddd81a0a1e3e06b19bf344f94e25e8e5625374e81232ce8fb4\
04db447666562661600"
... ],
... "txID": "0daa9f2507c4e79e39391ea165bb76ed018c4cd69d7da1\
29edf9e95f0dae99e2",
... "raw_data": {
...   "contract": [
...     {
...       "parameter": {
...         "value": {
...           "data": "49774683000000000000000000000000ce37\
47fa895a899209c10ef1b4a41141b51b8a48e7636a372dc6d1fa95122bc\
282de912888dace410099e5c28d9a86ec9421be58000000000000000000\
00000000000000000000000000000000000000005029840000000000000\
000000000000000000000000000000000000000000000989680",
...           "owner_address": "41880e4776dfcf38dfe00d399d3\
1738abc773634e8",
...           "contract_address": "41eb8f23b15acbc0245a4dbb\
d820b9bde368b02d61"
...         },
...         "type_url": "type.googleapis.com/protocol.Trigg\
erSmartContract"
...       },
...       "type": "TriggerSmartContract"
...     }
...   ],
...   "ref_block_bytes": "cfbe",
...   "ref_block_hash": "071499db194adbc4",
...   "expiration": 1551102345000,
...   "fee_limit": 10000000,
...   "timestamp": 1551102288525
... },
... "raw_data_hex": "0a02cfbe2208071499db194adbc440a8fe9da7\
922d5af001081f12eb010a31747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261\
637412b5010a1541880e4776dfcf38dfe00d399d31738abc773634e8121\
541eb8f23b15acbc0245a4dbbd820b9bde368b02d612284014977468300\
0000000000000000000000ce3747fa895a899209c10ef1b4a41141b51b8\
a48e7636a372dc6d1fa95122bc282de912888dace410099e5c28d9a86ec\
9421be58000000000000000000000000000000000000000000000000000\
00000005029840000000000000000000000000000000000000000000000\
000000000000989680708dc59aa7922d900180ade204"
... }
... tronWeb.trx.getContract(address);
ess);
... 











































































































































02001909291905050506125f8565b005b348015610d8457600080fd5b50\
d38015610d9157600080fd5b50d28015610d9e57600080fd5b50610da76\
126f2565b6040518082815260200191505060405180910390f35b348015\
610dc957600080fd5b50d38015610dd657600080fd5b50d28015610de35\
7600080fd5b50610e18600480360381019080803573ffffffffffffffff\
d38015610d9157600080fd5b50d28015610d9e57600080fd5b50610da76\
126f2565b6040518082815260200191505060405180910390f35b348015\
610dc957600080fd5b50d38015610dd657600080fd5b50d28015610de35\
7600080fd5b50610e18600480360381019080803573ffffffffffffffff\
ffffffffffffffffffffffff169060200190929190505050612716565b0\
05b348015610e2657600080fd5b50d38015610e3357600080fd5b50d280\
15610e4057600080fd5b50610e75600480360381019080803573fffffff\
fffffffffffffffffffffffffffffffff16906020019092919050505061\
286e565b005b60058054600181600116156101000203166002900480601\
f0160208091040260200160405190810160405280929190818152602001\
82805460018160011615610100020316600290048015610f0d5780601f1\
0610ee257610100808354040283529160200191610f0d565b8201919060\
00526020600020905b815481529060010190602001808311610ef057829\
003601f168201915b505050505081565b600260009054906101000a9004\
73ffffffffffffffffffffffffffffffffffffffff1673fffffffffffff\
fffffffffffffffffffffffffff163373ffffffffffffffffffffffffff\
ffffffffffffff16141515610f7157600080fd5b600073fffffffffffff\
fffffffffffffffffffffffffff168173ffffffffffffffffffffffffff\
ffffffffffffff1614151515610fad57600080fd5b6001600a601461010\
00a81548160ff02191690831515021790555080600a60006101000a8154\
8173ffffffffffffffffffffffffffffffffffffffff021916908373fff\
fffffffffffffffffffffffffffffffffffff1602179055507fcc358699\
805e9a8b7f77b522628c7cb9abd07d9efb86b6fb616af1609036a99e816\
04051808273ffffffffffffffffffffffffffffffffffffffff1673ffff\
ffffffffffffffffffffffffffffffffffff16815260200191505060405\
180910390a150565b6000600260149054906101000a900460ff16151515\
61108d57600080fd5b600a60149054906101000a900460ff16156111dd5\
7600a60009054906101000a900473ffffffffffffffffffffffffffffff\
ffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a\
...   consume_user_resource_percent: 30,
...   name: 'TetherToken',
...   origin_address: '41517591d35d313bf6a5e33098284502b045\
e2bc08',
...   abi: {
...     entrys: [
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object], [Object], [Object],
...       [Object], [Object]
...     ]
...   },
...   origin_energy_limit: 10000000,
...   contract_address: '41a614f803b6fd780986a42c78ec9c7f77\
e6ded13c',
...   code_hash: '99bb60e56b4cd2642c6847e372b18b6e0f9514229\
e3086d3a042d60a4c7b78a9'
... }
... tronWeb.trx.getCurrentBlock()
... await tronWeb.trx.getCurrentBlock();
e6ded13c',
...   code_hash: '99bb60e56b4cd2642c6847e372b18b6e0f9514229\
e3086d3a042d60a4c7b78a9'
... }
... tronWeb.trx.getCurrentBlock()
... await tronWeb.trx.getCurrentBlock();
... {
...   blockID: '00000000000dc73a584b91846ed22d8359f1cf45407\
c9159b4bac9f1e2b018de',
...   block_header: {
...     raw_data: {
...       number: 902970,
...       txTrieRoot: '6ada20705dc3b74d089dc8188792d0162747\
d634fd6deec60717c1b4fc518af0',
...       witness_address: '41f16412b9a17ee9408646e2a21e164\
...   block_header: {
...     raw_data: {
...       number: 902970,
...       txTrieRoot: '6ada20705dc3b74d089dc8188792d0162747\
d634fd6deec60717c1b4fc518af0',
...       witness_address: '41f16412b9a17ee9408646e2a21e164\
78f72ed1e95',
...       parentHash: '00000000000dc739de1b856885cd8b5a8837\
bbd0cfd433833bee19e7b5466bd1',
...       version: 9,
...       timestamp: 1578303678000
...     },
...     witness_signature: 'b81af83a8a0c65bfa7d9224a0ba3c65\
3dce338f1e2147e68d3a7b66194dfaffc719f7d03db719b1065059bdcdb\
e97652b28662df594279db849000b69c222fc900'
...   },
...   transactions: [
...     {
...       ret: [Array],
3dce338f1e2147e68d3a7b66194dfaffc719f7d03db719b1065059bdcdb\
e97652b28662df594279db849000b69c222fc900'
...   },
...   transactions: [
...     {
...       ret: [Array],
...       signature: [Array],
...       txID: '90be204670e96c06ed4e0e0a4d456afe6cec09febd\
e545b097dbdad1f05dfe0c',
...       raw_data: [Object],
...       raw_data_hex: '0a02c738220885a8d77bfd78c7db40a0f2\
eed1f72d5a6d081f12690a31747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261\
637412340a154113b34f700df122b6ba91e3660bb677d0a919a22312154\
1ca21da4a68a41244830072fdd8190cba5e08fb9322043d1f890270ceb0\
ebd1f72d9001c0843d'
...     },
...     {
...       ret: [Array],
...       signature: [Array],
1ca21da4a68a41244830072fdd8190cba5e08fb9322043d1f890270ceb0\
ebd1f72d9001c0843d'
...     },
...     {
...       ret: [Array],
...       signature: [Array],
...       txID: '0d148d1e2ca701103660211a0ce520b6b9fec5a59a\
...     {
...       ret: [Array],
...       signature: [Array],
...       txID: '0d148d1e2ca701103660211a0ce520b6b9fec5a59a\
dc8a85b0da9b522230fab5',
...       raw_data: [Object],
...       raw_data_hex: '0a02c7392208de1b856885cd8b5a40d889\
efd1f72d5a9301081f128e010a31747970652e676f6f676c65617069732\
e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e74\
...       ret: [Array],
...       signature: [Array],
...       txID: '0d148d1e2ca701103660211a0ce520b6b9fec5a59a\
dc8a85b0da9b522230fab5',
...       raw_data: [Object],
...       raw_data_hex: '0a02c7392208de1b856885cd8b5a40d889\
efd1f72d5a9301081f128e010a31747970652e676f6f676c65617069732\
e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e74\
7261637412590a15416144eecc1ae0b4f51cfb6379137d8b5d04f75b461\
21541cd95a6792ce3b444a7c763eee30f66f73ab76d87188092f4012224\
6898f82b000000000000000000000000000000000000000000000000000\
000000000001970b1b8ebd1f72d900180c2d72f'
...     }
...   ]
... }
... tronWeb.trx.getCurrentRefBlockParams()
... await tronWeb.trx.getCurrentRefBlockParams();
... {
...     }
...   ]
... }
... tronWeb.trx.getCurrentRefBlockParams()
... await tronWeb.trx.getCurrentRefBlockParams();
... {
...   ref_block_bytes: '0015',
...   ref_block_hash: 'a7e9b8b30827c333',
...   expiration: 1760932113000,
...   timestamp: 1760932053000
... }
... tronWeb.trx.getDelegatedResourceAccountIndexV2(address,\
 options)
... await tronWeb.trx.getDelegatedResourceAccountIndexV2('T\
MVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC');
... {
...     "account": "TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC",
...     "fromAccounts": [
...         "TKTX96CBxr5kvhjsDHcqoiPWZageGxoTW3"
...     ],
...     "toAccounts": [
...         "TDvSsdrNM5eeXNL3czpa6AxLDHZA9nwe9K"
...     ]
... }
... tronWeb.trx.getDelegatedResourceV2(fromAddress, toAddre\
ss, options)
... await tronWeb.trx.getDelegatedResourceV2('TMVQGm1qAQYVd\
etCeGRRkTWYYrLXuHK2HC', 'TDvSsdrNM5eeXNL3czpa6AxLDHZA9nwe9K\
');
... {
...     "delegatedResource": [
...         {
...             "from": "TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC\
",
...             "to": "TDvSsdrNM5eeXNL3czpa6AxLDHZA9nwe9K",
...             "frozen_balance_for_bandwidth": 10000000
...         }
...     ]
... }
... await tronWeb.trx.getEnergyPrices();
... //Example 1
... await tronWeb.trx.getEnergyPrices();
... "0:100"
... tronWeb.trx.getExchangeByID(exchange_id);
... await tronWeb.trx.getExchangeByID(1);
... {
...   exchange_id: 1,
...   creator_address: '410ca7c49aa44d26aabfe7f594c645cf9f1\
7a4ff70',
...   create_time: 1575754887000,
...   first_token_id: '31303030303033',
...   first_token_balance: 999902,
...   second_token_id: '5f',
...   second_token_balance: 200020000000
... }
... tronWeb.trx.getNodeInfo();
31303030303033',
...   first_token_balance: 999902,
...   second_token_id: '5f',
...   second_token_balance: 200020000000
... }
... tronWeb.trx.getNodeInfo();
... 





















...     versionNum: '11171'
...   },
...   currentConnectCount: 1,
...   machineInfo: {
...     cpuCount: 8,
...     cpuRate: 0.006535947712418301,
...     deadLockThreadCount: 0,
...     deadLockThreadInfoList: [],
...   },
...   currentConnectCount: 1,
...   machineInfo: {
...     cpuCount: 8,
...     cpuRate: 0.006535947712418301,
...     deadLockThreadCount: 0,
...     deadLockThreadInfoList: [],
...     freeMemory: 29074096128,
...     javaVersion: '1.8.0_181',
...     jvmFreeMemory: 22410225552,
...     jvmTotalMemoery: 22576889856,
...     memoryDescInfoList: [ [Object], [Object], [Object],\
 [Object], [Object], [Object] ],
...     osName: 'Linux 4.14.109-99.92.amzn2.x86_64',
...     processCpuRate: 0.007625272331154684,
...     jvmFreeMemory: 22410225552,
...     jvmTotalMemoery: 22576889856,
...     memoryDescInfoList: [ [Object], [Object], [Object],\
 [Object], [Object], [Object] ],
...     osName: 'Linux 4.14.109-99.92.amzn2.x86_64',
...     processCpuRate: 0.007625272331154684,
...     threadCount: 132,
...     totalMemory: 33069928448
...   },
...   passiveConnectCount: 0,
...   peerList: [
...     {
...       active: true,
...       avgLatency: 171,
...       blockInPorcSize: 0,
...       connectTime: 1575594733742,
...       disconnectTimes: 0,
...       headBlockTimeWeBothHave: 0,
...       headBlockWeBothHave: 'Num:240,ID:00000000000000f0\
b0ad46de952b5c48f97fa4944a2a776ce80d3389335da06c',
...       host: '34.215.253.209',
...       inFlow: 215274,
...       lastBlockUpdateTime: 1575594739897,
...       lastSyncBlock: '',
...       localDisconnectReason: '',
...       needSyncFromPeer: false,
...       needSyncFromUs: false,
...       nodeCount: 0,
...       nodeId: '75b47073fd226a762cd6ee874d9e7a6c22eb3428\
4e2db4f63777855f3fc4a1e6a2455974531ba730ce2d9f946485a394fcb\
870db61abcaf7c02ddef186ce67d6',
...       port: 16666,
...       remainNum: 0,
...       remoteDisconnectReason: '',
...       score: 0,
...       syncBlockRequestedSize: 0,
...       syncFlag: false,
...       syncToFetchSize: 0,
...       syncToFetchSizePeekNum: -1,
...       unFetchSynNum: 0
...     }
...   ],
...   solidityBlock: 'Num:988332,ID:00000000000f14ac2df439b\
094ee3011f6944416de895d76030eb556cada772c',
...   totalFlow: 215274
... }
... tronWeb.trx.getReward(address)
... //Parameter Base58
...   solidityBlock: 'Num:988332,ID:00000000000f14ac2df439b\
094ee3011f6944416de895d76030eb556cada772c',
...   totalFlow: 215274
... }
... tronWeb.trx.getReward(address)
... //Parameter Base58
... await tronWeb.trx.getReward("TTSFjEG3Lu9WkHdp4JrWYhbGP6\
K1REqnGQ");
... 0
... //Parameter HexString
... await tronWeb.trx.getReward("41BF97A54F4B829C4E9253B260\
24B1829E1A3B1120");
... 0
... tronWeb.trx.getSignWeight(transaction_object);
... await tronWeb.trx.getSignWeight({'visible': true, 'sign\
ature': ['1fd210045f5bdcf375cd478cf46ff735f132281b990bc199a\
cf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6\
a2422edb313b9139075300'], 'txID': 'ee188aaf5cf78729d2d14d4d\
b698126da2d75ef78a43837dafd6e6f591d103a2', 'raw_data': {'co\
ntract': [{'parameter': {'value': {'amount': 125000000, 'ow\
ner_address': 'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 'to_add\
ress': 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ'}, 'type_url': '\
type.googleapis.com/protocol.TransferContract'}, 'type': 'T\
ransferContract'}], 'ref_block_bytes': 'c251', 'ref_block_h\
ash': '5c685c92bf035e72', 'expiration': 1578299967000, 'tim\
estamp': 1578299909600}, 'raw_data_hex': '0a02c25122085c685\
c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f67\
6c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436\
f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb714\
0cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3\
b70e0cb85d0f72d'});
... {
...   result: {},
...   approved_list: [ 'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP'\
 ],
...   permission: { keys: [ [Object] ], threshold: 1, permi\
ssion_name: 'owner' },
...   current_weight: 1,
...   transaction: {
...     result: { result: true },
...     txid: 'ee188aaf5cf78729d2d14d4db698126da2d75ef78a43\
837dafd6e6f591d103a2',
...     transaction: {
...   current_weight: 1,
...   transaction: {
...     result: { result: true },
...     txid: 'ee188aaf5cf78729d2d14d4db698126da2d75ef78a43\
837dafd6e6f591d103a2',
...     transaction: {
...       signature: [Array],
...       txID: 'ee188aaf5cf78729d2d14d4db698126da2d75ef78a\
43837dafd6e6f591d103a2',
...       raw_data: [Object],
...       raw_data_hex: '0a02c25122085c685c92bf035e7240988c\
89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e5472616e73666572436f6e74726163741233\
0a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54\
f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d'
...     }
...   }
... }
... tronWeb.trx.getTokenByID(tokenID);
... //example 1
... await tronWeb.trx.getTokenByID(1002000);
... {
...   owner_address: '4137fa1a56eb8c503624701d776d95f6dae1d\
9f0d6',
...   name: 'BitTorrent',
...   abbr: 'BTT',
...   total_supply: 990000000000000000,
...   trx_num: 1,
...   precision: 6,
...   num: 1,
...   start_time: 1548000000000,
...   end_time: 1548000001000,
...   description: 'Official Token of BitTorrent Protocol',
...   url: 'www.bittorrent.com',
...   id: '1002000'
... }
... 
... //example 2
... tronWeb.trx.getTokenByID('1002000').then(result => {con\
sole.log(result)});
... {
...   owner_address: '4137fa1a56eb8c503624701d776d95f6dae1d\
... 
... //example 2
... tronWeb.trx.getTokenByID('1002000').then(result => {con\
sole.log(result)});
... {
...   owner_address: '4137fa1a56eb8c503624701d776d95f6dae1d\
9f0d6',
...   name: 'BitTorrent',
...   abbr: 'BTT',
...   total_supply: 990000000000000000,
...   trx_num: 1,
...   precision: 6,
...   num: 1,
...   start_time: 1548000000000,
...   end_time: 1548000001000,
...   description: 'Official Token of BitTorrent Protocol',
...   url: 'www.bittorrent.com',
...   id: '1002000'
... }
... tronWeb.trx.getTokenFromID(tokenID);
... //example 1
... await tronWeb.trx.getTokenFromID(1002000);
... {
...   owner_address: '4137fa1a56eb8c503624701d776d95f6dae1d\
9f0d6',
...   name: 'BitTorrent',
...   abbr: 'BTT',
...   total_supply: 990000000000000000,
...   trx_num: 1,
...   precision: 6,
...   num: 1,
...   start_time: 1548000000000,
...   end_time: 1548000001000,
...   description: 'Official Token of BitTorrent Protocol',
...   url: 'www.bittorrent.com',
...   id: '1002000'
... }
... 
... //example 2
... await tronWeb.trx.getTokenFromID("1002000");
... {
...   owner_address: '4137fa1a56eb8c503624701d776d95f6dae1d\
9f0d6',
...   name: 'BitTorrent',
...   abbr: 'BTT',
...   total_supply: 990000000000000000,
...   trx_num: 1,
...   precision: 6,
...   num: 1,
...   start_time: 1548000000000,
...   end_time: 1548000001000,
...   description: 'Official Token of BitTorrent Protocol',
...   url: 'www.bittorrent.com',
...   id: '1002000'
... }
... tronWeb.trx.getTokenListByName(tokenName);
... await tronWeb.trx.getTokenListByName("BTT");
... [
...   {
...   description: 'Official Token of BitTorrent Protocol',
...   url: 'www.bittorrent.com',
...   id: '1002000'
... }
... tronWeb.trx.getTokenListByName(tokenName);
... await tronWeb.trx.getTokenListByName("BTT");
... [
...   {
...     owner_address: '4113189bb13f1ec4f45c88526bd05482f48\
2c06a11',
...     name: 'BTT',
...     abbr: 'BTT',
...     total_supply: 100000000000000,
...     frozen_supply: [ [Object] ],
...     trx_num: 1000000,
...     num: 1,
...     start_time: 1547456580180,
...     end_time: 1547715780180,
...     description: 'BitTorrent',
...     url: 'BitTorrent',
...     id: '1001927'
...   },
...   {
...     owner_address: '41f4204dec09b1899444d851dd54fbfc213\
97e20ab',
...     name: 'BTT',
...     abbr: 'BTT',
...     total_supply: 999000000000000000,
...     frozen_supply: [ [Object] ],
...     trx_num: 1000000,
...     precision: 6,
...     num: 1000000,
...     start_time: 1549987200000,
...     end_time: 1550073600000,
...     description: 'BTT Candy',
...     url: 'www.bittorrent.com',
...     id: '1002083'
...   },
...   {
...     owner_address: '41d2bcae5375057098726f8b8d839c80374\
99d38c5',
...     name: 'BTT',
...     abbr: 'BTT',
...     total_supply: 1000000000000000000,
...     frozen_supply: [ [Object] ],
...     trx_num: 1000000,
...     precision: 6,
...     num: 244000000,
...     start_time: 1555948800000,
...     end_time: 1577376000000,
...     description: 'BTT',
...     frozen_supply: [ [Object] ],
...     trx_num: 1000000,
...     precision: 6,
...     num: 244000000,
...     start_time: 1555948800000,
...     end_time: 1577376000000,
...     description: 'BTT',
...     url: 'COM',
...     id: '1002334'
...   }
... ]
... tronWeb.trx.getTokensIssuedByAddress(address);
... //example 1
... await tronWeb.trx.getTokensIssuedByAddress("TF5Bn4cJCT6\
GVeUgyCN4rBhDg42KBrpAjg");
... {
...   BitTorrent: {
...     owner_address: '4137fa1a56eb8c503624701d776d95f6dae\
1d9f0d6',
...     name: 'BitTorrent',
...     abbr: 'BTT',
...     total_supply: 990000000000000000,
...     trx_num: 1,
...     precision: 6,
...     num: 1,
...     start_time: 1548000000000,
...     end_time: 1548000001000,
...     description: 'Official Token of BitTorrent Protocol\
',
...     url: 'www.bittorrent.com',
...     id: '1002000'
...   }
... }
... 
... //example 2
... }
... 
... //example 2
... await tronWeb.trx.getTokensIssuedByAddress("4137fa1a56e\
b8c503624701d776d95f6dae1d9f0d6");
... {
...   BitTorrent: {
...     owner_address: '4137fa1a56eb8c503624701d776d95f6dae\
1d9f0d6',
...     name: 'BitTorrent',
...     abbr: 'BTT',
...     total_supply: 990000000000000000,
...     trx_num: 1,
...     precision: 6,
...     num: 1,
...     start_time: 1548000000000,
...     end_time: 1548000001000,
...     description: 'Official Token of BitTorrent Protocol\
',
...     url: 'www.bittorrent.com',
...     id: '1002000'
...   }
... }
... tronWeb.trx.getTransaction(txID);
... await tronWeb.trx.getTransaction("0daa9f2507c4e79e39391\
ea165bb76ed018c4cd69d7da129edf9e95f0dae99e2");
... {
...   ret: [ { contractRet: 'SUCCESS' } ],
...   signature: [
...     '220307de6341f7b59ff9563f50db3ab23ae53df0548aacdc6b\
569b094463cddd81a0a1e3e06b19bf344f94e25e8e5625374e81232ce8f\
b404db447666562661600'
...   ],
...   txID: '0daa9f2507c4e79e39391ea165bb76ed018c4cd69d7da1\
29edf9e95f0dae99e2',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'cfbe',
...     ref_block_hash: '071499db194adbc4',
...     expiration: 1551102345000,
...     fee_limit: 10000000,
...     timestamp: 1551102288525
...   },
...   raw_data_hex: '0a02cfbe2208071499db194adbc440a8fe9da7\
922d5af001081f12eb010a31747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261\
637412b5010a1541880e4776dfcf38dfe00d399d31738abc773634e8121\
541eb8f23b15acbc0245a4dbbd820b9bde368b02d612284014977468300\
0000000000000000000000ce3747fa895a899209c10ef1b4a41141b51b8\
a48e7636a372dc6d1fa95122bc282de912888dace410099e5c28d9a86ec\
9421be58000000000000000000000000000000000000000000000000000\
00000005029840000000000000000000000000000000000000000000000\
000000000000989680708dc59aa7922d900180ade204'
... }
... tronWeb.trx.getTransactionFromBlock(blockNumberOrBlockH\
00000005029840000000000000000000000000000000000000000000000\
000000000000989680708dc59aa7922d900180ade204'
... }
... tronWeb.trx.getTransactionFromBlock(blockNumberOrBlockH\
ash, index)
... //示例1
... await tronWeb.trx.getTransactionFromBlock(55636269, 0);
... {
...   ret: [ { contractRet: 'SUCCESS' } ],
...   signature: [
...     '9ee35a0e3dc506bca75da2558a3dae1b8b9c9a9841cc4478ad\
32ff2f8f2bcea93ede5cd8007858459a85fb420f4ad2e31ad0674d02a8f\
231f0fcb4105490421101'
...   ],
...   txID: 'e092065f8cd1a2ef8cd6612201a3ad8c537811683fc981\
efdc205f040eddad25',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'f11a',
...     ref_block_hash: 'ab04b2f2b405e321',
...     expiration: 1743156774000,
...     timestamp: 1743156715258
...   },
...   raw_data_hex: '0a02f11a2208ab04b2f2b405e32140f088f6e1\
dd325a67080112630a2d747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5472616e73666572436f6e747261637412320a15\
417b423f463091952d203ca5f917fd5e035a17f8ff12154120d6861364c\
8341fe02336036d500d09a67fae2d18cdb10570fabdf2e1dd32'
... }
... 
... //示例2
... await tronWeb.trx.getTransactionFromBlock("000000000350\
f12d2af360c5d2ab81752fb914fc77620cd2ca1a2bf8fc674452", 0);
... {
...   ret: [ { contractRet: 'SUCCESS' } ],
...   signature: [
...     '9ee35a0e3dc506bca75da2558a3dae1b8b9c9a9841cc4478ad\
32ff2f8f2bcea93ede5cd8007858459a85fb420f4ad2e31ad0674d02a8f\
231f0fcb4105490421101'
...   ],
...   txID: 'e092065f8cd1a2ef8cd6612201a3ad8c537811683fc981\
efdc205f040eddad25',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'f11a',
...     ref_block_hash: 'ab04b2f2b405e321',
...     expiration: 1743156774000,
...     timestamp: 1743156715258
...   },
...   raw_data_hex: '0a02f11a2208ab04b2f2b405e32140f088f6e1\
dd325a67080112630a2d747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5472616e73666572436f6e747261637412320a15\
417b423f463091952d203ca5f917fd5e035a17f8ff12154120d6861364c\
8341fe02336036d500d09a67fae2d18cdb10570fabdf2e1dd32'
... }
... tronWeb.trx.getTransactionInfo(transactionID);
a5f917fd5e035a17f8ff12154120d6861364c8341fe02336036d500d09a\
67fae2d18cdb10570fabdf2e1dd32'
... }
... tronWeb.trx.getTransactionInfo(transactionID);
... 


























































...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         '1122aa511d7a6d03bd9a760d8718b6b4a75e30dea84bd4\
e1bd682d1f846d53bb',
...        caller_address: '4121a06340817106582d3afa3b2561b\
...        note: '63616c6c' },
...      { hash:
...         '1122aa511d7a6d03bd9a760d8718b6b4a75e30dea84bd4\
e1bd682d1f846d53bb',
...        caller_address: '4121a06340817106582d3afa3b2561b\
be94cf2bd80',
...        transferTo_address: '41ce3747fa895a899209c10ef1b\
4a41141b51b8a48',
...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         'b572d44ee89ed376c4aebb7b07c2839d93a745bc887be4\
299351cb205dbde7c3',
...        caller_address: '412ec5f63da00583085d4c2c5e8ec3c\
8d17bde5e28',
...        transferTo_address: '41af16843d1b471364576015e40\
...      { hash:
...         'b572d44ee89ed376c4aebb7b07c2839d93a745bc887be4\
299351cb205dbde7c3',
...        caller_address: '412ec5f63da00583085d4c2c5e8ec3c\
8d17bde5e28',
...        transferTo_address: '41af16843d1b471364576015e40\
62cdc3f2628eb62',
...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         '6cdd8fb92aab8dd2b243c73905ec32455b732cab0eaa7a\
cf63c0a637b6fcdeb5',
...        caller_address: '412ec5f63da00583085d4c2c5e8ec3c\
8d17bde5e28',
...        transferTo_address: '4121a06340817106582d3afa3b2\
561bbe94cf2bd80',
...        callValueInfo: [Array],
...         '6cdd8fb92aab8dd2b243c73905ec32455b732cab0eaa7a\
cf63c0a637b6fcdeb5',
...        caller_address: '412ec5f63da00583085d4c2c5e8ec3c\
8d17bde5e28',
...        transferTo_address: '4121a06340817106582d3afa3b2\
561bbe94cf2bd80',
...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         'f779cbb64fb591920fd1a3a5874f34b703c69303a53c04\
8c1e8dd8e1085d3665',
...        caller_address: '4121a06340817106582d3afa3b2561b\
be94cf2bd80',
...        transferTo_address: '411a44e676d4864660d984f6d1f\
4eb06d0f5cc5208',
...        callValueInfo: [Array],
...        note: '63616c6c' },
8c1e8dd8e1085d3665',
...        caller_address: '4121a06340817106582d3afa3b2561b\
be94cf2bd80',
...        transferTo_address: '411a44e676d4864660d984f6d1f\
4eb06d0f5cc5208',
...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         '575d9e67fe92eed1dae43dfed81ddf9c867228e37b764c\
556e921fd0b2cb7bc8',
...        caller_address: '412ec5f63da00583085d4c2c5e8ec3c\
8d17bde5e28',
...        transferTo_address: '4121a06340817106582d3afa3b2\
561bbe94cf2bd80',
...        callValueInfo: [Array],
...        note: '63616c6c' },
...      { hash:
...         '1b61a5a8348084fb8ebdbf108fe871b06198cf6b7ae396\
3087f68aa672a978c0',
...        caller_address: '4121a06340817106582d3afa3b2561b\
be94cf2bd80',
...        transferTo_address: '411a44e676d4864660d984f6d1f\
4eb06d0f5cc5208',
...        callValueInfo: [Array],
...        note: '63616c6c' } ] }
...        tronWeb.trx.getUnconfirmedBalance(address);
...        //Parameter Base58
... await tronWeb.trx.getUnconfirmedBalance('TTSFjEG3Lu9WkH\
dp4JrWYhbGP6K1REqnGQ');
... 29340074430
...          
... //Parameter HexString
... await tronWeb.trx.getUnconfirmedBalance('41BF97A54F4B82\
9C4E9253B26024B1829E1A3B1120');
... 29340074430
... tronWeb.trx.getUnconfirmedBrokerage(address)
... //Parameter Base58
... await tronWeb.trx.getUnconfirmedBrokerage("TLyqzVGLV1sr\
kB7dToTAEqgDSfPtXRJZYH");
... 20
9C4E9253B26024B1829E1A3B1120');
... 29340074430
... tronWeb.trx.getUnconfirmedBrokerage(address)
... //Parameter Base58
... await tronWeb.trx.getUnconfirmedBrokerage("TLyqzVGLV1sr\
kB7dToTAEqgDSfPtXRJZYH");
... 20
... 
... //Parameter HexString
... await tronWeb.trx.getUnconfirmedBrokerage("4178C842EE63\
B253F8F0D2955BBC582C661A078C9D");
... 20
... tronWeb.trx.getUnconfirmedReward(address)
... //Parameter Base58
... await tronWeb.trx.getUnconfirmedReward("TTSFjEG3Lu9WkHd\
p4JrWYhbGP6K1REqnGQ");
... 0
... 
... //Parameter HexString
... await tronWeb.trx.getUnconfirmedReward("41BF97A54F4B829\
C4E9253B26024B1829E1A3B1120");
... 0
... tronWeb.trx.getUnconfirmedTransactionInfo(txID);
... await tronWeb.trx.getUnconfirmedTransactionInfo("f6b72d\
da65682b858c1c1980710aad7955fbf6db91c66840da0f852fc3cc694b"\
);
... {
...   id: 'f6b72dda65682b858c1c1980710aad7955fbf6db91c66840\
da0f852fc3cc694b',
...   fee: 47350,
...   blockNumber: 16239601,
...   blockTimeStamp: 1578974295000,
...   contractResult: [
...     '00000000000000000000000000000000000000000000000000\
00000000000000'
...   ],
...   contract_address: '41a614f803b6fd780986a42c78ec9c7f77\
e6ded13c',
...   receipt: {
...     energy_fee: 43900,
...     origin_energy_usage: 10241,
...     energy_usage_total: 14631,
...     net_fee: 3450,
...     result: 'SUCCESS'
...   },
...   log: [
...     {
...       address: 'a614f803b6fd780986a42c78ec9c7f77e6ded13\
c',
...       topics: [Array],
...       data: '000000000000000000000000000000000000000000\
0000000000000b734e2770'
...     }
...   ]
... }
... tronWeb.trx.listExchanges();
  topics: [Array],
...       data: '000000000000000000000000000000000000000000\
0000000000000b734e2770'
...     }
...   ]
... }
... tronWeb.trx.listExchanges();
... 






























































































































































































































































































































































































































































































































































































































































































































































































































































































































...     first_token_balance: 3000000,
...     second_token_id: '31303031323734',
...     second_token_balance: 791652
...   },
...   {
...     exchange_id: 74,
...     creator_address: '41a6abd8cf33e18c985f481d52bd06100\
287281b06',
...     second_token_id: '31303031323734',
...     second_token_balance: 791652
...   },
...   {
...     exchange_id: 74,
...     creator_address: '41a6abd8cf33e18c985f481d52bd06100\
287281b06',
...     create_time: 1542634257000,
...     first_token_id: '31303031313037',
...     first_token_balance: 692481,
...     second_token_id: '5f',
...     second_token_balance: 1445690508849
...   },
...   {
...     exchange_id: 73,
...     creator_address: '415eb394c217794b896c11dec41f156e0\
b43fe388f',
...     create_time: 1542609660000,
...     first_token_id: '31303030363731',
...     first_token_balance: 19054114,
...     second_token_id: '5f',
...     second_token_balance: 199695146
...   },
...   {
...     exchange_id: 72,
...     creator_address: '4123ecabe27eaf7fe85ac359d8b375842\
5d4a8ea36',
...     create_time: 1542606510000,
...     first_token_id: '31303031313536',
...     first_token_balance: 9614605,
...     second_token_id: '5f',
...     exchange_id: 72,
...     creator_address: '4123ecabe27eaf7fe85ac359d8b375842\
5d4a8ea36',
...     create_time: 1542606510000,
...     first_token_id: '31303031313536',
...     first_token_balance: 9614605,
...     second_token_id: '5f',
...     second_token_balance: 14798180
...   },
...   {
...     exchange_id: 71,
...     creator_address: '4175c0e3dab0892bd45580eb2c2e107f6\
b08ea6d3b',
...     create_time: 1542603054000,
...     first_token_id: '31303030393435',
...     first_token_balance: 863812,
...     second_token_id: '5f',
...     second_token_balance: 13827351884
...   },
...   {
...     exchange_id: 70,
...     creator_address: '417cdf602eac0c7506db589625441816c\
4490eb3cd',
...     create_time: 1542599436000,
...     first_token_id: '31303031343434',
...     first_token_balance: 314120423,
...     second_token_id: '5f',
...     second_token_balance: 767070384
...   },
...   ... 69 more items
... ]
... tronWeb.trx.listExchangesPaginated(Limit, Offset);
... await tronWeb.trx.listExchangesPaginated(2, 0);
... [
...   {
...     exchange_id: 1,
...     creator_address: '41f596e85bfd042744f76880979a133da\
0728679d9',
...     create_time: 1539673398000,
...     first_token_id: '31303030353634',
...     first_token_balance: 174,
...     second_token_id: '5f',
...     second_token_balance: 85199
...   },
...   {
...     exchange_id: 2,
...     creator_address: '41cd3444bd2d493628b14d6dcec93181e\
15f94d169',
...     create_time: 1541678472000,
...     first_token_id: '31303031333035',
...     first_token_balance: 128,
...     second_token_id: '5f',
...     second_token_balance: 15102
...   }
... ]
... tronWeb.trx.listNodes();
 '31303031333035',
...     first_token_balance: 128,
...     second_token_id: '5f',
...     second_token_balance: 15102
...   }
... ]
... tronWeb.trx.listNodes();
... 







.89.243.195:18888',
...   '8.208.8.242:18888',     '47.252.76.45:18888',    '18\
.231.88.120:18888',
...   '47.90.189.19:18888',    '138.201.200.145:28888', '47\
.74.35.73:18888',
...   '13.237.186.239:18888',  '84.239.4.144:18888',    '47\
.75.74.31:18888',
...   '8.208.8.242:18888',     '47.252.76.45:18888',    '18\
.231.88.120:18888',
...   '47.90.189.19:18888',    '138.201.200.145:28888', '47\
.74.35.73:18888',
...   '13.237.186.239:18888',  '84.239.4.144:18888',    '47\
.75.74.31:18888',
...   '95.164.54.98:18888',    '47.245.3.27:18888',     '13\
.210.151.5:18888',
...   '47.254.77.236:18888',   '54.77.48.61:5001',      '47\
.74.229.70:18888',
...   '106.75.250.172:18888',  '47.90.189.194:18888',   '61\
.74.109.22:18888',
...   '18.237.66.156:18888',   '192.169.81.142:18888',  '34\
.247.231.60:18888',
...   '13.229.103.17:18888',   '47.254.71.253:18888',   '47\
.74.45.99:18888',
...   '103.214.144.65:18888',  '47.75.246.83:18888',    '47\
.74.242.55:18888',
...   '47.90.240.187:18888',   '18.182.120.69:18888',   '82\
.77.66.43:18888',
...   '82.217.113.172:18888',  '13.231.114.67:18888',   '77\
.237.249.180:18888',
...   '77.237.249.182:18888',  '188.93.90.3:18888',     '47\
.254.68.153:18888',
...   '39.115.219.191:18888',  '3.10.70.76:18888',      '18\
.184.239.103:18888',
...   '138.201.220.222:28888', '84.239.4.57:18888',     '84\
.239.4.44:18888',
...   '13.75.127.122:18888',   '13.229.226.142:18888',  '3.\
218.137.187:18888',
...   '18.221.236.66:18888',   '52.15.93.92:18888',     '47\
.52.108.145:18888',
...   '47.75.193.143:18888',   '54.180.146.193:18888',  '47\
.74.224.123:18888',
...   '34.222.78.94:18888',    '47.75.65.115:18888',    '47\
.91.19.201:18888',
...   '210.242.27.237:18888',  '94.130.255.100:18888',  '47\
.245.6.111:18888',
...   '34.222.185.204:18888',  '52.63.185.80:18888',    '35\
.154.204.119:18888',
...   '3.115.19.254:18888',    '47.89.182.29:18888',    '47\
.89.251.167:18888',
...   '82.192.82.6:18888',     '18.196.99.16:18888',    '50\
.225.198.67:6757',
...   '138.201.200.145:18888', '47.88.60.225:18888',    '8.\
208.10.74:18888',
...   '149.202.210.187:18888', '159.203.181.175:18888', '52\
.50.149.227:5001',
...   '47.89.242.50:18888',    '47.74.49.108:18888',    '47\
.75.249.119:18888',
...   '47.254.157.51:18888',   '35.167.163.158:18888',  '12\
3.57.67.69:18888',
...   '173.255.212.68:18888',
...   ... 195 more items
... ]
... tronWeb.trx.listProposals();
.51:18888',   '35.167.163.158:18888',  '123.57.67.69:18888'\
,
...   '173.255.212.68:18888',
...   ... 195 more items
...     proposer_address: '414d1ef8673f916debb7e2515a8f3eca\
f2611034aa',
...     parameters: [ [Object] ],
...     expiration_time: 1572955200000,
...     create_time: 1572682965000,
...     approvals: [
...       '414d1ef8673f916debb7e2515a8f3ecaf2611034aa',
f2611034aa',
...     parameters: [ [Object] ],
...     expiration_time: 1572955200000,
...     create_time: 1572682965000,
...     approvals: [
...       '414d1ef8673f916debb7e2515a8f3ecaf2611034aa',
...       '41de9c3c2276abe2da70a7cdb34a205ecf7750d063',
...       '41d25855804e4e65de904faf3ac74b0bdfc53fac76',
...       '4184399fc6a98edc11a6efb146e86a3e153d0a0933',
...       '4124443254e2d1f3e1f55521d518bd875138f4173c',
...       '41496e85711fa3b7ba5a093af635269a67230ac2c1',
...       '4167e39013be3cdd3814bed152d7439fb5b6791409',
...       '411103d62d8299e90fa011b4ce7fc6ba151e5f1a23',
...       '41c189fa6fc9ed7a3580c3fe291915d5c6a6259be7',
...       '4178c842ee63b253f8f0d2955bbc582c661a078c9d',
...       '4192c5d96c3b847268f4cb3e33b87ecfc67b5ce3de'
...     ],
...     state: 'DISAPPROVED'
...   },
...   {
...     proposal_id: 27,
...     proposer_address: '41d376d829440505ea13c9d1c455317d\
51b62e4ab6',
...     parameters: [ [Object], [Object] ],
...     expiration_time: 1572933600000,
...     create_time: 1572673746000,
...     approvals: [
...       '41d376d829440505ea13c9d1c455317d51b62e4ab6',
...       '41de9c3c2276abe2da70a7cdb34a205ecf7750d063',
...       '41a4475dbd14feb2221f303fc33dc8d0a08f25f445',
...       '4184399fc6a98edc11a6efb146e86a3e153d0a0933',
...       '4167e39013be3cdd3814bed152d7439fb5b6791409',
...       '4124443254e2d1f3e1f55521d518bd875138f4173c',
...     approvals: [
...       '41d376d829440505ea13c9d1c455317d51b62e4ab6',
...       '41de9c3c2276abe2da70a7cdb34a205ecf7750d063',
...       '41a4475dbd14feb2221f303fc33dc8d0a08f25f445',
...       '4184399fc6a98edc11a6efb146e86a3e153d0a0933',
...       '4167e39013be3cdd3814bed152d7439fb5b6791409',
...       '4124443254e2d1f3e1f55521d518bd875138f4173c',
...       '41496e85711fa3b7ba5a093af635269a67230ac2c1',
...       '411103d62d8299e90fa011b4ce7fc6ba151e5f1a23',
...       '41c189fa6fc9ed7a3580c3fe291915d5c6a6259be7',
...       '4178c842ee63b253f8f0d2955bbc582c661a078c9d',
...       '415863f6091b8e71766da808b1dd3159790f61de7d',
...       '414d1ef8673f916debb7e2515a8f3ecaf2611034aa',
...       '41d25855804e4e65de904faf3ac74b0bdfc53fac76',
...       '4138e3e3a163163db1f6cfceca1d1c64594dd1f0ca',
...       '41b3eec71481e8864f0fc1f601b836b74c40548287',
...       '41f29f57614a6b201729473c837e1d2879e9f90b8e',
...       '41bac7378c4265ad2739772337682183b8864f517a',
...       '4118e2e1c6cdf4b74b7c1eb84682e503213a174955',
...       '41e40302d6b5e889bfbd395ed884638d7f03ee3f87',
...       '41c81107148e5fa4b4a2edf3d5354db6c6be5b5549',
...       '418a445facc2aa94d72292ebbcb2a611e9fd8a6c6e',
...       '41c05142fd1ca1e03688a43585096866ae658f2cb2',
...       '412d7bdb9846499a2e5e6c5a7e6fb05731c83107c7',
...       '4192c5d96c3b847268f4cb3e33b87ecfc67b5ce3de'
...     ],
...     state: 'APPROVED'
...   },
...     ... //more items
...     tronWeb.trx.listSuperRepresentatives();
...     await tronWeb.trx.listSuperRepresentatives();
... [
...   {
...     address: '417bdd2efb4401c50b6ad255e6428ba688e0b83f8\
1',
...     voteCount: 280515210,
...     url: 'https://minergate.com',
...     totalProduced: 280912,
...     totalMissed: 672,
...     latestBlockNum: 16214311,
...     latestSlotNum: 526299468,
...     isJobs: true
...     totalProduced: 280912,
...     totalMissed: 672,
...     latestBlockNum: 16214311,
...     latestSlotNum: 526299468,
...     isJobs: true
...   },
...   {
...     address: '4138e3e3a163163db1f6cfceca1d1c64594dd1f0c\
a',
...     voteCount: 256034164,
...     url: 'https://twitter.com/justinsuntron',
...     totalProduced: 549168,
...     totalMissed: 1712,
...     latestBlockNum: 16214312,
...     latestSlotNum: 526299469,
...     isJobs: true
...   },
...    ... //more items
...    tronWeb.trx.listTokens(Limit, Offset);
...    await tronWeb.trx.listTokens(2, 0);
... [
...   {
...     owner_address: '416b1171698969a36e5eb2eb6ea7aa9204d\
5e10cfc',
...     name: '!!!!GOLDCOIN',
...     abbr: 'GOLD',
...     total_supply: 9000000000000000000,
...     trx_num: 1000000,
...     num: 1000,
...     start_time: 1556094180182,
...     end_time: 1871799840182,
...     description: 'GOLD',
...     url: 'https://goldchain.xyz',
...     id: '1002341'
...   },
...   {
...     owner_address: '418f82a73b283c7bf8515fa3cc2c0399d4d\
593e2e3',
...     name: '!!!!GoldSpot!!!!',
...     abbr: 'Gold',
...     total_supply: 99000000000,
...     frozen_supply: [ [Object] ],
...     trx_num: 1000000,
...     num: 100,
...     start_time: 1559106000646,
...     end_time: 1609451940646,
...     description: 'GoldSpot follow the price of gold in \
the blockchain!!! Owners will get AGS (aGoldSpot) drop mont\
hly. GoldSpot will be upgraded to a trc20 in 2020. Invest i\
n the gold market!!! Global Gold Traders!!',
...     url: 'www.goldspot.eu',
...     id: '1002467'
...   }
... ]
... tronWeb.trx.multiSign(transaction, privateKey, permissi\
...     url: 'www.goldspot.eu',
...     id: '1002467'
...   }
... ]
... tronWeb.trx.multiSign(transaction, privateKey, permissi\
onId)
... const tradeobj = await tronWeb.transactionBuilder.freez\
eBalance(tronWeb.toSun(100), 3, "ENERGY", "415d73f56d93a938\
0a100d2a340dd30dc3df6e0746", "415d73f56d93a9380a100d2a340dd\
30dc3df6e0746");
... const signedtxn = await tronWeb.trx.multiSign(tradeobj,\
 privateKey, 2);
30dc3df6e0746");
... const signedtxn = await tronWeb.trx.multiSign(tradeobj,\
 privateKey, 2);
... console.log(signedtxn)
... {
...   "txID": "0502452a4d60e10624168e4dfbd30f549619c1a4231a\
5f1b23b2fdee7271122f",
...   "raw_data": {
...     "contract": [
...       {
...         "parameter": {
...           "value": {
...             "frozen_duration": 3,
...             "frozen_balance": 100000000,
...             "owner_address": "415d73f56d93a9380a100d2a3\
40dd30dc3df6e0746"
...           },
...           "type_url": "type.googleapis.com/protocol.Fre\
ezeBalanceContract"
...         },
...         "type": "FreezeBalanceContract",
...         "Permission_id": 0
...       }
...     ],
...     "ref_block_bytes": "0029",
...     "ref_block_hash": "085b2efaf56ed4ab",
...     "expiration": 1555112526000,
...     "timestamp": 1555112466675
...   },
...   "raw_data_hex": "0a0200292208085b2efaf56ed4ab40b081b8\
9fa12d5a58080b12540a32747970652e676f6f676c65617069732e636f6\
d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e747261\
6374121e0a15415d73f56d93a9380a100d2a340dd30dc3df6e07461080c\
2d72f180370f3b1b49fa12d",
...   "signature": [
2d72f180370f3b1b49fa12d",
...   "signature": [
...     "91d1b6d562b7aec2dc7ab52d82841ebb92d2288b01e04bd007\
5e0499559353ade4e74246d9ea002dec12e3246f7ae05714a1787b8c367\
0446cc6891a1cb9b56600",
...     "4ca79b721e4965189335a9d8324a207297bbf52f90cdd5be77\
8716817db13b2a678eacdb83b1ad38d6823606bf51b41a9810da4a86183\
61e2251205382b357eb00",
...     "672920c0e277aa84225e9441468cd425c85748599968842c7a\
39a0b7ddb6bc14e9dde4eb6d00464d0e411dd24be7ac7cdfbfcd21ca72b\
fbf7021bcfe4080e47800"
...   ]
... }
... tronWeb.trx.sendHexTransaction(signedHexTransaction);
... const receipt = await tronWeb.trx.sendHexTransaction("0\
A8A010A0202DB2208C89D4811359A28004098A4E0A6B52D5A730802126F\
0A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6\
C2E5472616E736665724173736574436F6E747261637412390A07313030\
303030311215415A523B449890854C8FC460AB602DF9F31FE4293F1A154\
16B0580DA195542DDABE288FEC436C7D5AF769D24206412418BF3F2E492\
ED443607910EA9EF0A7EF79728DAAAAC0EE2BA6CB87DA38366DF9AC4ADE\
54B2912C1DEB0EE6666B86A07A6C7DF68F1F9DA171EEE6A370B3CA9CBBB\
... tronWeb.trx.sendRawTransaction(signedTransaction);
... const tradeobj = await tronWeb.transactionBuilder.sendT\
rx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf\
16CyFgzHV2BVxBejY9iyR",1);
... const signedtxn = await tronWeb.trx.sign(tradeobj, priv\
ateKey);
... const receipt = await tronWeb.trx.sendRawTransaction(si\
gnedtxn);
... console.log(receipt)
... {
...   result: true,
...   transaction:
... {
...   result: true,
...   transaction:
...    { visible: false,
...      txID:
...       'f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e1\
5b2d003712d72c92',
...      raw_data:
...       { contract: [Array],
...         ref_block_bytes: '63c3',
...         ref_block_hash: '0d248c2bc3eb218c',
...         expiration: 1580983653000,
...         timestamp: 1580983593572 },
...      raw_data_hex:
...       '0a0263c322080d248c2bc3eb218c4088a5e0cf812e5a6508\
0112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746\
f636f6c2e5472616e73666572436f6e747261637412300a15417946f66d\
0fc67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c964\
5a2276dc9b192902e2d186470e4d4dccf812e',
...      signature:
...       [ '9aa0ca0a54b4bdfdc454f5c906eb65131eed75551b9318\
5cc78027eec86059e55c78ec1d0f28021d136fb8b446864a47736d2b29b\
74b4ce08e69a6a0167292e300' ] } }
...       tronWeb.trx.sendToken(toAddress, amount, tokenID)\
;
... //example1
... await tronWeb.trx.sendToken("TVDGpn4hCSzJ5nkHPLetk8KQBt\
waTppnkr",1000,’100010’);
... 
... //example2 
... await tronWeb.trx.sendToken("TVDGpn4hCSzJ5nkHPLetk8KQBt\
waTppnkr", 1000,’100010’,’from_address_private’);
... { result: true,
...  transaction:
...   { visible: false,
...     txID:
...      '7d3e08aed30e47d7f03062282ecaba9ac18164a5a2aa0830a\
6f4af8620c9b8ea',
...     raw_data:
...      { contract: [Array],
...        ref_block_bytes: 'b4c2',
...        ref_block_hash: '653e58b56f0a0c06',
...        expiration: 1579076202000,
...        timestamp: 1579076144747 },
...     raw_data_hex:
...      '0a02b4c22208653e58b56f0a0c064090dc9ac2fa2d5a73080\
2126f0a32747970652e676f6f676c65617069732e636f6d2f70726f746f\
636f6c2e5472616e736665724173736574436f6e747261637412390a073\
13030303030311215417946f66d0fc67924da0ac9936183ab3b07c81126\
1a1541d3136787e667d1e055d2cd5db4b5f6c880563049200a70eb9c97c\
2fa2d',
...     signature:
...      [ '29d1db1203a3eb163b2602181cd77b1bbf1010bd66490b9\
f023d5cfbf22950892103ffefaf5c85d6894bd2baa27975d2ce456d1212\
10a44a618791a2d36d82b301' ] } }
...      tronWeb.trx.sendTransaction(toAddress, amount);
...      //example1
... await tronWeb.trx.sendTransaction("TVDGpn4hCSzJ5nkHPLet\
k8KQBtwaTppnkr", 1000);
... 
... //example2 
... await tronWeb.trx.sendTransaction("TVDGpn4hCSzJ5nkHPLet\
k8KQBtwaTppnkr", 1000, 'from_address_private');
... {
...   result: true,
...   transaction:
...    { visible: false,
...      txID:
...   result: true,
...   transaction:
...    { visible: false,
...      txID:
...       'f8f70731df59b4d7d8159df705f0f7289cd2a037187dda04\
3e28c77287b12e11',
...      raw_data:
...       { contract: [Array],
...         ref_block_bytes: 'b3e2',
...         ref_block_hash: '3778f8d30f91eb00',
...         expiration: 1579075530000,
...         timestamp: 1579075470470 },
...      raw_data_hex:
...       '0a02b3e222083778f8d30f91eb004090daf1c1fa2d5a6608\
0112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746\
f636f6c2e5472616e73666572436f6e747261637412310a15417946f66d\
...       '0a02b3e222083778f8d30f91eb004090daf1c1fa2d5a6608\
0112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746\
f636f6c2e5472616e73666572436f6e747261637412310a15417946f66d\
0fc67924da0ac9936183ab3b07c81126121541d3136787e667d1e055d2c\
d5db4b5f6c88056304918e807708689eec1fa2d',
...      signature:
...       [ 'd0839fd236016149da98ddd3dcd2f1dfcfd11aabee8a27\
ffae50b1323ed4ad6a259c2d48c983c7d0c786e373d2a90c48adc91f33b\
82be07efffaa7d57e4d3f6000' ] } }
...       // sign a transaction
... tronWeb.trx.sign(transaction, privateKey);
... 
... // or
... // sign a Hex formatted string
... tronWeb.trx.sign(str, privateKey)
... const tradeobj = await tronWeb.transactionBuilder.sendT\
rx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf\
16CyFgzHV2BVxBejY9iyR");  
... const signedtxn = await tronWeb.trx.sign(tradeobj, priv\
ateKey);
... console.log(signedtxn)
... {
...   visible: false,
...   txID:
...    'cbf76171dcf5f8fe00b4911a1a6cc4d2a4448e3348f44d240ca\
20af06025d0f2',
...   raw_data:
...    { contract: [ [Object] ],
...      ref_block_bytes: '6394',
...      ref_block_hash: '8ad966a9b0b6a5d1',
...      expiration: 1580983512000,
...      timestamp: 1580983453441 },
...   raw_data_hex:
...    '0a02639422088ad966a9b0b6a5d140c0d7d7cf812e5a6508011\
2610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f63\
6f6c2e5472616e73666572436f6e747261637412300a15417946f66d0fc\
67924da0ac9936183ab3b07c811261215418cb2ab880d4fa7b33c9645a2\
276dc9b192902e2d186470818ed4cf812e',
...   signature:
...    [ '47b1f77b3e30cfbbfa41d795dd34475865240617dd1c5a7ba\
d526f5fd89e52cd057c80b665cc2431efab53520e2b1b92a0425033baee\
915df858ca1c588b0a1800' ] }
...    TronWeb.utils.ethersUtils.arrayify
...    // Call directly，privatekey is needed in this way
... tronWeb.trx.signMessageV2(message, privateKey);
915df858ca1c588b0a1800' ] }
...    TronWeb.utils.ethersUtils.arrayify
...    // Call directly，privatekey is needed in this way
... tronWeb.trx.signMessageV2(message, privateKey);
...    // Call directly，privatekey is needed in this way
... tronWeb.trx.signMessageV2(message, privateKey);
... 
... // Called via the instantiated tronWeb object
... tronWeb.trx.signMessageV2(message, privateKey);
... tronWeb.trx.signMessageV2(message, privateKey);
... 
... // Called via the instantiated tronWeb object
... tronWeb.trx.signMessageV2(message, privateKey);
... var messge = 'hello world';
... var signature = tronWeb.trx.signMessageV2(messge);
... console.log(signature);
... 0x1d1b0779da653630d29fc4f1ea1e5a109a30d52e21e7657fa896d\
2fccc3b430b14089377e13b6ed35ef371a1c91873773d568219d1100fa8\
595e5f2eec39e3e41c
... tronWeb.trx.signTypedData(domain, types, value, private\
Key);
... // All properties on a domain are optional
... const domain = {
...   name: 'TRON Mail',
...   version: '1',
...   chainId: '0x2b6653dc',
...   verifyingContract: 'TUe6BwpA7sVTDKaJQoia7FWZpC9sK8WM2\
t'
... };
... 
... // The named list of all type definitions
... const types = {
...   Person: [
...     { name: 'name', type: 'string' },
...     { name: 'wallet', type: 'address' }
...   ],
...   Mail: [
...     { name: 'from', type: 'Person' },
...     { name: 'to', type: 'Person' },
...     { name: 'contents', type: 'string' }
...   ]
... };
... 
... // The data to sign
... const value = {
...   from: {
...   from: {
...     name: 'Cow',
...     wallet: 'TUg28KYvCXWW81EqMUeZvCZmZw2BChk1HQ'
...   },
...   to: {
...     name: 'Bob',
...   to: {
...     name: 'Bob',
...     wallet: 'TT5rFsXYCrnzdE2q1WdR9F2SuVY59A4hoM'
...   },
...   contents: 'Hello, Bob!'
... };
...     wallet: 'TT5rFsXYCrnzdE2q1WdR9F2SuVY59A4hoM'
...   },
...   contents: 'Hello, Bob!'
... };
... 
... const signature = await tronWeb.trx.signTypedData(domai\
n, types, value);
... 0x72cc671f38be492773e2cd44c64535ab8825d8ab7b0e580ee4573\
1d00fc0aa5a385bf816505e6c53864bc8539677f7c6a6ece907c94e02d4\
73d392e364cfd5691c
... tronWeb.trx.timeUntilNextVoteCycle();
... await tronWeb.trx.timeUntilNextVoteCycle();
... 1579068000
... tronWeb.trx.verifyMessage(hexMsg, signedMsg, address)
... // sign a string message
... 
... var str = "helloworld"; 
... // convert to hex format and remove the beginning "0x"
... var hexStrWithout0x = tronWeb.toHex(str).replace(/^0x/,\
 '');
... // conert hex string to byte array
... var byteArray = tronWeb.utils.code.hexStr2byteArray(hex\
StrWithout0x)
... // keccak256 computing, then remove "0x" 
... var strHash= tronWeb.sha3(byteArray).replace(/^0x/, '')\
;
... // sign 
... var signedStr = await tronWeb.trx.sign(strHash).replace\
(/^0x/, '');
... var tail = signedStr.substring(128, 130);
... if(tail == '01')
... {
...     signedStr = signedStr.substring(0,128)+'1c';
... }
... else if(tail == '00')
... {
...     signedStr = signedStr.substring(0,128)+'1b';
... }
...   
... 
... // verify the signature
... var res = await tronWeb.trx.verifyMessage(strHash,signe\
dStr,'TPNcZ1j55FrGpsaw6K6rVjuL4HfT8ZbBf7')
... console.log(res);
... true
... // Call directly
... tronWeb.trx.verifyMessageV2(message, signature)
... 
... // Called via the instantiated tronWeb object
... tronWeb.trx.verifyMessageV2(message, signature)
... var str = "helloworld"; 
... var signature = tronWeb.trx.signMessageV2(str);
... var base58Address = await tronWeb.trx.verifyMessageV2(s\
tr, signature);
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
... var str = "helloworld"; 
... var signature = tronWeb.trx.signMessageV2(str);
... var base58Address = await tronWeb.trx.verifyMessageV2(s\
tr, signature);
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
... var signature = tronWeb.trx.signMessageV2(str);
... var base58Address = await tronWeb.trx.verifyMessageV2(s\
tr, signature);
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
ture, address);
... // All properties on a domain are optional
... var base58Address = await tronWeb.trx.verifyMessageV2(s\
tr, signature);
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
ture, address);
... // All properties on a domain are optional
... const domain = {
...   name: 'TRON Mail',
tr, signature);
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
ture, address);
... // All properties on a domain are optional
... const domain = {
...   name: 'TRON Mail',
...   version: '1',
... tronWeb.trx.verifyTypedData(domain, types, value, signa\
ture, address);
... // All properties on a domain are optional
... const domain = {
...   name: 'TRON Mail',
...   version: '1',
...   chainId: '0x2b6653dc',
...   verifyingContract: 'TUe6BwpA7sVTDKaJQoia7FWZpC9sK8WM2\
ture, address);
... // All properties on a domain are optional
... const domain = {
...   name: 'TRON Mail',
...   version: '1',
...   chainId: '0x2b6653dc',
...   verifyingContract: 'TUe6BwpA7sVTDKaJQoia7FWZpC9sK8WM2\
t'
... };
... 
... // The named list of all type definitions
... const types = {
...   Person: [
...     { name: 'name', type: 'string' },
...     { name: 'wallet', type: 'address' }
...   ],
...   Mail: [
...     { name: 'from', type: 'Person' },
...     { name: 'to', type: 'Person' },
...     { name: 'contents', type: 'string' }
...   ]
... };
... 
... // The data to sign
... const value = {
...   from: {
...     name: 'Cow',
...     wallet: 'TUg28KYvCXWW81EqMUeZvCZmZw2BChk1HQ'
...   },
...   to: {
...     name: 'Bob',
...     wallet: 'TT5rFsXYCrnzdE2q1WdR9F2SuVY59A4hoM'
...   },
...   contents: 'Hello, Bob!'
...     name: 'Bob',
...     wallet: 'TT5rFsXYCrnzdE2q1WdR9F2SuVY59A4hoM'
...   },
...   contents: 'Hello, Bob!'
... };
... 
... let signature = await tronWeb.trx._signTypedData(domain\
, types, value);
... 
... const tail = signature.substring(128, 130);
... if (tail == '01') {
...   signature = signature.substring(0,128)+'1c';
... } else if(tail == '00') {
...   signature = signature.substring(0,128)+'1b';
...   signature = signature.substring(0,128)+'1c';
... } else if(tail == '00') {
...   signature = signature.substring(0,128)+'1b';
... }
... 
... const result = await tronWeb.trx.verifyTypedData(domain\
, types, value, signature);
... // verification result: true
... utils.deserializeTx.deserializeTransaction(type, rawDat\
aHex)
... DTriggerSmartContract
... DTriggerSmartContract
... deserializeTx
... DeserializeTransaction
... deserializeTransaction
... import { TronWeb, utils } from 'tronweb';
... 
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     privateKey: 'your private key',
... 
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     privateKey: 'your private key',
... });
... const contractAddress = 'TXYZopYRdj2D9XRtbG411XZZ3kM5Vk\
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     privateKey: 'your private key',
... });
... const contractAddress = 'TXYZopYRdj2D9XRtbG411XZZ3kM5Vk\
AeBf'; // nile usdt address
... const account = await tronWeb.createAccount();
...     privateKey: 'your private key',
... });
... const contractAddress = 'TXYZopYRdj2D9XRtbG411XZZ3kM5Vk\
AeBf'; // nile usdt address
... const account = await tronWeb.createAccount();
... const account2 = await tronWeb.createAccount();
... });
... const contractAddress = 'TXYZopYRdj2D9XRtbG411XZZ3kM5Vk\
AeBf'; // nile usdt address
... const account = await tronWeb.createAccount();
... const account2 = await tronWeb.createAccount();
... const tx = (await tronWeb.transactionBuilder.triggerSma\
... const contractAddress = 'TXYZopYRdj2D9XRtbG411XZZ3kM5Vk\
AeBf'; // nile usdt address
... const account = await tronWeb.createAccount();
... const account2 = await tronWeb.createAccount();
... const tx = (await tronWeb.transactionBuilder.triggerSma\
rtContract(
AeBf'; // nile usdt address
... const account = await tronWeb.createAccount();
... const account2 = await tronWeb.createAccount();
... const tx = (await tronWeb.transactionBuilder.triggerSma\
rtContract(
...     contractAddress,
... const account = await tronWeb.createAccount();
... const account2 = await tronWeb.createAccount();
... const tx = (await tronWeb.transactionBuilder.triggerSma\
rtContract(
...     contractAddress,
...     'transfer(address,uint256)',
...     {
... const account2 = await tronWeb.createAccount();
... const tx = (await tronWeb.transactionBuilder.triggerSma\
rtContract(
...     contractAddress,
...     'transfer(address,uint256)',
...     {
...         txLocal: true,
... const tx = (await tronWeb.transactionBuilder.triggerSma\
rtContract(
...     contractAddress,
...     'transfer(address,uint256)',
...     {
...         txLocal: true,
...         tokenId: '1000008',
...         tokenValue: 100,
rtContract(
...     contractAddress,
...     'transfer(address,uint256)',
...     {
...         txLocal: true,
...         tokenId: '1000008',
...         tokenValue: 100,
...         feeLimit: 100 * (10 ** 6),
...     },
...     [
...         { type: "address", value: account2.address.base\
58 },
...         { type: "uint256", value: 100000000 }
...     ],
...     account.address.base58,
... )).transaction;
... const dResult = utils.deserializeTx.deserializeTransact\
ion('TriggerSmartContract', tx.raw_data_hex);
... utils.transaction.txJsonToPb(transaction)
... import { TronWeb, utils } from 'tronweb';
... 
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     privateKey: 'your private key',
... });
... const txJson = await tronWeb.transactionBuilder.sendTrx\
("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 100, "TNPeeaaFB7K9cm\
o4uQpcU32zGK8G1NYqeL");
... const txPb = utils.transaction.txJsonToPb(txJson);
... utils.transaction.txPbToTxID(transaction)
... import { TronWeb, utils } from 'tronweb';
... utils.transaction.txPbToTxID(transaction)
... import { TronWeb, utils } from 'tronweb';
... 
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     privateKey: 'your private key',
... });
... const txJson = await tronWeb.transactionBuilder.sendTrx\
("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 100, "TNPeeaaFB7K9cm\
o4uQpcU32zGK8G1NYqeL");
... // Convert the transaction object in json format to pro\
tobuf format
... const txPb = utils.transaction.txJsonToPb(txJson);
... // Calculate the transaction ID from the transaction pr\
otobuf format
... const txID = utils.transaction.txPbToTxID(txPb);
... 版本: 6.1.0 - 6.1.1
... 交易建设者
... const transaction = await tronWeb.transactionBuilder.ad\
dUpdateData(unsignedTransaction, memo, dataFormat, options)\
... raw_data.data
... addUpdateData
... transaction
... tronweb.trx.sign(transaction
... tronweb.trx.broadcast(transaction)
... addUpdateData
... tronweb.trx.sign(transaction
... tronweb.trx.broadcast(transaction)
... addUpdateData
... TronWeb.fromUtf8
... var txn = await tronWeb.transactionBuilder.sendTrx("TUo\
... addUpdateData
... TronWeb.fromUtf8
... var txn = await tronWeb.transactionBuilder.sendTrx("TUo\
HaVjx7n5xz8LwPRDckgFrDWhMhuSuJM", 100, "TUznHJfHe6gdYY7gvWm\
... var txn = await tronWeb.transactionBuilder.sendTrx("TUo\
HaVjx7n5xz8LwPRDckgFrDWhMhuSuJM", 100, "TUznHJfHe6gdYY7gvWm\
f6bNZHuPHDZtowf");
... var nexTxn = await tronWeb.transactionBuilder.addUpdate\
Data(txn,"test");
... var signedtxn = await tronWeb.trx.sign(nexTxn, privateK\
ey);
... console.log(nexTxn)
... {
...   visible: false,
...   txID: "8c3a4b4c20cfdf8df340905949a8241aee639492e0c4d7\
3f1bf18847346444f1",
...   raw_data: {
...     contract: [ [Object] ],
...     data: "74657374", // this is the HexString of memo
...     expiration: 1628073045000,
...   visible: false,
...   txID: "8c3a4b4c20cfdf8df340905949a8241aee639492e0c4d7\
3f1bf18847346444f1",
...   raw_data: {
...     contract: [ [Object] ],
...     data: "74657374", // this is the HexString of memo
...     expiration: 1628073045000,
...     ref_block_bytes: "7254",
...     ref_block_hash: "c45fff3a6a0347cc",
...     timestamp: 1628072986845
...   },
...   raw_data_hex: "0a0272542208c45fff3a6a0347cc4088d8dc85\
b12f5204746573745a65080112610a2d747970652e676f6f676c6561706\
9732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261\
637412300a1541d0b69631440f0a494bb51f7eee68ff5c593c00f012154\
1ce8a0cf0c16d48bcf22825f6053248df653c89ca186470dd91d985b12f\
... }
... // Format
... const transaction = await tronWeb.transactionBuilder.ap\
plyForSR(address, url, options);
... const result = await tronWeb.transactionBuilder.applyFo\
rSR("41BF97A54F4B829C4E9253B26024B1829E1A3B1120", "www.fort\
est.com");
... console.log(result)
... {
...   visible: false,
...   txID: '388172e15216a6eb216a11ed312c3794ce50dd85873e83\
767b6c5bea1da78b43',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '499a',
...     ref_block_hash: '05853c8ec7523765',
...     expiration: 1580963556000,
...     timestamp: 1580963496941
...   },
...   raw_data_hex: '0a02499a220805853c8ec752376540a0d595c6\
812e5a620805125e0a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5769746e657373437265617465436f6e74726163\
7412280a1541bf97a54f4b829c4e9253b26024b1829e1a3b1120120f777\
7772e666f72746573742e636f6d70ed8792c6812e'
... }
... const transaction = await tronWeb.transactionBuilder.ca\
ncelUnfreezeBalanceV2(address);
... const transaction = await tronWeb.transactionBuilder.ca\
ncelUnfreezeBalanceV2('TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC')\
... const transaction = await tronWeb.transactionBuilder.cr\
eateAccount(address, options);
... const transaction = await tronWeb.transactionBuilder.cr\
eateAccount('TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g');
... 
... const signedTransaction = await tronWeb.trx.sign(transa\
ction);
... 
... const result = await tronWeb.trx.sendRawTransaction(sig\
nedTransaction);
... createToken
... const trcOptions = {
...   name: 'My Test Token', // Token name, default string
...   abbreviation: 'MTT', // Token name abbreviation, defa\
ult string
...   description: 'my first test token', // Token descript\
ion, optional
...   url: 'http://www.mytoken.com', // Token official webs\
ite url, default string
...   totalSupply: 100000, // Token total supply
...   trxRatio: 1, // Define the price by the ratio of trx_\
num/num
...   tokenRatio: 1, // Define the price by the ratio of tr\
x_num/num
...   saleStart: 1581047830000, // ICO start time
...   saleEnd: 1681047110000, // ICO end time
x_num/num
...   saleStart: 1581047830000, // ICO start time
...   saleEnd: 1681047110000, // ICO end time
...   freeBandwidth: 0, // The creator's "donated" bandwidt\
h for use by token holders, optional
...   freeBandwidth: 0, // The creator's "donated" bandwidt\
h for use by token holders, optional
...   freeBandwidthLimit: 0, // Out of `totalFreeBandwidth`\
, the amount each token holder get, optional
...   frozenAmount: 0, // Token staked supply
...   frozenAmount: 0, // Token staked supply
, the amount each token holder get, optional
...   frozenAmount: 0, // Token staked supply
...   frozenDuration: 0, // for now there is no default for\
 the following values
...   precision: 6, // Precision of issued tokens
...   permissionId: 2, // Optional, for multi-signature
...   blockHeader: {...} // Optional, for contract block he\
ader info.
... };
... const transaction = await tronWeb.transactionBuilder.cr\
eateAsset(trcOptions, issuerAddress);
... const trc10Options = {
...   name: "My Test Token",
...   abbreviation: "MTT",
...   description: "my first test token",
...   url: "http://www.mytoken.com",
...   totalSupply: 100000,
...   trxRatio: 1,
...   tokenRatio: 1,
...   saleStart: 1581064352000,
...   saleEnd: 1681047110000,
...   freeBandwidth: 0,
...   freeBandwidthLimit: 0,
...   frozenAmount: 0,
...   frozenDuration: 0,
...   precision: 6
... }
... await tronWeb.transactionBuilder.createAsset(trc10Optio\
ns, "41BF97A54F4B829C4E9253B26024B1829E1A3B1120");
... {
...   visible: false,
...   txID: 'abfb7d021a36194b631f395fcfde625c053ea54348551a\
e83cb2b068f597e835',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'ccdd',
...     ref_block_hash: 'dcfd491f536c5c4a',
...     expiration: 1581064395000,
...     timestamp: 1581064336498
...   },
...   raw_data_hex: '0a02ccdd2208dcfd491f536c5c4a40f8b1a0f6\
812e5a8b0108061286010a2f747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e41737365744973737565436f6e7472616374\
12530a1541bf97a54f4b829c4e9253b26024b1829e1a3b1120120474657\
3741a02747420a08d063001380640014880e29df6812e50f082ddb1f630\
a20107666f7274657374aa010d7777772e62616964752e636f6d70f2e89\
cf6812e'
... }
... const transaction = await tronWeb.transactionBuilder.cr\
eateProposal(parameters, issuerAddress, options);
... parameters = parameters.sort((a, b) => {
...   return a.key.toString() > b.key.toString() ? 1 : -1;
... });
... parameters = parameters.sort((a, b) => {
...   return a.key.toString() > b.key.toString() ? 1 : -1;
... });
... await tronWeb.transactionBuilder.createProposal([{ "key\
": 32, "value": 1 }, { "key": 33, "value": 11 }],"41BF97A54\
F4B829C4E9253B26024B1829E1A3B1120");
... {
...   visible: false,
...   txID: '771d2fe10099dd2d48e9f874bc7c17a5882c77bca2622f\
bb695cc59327e1bc08',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'ba3b',
...     ref_block_hash: 'e09ff41b96e649f1',
...     expiration: 1581050079000,
...     timestamp: 1581050021547
...   },
...   raw_data_hex: '0a02ba3b2208e09ff41b96e649f14098ceb6ef\
812e5a5e0810125a0a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e50726f706f73616c437265617465436f6e747261\
637412230a1541bf97a54f4b829c4e9253b26024b1829e1a3b112012040\
820100112040821100b70ab8db3ef812e'
... }
... const options = {
...   feeLimit: 1000000000, // The maximum TRX burns for re\
source consumption（1TRX = 1,000,000SUN）
...   callValue: 0, // The TRX transfer to the contract for\
 each call（1TRX = 1,000,000SUN）
...   tokenId: '', // The id of TRC10 token transfer to the\
 contract (Optional)
...   tokenValue: 0, // The amount of TRC10 token transfer \
to the contract for each call (Optional)
...   userFeePercentage: 10, // Consume user's resource per\
centage. It should be an integer between [0, 100]. if 0, me\
ans it does not consume user's resource until the developer\
's resource has been used up
...   originEnergyLimit: 10, // The maximum resource consum\
ption of the creator in one execution or creation
...   abi: '{"entrys":[{"constant":true,"inputs":[{"name":"\
","type":"bytes3[2]"}],"name":"bar","outputs":[],"payable":\
false,"stateMutability":"pure","type":"function"}]}', // Ab\
i string
...   bytecode:
...     '608060405234801561001057600080fd5b50d3801561001d57\
600080fd5b50d2801561002a57600080fd5b5060da80610039600039600\
0f300608060405260043610603f576000357c0100000000000000000000\
000000000000000000000000000000000000900463ffffffff168063fce\
353f6146044575b600080fd5b348015604f57600080fd5b50d38015605b\
57600080fd5b50d28015606757600080fd5b5060a960048036038101908\
08060400190600280602002604051908101604052809291908260026020\
02808284378201915050505050919291929050505060ab565b005b50560\
0a165627a7a723058202071fb665ee1935fc34d4da0b135d893fe493a26\
f309e9888084c4842c3ce66b0029', // Bytecode, default hexStri\
...   parameters: [], // The list of the parameters of the \
constructor, It should be converted hexString after encoded\
 according to ABI encoder. If constructor has no parameter,\
 this can be optional
...   name: 'Foo', // Contract name string
...   permissionId: 2, // Optional, for multi-signature
...   blockHeader: {...} // Optional, for contract block he\
ader info.
... };
... const transaction = await tronWeb.transactionBuilder.cr\
eateSmartContract(options, issuerAddress);
: {...} // Optional, for contract block header info.
... };
...   callValue: 0,
...   tokenId: "",
...   tokenValue: 0,
...   userFeePercentage: 10,
...   originEnergyLimit: 10,
...   abi: [{"constant":true,"inputs":[{"name":"","type":"b\
ytes3[2]"}],"name":"bar","outputs":[],"payable":false,"stat\
eMutability":"pure","type":"function"}],
...   bytecode: "608060405234801561001057600080fd5b50d38015\
61001d57600080fd5b50d2801561002a57600080fd5b5060da806100396\
000396000f300608060405260043610603f576000357c01000000000000\
00000000000000000000000000000000000000000000900463ffffffff1\
68063fce353f6146044575b600080fd5b348015604f57600080fd5b50d3\
8015605b57600080fd5b50d28015606757600080fd5b5060a9600480360\
38101908080604001906002806020026040519081016040528092919082\
6002602002808284378201915050505050919291929050505060ab565b0\
05b505600a165627a7a723058202071fb665ee1935fc34d4da0b135d893\
fe493a26f309e9888084c4842c3ce66b0029",
...   name: "Foo",
...   permissionId: 2
... };
... const transaction = await tronWeb.transactionBuilder.cr\
eateSmartContract(options,"41BF97A54F4B829C4E9253B26024B182\
9E1A3B1120");
... console.log(transaction);
... {
...   visible: false,
...   txID: '6c3b978b0971bf4692411d73f5cc90c43016540fd43e60\
6d5d07e28e494e4a1d',
...   contract_address: '412b676c1e8d4905de6e3b2a8b807aa09a\
b298e153',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'caa6',
...     ref_block_hash: 'f58a2b9828611d88',
...     expiration: 1581062694000,
...     fee_limit: 1000000000,
...     timestamp: 1581062634939
...   },
...   raw_data_hex: '0a02caa62208f58a2b9828611d8840f0c8b8f5\
812e5aa803081e12a1030a30747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e437265617465536d617274436f6e74726163\
7412ec020a1541bf97a54f4b829c4e9253b26024b1829e1a3b112012d20\
20a1541bf97a54f4b829c4e9253b26024b1829e1a3b11201a1a0a181001\
1a03626172220b1a096279746573335b325d30024001229302608060405\
234801561001057600080fd5b50d3801561001d57600080fd5b50d28015\
61002a57600080fd5b5060da806100396000396000f3006080604052600\
43610603f576000357c0100000000000000000000000000000000000000\
000000000000000000900463ffffffff168063fce353f6146044575b600\
080fd5b348015604f57600080fd5b50d38015605b57600080fd5b50d280\
15606757600080fd5b5060a960048036038101908080604001906002806\
02002604051908101604052809291908260026020028082843782019150\
50505050919291929050505060ab565b005b505600a165627a7a7230582\
02071fb665ee1935fc34d4da0b135d893fe493a26f309e9888084c4842c\
3ce66b0029300a3a03466f6f400a280170bbfbb4f5812e90018094ebdc0\
... }
... const transaction = await tronWeb.transactionBuilder.cr\
eateSmartContract(
...     {
...         abi: abi,
...         bytecode: bytecode,
...         funcABIV2: abi.find((abi) => abi.type === 'cons\
tructor'),
...         parametersV2: [[1, 2, 3]],
...     }
... );
... const trcOptions = {
...   name: 'test', // Token name, default string
...   abbreviation: 'tt', // Token name abbreviation, defau\
lt string
...   description: 'fortest', // Token description, optiona\
l
...   url: 'tronweb.network', // Token official website url\
, default string
...   totalSupply: 100000, // Token total supply
...   trxRatio: 1, // Define the price by the ratio of trx_\
num/num
...   tokenRatio: 1, // Define the price by the ratio of tr\
x_num/num
...   saleStart: 1581047830000, // ICO start time
...   saleEnd: 1681047110000, // ICO end time
...   freeBandwidth: 0, // The creator's "donated" bandwidt\
h for use by token holders, optional
...   freeBandwidthLimit: 0, // Out of `totalFreeBandwidth`\
, the amount each token holder get, optional
...   frozenAmount: 0, // Token staked supply
...   frozenDuration: 0, // for now there is no default for\
 the following values
...   precision: 6, // Precision of issued tokens
...   permissionId: 2, // Optional, for multi-signature use
...   blockHeader: {...} // Optional, for contract block he\
ader info.
...   permissionId: 2, // Optional, for multi-signature use
...   blockHeader: {...} // Optional, for contract block he\
ader info.
... };
... };
... const transaction = await tronWeb.transactionBuilder.cr\
eateToken(trcOptions, issuerAddress);
... const trcOptions = {
eateToken(trcOptions, issuerAddress);
... const trcOptions = {
...   name : "test",
...   abbreviation : "tt",
...   description : "fortest",
...   url : "tronweb.network",
...   totalSupply : 100000,
...   trxRatio : 1,
...   tokenRatio : 1,
...   saleStart : 1581047830000,
...   saleEnd : 1681047110000,
...   freeBandwidth : 0,
...   freeBandwidthLimit : 0,
...   frozenAmount : 0,
...   frozenDuration : 0,
...   precision : 6
... };
... await tronWeb.transactionBuilder.createToken(trcOptions\
,"41BF97A54F4B829C4E9253B26024B1829E1A3B1120");
... {
...   visible: false,
...   txID: '5a2b16c0436dddd6378a29087ba1e924b9a55f6bc29785\
54a0830cf741b1c03e',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'b756',
...     ref_block_hash: '64bdb1724356ee49',
...     expiration: 1581047856000,
...     timestamp: 1581047797358
...   },
...   raw_data_hex: '0a02b756220864bdb1724356ee494080f7aeee\
812e5a8b0108061286010a2f747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e41737365744973737565436f6e7472616374\
12530a1541bf97a54f4b829c4e9253b26024b1829e1a3b1120120474657\
3741a02747420a08d0630013806400148f0abadee812e50f082ddb1f630\
a20107666f7274657374aa010d7777772e62616964752e636f6d70eeaca\
bee812e'
... }
... // Normally the third parameter is 'fromAddress', and t\
he forth is options.
... await tronWeb.transactionBuilder.delegateResource(10e6,\
 'toAddress', 'BANDWIDTH', 'fromAddress', false, 0, { permi\
ssionId: 2 });
... 
... // If the third parameter is object, it will be treated\
 as options and fromAddress will be tronWeb.defaultAddress.
... await tronWeb.transactionBuilder.delegateResource(10e6,\
... // If the third parameter is object, it will be treated\
 as options and fromAddress will be tronWeb.defaultAddress.
... await tronWeb.transactionBuilder.delegateResource(10e6,\
 'toAddress', 'BANDWIDTH', 'fromAddress', false, { permissi\
onId: 2 });
... tronWeb.transactionBuilder.delegateResource(amount, rec\
eiverAddress, resource, address, lock, lockPeriod, options)\
... const transaction = await tronWeb.transactionBuilder.de\
legateResource(10e6, 'receiverAddress', 'BANDWIDTH', 'TMVQG\
m1qAQYVdetCeGRRkTWYYrLXuHK2HC', true, 86400);
... const transaction = await tronWeb.transactionBuilder.de\
leteProposal(proposalId, issuerAddress, options);
... //example 1
... await tronWeb.transactionBuilder.deleteProposal(1, "410\
10D3A8E0D80F8C83148240202DD178DF495B7BD", { permissionId: 2\
 });
... {
...   visible: false,
...   txID: '1152c19215aaefffe166cf9fcd6a299b06f532f8ec4b62\
b9804338fbe533308d',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '03cf',
...     ref_block_hash: 'ec181002d427df4c',
...     expiration: 1581332046000,
...     timestamp: 1581331986337
...   },
...   raw_data_hex: '0a0203cf2208ec181002d427df4c40b0c1f0f5\
...   },
...   raw_data_hex: '0a0203cf2208ec181002d427df4c40b0c1f0f5\
822e5a54081212500a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e50726f706f73616c44656c657465436f6e747261\
637412190a1541010d3a8e0d80f8c83148240202dd178df495b7bd10017\
0a1efecf5822e'
...   raw_data_hex: '0a0203cf2208ec181002d427df4c40b0c1f0f5\
822e5a54081212500a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e50726f706f73616c44656c657465436f6e747261\
637412190a1541010d3a8e0d80f8c83148240202dd178df495b7bd10017\
0a1efecf5822e'
... }
... 
822e5a54081212500a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e50726f706f73616c44656c657465436f6e747261\
637412190a1541010d3a8e0d80f8c83148240202dd178df495b7bd10017\
0a1efecf5822e'
... }
... 
... //example 2
... await tronWeb.transactionBuilder.deleteProposal(1, "TA4\
mXQ6rMNSBcvd9Kn9LLFS4bbX8b27RCS");
... {
...   visible: false,
...   txID: '512a758fc5b87615b10c28f840d72f977286384e77959a\
421c2470bd580f2845',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '04bb',
...     ref_block_hash: 'ca274c26abdb1fc6',
...     expiration: 1581332754000,
...     timestamp: 1581332694494
...   },
...   raw_data_hex: '0a0204bb2208ca274c26abdb1fc640d0dc9bf6\
822e5a54081212500a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e50726f706f73616c44656c657465436f6e747261\
637412190a1541010d3a8e0d80f8c83148240202dd178df495b7bd10017\
0de8b98f6822e'
... }
... const transaction = await tronWeb.transactionBuilder.de\
ployConstantContract(options);
... {
...     /**
...      * The energy required for deploying the contract.
...      */
...     energy_required: number;
0de8b98f6822e'
... }
... const transaction = await tronWeb.transactionBuilder.de\
ployConstantContract(options);
... {
...     /**
...      * The energy required for deploying the contract.
...      */
...     energy_required: number;
...     result: {
...         result: boolean;
...     }
... }
... const result = await tronWeb.transactionBuilder.deployC\
onstantContract({
...     ownerAddress: 'TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC',
...     ownerAddress: 'TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC',
...     input: '0x60806040526000805534801561001457600080fd5\
b50d3801561002157600080fd5b50d2801561002e57600080fd5b5060e0\
8061003d6000396000f3fe6080604052348015600f57600080fd5b50d38\
015601b57600080fd5b50d28015602757600080fd5b5060043610605d57\
6000357c010000000000000000000000000000000000000000000000000\
00000009004806360fe47b1146062575b600080fd5b608b600480360360\
20811015607657600080fd5b81019080803590602001909291905050506\
0a1565b6040518082815260200191505060405180910390f35b60008160\
0081905550600054905091905056fea165627a7a72305820392f2cf7f1b\
37873349bf7ce496fb370bc80c6539de204bded6197106c530e7000',
... });
... const result = await tronWeb.transactionBuilder.estimat\
eEnergy(contractAddress, functionSelector, options, paramet\
er, issuerAddress);
... estimateEnergy()
... triggerSmartContract（）
... {
...     /**
...      * The energy required for trigger the contract.
...      */
...     energy_required: number;
...     result: {
...         result: boolean;
...     }
... }
... const result = await tronWeb.transactionBuilder.estimat\
eEnergy(
...     'TPYwAC9Y4uUcT2QH3WPPjqxzJSJWymMoMS',
...     'balanceOf(address)', {}, 
...     [{ type:'address',value: 'THvMiWQeVPGEMuBtAnuKn2Qpu\
SjqjrGQGu' }]
... )
... {
...   "result": {
...     "result": true,
...   },
...   "energy_required": 900000
... }
... tronWeb.transactionBuilder.extendExpiration(transaction\
, extension, options);
... const transaction = await tronWeb.transactionBuilder.se\
ndTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100, "TM2TmqauS\
EiRf16CyFgzHV2BVxBejY9iyR");  
... const extendExpirationObj =  await tronWeb.transactionB\
uilder.extendExpiration(transaction, 500);
... const signedtxn = await tronWeb.trx.sign(extendExpirati\
onObj, privateKey);
uilder.extendExpiration(transaction, 500);
... const signedtxn = await tronWeb.trx.sign(extendExpirati\
onObj, privateKey);
... console.log(extendExpirationObj);
... {txID: "a33e940480202c8d38c65a571a699be4e082e40776bab00\
... console.log(extendExpirationObj);
... {txID: "a33e940480202c8d38c65a571a699be4e082e40776bab00\
00103c8cca63f6cb4", raw_data: {}, raw_data_hex: "0a02c9bc22\
08a506a5de6e7a02c040d0c48fd3822e5a650801…d4fa7b33c9645a2276\
dc9b192902e2d186470e7b1edd2822e", visible: false}
00103c8cca63f6cb4", raw_data: {}, raw_data_hex: "0a02c9bc22\
08a506a5de6e7a02c040d0c48fd3822e5a650801…d4fa7b33c9645a2276\
dc9b192902e2d186470e7b1edd2822e", visible: false}
... const transaction = await tronWeb.transactionBuilder.fr\
eezeBalance(amount, duration, resource, ownerAddress, recei\
verAddress, options);
... //example 1
... await tronWeb.transactionBuilder.freezeBalance(tronWeb.\
toSun(100), 3, "ENERGY", "4115B95D2D2CBCE1B815BA4D2711A3BEA\
02CBB37F3", "4115B95D2D2CBCE1B815BA4D2711A3BEA02CBB37F3");
... {
...   visible: false,
...   txID: '98c21fe22afd4e0badb68f118b1598bbbdf7b7b6602814\
6e48a351e87e3c606a',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'cce3',
...     ref_block_hash: 'b356b0ba8cf551ad',
...     expiration: 1581261075000,
...     timestamp: 1581261017724
...   },
...   raw_data_hex: '0a02cce32208b356b0ba8cf551ad40b8e484d4\
822e5a5a080b12560a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e467265657a6542616c616e6365436f6e74726163\
7412200a154115b95d2d2cbce1b815ba4d2711a3bea02cbb37f31080c2d\
72f1803500170fca481d4822e'
... }
... 
... //example 2
... await tronWeb.transactionBuilder.freezeBalance(tronWeb.\
toSun(100), 3, "ENERGY", "TBx5FQGFeLUHPFMkn3BaFxxfVwLy7ffE5\
k", "TBx5FQGFeLUHPFMkn3BaFxxfVwLy7ffE5k");
... {
...   visible: false,
...   txID: 'acd5988278e27fd5e818eab0d197e8f622c8fd9428457e\
c7233837a5ba40aacf',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'ccfc',
...     ref_block_hash: 'e7ce28d6d85e7e0c',
...     expiration: 1581261150000,
...     timestamp: 1581261090636
...   },
...   raw_data_hex: '0a02ccfc2208e7ce28d6d85e7e0c40b0ae89d4\
822e5a5a080b12560a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e467265657a6542616c616e6365436f6e74726163\
7412200a154115b95d2d2cbce1b815ba4d2711a3bea02cbb37f31080c2d\
...   raw_data_hex: '0a02ccfc2208e7ce28d6d85e7e0c40b0ae89d4\
822e5a5a080b12560a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e467265657a6542616c616e6365436f6e74726163\
7412200a154115b95d2d2cbce1b815ba4d2711a3bea02cbb37f31080c2d\
72f1803500170ccde85d4822e'
... }
822e5a5a080b12560a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e467265657a6542616c616e6365436f6e74726163\
7412200a154115b95d2d2cbce1b815ba4d2711a3bea02cbb37f31080c2d\
72f1803500170ccde85d4822e'
... }
... const transaction = await tronWeb.transactionBuilder.fr\
eezeBalanceV2(amount, resource, address, options);
7412200a154115b95d2d2cbce1b815ba4d2711a3bea02cbb37f31080c2d\
72f1803500170ccde85d4822e'
... }
... const transaction = await tronWeb.transactionBuilder.fr\
eezeBalanceV2(amount, resource, address, options);
... const transaction = await tronWeb.transactionBuilder.fr\
eezeBalanceV2(10e6, 'BANDWIDTH', 'TMVQGm1qAQYVdetCeGRRkTWYY\
rLXuHK2HC');
... tronWeb.transactionBuilder.injectExchangeTokens(exchang\
eId, tokenId, tokenAmount, ownerAddress, options)
... // Example 1
... await tronWeb.transactionBuilder.injectExchangeTokens(1\
, "1000003", 10000, "410ca7c49aa44d26aabfe7f594c645cf9f17a4\
ff70");
... {
...   visible: false,
...   txID: 'cdac0a375d5042042aef204301d67181bb83390ba060b1\
1033a7913221af0ebb',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'ce03',
...     ref_block_hash: '620c5f8f84ac6944',
...     expiration: 1581261939000,
...     timestamp: 1581261879534
...   },
...   raw_data_hex: '0a02ce032208620c5f8f84ac694440b8c2b9d4\
822e5a60082a125c0a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e45786368616e6765496e6a656374436f6e747261\
637412250a15410ca7c49aa44d26aabfe7f594c645cf9f17a4ff7010011\
a073130303030303320904e70eef1b5d4822e'
... }
... 
... //Example 2
... await tronWeb.transactionBuilder.injectExchangeTokens(1\
, "1000003",10000,"TB8865sqTQ3qxWqhNQRCBov3KtPXFRPccK");
... {
...   visible: false,
...   txID: 'a05cace199e2a1d39410adfac5f17a18e63f43bdc78b58\
40f63a083cbcfa6cb9',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '72a2',
...     ref_block_hash: 'd85b910374acd2ed',
...     expiration: 1581388404000,
...     timestamp: 1581388345878
...   },
...   raw_data_hex: '0a0272a22208d85b910374acd2ed40a0aae090\
832e5a60082a125c0a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e45786368616e6765496e6a656374436f6e747261\
637412250a15410ca7c49aa44d26aabfe7f594c645cf9f17a4ff7010011\
832e5a60082a125c0a33747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e45786368616e6765496e6a656374436f6e747261\
637412250a15410ca7c49aa44d26aabfe7f594c645cf9f17a4ff7010011\
a073130303030303320904e7096e4dc90832e'
... }
... 版本: 6.1.0 - 6.1.1
... 购买资产
... const transaction = await tronWeb.transactionBuilder.pu\
rchaseToken(issuerAddress, tokenId, amount, buyer, options)\
... // Example 1
... await tronWeb.transactionBuilder.purchaseToken("41bf97a\
54f4b829c4e9253b26024b1829e1a3b1120", "1000088", 100, "4101\
0D3A8E0D80F8C83148240202DD178DF495B7BD");
... {
...   visible: false,
...   txID: '9ffe34c87be9e803ca219c05a1e976cdbc1ee63459335a\
43fbdc290b616fe09f',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '6ce6',
...     ref_block_hash: 'e123937572ed7ab5',
...     expiration: 1581384000000,
...     timestamp: 1581383940593
...   },
...   raw_data_hex: '0a026ce62208e123937572ed7ab54080c4d38e\
832e5a7b080912770a3a747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5061727469636970617465417373657449737375\
65436f6e747261637412390a1541010d3a8e0d80f8c83148240202dd178\
df495b7bd121541bf97a54f4b829c4e9253b26024b1829e1a3b11201a07\
31303030303838206470f1f3cf8e832e'
... }
... 
... // Example 2
... await tronWeb.transactionBuilder.purchaseToken("TTSFjEG\
3Lu9WkHdp4JrWYhbGP6K1REqnGQ", "1000088", 100,"TPnBjYQEMo4Yd\
4866KCzXdi4a169KGd63n");
... {
...   visible: false,
...   txID: 'b86ac32d981d56ce7aef1461a6e8455c4176d2cb5daa58\
60d16d3132210ac49b',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '6cfb',
...     ref_block_bytes: '6cfb',
...     ref_block_hash: '5ff675a58150b8e0',
...     expiration: 1581384063000,
...     timestamp: 1581384004388
...   },
...   raw_data_hex: '0a026cfb22085ff675a58150b8e04098b0d78e\
832e5a7b080912770a3a747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5061727469636970617465417373657449737375\
65436f6e747261637412390a1541977c20977f412c2a1aa4ef3d49fee5e\
c4c31cdfb121541bf97a54f4b829c4e9253b26024b1829e1a3b11201a07\
31303030303838206470a4e6d38e832e'
... }
... const transaction = await tronWeb.transactionBuilder.se\
ndAsset(to, amount, tokenId, from, options);
... const transaction = await tronWeb.transactionBuilder.se\
ndAsset("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 100, "1000086\
", "TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL");
... console.log(transaction);
... {
...     "visible": false,
...     "txID": "0de6f3f2178045456f907ad16c9c67096f47a0b0ae\
e0beafbf9e76f47cce5e2a",
...     "raw_data": {
...         "contract": [
...             {
...                 "parameter": {
...                     "value": {
...                         "amount": 100,
...                         "asset_name": "31303030303836",
...                         "owner_address": "418840e6c55b9\
ada326d211d818c34a994aeced808",
...                         "to_address": "41d3136787e667d1\
e055d2cd5db4b5f6c880563049"
...                     },
...                     "type_url": "type.googleapis.com/pr\
otocol.TransferAssetContract"
...                 },
...                 "type": "TransferAssetContract"
...             }
...         ],
...         "ref_block_bytes": "088e",
...         ],
...         "ref_block_bytes": "088e",
...         "ref_block_hash": "78d48563585bc6e8",
...         "expiration": 1581306912000,
...         "timestamp": 1581306853656
...     },
...     "raw_data_hex": "0a02088e220878d48563585bc6e84080ba\
f2e9822e5a730802126f0a32747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e5472616e736665724173736574436f6e7472\
61637412390a07313030303038361215418840e6c55b9ada326d211d818\
c34a994aeced8081a1541d3136787e667d1e055d2cd5db4b5f6c8805630\
4920647098f2eee9822e"
... }
... 版本: 6.1.0 - 6.1.1
... 发送令牌
... 
... const transaction = await tronWeb.transactionBuilder.se\
ndTrx(to, amount, from, options);
... await tronWeb.transactionBuilder.sendTrx("TVDGpn4hCSzJ5\
nkHPLetk8KQBtwaTppnkr", 100, "TNPeeaaFB7K9cmo4uQpcU32zGK8G1\
NYqeL");
... {
...     "visible": false,
...     "txID": "9f62a65d0616c749643c4e2620b7877efd0f04dd5b\
2b4cd14004570d39858d7e",
...     "raw_data": {
...         "contract": [
...             {
...                 "parameter": {
...                     "value": {
...                         "amount": 100,
...                         "owner_address": "418840e6c55b9\
ada326d211d818c34a994aeced808",
...                         "to_address": "41d3136787e667d1\
e055d2cd5db4b5f6c880563049"
...                     },
...                     "type_url": "type.googleapis.com/pr\
otocol.TransferContract"
...                 },
...                 "type": "TransferContract"
...             }
...                 "type": "TransferContract"
...             }
...         ],
...         "ref_block_bytes": "0add",
...         "ref_block_hash": "6c2763abadf9ed29",
...         "expiration": 1581308685000,
...         "timestamp": 1581308626092
...     },
...     "raw_data_hex": "0a020add22086c2763abadf9ed2940c8d5\
deea822e5a65080112610a2d747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e5472616e73666572436f6e74726163741230\
0a15418840e6c55b9ada326d211d818c34a994aeced808121541d313678\
7e667d1e055d2cd5db4b5f6c880563049186470ac89dbea822e"
... }
... const transaction = await tronWeb.transactionBuilder.tr\
adeExchangeTokens(exchangeId, tokenName, tokenAmountSold, t\
okenAmountExpected, ownerAddress, options)
... await tronWeb.transactionBuilder.tradeExchangeTokens(1,\
 "1000003", 1000, 1000, "410ca7c49aa44d26aabfe7f594c645cf9f\
17a4ff70");
... {
...     "visible": false,
...     "txId": "545ed6a5eb793fe5903ec177761b2504147e010875\
644fce321f0dbb28799456",
...     "raw_data": {
...         "contract": [
...             {
...                 "parameter": {
...                     "value": {
...                         "exchange_id": 1,
...                         "token_id": "31303030303033",
...                         "expected": 1000,
...                         "owner_address": "410ca7c49aa44\
d26aabfe7f594c645cf9f17a4ff70",
...                         "quant": 1000
...                     },
...                     "type_url": "type.googleapis.com/pr\
otocol.ExchangeTransactionContract"
...                 },
...                 "type": "ExchangeTransactionContract"
...             }
...         ],
...         "ref_block_bytes": "c778",
...         "ref_block_hash": "db086b31f0f10f69",
...         "expiration": 1581650238000,
...         "timestamp": 1581650180365
...     },
...     "raw_data_hex": "0a02c7782208db086b31f0f10f6940b0b4\
cd8d842e5a68082c12640a38747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e45786368616e67655472616e73616374696f\
6e436f6e747261637412280a15410ca7c49aa44d26aabfe7f594c645cf9\
f17a4ff7010011a073130303030303320e80728e807708df2c98d842e"
... }
... const transactionWrapper = await tronWeb.transactionBui\
lder.triggerConfirmedConstantContract(contractAddress, func\
tionSelector, options, parameters, ownerAddress);
... interface TransactionWrapper {
...     result: {
...         result: boolean;
...     };
...     /**
...      * The transaction object created by calling contra\
ct function.
...      */
...     transaction: Transaction;
...     /**
...      * Energy used by triggering contract.
...      */
...     energy_used?: number;
...     /**
...      * The total penalty energy in the transaction
...      */
...     energy_penalty?: number;
...     /**
...      * Result of calling contract function which is dec\
orated by `view` or `pure`.
...      */
...     constant_result?: string[];
... }
   energy_penalty?: number;
...     /**
...      * Result of calling contract function which is dec\
...   feeLimit: 100000000,
...   callValue: 0
... }
... const transactionWrapper = await tronWeb.transactionBui\
lder.triggerConfirmedConstantContract("TGjgvdTWWrybVLaVeFqS\
yVqJQWjxqRYbaK", "balanceOf(address)", options, parameter, \
... const transactionWrapper = await tronWeb.transactionBui\
lder.triggerConfirmedConstantContract("TGjgvdTWWrybVLaVeFqS\
yVqJQWjxqRYbaK", "balanceOf(address)", options, parameter, \
tronWeb.defaultAddress.base58);
... console.log(transactionWrapper);
... {
...     "result": {
...         "result": true
...     },
...     "energy_used": 473,
...     "constant_result": [
...         "0000000000000000000000000000000000000000000000\
0b84ddc1db6e378334"
...     ],
...     "transaction": {
...         "ret": [
...             {}
...         ],
...         "visible": false,
...         "txID": "f166ca1f58e62dc70c8837b684f2ef3132cc2b\
f73d59f43091bb281e620055c7",
...         "raw_data": {
...             "contract": [
...                 {
...                     "parameter": {
...                         "value": {
...                             "data": "70a082310000000000\
00000000000000573708726db88a32c1b9c828fef508577cfb8483",
...                             "owner_address": "415737087\
26db88a32c1b9c828fef508577cfb8483",
...                             "contract_address": "414a3a\
5dd265bd974b4de0bbe33faa7efb8b7b87e8"
...                         },
...                         "type_url": "type.googleapis.co\
m/protocol.TriggerSmartContract"
...                     },
...                     "type": "TriggerSmartContract"
...                 }
...             ],
...             "ref_block_bytes": "7177",
...             "ref_block_hash": "3bfbca3567020777",
...             "expiration": 1694658258000,
...             "timestamp": 1694658255514
...         },
...         "raw_data_hex": "0a02717722083bfbca356702077740\
d0c8838ca9315a8e01081f1289010a31747970652e676f6f676c6561706\
9732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f\
6e747261637412540a1541573708726db88a32c1b9c828fef508577cfb8\
4831215414a3a5dd265bd974b4de0bbe33faa7efb8b7b87e8222470a082\
31000000000000000000000000573708726db88a32c1b9c828fef508577\
cfb8483709ab5838ca931"
...     }
... }
... const transactionWrapper = tronWeb.transactionBuilder.t\
riggerConstantContract(contractAddress, functionSelector, o\
ptions, parameter, ownerAddress);
... interface TransactionWrapper {
...     result: {
...         result: boolean;
...     };
...     /**
...      * The transaction object created by calling contra\
ct function.
...      */
...     transaction: Transaction;
...     /**
...      * Energy used by triggering contract.
...      */
...     energy_used?: number;
...     /**
...      * The total penalty energy in the transaction
...      */
...     energy_penalty?: number;
...     /**
...      * Result of calling contract function which is dec\
orated by `view` or `pure`.
...      */
...     constant_result?: string[];
... }
   energy_penalty?: number;
...     /**
...      * Result of calling contract function which is dec\
orated by `view` or `pure`.
...      */
...     constant_result?: string[];
... }
... 










...         {
...             "address": "9e62be7f4f103c36507cb2a75341879\
1b1cdc182",
...             "data": "0000000000000000000000000000000000\
000000000000000000000000000064",
...             "topics": [
...             "data": "0000000000000000000000000000000000\
000000000000000000000000000064",
...             "topics": [
...                 "ddf252ad1be2c89b69c2b068fc378daa952ba7\
f163c4a11628f55a4df523b3ef",
...                 "0000000000000000000000007946f66d0fc679\
24da0ac9936183ab3b07c81126",
...                 "000000000000000000000000d148171f1ceeeb\
40d668c47d70e7e94e67977559"
...             ]
...         }
...     ],
...     "transaction": {
...         "ret": [
...             {}
...         ],
...         "visible": false,
...         "txID": "5c280444c82f3050e4b0c672ab98bae264830d\
80b09db6c861b31699f6bcaaa8",
...         "raw_data": {
...             "contract": [
...                 {
...                     "parameter": {
...                         "value": {
...                             "data": "a9059cbb0000000000\
00000000000000d148171f1ceeeb40d668c47d70e7e94e6797755900000\
00000000000000000000000000000000000000000000000000000000064\
...                             "owner_address": "417946f66\
d0fc67924da0ac9936183ab3b07c81126",
...                             "contract_address": "419e62\
be7f4f103c36507cb2a753418791b1cdc182"
...                         },
...                         "type_url": "type.googleapis.co\
m/protocol.TriggerSmartContract"
...                     },
...                     "type": "TriggerSmartContract"
...                 }
...             ],
...             "ref_block_bytes": "3d8f",
...             "ref_block_hash": "316b196f79afe0dc",
...             "expiration": 1649655780000,
...             "timestamp": 1649655730243
...         },
...         "raw_data_hex": "0a023d8f2208316b196f79afe0dc40\
a0a596b981305aae01081f12a9010a31747970652e676f6f676c6561706\
9732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f\
6e747261637412740a15417946f66d0fc67924da0ac9936183ab3b07c81\
1261215419e62be7f4f103c36507cb2a753418791b1cdc1822244a9059c\
bb000000000000000000000000d148171f1ceeeb40d668c47d70e7e94e6\
79775590000000000000000000000000000000000000000000000000000\
00000000006470c3a093b98130"
...     }
... }
... const transactionWrap = await tronWeb.transactionBuilde\
r.triggerSmartContract(contractAddress,functions, options,p\
arameter,issuerAddress);
... interface TransactionWrapper {
...     result: {
...         result: boolean;
...     };
...     /**
...      * The transaction object created by calling contra\
ct function.
...      */
...     transaction: Transaction;
... }
{
...     result: {
... var options = {
...         feeLimit: 100000000,
...         callValue: 0,
...         tokenValue: 10,
...         tokenId: '1000001',
...         txLocal: true
...         tokenValue: 10,
...         tokenId: '1000001',
...         txLocal: true
...     };
... const transaction = await tronWeb.transactionBuilder.tr\
iggerSmartContract("TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK", "t\
ransfer(address,uint256)", options, parameter, "TM2TmqauSEi\
...     };
... const transaction = await tronWeb.transactionBuilder.tr\
iggerSmartContract("TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK", "t\
ransfer(address,uint256)", options, parameter, "TM2TmqauSEi\
Rf16CyFgzHV2BVxBejY9iyR");
ransfer(address,uint256)", options, parameter, "TM2TmqauSEi\
Rf16CyFgzHV2BVxBejY9iyR");
... {
...     "result": {
...         "result": true
...     },
...     "transaction": {
...         "visible": false,
...         "txID": "482b1a3b61894f75ea25bd10b14335a4db86c7\
e2c642ae07abc5a8ae45fb0027",
...         "raw_data": {
...             "contract": [
...                 {
...                     "parameter": {
...                         "value": {
...                             "data": "a9059cbb0000000000\
00000000000000d148171f1ceeeb40d668c47d70e7e94e6797755900000\
00000000000000000000000000000000000000000000000000000000064\
...                             "token_id": 1000001,
...                             "owner_address": "417946f66\
d0fc67924da0ac9936183ab3b07c81126",
...                             "call_token_value": 10,
...                             "contract_address": "419e62\
be7f4f103c36507cb2a753418791b1cdc182"
...                         },
...                             "contract_address": "419e62\
be7f4f103c36507cb2a753418791b1cdc182"
...                         },
...                         "type_url": "type.googleapis.co\
m/protocol.TriggerSmartContract"
...                         "type_url": "type.googleapis.co\
m/protocol.TriggerSmartContract"
...                     },
...                     "type": "TriggerSmartContract"
...                 }
...             ],
...             "ref_block_bytes": "3a27",
...             "ref_block_hash": "83ca272ba6030b83",
...             "expiration": 1581935001000,
...             "fee_limit": 100000000,
...             "timestamp": 1581934943649
...         },
...         "raw_data_hex": "0a023a27220883ca272ba6030b8340\
a8fbb195852e5ab401081f12af010a31747970652e676f6f676c6561706\
9732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f\
6e7472616374127a0a15417946f66d0fc67924da0ac9936183ab3b07c81\
1261215419e62be7f4f103c36507cb2a753418791b1cdc1822244a9059c\
bb000000000000000000000000d148171f1ceeeb40d668c47d70e7e94e6\
79775590000000000000000000000000000000000000000000000000000\
000000000064280a30c1843d70a1bbae95852e900180c2d72f"
...     }
... }
... const transaction = await tronWeb.transactionBuilder.un\
delegateResource(amount, receiverAddress, resource, address\
, options);
... const transaction = await tronWeb.transactionBuilder.un\
delegateResource(10e6, 'receiverAddress', 'BANDWIDTH', 'TMV\
QGm1qAQYVdetCeGRRkTWYYrLXuHK2HC');
... const transaction = await tronWeb.transactionBuilder.un\
freezeBalance(resource, ownerAddress, receiverAddress, opti\
ons);
... await tronWeb.transactionBuilder.unfreezeBalance("BANDW\
IDTH", "41BF97A54F4B829C4E9253B26024B1829E1A3B1120", "41BF9\
7A54F4B829C4E9253B26024B1829E1A3B1120");
... {
...   visible: false,
...   txID: '2ba070338263eecbec034aac62a0a9b906a033ac34eb3e\
183cc7ccc2c4d1fb20',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'afa9',
...     ref_block_hash: 'd25a977d06b9fb63',
...     expiration: 1581312834000,
...     timestamp: 1581312774685
...   },
...   raw_data_hex: '0a02afa92208d25a977d06b9fb6340d0f3dbec\
822e5a53080c124f0a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472\
61637412170a1541bf97a54f4b829c4e9253b26024b1829e1a3b1120709\
da4d8ec822e'
... }
... const transaction = await tronWeb.transactionBuilder.un\
freezeBalanceV2(amount, resource, address, options);
... const transaction = await tronWeb.transactionBuilder.un\
freezeBalanceV2(10e6, 'BANDWIDTH', 'TMVQGm1qAQYVdetCeGRRkTW\
YYrLXuHK2HC')
... let ownerAddress = 'your address';
... let ownerPermission = { type: 0, permission_name: 'owne\
r' };
... ownerPermission.threshold = 2;
... ownerPermission.keys  = [];
... 
... let activePermission = { type: 2, permission_name: 'act\
ive0' };
... activePermission.threshold = 3;
... activePermission.operations = '7fff1fc0037e000000000000\
0000000000000000000000000000000000000000';
... activePermission.keys = [];
... 
... ownerPermission.keys.push({ address: 'address1', weight\
: 1 });
... ownerPermission.keys.push({ address: 'address2', weight\
: 1 });
... activePermission.keys.push({ address: 'address1', weigh\
t: 1 });
... activePermission.keys.push({ address: 'address2', weigh\
t: 1 });
... 
... const updateTransaction = await tronWeb.transactionBuil\
der.updateAccountPermissions(ownerAddress, ownerPermission,\
 null, [activePermission]);
ddress2', weight: 1 });
... 
... const updateTransaction = await tronWeb.transactionBuil\
der.updateAccountPermissions(ownerAddress, ownerPermission,\
 null, [activePermission]);
... 





















...               "threshold": 3,
...               "permission_name": "owner"
...             },
...             "owner_address": "413dd5ec509f7f5bf381070b7\
bbac66d24b4631bd4",
bbac66d24b4631bd4",
...             "actives": [
...               {
...                 "operations": "7fff1fc0037e000000000000\
0000000000000000000000000000000000000000",
...                 "keys": [
...                   {
...                     "address": "413dd5ec509f7f5bf381070\
b7bbac66d24b4631bd4",
...                     "weight": 1
...                   },
...                   {
...                     "address": "410a0e30b7e7a75a0a4f743\
88e456406edeb557134",
...                     "weight": 1
...                   },
...                   {
...                     "address": "414d66511bf52280f9be386\
747e53f172e15b01815",
...                     "weight": 1
...                   }
...                 ],
...                 "threshold": 3,
...                 "type": "Active",
...                 "permission_name": "active0"
...                 "type": "Active",
...                 "permission_name": "active0"
...               }
...             ]
...           },
...           "type_url": "type.googleapis.com/protocol.Acc\
ountPermissionUpdateContract"
...         },
...         "type": "AccountPermissionUpdateContract"
...       }
...     ],
...     "ref_block_bytes": "000b",
...     "ref_block_hash": "07653cf4b79aa839",
...     "expiration": 1565312682000,
...     "timestamp": 1565312624396
...   },
...   "raw_data_hex": "0a02000b220807653cf4b79aa839409090a0\
9fc72d5abc02082e12b7020a3c747970652e676f6f676c65617069732e6\
36f6d2f70726f746f636f6c2e4163636f756e745065726d697373696f6e\
557064617465436f6e747261637412f6010a15413dd5ec509f7f5bf3810\
70b7bbac66d24b4631bd4125a1a056f776e657220033a190a15413dd5ec\
509f7f5bf381070b7bbac66d24b4631bd410013a190a15410a0e30b7e7a\
75a0a4f74388e456406edeb55713410013a190a15414d66511bf52280f9\
be386747e53f172e15b01815100122800108021a0761637469766530200\
332207fff1fc0037e000000000000000000000000000000000000000000\
00000000003a190a15413dd5ec509f7f5bf381070b7bbac66d24b4631bd\
410013a190a15410a0e30b7e7a75a0a4f74388e456406edeb5571341001\
3a190a15414d66511bf52280f9be386747e53f172e15b018151001708cc\
... }
... 版本: 6.1.0 - 6.1.1
... 更新资产
... 
... const transaction = await tronWeb.transactionBuilder.up\
dateBrokerage(brokerage,ownerAddress);
... await tronWeb.transactionBuilder.updateBrokerage(100, "\
414A193C92CD631C1911B99CA964DA8FD342F4CDDD");
... {
...   visible: false,
...   txID: '754bfc80cf42aa3154fda717262b0ade47ff64b108ad0f\
dc5f9236d5d4b0ae8a',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: 'c466',
...     ref_block_hash: '150f95204fc606c0',
...     expiration: 1581328767000,
...     timestamp: 1581328708518
...   },
...   raw_data_hex: '0a02c4662208150f95204fc606c04098b0a8f4\
822e5a55083112510a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e55706461746542726f6b6572616765436f6e7472\
61637412190a15414a193c92cd631c1911b99ca964da8fd342f4cddd106\
470a6e7a4f4822e'
... }
... const transaction = await tronWeb.transactionBuilder.up\
dateEnergyLimit(contractAddress, originEnergyLimit, ownerAd\
dress, options);
... const transaction = await tronWeb.transactionBuilder.up\
dateSetting("TBQ8ubHnwWAZvHVPJevnKpEfabetDdaQdQ",40,"TTSFjE\
G3Lu9WkHdp4JrWYhbGP6K1REqnGQ");
... {
...   visible: false,
...   txID: 'eb9ce3d85c033e16e4dd0058d2bdff06857379b5348391\
93bf982c05adebd271',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '19c3',
...     ref_block_hash: '610212ce583a92aa',
...     expiration: 1581320133000,
...     timestamp: 1581320074559
...   },
...   raw_data_hex: '0a0219c32208610212ce583a92aa4088b399f0\
822e5a6a082112660a32747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e55706461746553657474696e67436f6e74726163\
7412300a1541bf97a54f4b829c4e9253b26024b1829e1a3b11201215410\
faf1b6bce9e815555544aea9d350f9d3dc6d3ba182870bfea95f0822e'
... }
... const options = {
...   description: "justfortest", // The description of tok\
en, optional
...   url: "www.my-token.com", // The token's website url, \
default String
...   freeBandwidth: 1000000, // Each token holder's free b\
andwidth, optional
...   freeBandwidthLimit: 100, // The total free bandwidth \
of the token, optional
...   permissionId: 2 // Optional, for multi-signature use
... }
... const transaction = await tronWeb.transactionBuilder.up\
dateToken(options, issuerAddress);
... interface UpdateTokenOptions {
...     /**
...      * The description of token.
...      * Optional.
...      */
...     description?: string;
...     /**
...      * The token's website url.
...      */
...      * The token's website url.
...      */
...     url: string;
...     /**
...      * Each token holder's free bandwidth.
...      * Optional.
...      */
...     freeBandwidth?: number;
...     /**
...      * The total free bandwidth of the token.
...      * Optional. Default is 0.
...      */
...     freeBandwidthLimit?: number;
...     /**
...      * Permission id for multi-sign.
...      */
...     permissionId?: number;
...     blockHeader?: {
...       ref_block_bytes: string;
...       ref_block_hash: string;
...       expiration: number;
...       timestamp: number;
...     };
... }
... const createasset = {
...   description: "justfortest",
... }
... const createasset = {
...   description: "justfortest",
...   url: "www.my-token.com",
...   freeBandwidth: 1000000,
...   freeBandwidthLimit: 100,
...   permissionId: 2
... }
... const transaction = await tronWeb.transactionBuilder.up\
dateToken(createasset, "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"\
);
... console.log(transaction);
... {
...   visible: false,
...   txID: '009e8b45c34fbccf86d3f8d1f5e52d694c40b14550289a\
49048e9ba64799520f',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '21ca',
...     ref_block_hash: '65b258d979c2d3f8',
...     expiration: 1581326298000,
...     timestamp: 1581326241240
...   },
...   raw_data_hex: '0a0221ca220865b258d979c2d3f84090d791f3\
822e5a72080f126c0a30747970652e676f6f676c65617069732e636f6d2\
...   },
...   raw_data_hex: '0a0221ca220865b258d979c2d3f84090d791f3\
822e5a72080f126c0a30747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e5570646174654173736574436f6e747261637412\
380a1541bf97a54f4b829c4e9253b26024b1829e1a3b1120120b6a75737\
4666f72746573741a0c7777772e636374762e636f6d20c0843d28642801\
70d89b8ef3822e'
... }
... const transaction = await tronWeb.transactionBuilder.vo\
te( votes = {srAddress : voteCount}, voterAddress = this.tr\
onWeb.defaultAddress.hex);
... await tronWeb.transactionBuilder.vote({"TGj1Ej1qRzL9feL\
TLhjwgxXF4Ct6GTWg2U":1,"TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH"\
:1},"TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ");
... {
...   visible: false,
...   txID: 'e214267985087a1820a8533586f5c7db010084f8caa109\
f967a57e8fbc035a1b',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '1dca',
...     ref_block_hash: 'cb1fd6e2719cef8c',
...     expiration: 1581399042000,
...     timestamp: 1581398984483
...   },
...   raw_data_hex: '0a021dca2208cb1fd6e2719cef8c40d0cfe995\
832e5a860108041281010a30747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e566f74655769746e657373436f6e74726163\
74124d0a1541bf97a54f4b829c4e9253b26024b1829e1a3b112012190a1\
5414a193c92cd631c1911b99ca964da8fd342f4cddd100112190a154178\
c842ee63b253f8f0d2955bbc582c661a078c9d100170a38ee695832e'
... }
... const transaction = await tronWeb.transactionBuilder.vo\
teProposal(proposalId, hasApproval, voterAddress, options);
... await tronWeb.transactionBuilder.voteProposal(32,true,"\
TNDFkUNA2TukukC1Moeqj61pAS53NFchGF");
... {
...   visible: false,
...   txID: 'e214267985087a1820a8533586f5c7db010084f8caa109\
f967a57e8fbc035a1b',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '1dca',
...     ref_block_hash: 'cb1fd6e2719cef8c',
...     expiration: 1581399042000,
...     timestamp: 1581398984483
...     ref_block_hash: 'cb1fd6e2719cef8c',
...     expiration: 1581399042000,
...     timestamp: 1581398984483
...   },
...   raw_data_hex: '0a021dca2208cb1fd6e2719cef8c40d0cfe995\
832e5a860108041281010a30747970652e676f6f676c65617069732e636\
f6d2f70726f746f636f6c2e566f74655769746e657373436f6e74726163\
74124d0a1541bf97a54f4b829c4e9253b26024b1829e1a3b112012190a1\
5414a193c92cd631c1911b99ca964da8fd342f4cddd100112190a154178\
c842ee63b253f8f0d2955bbc582c661a078c9d100170a38ee695832e'
... }
... tronWeb.transactionBuilder.withdrawBlockRewards(address\
, options);
... //Example 1
... await tronWeb.transactionBuilder.withdrawBlockRewards("\
41f1a0466076c57c9f6d07decc86021ddbf8bae0b2");
... {
...   visible: false,
...   txID: '148f2813c2ad76a2f487b3ef402401f7907a8157d9edd6\
0d50f122a8b324dc4e',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '37d9',
...     ref_block_hash: 'c1d5f084d21183b5',
...     expiration: 1581343245000,
...     timestamp: 1581343187719
...   },
...   raw_data_hex: '0a0237d92208c1d5f084d21183b540c8859cfb\
822e5a53080d124f0a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472\
61637412170a1541f1a0466076c57c9f6d07decc86021ddbf8bae0b2708\
7c698fb822e'
... }
... 
... //Example 2
... await tronWeb.transactionBuilder.withdrawBlockRewards("\
TXzorPLynzrRLyfMNXHsGU86doJCad3bQi");
... {
...   visible: false,
...   txID: '04959cc5e0f1836b92e99063ff5d632293cb4cfef9b443\
ce493253c8b99f2a8a',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '38cf',
...     ref_block_hash: 'f15243134137dc9c',
...     expiration: 1581343983000,
...     timestamp: 1581343924685
...   },
...     expiration: 1581343983000,
...     timestamp: 1581343924685
...   },
...   raw_data_hex: '0a0238cf2208f15243134137dc9c40988bc9fb\
822e5a53080d124f0a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472\
...   },
...   raw_data_hex: '0a0238cf2208f15243134137dc9c40988bc9fb\
822e5a53080d124f0a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472\
61637412170a1541f1a0466076c57c9f6d07decc86021ddbf8bae0b270c\
...   raw_data_hex: '0a0238cf2208f15243134137dc9c40988bc9fb\
822e5a53080d124f0a34747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472\
61637412170a1541f1a0466076c57c9f6d07decc86021ddbf8bae0b270c\
dc3c5fb822e'
61637412170a1541f1a0466076c57c9f6d07decc86021ddbf8bae0b270c\
dc3c5fb822e'
... }
... tronWeb.transactionBuilder.withdrawExchangeTokens(excha\
ngeID, tokenID, tokenAmount, ownerAddress, options);
... //Example 1
... const transaction = await tronWeb.transactionBuilder.wi\
dc3c5fb822e'
... }
... tronWeb.transactionBuilder.withdrawExchangeTokens(excha\
ngeID, tokenID, tokenAmount, ownerAddress, options);
... //Example 1
... const transaction = await tronWeb.transactionBuilder.wi\
thdrawExchangeTokens(1, "1000003", 100, "410ca7c49aa44d26aa\
ngeID, tokenID, tokenAmount, ownerAddress, options);
... //Example 1
... const transaction = await tronWeb.transactionBuilder.wi\
thdrawExchangeTokens(1, "1000003", 100, "410ca7c49aa44d26aa\
bfe7f594c645cf9f17a4ff70");
... console.log(transaction);
... //Example 1
... const transaction = await tronWeb.transactionBuilder.wi\
thdrawExchangeTokens(1, "1000003", 100, "410ca7c49aa44d26aa\
bfe7f594c645cf9f17a4ff70");
... console.log(transaction);
... {
bfe7f594c645cf9f17a4ff70");
... console.log(transaction);
... {
...   visible: false,
...   txID: '560b803647f39b87a76623c4428102d1d96d18367b7f67\
9412cc810029499a71',
... console.log(transaction);
... {
...   visible: false,
...   txID: '560b803647f39b87a76623c4428102d1d96d18367b7f67\
9412cc810029499a71',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '6e55',
...     ref_block_hash: '96fe9781aef670d8',
...     expiration: 1581385101000,
...     timestamp: 1581385042932
...   },
...   raw_data_hex: '0a026e55220896fe9781aef670d840c8dd968f\
832e5a61082b125d0a35747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e45786368616e67655769746864726177436f6e74\
7261637412240a15410ca7c49aa44d26aabfe7f594c645cf9f17a4ff701\
0011a0731303030303033206470f497938f832e'
... }
... 
... // Example 2
... await tronWeb.transactionBuilder.withdrawExchangeTokens\
(1, "1000003", 100, "TB8865sqTQ3qxWqhNQRCBov3KtPXFRPccK");
... }
... 
... // Example 2
... await tronWeb.transactionBuilder.withdrawExchangeTokens\
(1, "1000003", 100, "TB8865sqTQ3qxWqhNQRCBov3KtPXFRPccK");
... {
... await tronWeb.transactionBuilder.withdrawExchangeTokens\
(1, "1000003", 100, "TB8865sqTQ3qxWqhNQRCBov3KtPXFRPccK");
... {
...   visible: false,
...   txID: 'a776c9009655b72c4ad4858d391e25a522d753d9e40197\
f24703adda41dc3c77',
...   raw_data: {
...   visible: false,
...   txID: 'a776c9009655b72c4ad4858d391e25a522d753d9e40197\
f24703adda41dc3c77',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '6e7b',
...   txID: 'a776c9009655b72c4ad4858d391e25a522d753d9e40197\
f24703adda41dc3c77',
...   raw_data: {
...     contract: [ [Object] ],
...     ref_block_bytes: '6e7b',
...     ref_block_hash: '413bf5de7cf22452',
...     expiration: 1581385215000,
...     timestamp: 1581385155940
...   },
...   raw_data_hex: '0a026e7b2208413bf5de7cf224524098d89d8f\
832e5a61082b125d0a35747970652e676f6f676c65617069732e636f6d2\
f70726f746f636f6c2e45786368616e67655769746864726177436f6e74\
7261637412240a15410ca7c49aa44d26aabfe7f594c645cf9f17a4ff701\
0011a0731303030303033206470e48a9a8f832e'
... }
... const transaction = await tronWeb.transactionBuilder.wi\
thdrawExpireUnfreeze(address);
... const transaction = await tronWeb.transactionBuilder.wi\
thdrawExpireUnfreeze('TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC');
... new BigNumber(value);
... import { BigNumber } from 'tronweb';
... const value = new BigNumber('200000000000000000000001')\
... new BigNumber(value);
... import { BigNumber } from 'tronweb';
... const value = new BigNumber('200000000000000000000001')\
;
... TronWeb.address.toHex('base58 format address');
... TronWeb.address.toHex('TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYq\
eL');
... '418840E6C55B9ADA326D211D818C34A994AECED808'
... TronWeb.address.fromHex('hex format address');
... TronWeb.address.fromHex('418840E6C55B9ADA326D211D818C34\
A994AECED808');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... TronWeb.address.fromPrivateKey('private key');
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
... '418840E6C55B9ADA326D211D818C34A994AECED808'
... TronWeb.address.fromHex('hex format address');
... TronWeb.address.fromHex('418840E6C55B9ADA326D211D818C34\
A994AECED808');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... TronWeb.address.fromPrivateKey('private key');
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
6D151C976392FC4E3FC132F78A847906DE588C145');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... // The provided private key is not allowed to start wit\
h prefix `0x`, otherwise it will return false
... TronWeb.address.fromPrivateKey('0x3481E79956D4BD95F358A\
C96D151C976392FC4E3FC132F78A847906DE588C145');
... false
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
6D151C976392FC4E3FC132F78A847906DE588C145');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... // The provided private key is not allowed to start wit\
h prefix `0x`, otherwise it will return false
... TronWeb.address.fromPrivateKey('0x3481E79956D4BD95F358A\
C96D151C976392FC4E3FC132F78A847906DE588C145');
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
6D151C976392FC4E3FC132F78A847906DE588C145');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... // The provided private key is not allowed to start wit\
h prefix `0x`, otherwise it will return false
... TronWeb.address.fromPrivateKey('0x3481E79956D4BD95F358A\
C96D151C976392FC4E3FC132F78A847906DE588C145');
... false
... TronWeb.address.toHex('base58 format address');
... TronWeb.address.toHex('TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYq\
eL');
... '418840E6C55B9ADA326D211D818C34A994AECED808'
... TronWeb.address.fromHex('418840E6C55B9ADA326D211D818C34\
A994AECED808');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... TronWeb.address.fromPrivateKey('private key');
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
6D151C976392FC4E3FC132F78A847906DE588C145');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... // The provided private key is not allowed to start wit\
h prefix `0x`, otherwise it will return false
... TronWeb.address.fromPrivateKey('0x3481E79956D4BD95F358A\
C96D151C976392FC4E3FC132F78A847906DE588C145');
... false
... TronWeb.address.fromPrivateKey('3481E79956D4BD95F358AC9\
6D151C976392FC4E3FC132F78A847906DE588C145');
... 'TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL'
... // The provided private key is not allowed to start wit\
h prefix `0x`, otherwise it will return false
... TronWeb.address.fromPrivateKey('0x3481E79956D4BD95F358A\
C96D151C976392FC4E3FC132F78A847906DE588C145');
... false
... TronWeb.address.toChecksumAddress('417e5f4552091a69125d\
5dfcb7b8c2659029395bdf');
... '417E5F4552091A69125d5DfCb7b8C2659029395Bdf'
... TronWeb.address.isChecksumAddress('417e5f4552091a69125d\
5dfcb7b8c2659029395bdf');
... false
... TronWeb.address.isChecksumAddress('417E5F4552091A69125d\
5DfCb7b8C2659029395Bdf');
... true
... TronWeb.createAccount();
... await TronWeb.createAccount();
... {
5DfCb7b8C2659029395Bdf');
... true
... TronWeb.createAccount();
... await TronWeb.createAccount();
... {
...     "privateKey": "D9AA33B76EDF3F22939DCFA322689596E861\
59E3672A7238EC050D417B8B1A7E",
...     "publicKey": "04FFFA899E5EAEB8DB1AA583A96D598DDBAB6\
DDC0D24B4FD8948E740D7D8E828AC8F177D3937960DE6E2567CECD7E899\
130DA921EA3B90F0A8FEF24E9D1670A0C1",
...     "address": {
...         "base58": "TXeSp72o5r185cmeGxFDkdCZFdJS1TAyHw",
...         "hex": "41EDC66496A39744FEA631A598CBAE4B7D6A728\
AA7"
...     }
... }
... TronWeb.createRandom();
... TronWeb.createRandom();
... {
...     "mnemonic": {
...       "phrase": "draw sadness razor gospel weapon bike \
table gym gas woman burger usage",
...       "password": "",
...       "wordlist": {
...         "locale": "en"
...       },
...       "entropy": "0x4277becab26f842c773b40601f9c7af7"
...     },
...     "privateKey": "0x953749cfb4b496cf54a4f5007c6dbced26\
e7cb8429b2b60d7a1224640dc1f523",
...     "publicKey": "0x04577bbc5de931cfcede7d2c3a37ec181a2\
e6933f9c01b82d3d63ff98cff8d30f8aaf4c017649ead9df6c6a71961ce\
7168f19ca7c1f81d2a42a027d892dae82620",
...     "address": "TEzJCRgq8nGzDtYm2b4QZDfxx5ReeUktrA",
...     "path": "m/44'/195'/0'/0/0"
...   }
...   TronWeb.createRandom('', "m/44'/195'/1'/0/0");
... {
...   "mnemonic": {
...     "phrase": "gain edit joke client ship food sock nex\
t peace gun pass chimney",
...     "password": "",
...     "wordlist": {
...       "locale": "en"
...     },
...     "entropy": "0x5ec8cde1156c60b5b384aaa1ccfe8294"
...   },
...   "privateKey": "0x64146fd19f78cd88a0f0fb6ade717813e388\
a847d3ce4a6241134b5bc578a234",
...   "publicKey": "0x04d78ff0916bf48630c2cbc2b32a0911ad975\
1850bf914f05b010cccbafcb1677646d9a805586f440a8c984d6641cb24\
e97c1e9aed56547f04d62b85859d29cd79",
...   "address": "TYP9p8b3yK4P4i3YjPBVDuwYjLsSUEyuS5",
...   "path": "m/44'/195'/1'/0/0"
... }
... tronWeb.utils.abi.decodeParamsV2ByABI(funAbi, data);
1cb24e97c1e9aed56547f04d62b85859d29cd79",
...   "address": "TYP9p8b3yK4P4i3YjPBVDuwYjLsSUEyuS5",
...   "path": "m/44'/195'/1'/0/0"
... }
... tronWeb.utils.abi.decodeParamsV2ByABI(funAbi, data);
... 



























































































sint occaecat cupidatat non proident, sunt in culpa qui ',
...     'Lorem ipsum dolor sit amet, consectetur adipiscing\
 elit, sed do eiusmod tempor incididunt ut labore et dolore\
 magna aliqua. Ut enim ad minim veniam, quis nostrud exerci\
tation ullamco laboris nisi ut aliquip ex ea commodo conseq\
uat. Duis aute irure dolor in reprehender'
...   ],
...     'Lorem ipsum dolor sit amet, consectetur adipiscing\
 elit, sed do eiusmod tempor incididunt ut labore et dolore\
 magna aliqua. Ut enim ad minim veniam, quis nostrud exerci\
tation ullamco laboris nisi ut aliquip ex ea commodo conseq\
uat. Duis aute irure dolor in reprehender'
...   ],
...   BigNumber {
...     _hex: '0xca07f722e5aead62dcccf13578',
...     _isBigNumber: true
...   },
...   [
...     '0xc66a151d9b0763859a67',
...     '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044763\
33b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0fb34\
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...     a: '0xc66a151d9b0763859a67',
...     b: '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044\
76333b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     c: '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0f\
b34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7'
...   ],
...   '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b',
...   r0: [
...     'Lorem ipsum dolor sit amet, consectetur adipiscing\
 elit, sed do eiusmod tempor incididunt ut labore et dolore\
 magna aliqua. Ut enim ad minim veniam, quis nostrud exerci\
tation ullamco laboris nisi ut aliquip ex ea commodo conseq\
uat. Duis aute irure dolor in reprehenderit in voluptate ve\
lit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
sint occaecat cupidatat non proident, sunt in culpa qui ',
...     'Lorem ipsum dolor sit amet, consectetur adipiscing\
 elit, sed do eiusmod tempor incididunt ut labore et dolore\
 magna aliqua. Ut enim ad minim veniam, quis nostrud exerci\
tation ullamco laboris nisi ut aliquip ex ea commodo conseq\
uat. Duis aute irure dolor in reprehender'
...   ],
...   r1: BigNumber {
...     _hex: '0xca07f722e5aead62dcccf13578',
...     _isBigNumber: true
...   },
...   r2: [
...     '0xc66a151d9b0763859a67',
...     '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044763\
33b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0fb34\
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...     a: '0xc66a151d9b0763859a67',
...     b: '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044\
76333b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     c: '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0f\
b34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7'
...   ],
...   r3: '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b'
... ]
... tronWeb.utils.abi.encodeParamsV2ByABI(funAbi, args);
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
3120c3c7'
...   ],
...   r3: '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b'
... ]
... tronWeb.utils.abi.encodeParamsV2ByABI(funAbi, args);
... 


















































...     '0xc66a151d9b0763859a67',
...     '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044763\
33b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0fb34\
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...     '0x6e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef044763\
33b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd',
...     '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0fb34\
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...   ],
...   '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b',
...     '0xf99eddc0917e7c94687bf18c77656aa414cfd8e9b5d0fb34\
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...   ],
...   '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b',
... ]
... const result = tronWeb.utils.abi.encodeParamsV2ByABI(fu\
nctionABI, args);
e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff63120c3c7',
...   ],
...   '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b',
... ]
... const result = tronWeb.utils.abi.encodeParamsV2ByABI(fu\
nctionABI, args);
... 0x00000000000000000000000000000000000000000000000000000\
0000000008000000000000000000000000000000000000000ca07f722e5\
...   '0x47666ad90c94e7cb655d9a68acc2d45451e5b94b',
... ]
... const result = tronWeb.utils.abi.encodeParamsV2ByABI(fu\
nctionABI, args);
... 0x00000000000000000000000000000000000000000000000000000\
0000000008000000000000000000000000000000000000000ca07f722e5\
aead62dcccf135780000000000000000000000000000000000000000000\
0000000000000000003c000000000000000000000000000000000000000\
00000000000000000000000520000000000000000000000000000000000\
... const result = tronWeb.utils.abi.encodeParamsV2ByABI(fu\
nctionABI, args);
... 0x00000000000000000000000000000000000000000000000000000\
0000000008000000000000000000000000000000000000000ca07f722e5\
aead62dcccf135780000000000000000000000000000000000000000000\
0000000000000000003c000000000000000000000000000000000000000\
00000000000000000000000520000000000000000000000000000000000\
00000000000000000000000000000400000000000000000000000000000\
00000000000000000000000000000000020000000000000000000000000\
000000000000000000000000000000000000001914c6f72656d20697073\
756d20646f6c6f722073697420616d65742c20636f6e736563746574757\
22061646970697363696e6720656c69742c2073656420646f2065697573\
6d6f642074656d706f7220696e6369646964756e74207574206c61626f7\
26520657420646f6c6f7265206d61676e6120616c697175612e20557420\
656e696d206164206d696e696d2076656e69616d2c2071756973206e6f7\
37472756420657865726369746174696f6e20756c6c616d636f206c6162\
6f726973206e69736920757420616c697175697020657820656120636f6\
d6d6f646f20636f6e7365717561742e2044756973206175746520697275\
726520646f6c6f7220696e20726570726568656e646572697420696e207\
66f6c7570746174652076656c697420657373652063696c6c756d20646f\
6c6f726520657520667567696174206e756c6c612070617269617475722\
e204578636570746575722073696e74206f636361656361742063757069\
6461746174206e6f6e2070726f6964656e742c2073756e7420696e20637\
56c70612071756920000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000010c4c6f726\
56d20697073756d20646f6c6f722073697420616d65742c20636f6e7365\
6374657475722061646970697363696e6720656c69742c2073656420646\
f20656975736d6f642074656d706f7220696e6369646964756e74207574\
206c61626f726520657420646f6c6f7265206d61676e6120616c6971756\
12e20557420656e696d206164206d696e696d2076656e69616d2c207175\
6973206e6f737472756420657865726369746174696f6e20756c6c616d6\
36f206c61626f726973206e69736920757420616c697175697020657820\
656120636f6d6d6f646f20636f6e7365717561742e20447569732061757\
46520697275726520646f6c6f7220696e20726570726568656e64657200\
00000000000000000000000000000000000000000000000000000000000\
00000000000000000000000000000000000000000600000000000000000\
0000000000000000000000000000000000000000000000a000000000000\
00000000000000000000000000000000000000000000000000100000000\
000000000000000000000000000000000000000000000000000000000ac\
66a151d9b0763859a670000000000000000000000000000000000000000\
00000000000000000000000000000000000000000000000000000000000\
0000000306e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef04476333\
b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd0000000000000\
00000000000000000000000000000000000000000000000000000000000\
000000000000000000000033f99eddc0917e7c94687bf18c77656aa414c\
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
00000000000000000000000000000000000000000000000000000000000\
0000000306e1a7e1a868b83dbbb0b9761f85b991f2ab73b5fef04476333\
b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd0000000000000\
00000000000000000000000000000000000000000000000000000000000\
000000000000000000000033f99eddc0917e7c94687bf18c77656aa414c\
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
3120c3c7000000000000000000000000000000000000000000000000000\
b3fadd663d54b94e42a0354d479d0e5a9b44f7cd78bbcd0000000000000\
00000000000000000000000000000000000000000000000000000000000\
000000000000000000000033f99eddc0917e7c94687bf18c77656aa414c\
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
3120c3c7000000000000000000000000000000000000000000000000000\
00000000000000000000000000000000000001447666ad90c94e7cb655d\
... TronWeb.fromUtf8(value);
... TronWeb.fromUtf8("test");
00000000000000000000000000000000000000000000000000000000000\
000000000000000000000033f99eddc0917e7c94687bf18c77656aa414c\
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
3120c3c7000000000000000000000000000000000000000000000000000\
00000000000000000000000000000000000001447666ad90c94e7cb655d\
... TronWeb.fromUtf8(value);
... TronWeb.fromUtf8("test");
... '0x74657374'
... TronWeb.fromDecimal(number);
fd8e9b5d0fb34e41b83ca0e1e91eecfe0fc28fe7ccc0244ebfcfd376ff6\
3120c3c7000000000000000000000000000000000000000000000000000\
00000000000000000000000000000000000001447666ad90c94e7cb655d\
... TronWeb.fromUtf8(value);
... TronWeb.fromUtf8("test");
... '0x74657374'
... TronWeb.fromDecimal(number);
... TronWeb.fromDecimal("12345678");
... '0xbc614e'
... TronWeb.fromMnemonic(mnemonic, path, password, wordlist\
3120c3c7000000000000000000000000000000000000000000000000000\
00000000000000000000000000000000000001447666ad90c94e7cb655d\
... TronWeb.fromUtf8(value);
... TronWeb.fromUtf8("test");
... '0x74657374'
... TronWeb.fromDecimal(number);
... TronWeb.fromDecimal("12345678");
... '0xbc614e'
... TronWeb.fromMnemonic(mnemonic, path, password, wordlist\
);
... TronWeb.fromMnemonic( 'patch left empty genuine rain no\
rmal syrup yellow consider moon stock denial');
... {
...   "mnemonic": {
...     "phrase": "patch left empty genuine rain normal syr\
up yellow consider moon stock denial",
...     "password": "",
...     "wordlist": {
...       "locale": "en"
...     },
...     "entropy": "0xa0cfe524b0ab112c772ff82f51f3581d"
...   },
...   "privateKey": "0x0f9148e9be0c5b0213607a6491603891241e\
c7aa204918018dba691e4269ffe7",
...   "publicKey": "0x04642b796ba0acf06233e65695b977d28d2ca\
e90fabd70dc0a300a831866b8f46ce5ee0ffa832492ce1b55a6c90463b2\
a31a03729b212281f6531558145b634ee0",
...   "address": "TPiD26cc1vptLxwYmw4waHTPCNgqtZ5SCX"
... }
... TronWeb.fromMnemonic( 'patch left empty genuine rain no\
rmal syrup yellow consider moon stock denial',"m/44'/195'/0\
'/0/1")
... {
...   "mnemonic": {
...     "phrase": "patch left empty genuine rain normal syr\
up yellow consider moon stock denial",
...     "password": "",
...     "wordlist": {
... TronWeb.fromMnemonic( 'patch left empty genuine rain no\
rmal syrup yellow consider moon stock denial',"m/44'/195'/0\
'/0/1")
... {
...   "mnemonic": {
...     "phrase": "patch left empty genuine rain normal syr\
up yellow consider moon stock denial",
...     "password": "",
...     "wordlist": {
...       "locale": "en"
...     },
...     "entropy": "0xa0cfe524b0ab112c772ff82f51f3581d"
...   },
...   "privateKey": "0x5f3ecfca6e51dc70d58bca89d9b8fcb60cf1\
93e0d8943af62311136c3e6504a0",
...   "publicKey": "0x04df45411faa27c933e10c83305da6f15138a\
018d2b539d8d4155a7e15f2552f9de3c6a7993e3814b4022a673faa70ad\
137bcc65857fc40cc0d59218ce28002361",
...   "address": "TXzMaz1QU4jKLctDu2QibrWvPtogtYHdW7"
... }
... TronWeb.fromSun(value)
... TronWeb.fromSun("1000000")
... '1'
... TronWeb.fromUtf8(value)
... TronWeb.fromUtf8("test")
... "0x74657374"
... TronWeb.getEventByTransactionID(txid)
... tronWeb.getEventByTransactionID("78938dc73353a9a2cc45f7\
e20e4f9344f99e31bfcd5d54337a0bd9f2c8626604").then(result =>\
 {console.log(result)})
... [
...   {
...     block: 693938,
...     timestamp: 1577676408000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGUpdated',
...     transaction: '78938dc73353a9a2cc45f7e20e4f9344f99e3\
1bfcd5d54337a0bd9f2c8626604',
...     result: {
...       r: 'fc76c7a74f2154548b78cf4800c62140c0b4c132fe560\
3ae0529f8e072196d8b',
...       afterSeed: '38045f6efcdac2da2389639bf61fd06eb0c38\
14dcaa99adabf2ca56817ee69ce',
...       s: '7db37b185701cb63150bad3604dbc268561ef3dba9115\
fb991ef27fa7aac5155',
...       index: '53866',
...       previousSeed: 'a3a67ca0db89f0676c0f9e9e50338d4b52\
1bfcd5d54337a0bd9f2c8626604',
...     result: {
...       r: 'fc76c7a74f2154548b78cf4800c62140c0b4c132fe560\
3ae0529f8e072196d8b',
...       afterSeed: '38045f6efcdac2da2389639bf61fd06eb0c38\
14dcaa99adabf2ca56817ee69ce',
...       s: '7db37b185701cb63150bad3604dbc268561ef3dba9115\
fb991ef27fa7aac5155',
...       index: '53866',
...       previousSeed: 'a3a67ca0db89f0676c0f9e9e50338d4b52\
54385299f81f5aa11c25e926461108',
14dcaa99adabf2ca56817ee69ce',
...       s: '7db37b185701cb63150bad3604dbc268561ef3dba9115\
fb991ef27fa7aac5155',
...       index: '53866',
...       previousSeed: 'a3a67ca0db89f0676c0f9e9e50338d4b52\
54385299f81f5aa11c25e926461108',
...       updater: '0xc2ee6be7f9ea0be9084047e60119204d81b3e\
658',
...       timestamp: '1577676408'
...     },
...     resourceNode: 'solidityNode'
...       s: '7db37b185701cb63150bad3604dbc268561ef3dba9115\
fb991ef27fa7aac5155',
...       index: '53866',
...       previousSeed: 'a3a67ca0db89f0676c0f9e9e50338d4b52\
54385299f81f5aa11c25e926461108',
...       updater: '0xc2ee6be7f9ea0be9084047e60119204d81b3e\
658',
...       timestamp: '1577676408'
...     },
...     resourceNode: 'solidityNode'
...   }
... ]
... tronWeb.getEventResult(contractAddress, options)
... tronWeb.getEventResult("TUPz3wD356e3iV337s4cnjQS2weUdhX\
5ci",{eventName:"RNGIterated",limit:2}).then(result => {con\
sole.log(result)})
... [
...   {
...     block: 615212,
...     timestamp: 1577440164000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'a8929bcfb8a7337d6c8c5850b5ed63cdd09ff\
17bbde46dad07b2c1f20c427e89',
...     result: {
...       index: '41796',
...       rng: '3f7bf1c50a01cbcb980360effa904e0e11880af8dae\
eb2f8da686b7b3e5d9a50',
...       timestamp: '1577440164'
...     block: 615212,
...     timestamp: 1577440164000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'a8929bcfb8a7337d6c8c5850b5ed63cdd09ff\
17bbde46dad07b2c1f20c427e89',
...     result: {
...       index: '41796',
...       rng: '3f7bf1c50a01cbcb980360effa904e0e11880af8dae\
eb2f8da686b7b3e5d9a50',
...       timestamp: '1577440164'
...     },
...     resourceNode: 'solidityNode'
...   },
...   {
...     block: 615205,
...     timestamp: 1577440143000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'fa9e91282de9eb462efabea838c2d04656023\
12a87ded06524c87d8afafd743d',
...     result: {
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...       timestamp: '1577440143'
...   },
...   {
...     block: 615205,
...     timestamp: 1577440143000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'fa9e91282de9eb462efabea838c2d04656023\
12a87ded06524c87d8afafd743d',
...     result: {
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...   },
...   {
...     block: 615205,
...     timestamp: 1577440143000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'fa9e91282de9eb462efabea838c2d04656023\
12a87ded06524c87d8afafd743d',
...     result: {
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
...     block: 615205,
...     timestamp: 1577440143000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'fa9e91282de9eb462efabea838c2d04656023\
12a87ded06524c87d8afafd743d',
...     result: {
...     timestamp: 1577440143000,
...     contract: 'TUPz3wD356e3iV337s4cnjQS2weUdhX5ci',
...     name: 'RNGIterated',
...     transaction: 'fa9e91282de9eb462efabea838c2d04656023\
12a87ded06524c87d8afafd743d',
...     result: {
...     result: {
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...       timestamp: '1577440143'
...     },
...     resourceNode: 'solidityNode',
...     result: {
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...       timestamp: '1577440143'
...     },
...     resourceNode: 'solidityNode',
...     fingerprint: '2TBTeOqO3x2kJDyxT'
...     fingerprint: '2TBTeOqO3x2kJDyxT'
...       index: '41795',
...       rng: 'bf190910aa5293ab12f644eb723b5460340e3ec11ac\
073124147e5fc92ca44d2',
...       timestamp: '1577440143'
...     },
...     resourceNode: 'solidityNode',
...     fingerprint: '2TBTeOqO3x2kJDyxT'
...   }
... ]
... TronWeb.isAddress(address)
... TronWeb.isAddress("414fa1f834a47f621957ec2ae7d445da9b3b\
e0bee4")
... true
... TronWeb.isAddress("THEGR4Aor5pCDVktbbbwgHAE6PQWRfejBf")
... true
... TronWeb.setAddress(address);
... TronWeb.isAddress(address)
... TronWeb.isAddress("414fa1f834a47f621957ec2ae7d445da9b3b\
e0bee4")
... true
... TronWeb.isAddress("THEGR4Aor5pCDVktbbbwgHAE6PQWRfejBf")
... true
... TronWeb.setAddress(address);
... //Example 1
... tronWeb.setAddress('TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'\
e0bee4")
... true
... TronWeb.isAddress("THEGR4Aor5pCDVktbbbwgHAE6PQWRfejBf")
... true
... TronWeb.setAddress(address);
... //Example 1
... tronWeb.setAddress('TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'\
);
... true
... TronWeb.isAddress("THEGR4Aor5pCDVktbbbwgHAE6PQWRfejBf")
... true
... TronWeb.setAddress(address);
... //Example 1
... tronWeb.setAddress('TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'\
);
... tronWeb.defaultAddress
... {
);
... tronWeb.defaultAddress
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... 
... //Example 2
... tronWeb.setAddress('41d3fd1b6f3f3a86303e2925844456c4987\
6c4561f');
... tronWeb.defaultAddress
... tronWeb.defaultAddress
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... 
... //Example 2
... tronWeb.setAddress('41d3fd1b6f3f3a86303e2925844456c4987\
6c4561f');
... tronWeb.defaultAddress
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... 
... //Example 2
... tronWeb.setAddress('41d3fd1b6f3f3a86303e2925844456c4987\
6c4561f');
... tronWeb.defaultAddress
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... 
... //Example 2
... tronWeb.setAddress('41d3fd1b6f3f3a86303e2925844456c4987\
6c4561f');
... tronWeb.defaultAddress
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... TronWeb.setDefaultBlock(blockID);
... {
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... TronWeb.setDefaultBlock(blockID);
... tronWeb.setDefaultBlock('latest');
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
...   hex: '41d3fd1b6f3f3a86303e2925844456c49876c4561f',
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... TronWeb.setDefaultBlock(blockID);
... tronWeb.setDefaultBlock('latest');
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
... 
...   base58: 'TVJ6njG5EpUwJt4N9xjTrqU5za78cgadS2'
... }
... TronWeb.setDefaultBlock(blockID);
... tronWeb.setDefaultBlock('latest');
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
... 
... TronWeb.setDefaultBlock(blockID);
... tronWeb.setDefaultBlock('latest');
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
... 
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... tronWeb.setDefaultBlock('latest');
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
... 
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 'latest'
... 
... tronWeb.setDefaultBlock();
... false
... 
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
... tronWeb.setDefaultBlock();
... false
... 
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... false
... 
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... tronWeb.setDefaultBlock('earliest');
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... 'earliest'
... 
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... const tronWeb = new TronWeb({fullHost: 'fullHost'});
... tronWeb.setDefaultBlock(585367);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... const tronWeb = new TronWeb({fullHost: 'fullHost'});
... tronWeb.setHeader({ "TRON-PRO-API-KEY": 'xxx' });
... TronWeb.setPrivateKey(private key);
... 585367
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... const tronWeb = new TronWeb({fullHost: 'fullHost'});
... tronWeb.setHeader({ "TRON-PRO-API-KEY": 'xxx' });
... TronWeb.setPrivateKey(private key);
... tronWeb.setPrivateKey('AD71C52E0FC0AB0DFB13B3B911624D4C\
1AB7BDEFAD93F36B6EF97DC955577509');
... TronWeb.setHeader({"TRON-PRO-API-KEY": 'b17ed17972414dd\
efe510369c225175e5af2e02737a64eb69547499565b204e0'});
... const tronWeb = new TronWeb({fullHost: 'fullHost'});
... tronWeb.setHeader({ "TRON-PRO-API-KEY": 'xxx' });
... TronWeb.setPrivateKey(private key);
... tronWeb.setPrivateKey('AD71C52E0FC0AB0DFB13B3B911624D4C\
1AB7BDEFAD93F36B6EF97DC955577509');
... tronWeb.defaultPrivateKey
... 'b17ed17972414ddefe510369c225175e5af2e02737a64eb6954749\
... const tronWeb = new TronWeb({fullHost: 'fullHost'});
... tronWeb.setHeader({ "TRON-PRO-API-KEY": 'xxx' });
... TronWeb.setPrivateKey(private key);
... tronWeb.setPrivateKey('AD71C52E0FC0AB0DFB13B3B911624D4C\
1AB7BDEFAD93F36B6EF97DC955577509');
... tronWeb.defaultPrivateKey
... 'b17ed17972414ddefe510369c225175e5af2e02737a64eb6954749\
9565b204e0'
... TronWeb.sha3(value);
... 
... var hash = TronWeb.sha3("some string to be hashed");
... console.log(hash)
... '0xc4b9bbe7eb8797cf2818085dbcd6ea6662b3261c28810c318e07\
9c8d0c691da6'
... var hashOfHash = TronWeb.sha3(hash, false)
... 'c4b9bbe7eb8797cf2818085dbcd6ea6662b3261c28810c318e079c\
8d0c691da6'
... TronWeb.toAscii(value);
... const str = tronWeb.toAscii("0x74726f6e")
... 'tron'
... TronWeb.toBigNumber(value);
... 
... const value = TronWeb.toBigNumber('20000000000000000000\
... TronWeb.toAscii(value);
... const str = tronWeb.toAscii("0x74726f6e")
... 'tron'
... TronWeb.toBigNumber(value);
... 
... const value = TronWeb.toBigNumber('20000000000000000000\
0001');
... 2.0000000000000002e+23
... console.log(value.toString(10))
... 200000000000000000000001
... TronWeb.toDecimal(value);
... TronWeb.toDecimal('0x15')
... 21
... TronWeb.toHex(value);
... 
... TronWeb.toHex("abcABC")
... "0x616263414243"
... // If it is an object or array type, it will first be c\
onverted to a string using JSON.stringify.
... TronWeb.toHex({ abc: "ABC" })
... "0x7b22616263223a22414243227d"
... TronWeb.toSun(value);
... TronWeb.toSun(value);
... TronWeb.toUtf8("0x74657374");
... 'test'
... TronWeb pubKey
... TronWeb pubKey：b17ed17972414ddefe510369c225175e5af2e02\
737a64eb69547499565b204e0
... TronWeb uid：user@hsjpatners.com
... gpg --keyserver hkp://keys.openpgp.org --recv-keys
... b17ed17972414ddefe510369c225175e5af2e02737a64eb69547499\
565b204e0
... https://github.com/tronprotocol/tronweb/releases
... gpg --verify tronweb-6.0.0-beta.4.zip.sig tronweb-6.0.0\
-beta.4.zip
... Good signature
... BAD signature
... 版本: 6.1.0 - 6.1.1
... 许可证和版权
... {
...     "raw_data": 
...     {
...         "contract": [{<-->}],
...         "ref_block_bytes": "c145",
...         "ref_block_hash": "c56bd8a3b3341d9d",
...         "expiration": 1646796363000,
...         "data": "74657374",
...         "timestamp": 1646796304152,
...         "fee_limit":10000000000
...     },
...     "signature":["47b1f77b3e30cfbbfa41d795dd34475865240\
617dd1c5a7bad526f5fd89e52cd057c80b665cc2431efab53520e2b1b92\
a0425033baee915df858ca1c588b0a1800" ] 
... }
... getEventsByContractAddress、getEventsByTransactionID和g\
etEventsByBlockNumberpragma solidity ^0.4.18;
... contract funcABIV2 {
...     uint256 public check;
... 
...     constructor(uint256 _check) public {
...         check = _check;
...     }
... 
...     function setCheck(uint256 _check) public {
...         check = _check;
...     }
... }
rpragma solidity ^0.4.18;
... contract funcABIV2 {
...     uint256 public check;
... 
...     constructor(uint256 _check) public {
...         check = _check;
...     }
... 
...     function setCheck(uint256 _check) public {
...         check = _check;
...     }
... }
... 







...         },
...         {
...             inputs: [],
...             name: 'check',
...             outputs: [
...                 {
...                     internalType: 'uint256',
...                     name: '_check',
...                     type: 'uint256',
...                 },
...             ],
...             stateMutability: 'view',
...             type: 'function',
...         },
...         {
...             inputs: [
...                 {
...                     internalType: 'uint256',
...                     name: '_check',
...                     type: 'uint256',
...                 },
...             ],
...             name: 'setCheck',
...             outputs: [],
...             stateMutability: 'nonpayable',
...             type: 'function',
...         },
...     ],
...     bytecode:
...         '0x608060405234801561001057600080fd5b5060405160\
20806101258339810180604052810190808051906020019092919050505\
0806000819055505060dc806100496000396000f3006080604052600436\
106049576000357c0100000000000000000000000000000000000000000\
000000000000000900463ffffffff1680632c948bd214604e5780639198\
40ad146078575b600080fd5b348015605957600080fd5b5060766004803\
603810190808035906020019092919050505060a0565b005b3480156083\
57600080fd5b50608a60aa565b604051808281526020019150506040518\
0910390f35b8060008190555050565b600054815600a165627a7a723058\
2084a638eb1bcab674b68b98bc8407c96a2e186016c5da95ffcf421c1d4\
0d0feb60029',
... };
... 
... (async () => {
...     const contract = await tronWeb.contract().new({
...         abi: contractInfo.abi,
...         bytecode: contractInfo.bytecode,
...         funcABIV2: contractInfo.abi[0],
...         parametersV2: [1],
...     });
...     const [check] = await contract.check().call();
...     console.log('first check:', check);
...     await contract.setCheck(123).send();
...     const [check] = await contract.check().call();
...     console.log('second check:', check);
... })();
... 
nst [check] = await contract.check().call();
...     console.log('first check:', check);
...     await contract.setCheck(123).send();
...     const [check] = await contract.check().call();
...     console.log('second check:', check);
... })();
... 
  File "<python-input-11>", line 3
    const { TronWeb, Trx } = require('tronweb');
    ^^^^^
SyntaxError: invalid syntax
>>> 输出：
... "notValid@
... @
... createSmartContract@
... @
... new@
... @
... step@
... @
... Promise@[native code]
... @
... $csb$eval@
... J@https://2-19-8-sandpack.codesandbox.io/static/js/sand\
box.8a7d01a44.js:1:159102
... evaluate@https://2-19-8-sandpack.codesandbox.io/static/\
js/sandbox.8a7d01a44.js:1:171817
... evaluateModule@https://2-19-8-sandpack.codesandbox.io/s\
tatic/js/sandbox.8a7d01a44.js:1:181720
... @https://2-19-8-sandpack.codesandbox.io/static/js/sandb\
ox.8a7d01a44.js:1:354456
... n@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:607
... u@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:819"
... import { TronWeb } from "tronweb";
... 
... const tronWeb = new TronWeb({
...     fullHost: 'https://api.nileex.io',
...     // Use your **test** account here. To get test TRX,\
 go to nile faucet: https://nileex.io/join/getJoinPage.
...     privateKey: '',
... });
... 
... (async () => {
...     const account = await tronWeb.createAccount();
...     // Build a transaction that sends 1 TRX to the new \
account
...     const tx = await tronWeb.transactionBuilder.sendTrx\
(account.address.base58, 1e6);
...     // Sign it
...     const signedTx = await tronWeb.trx.sign(tx);
...     // Broadcast it
...     const receipt = await tronWeb.trx.sendRawTransactio\
n(signedTx);
...     // See the result
...     console.log(receipt);
... })();
... 
  File "<python-input-12>", line 1
    输出：
      ^
SyntaxError: invalid character '：' (U+FF1A)
>>> 输出：
... "notValid@
... @
... sendTrx@
... @
... step@
... fulfilled
... 












































































































":"_blackListedUser","type":"address"}],"name":"destroyBlac\
kFunds","outputs":[],"payable":false,"stateMutability":"non\
payable","type":"function"},{"inputs":[{"name":"_initialSup\
ply","type":"uint256"},{"name":"_name","type":"string"},{"n\
ame":"_symbol","type":"string"},{"name":"_decimals","type":\
"uint8"}],"payable":false,"stateMutability":"nonpayable","t\
ype":"constructor"},{"anonymous":false,"inputs":[{"indexed"\
:true,"name":"_blackListedUser","type":"address"},{"indexed\
":false,"name":"_balance","type":"uint256"}],"name":"Destro\
yedBlackFunds","type":"event"},{"anonymous":false,"inputs":\
[{"indexed":false,"name":"amount","type":"uint256"}],"name"\
:"Issue","type":"event"},{"anonymous":false,"inputs":[{"ind\
exed":false,"name":"amount","type":"uint256"}],"name":"Rede\
em","type":"event"},{"anonymous":false,"inputs":[{"indexed"\
:false,"name":"newAddress","type":"address"}],"name":"Depre\
cate","type":"event"},{"anonymous":false,"inputs":[{"indexe\
d":true,"name":"_user","type":"address"}],"name":"AddedBlac\
kList","type":"event"},{"anonymous":false,"inputs":[{"index\
ed":true,"name":"_user","type":"address"}],"name":"RemovedB\
lackList","type":"event"},{"anonymous":false,"inputs":[{"in\
dexed":false,"name":"feeBasisPoints","type":"uint256"},{"in\
dexed":false,"name":"maxFee","type":"uint256"}],"name":"Par\
ams","type":"event"},{"anonymous":false,"inputs":[],"name":\
"Pause","type":"event"},{"anonymous":false,"inputs":[],"nam\
e":"Unpause","type":"event"},{"anonymous":false,"inputs":[{\
"indexed":true,"name":"previousOwner","type":"address"},{"i\
ndexed":true,"name":"newOwner","type":"address"}],"name":"O\
wnershipTransferred","type":"event"},{"anonymous":false,"in\
puts":[{"indexed":true,"name":"owner","type":"address"},{"i\
ndexed":true,"name":"spender","type":"address"},{"indexed":\
false,"name":"value","type":"uint256"}],"name":"Approval","\
type":"event"},{"anonymous":false,"inputs":[{"indexed":true\
,"name":"from","type":"address"},{"indexed":true,"name":"to\
... 
... async function listenForEvents(txId, timeGap = 500) {
...     while (true) {
...         const events = await tronWeb.event.getEventsByT\
ransactionID(txId);
...         if (events.data.length) {
...             return events.data;
...         }
...         await new Promise(r => setTimeout(r, timeGap));
...         console.log('wait for ' + timeGap +'ms');
...     }
... }
... 
... (async () => {
...     const contract = tronWeb.contract(abi, contractAddr\
ess);
...     const txId = await contract.transfer('TVNevinkBb9Jy\
tBHhK2ZMsnWX5sWqJu9fx', 1e6).send();
...     const events = await listenForEvents(txId);
...     console.log(events);
... })()
... 
... 输出：
... "notValid@
... @
... _triggerSmartContract@
... triggerSmartContract@
... @
... _send@
... @
... send@
... @
... step@
... @
... Promise@[native code]
... @
... $csb$eval@
... J@https://2-19-8-sandpack.codesandbox.io/static/js/sand\
box.8a7d01a44.js:1:159102
... evaluate@https://2-19-8-sandpack.codesandbox.io/static/\
js/sandbox.8a7d01a44.js:1:171817
... evaluateModule@https://2-19-8-sandpack.codesandbox.io/s\
tatic/js/sandbox.8a7d01a44.js:1:181720
... @https://2-19-8-sandpack.codesandbox.io/static/js/sandb\
ox.8a7d01a44.js:1:354456
... n@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:607
... u@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:819"
hunk.js:1:607
... u@https://2-19-8-sandpack.codesandbox.io/static/js/vend\
ors~sandbox.ecbcf4e6a.chunk.js:1:819"
... 
