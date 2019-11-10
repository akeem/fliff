import { ethers } from 'ethers';

export default function getProvider(): ethers.providers.Web3Provider {
  return (window as any).provider
}
