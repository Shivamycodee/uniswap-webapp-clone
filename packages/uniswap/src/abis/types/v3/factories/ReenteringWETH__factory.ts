/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReenteringWETH,
  ReenteringWETHInterface,
} from "../ReenteringWETH";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotAllowedReenter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_universalRouter",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "setParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052346103dc576040516100176040826103e0565b600e81526d0a4cacadce8cae4d2dcceae8aa8960931b60208201526040516100406040826103e0565b6002815261525760f01b602082015281516001600160401b03811161030f576100695f54610403565b601f811161038d575b50602092601f821160011461032e57928192935f92610323575b50508160011b915f199060031b1c1916175f555b80516001600160401b03811161030f576100bb600154610403565b601f81116102ac575b50602091601f821160011461024c579181925f92610241575b50508160011b915f199060031b1c1916176001555b60126080524660a0526040515f905f54918161010d84610403565b9182825260208201946001811690815f1461022557506001146101db575b610137925003826103e0565b51902060405160208101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f835260408201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260a081526101ab60c0826103e0565b51902060c05260405161113d908161043c823960805181610b1e015260a05181610f9b015260c05181610fc10152f35b505f80805290915f805160206115798339815191525b8183106102095750509060206101379282010161012b565b60209193508060019154838588010152019101909183926101f1565b60ff191686525061013792151560051b8201602001905061012b565b015190505f806100dd565b601f1982169260015f52805f20915f5b8581106102945750836001951061027c575b505050811b016001556100f2565b01515f1960f88460031b161c191690555f808061026e565b9192602060018192868501518155019401920161025c565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c81019160208410610305575b601f0160051c01905b8181106102fa57506100c4565b5f81556001016102ed565b90915081906102e4565b634e487b7160e01b5f52604160045260245ffd5b015190505f8061008c565b601f198216935f8052805f20915f5b868110610375575083600195961061035d575b505050811b015f556100a0565b01515f1960f88460031b161c191690555f8080610350565b9192602060018192868501518155019401920161033d565b5f80525f80516020611579833981519152601f830160051c810191602084106103d2575b601f0160051c01905b8181106103c75750610072565b5f81556001016103ba565b90915081906103b1565b5f80fd5b601f909101601f19168101906001600160401b0382119082101761030f57604052565b90600182811c92168015610431575b602083101461041d57565b634e487b7160e01b5f52602260045260245ffd5b91607f169161041256fe60806040526004361015610011575f80fd5b5f3560e01c806306fdde0314610d44578063095ea7b314610ca157806318160ddd14610c6657806323b872dd14610b42578063313ce56714610ae75780633644e51514610aa7578063472ec443146107d257806370a082311461076f5780637ecebe001461070c57806395d89b41146105f6578063a9059cbb14610542578063d0e30db0146103f0578063d505accf146101435763dd62ed3e146100b3575f80fd5b3461013f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f576100ea610ede565b73ffffffffffffffffffffffffffffffffffffffff610107610f01565b91165f52600460205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f52602052602060405f2054604051908152f35b5f80fd5b3461013f5760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f5761017a610ede565b610182610f01565b6044356064359260843560ff811680910361013f574285106103925760805f9160209373ffffffffffffffffffffffffffffffffffffffff6101c2610f98565b91169687855260058652604085209889549960018b0190556040519073ffffffffffffffffffffffffffffffffffffffff888301937f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c985528b6040850152169a8b6060840152898784015260a083015260c082015260c0815261024660e082610e55565b51902060405190868201927f19010000000000000000000000000000000000000000000000000000000000008452602283015260428201526042815261028d606282610e55565b519020906040519182528482015260a435604082015260c435606082015282805260015afa156103875773ffffffffffffffffffffffffffffffffffffffff5f51168015158061037e575b15610320577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916020915f526004825260405f20855f5282528060405f2055604051908152a3005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152fd5b508281146102d8565b6040513d5f823e3d90fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f5773ffffffffffffffffffffffffffffffffffffffff60065416604051905f60075461044381610e04565b906001811690811561050f57506001146104c0575b5090825f8094819403925af13d156104bb573d61047481610f24565b906104826040519283610e55565b81525f60203d92013e5b1561049357005b7fb418cb98000000000000000000000000000000000000000000000000000000005f5260045ffd5b61048c565b905060075f527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6885f905b8282106104fb575050820182610458565b6001816020925484880152019101906104ea565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016855250801515028301905082610458565b3461013f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f57610579610ede565b73ffffffffffffffffffffffffffffffffffffffff60243591335f52600360205260405f206105a9848254610f5e565b90551690815f52600360205260405f208181540190556040519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203392a3602060405160018152f35b3461013f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f576040515f60015461063481610e04565b80845290600181169081156106ca575060011461066c575b6106688361065c81850382610e55565b60405191829182610e96565b0390f35b60015f9081527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b8082106106b05750909150810160200161065c61064c565b919260018160209254838588010152019101909291610698565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660208086019190915291151560051b8401909101915061065c905061064c565b3461013f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f5773ffffffffffffffffffffffffffffffffffffffff610758610ede565b165f526005602052602060405f2054604051908152f35b3461013f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f5773ffffffffffffffffffffffffffffffffffffffff6107bb610ede565b165f526003602052602060405f2054604051908152f35b3461013f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f57610809610ede565b60243567ffffffffffffffff811161013f573660238201121561013f5780600401359161083583610f24565b926108436040519485610e55565b808452366024828501011161013f576020815f92602473ffffffffffffffffffffffffffffffffffffffff96018388013785010152167fffffffffffffffffffffffff00000000000000000000000000000000000000006006541617600655805167ffffffffffffffff8111610a7a576108be600754610e04565b601f81116109d9575b50602091601f8211600114610921579181925f92610916575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916176007555f80f35b0151905082806108e0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082169260075f527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688915f5b8581106109c15750836001951061098a575b505050811b01600755005b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c1916905582808061097f565b9192602060018192868501518155019401920161096d565b60075f52601f820160051c7fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688019060208310610a52575b601f0160051c7fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801905b818110610a4757506108c7565b5f8155600101610a3a565b7fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6889150610a10565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3461013f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f576020610adf610f98565b604051908152f35b3461013f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f57602060405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b3461013f5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f57610b79610ede565b610b81610f01565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602073ffffffffffffffffffffffffffffffffffffffff80604435951693845f526004835260405f208233165f52835260405f2054867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c3f575b5050845f526003835260405f20610c18878254610f5e565b90551693845f526003825260405f20818154019055604051908152a3602060405160018152f35b610c4891610f5e565b855f526004845260405f208333165f52845260405f20558686610c00565b3461013f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f576020600254604051908152f35b3461013f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f57610cd8610ede565b73ffffffffffffffffffffffffffffffffffffffff60243591335f52600460205260405f208282165f526020528260405f205560405192835216907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b3461013f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013f576040515f8054610d8181610e04565b80845290600181169081156106ca5750600114610da8576106688361065c81850382610e55565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210610dea5750909150810160200161065c61064c565b919260018160209254838588010152019101909291610dd2565b90600182811c92168015610e4b575b6020831014610e1e57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f1691610e13565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610a7a57604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602060409481855280519182918282880152018686015e5f8582860101520116010190565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361013f57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361013f57565b67ffffffffffffffff8111610a7a57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b91908203918211610f6b57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b467f000000000000000000000000000000000000000000000000000000000000000003610fe3577f000000000000000000000000000000000000000000000000000000000000000090565b6040515f905f549181610ff584610e04565b9182825260208201946001811690815f146110f65750600114611099575b61101f92500382610e55565b51902060405160208101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f835260408201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260a0815261109360c082610e55565b51902090565b505f80805290917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8183106110da57505090602061101f92820101611013565b60209193508060019154838588010152019101909183926110c2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686525061101f92151560051b8201602001905061101356fea164736f6c634300081a000a290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563";

export class ReenteringWETH__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReenteringWETH> {
    return super.deploy(overrides || {}) as Promise<ReenteringWETH>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReenteringWETH {
    return super.attach(address) as ReenteringWETH;
  }
  connect(signer: Signer): ReenteringWETH__factory {
    return super.connect(signer) as ReenteringWETH__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReenteringWETHInterface {
    return new utils.Interface(_abi) as ReenteringWETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReenteringWETH {
    return new Contract(address, _abi, signerOrProvider) as ReenteringWETH;
  }
}
