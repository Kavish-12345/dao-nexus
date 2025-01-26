import React, { useState } from "react";
import { ethers } from "ethers";

const TokenApp = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("Connect your wallet to start minting!");

  // Replace with your deployed contract address and ABI
  const contractAddress = "0xD89eCC6053a090B1D220A6f7A18444ac563a4418";
  const contractABI = [
    {
      inputs: [],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
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
          name: "value",
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
      inputs: [],
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
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
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
  ];

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");

      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(account);
      setStatus("Wallet connected. Ready to mint tokens!");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const mintTokens = async () => {
    try {
      if (!walletAddress) {
        setStatus("Please connect your wallet first!");
        return;
      }

      if (!window.ethereum) {
        setStatus("MetaMask is not installed");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const tx = await contract.mint();
      setStatus("Transaction sent. Waiting for confirmation...");
      await tx.wait();
      setStatus("10 tokens successfully minted to your wallet!");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Mint Your Tokens</h1>
      <p>{status}</p>

      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={mintTokens}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Get 10 Tokens
        </button>
      )}

      {walletAddress && (
        <p className="mt-2 text-sm">
          Connected Wallet: <span className="font-mono">{walletAddress}</span>
        </p>
      )}
    </div>
  );
};

export default TokenApp;
