/**
 * Refer to
 * https://github.com/ryanralph/altcoin-address/blob/master/index.js
 * 
 */

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.bitcoin = {
  name: 'bitcoin',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  bip32publicVersion: 0x0488b21e,
  bip32privateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};
exports.mainnet = exports.bitcoin;

exports.dogecoin = {
  name: 'dogecoin',
  magic: hex('c0c0c0c0'),
  addressVersion: 0x1e,
  privKeyVersion: 158,
  P2SHVersion: 0x16,
  bip32publicVersion: 0x02c8b71e,
  bip32privateVersion: 0x02c8a3e4,
  genesisBlock: {
    hash: hex('9156352c1818b32e90c9e792efd6a11a82fe7956a630f03bbee236cedae3911a'),
    merkle_root: hex('696ad20e2dd4365c7459b4a4a5af743d5e92c6da3229e6532cd605f6533f2a5b'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    bits: 0x1e0ffff0
  },
  dnsSeeds: [
    'seed.dogecoin.com',
    'seed.mophides.com',
    'seed.dglibrary.org',
    'seed.dogechain.info'
  ],
  defaultClientPort: 22556
};

exports.litecoin = {
  name: 'litecoin',
  magic: hex('fbc0b6db'),
  addressVersion: 0x30,
  privKeyVersion: 176,
  P2SHVersion: 0x05,
  bip32publicVersion: 0x0291b71e,
  bip32privateVersion: 0x0291a3e4,
  genesisBlock: {
    hash: hex('e2bf047e7e5a191aa4ef34d314979dc9986e0f19251edaba5940fd1fe365a712'),
    merkle_root: hex('d9ced4ed1130f7b7faad9be25323ffafa33232a17c3edf6cfd97bee6bafbdd97'),
    height: 0,
    nonce: 2084524493,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    bits: 0x1e0ffff0
  },
  dnsSeeds: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com'
  ],
  defaultClientPort: 9333
};

exports.darkcoin = {
  name: 'darkcoin',
  magic: hex('bf0c6bbd'),
  addressVersion: 0x4C, // Starts with X
  privKeyVersion: 204,
  P2SHVersion: 0x05,
  bip32publicVersion: 0x0781b71e,
  bip32privateVersion: 0x0781a3e4,
  blockHashFunc: 'x11',
  genesisBlock: {
    hash: hex('b67a40f3cd5804437a108f105533739c37e6229bc1adcab385140b59fd0f0000'),
    merkle_root: hex('c762a6567f3cc092f0684bb62b7e00a84890b990f07cc71a6bb58d64b98e02e0'),
    height: 0,
    nonce: 28917698,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390095618,
    bits: 0x1e0ffff0
  },
  dnsSeeds: [
    'dnsseed.darkcoin.io',
    'dnsseed.ddarkcoin.qa'
  ],
  defaultClientPort: 9999
};

// Currently we only use bitcon testnet
exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  bip32publicVersion: 0x043587cf,
  bip32privateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

exports.supportedNetnames = ['bitcoin', 'litecoin', 'dogecoin', 'darkcoin'];
