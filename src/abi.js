export default [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "globalBalance",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "stableCoin",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_stableCoin",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_debtor",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_debtee",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "int256"
      }
    ],
    "name": "DebtAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_debtor",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_debtee",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "int256"
      }
    ],
    "name": "DebtSettled",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "int256"
      },
      {
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "recordDebt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "person",
        "type": "address"
      }
    ],
    "name": "getGlobalBalance",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "int256"
      },
      {
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "debtSettled",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
