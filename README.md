# NAHMII CONTRACT ABSTRACTIONS

## About the contract abstractions

This package hosts contract abstractions generated from the deployment of 
[nahmii contracts](https://github.com/hubiinetwork/nahmii-contracts.git) to 
the Ethereum mainnet and to Ropsten testnet, found in branches `master` and 
`develop`, respectively. 

## About nahmii

_nahmii_ is _hubii_'s scaling solution for the Ethereum block chain. It is a
hybrid centralized/decentralized solution that enables instant
(micro-) payments, trading and trustless settlements.

## About hubii

See www.hubii.com for more information.

## Prerequisites

* To use this software you need a modern version of **NodeJS and NPM**.
  We recommend having the current LTS version (v8.x) installed, or
  later, and updating NPM to the latest available version.
* You will also need an **API key** for access to _hubii_'s APIs.

## Installation

To install the SDK into your project, simply run:

```
npm install nahmii-contract-abstractions
```

## Usage

### Symlink

The package includes directory `build/contracts` that contains the 
actual contract abstractions. In a dependent project it will often be more
convenient to have the abstractions available in its own `build/contracts` 
directory rather than having to refer to the lengthy 
`node_modules/nahmii-contract-abstractions/build/contracts`.

The package contains scripts to symlink its `build/contracts` to
`../../build/contracts`. In order to run the script you may run

```
npm run symlink:build
```

Alternatively a call to

```
npm run symlink:build:force
```

will also delete previously existent `../../build/contracts` as seen from
the package directory (`node_modules/nahmii-contract-abstractions`).

### Node

The contract abstractions may be required into Node.js scripts and used 
in contexts of [web3](https://web3js.readthedocs.io/en/latest/), 
[ethers](https://ethers.io) or [Truffle](https://truffleframework.com/).

Assuming the above symlink has been carried out a simple script may be 
as follows:

```
const ClientFund = require('./build/contracts/ClientFund.json'); 

console.log(ClientFund.networks[1].address);
// 0xcc8d82f6ba952966e63001c7b320eef2ae729099

console.log(ClientFund.abi);
// [ { constant: false,
//     inputs: [ [Object] ],
//     name: 'authorizeRegisteredService',
//     outputs: [],
//     payable: false,
//     stateMutability: 'nonpayable',
//     type: 'function' },
//   { constant: true,
//     inputs: [ [Object] ],
//     name: 'isRegisteredBeneficiary',
// ...
```
