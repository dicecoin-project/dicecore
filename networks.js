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
    hash: hex('9c88252f518af95a66dafe558f690789472d98bb089a23f25bc6fe75b20e0000'),
    merkle_root: hex('b7a49ad062c88b7ba987e702a33f42048ea606bb9df713e52bc4df2756663ae9'),
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
