/**
 * Refer to
 * https://github.com/ryanralph/altcoin-address/blob/master/index.js
 * 
 */

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};


exports.dicecoin = {
  name: 'dicecoin',
  magic: hex('9f8c7c6d'),
  addressVersion: 0x1E, // Starts with D
  privKeyVersion: 0xfd,
  P2SHVersion: 0x05,
  bip32publicVersion: 0x0488B21E,
  bip32privateVersion: 0x0488ADE4,
  blockHashFunc: 'x11',
  genesisBlock: {
    hash: hex('00000eb275fec65bf2239a08bb982d478907698f55feda665af98a512f25889c'),
    merkle_root: hex('e93a665627dfc42be513f79dbb06a68e04423fa302e787a97b8bc862d09aa4b7'),
    height: 0,
    nonce: 5815233,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1511661763,
    bits: 0x1e0fffff
  },
  dnsSeeds: [
    'dnsseed.dicecoin.info'
  ],
  defaultClientPort: 7247
};

exports.mainnet = exports.dicecoin;
exports.livenet = exports.dicecoin;

exports.supportedNetnames = ['dicecoin'];
