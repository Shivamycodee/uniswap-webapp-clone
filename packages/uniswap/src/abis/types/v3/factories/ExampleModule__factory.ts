/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExampleModule, ExampleModuleInterface } from "../ExampleModule";

const _abi = [
  {
    inputs: [],
    name: "CauseRevert",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "ExampleModuleEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "causeRevert",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "logEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523460155761011e908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806367192b63146100bb5763a5fe08721461002f575f80fd5b346100b7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b7577ff173516ab337f2e7729ba9acd5771deab6be31f2ad8d5dd42dab5269e61701b9606060405160208152600960208201527f746573744576656e7400000000000000000000000000000000000000000000006040820152a1005b5f80fd5b346100b7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b7577f39492f34000000000000000000000000000000000000000000000000000000005f5260045ffdfea164736f6c634300081a000a";

export class ExampleModule__factory extends ContractFactory {
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
  ): Promise<ExampleModule> {
    return super.deploy(overrides || {}) as Promise<ExampleModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleModule {
    return super.attach(address) as ExampleModule;
  }
  connect(signer: Signer): ExampleModule__factory {
    return super.connect(signer) as ExampleModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleModuleInterface {
    return new utils.Interface(_abi) as ExampleModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleModule {
    return new Contract(address, _abi, signerOrProvider) as ExampleModule;
  }
}
