import { IAssetData, IGasPrices, IParsedTx } from "./types";

export async function apiGetAccountAssets(address: string, chainId: number): Promise<IAssetData[]> {
  return [];
}

export async function apiGetAccountTransactions(
  address: string,
  chainId: number,
): Promise<IParsedTx[]> {
  return [];
}

export const apiGetAccountNonce = async (address: string, chainId: number): Promise<string> => {
  return "0";
};

export const apiGetGasPrices = async (): Promise<IGasPrices> => {
  return {
    timestamp: Date.now(),
    slow: { time: 0, price: 10 },
    average: { time: 0, price: 10 },
    fast: { time: 0, price: 10 },
  };
};
