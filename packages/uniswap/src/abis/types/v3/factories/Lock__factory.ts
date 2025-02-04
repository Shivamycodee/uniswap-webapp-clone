/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lock, LockInterface } from "../Lock";

const _abi = [
  {
    inputs: [],
    name: "ContractLocked",
    type: "error",
  },
];

const _bytecode =
  "0x608080604052346013576010908160188239f35b5f80fdfe5f80fdfea164736f6c634300081a000a";

export class Lock__factory extends ContractFactory {
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
  ): Promise<Lock> {
    return super.deploy(overrides || {}) as Promise<Lock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lock {
    return super.attach(address) as Lock;
  }
  connect(signer: Signer): Lock__factory {
    return super.connect(signer) as Lock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new utils.Interface(_abi) as LockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lock {
    return new Contract(address, _abi, signerOrProvider) as Lock;
  }
}
