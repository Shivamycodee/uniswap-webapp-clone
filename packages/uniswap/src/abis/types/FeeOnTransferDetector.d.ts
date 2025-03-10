/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FeeOnTransferDetectorInterface extends ethers.utils.Interface {
  functions: {
    "batchValidate(address[],address,uint256)": FunctionFragment;
    "uniswapV2Call(address,uint256,uint256,bytes)": FunctionFragment;
    "validate(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchValidate",
    values: [string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Call",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchValidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Call",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export class FeeOnTransferDetector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FeeOnTransferDetectorInterface;

  functions: {
    batchValidate(
      tokens: string[],
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validate(
      token: string,
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  batchValidate(
    tokens: string[],
    baseToken: string,
    amountToBorrow: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV2Call(
    arg0: string,
    amount0: BigNumberish,
    arg2: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validate(
    token: string,
    baseToken: string,
    amountToBorrow: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchValidate(
      tokens: string[],
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, BigNumber] & {
        buyFeeBps: BigNumber;
        sellFeeBps: BigNumber;
      })[]
    >;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validate(
      token: string,
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { buyFeeBps: BigNumber; sellFeeBps: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    batchValidate(
      tokens: string[],
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validate(
      token: string,
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchValidate(
      tokens: string[],
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      token: string,
      baseToken: string,
      amountToBorrow: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
