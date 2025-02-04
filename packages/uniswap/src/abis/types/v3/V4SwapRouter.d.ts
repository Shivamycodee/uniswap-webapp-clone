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

interface V4SwapRouterInterface extends ethers.utils.Interface {
  functions: {
    "msgSender()": FunctionFragment;
    "poolManager()": FunctionFragment;
    "unlockCallback(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockCallback",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class V4SwapRouter extends BaseContract {
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

  interface: V4SwapRouterInterface;

  functions: {
    msgSender(overrides?: CallOverrides): Promise<[string]>;

    poolManager(overrides?: CallOverrides): Promise<[string]>;

    unlockCallback(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  msgSender(overrides?: CallOverrides): Promise<string>;

  poolManager(overrides?: CallOverrides): Promise<string>;

  unlockCallback(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    msgSender(overrides?: CallOverrides): Promise<string>;

    poolManager(overrides?: CallOverrides): Promise<string>;

    unlockCallback(data: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    msgSender(overrides?: CallOverrides): Promise<BigNumber>;

    poolManager(overrides?: CallOverrides): Promise<BigNumber>;

    unlockCallback(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    msgSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockCallback(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
