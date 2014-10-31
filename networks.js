/**
 * Refer to
 * https://github.com/ryanralph/altcoin-address/blob/master/index.js
 * 
 */

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};


exports.startcoin = {
  name: 'startcoin',
  magic: hex('ffc4badf'),
  addressVersion: 0x7d, // Starts with s
  privKeyVersion: 0xfd,
  P2SHVersion: 0x05,
  bip32publicVersion: 0x0488B21E,
  bip32privateVersion: 0x0488ADE4,
  blockHashFunc: 'x11',
  genesisBlock: {
    hash: hex('4844af8e8f4834402fc61ce4b35f8d225510d5eb187fee1de8f5dcb5b60b0000'),
    merkle_root: hex('879a5f109e85a1dce436c1dc18803ff2a60bf8ec5acc631d4ba41a391f8a82b7'),
    height: 0,
    nonce: 1494132,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405688500,
    bits: 0x1e0fffff
  },
  dnsSeeds: [
    'dnsseed.startcoin.org'
  ],
  defaultClientPort: 9247
};

exports.mainnet = exports.startcoin;



exports.supportedNetnames = ['startcoin'];
