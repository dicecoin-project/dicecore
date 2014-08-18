'use strict';

var run = function() {
  // Replace '../bitcore' with 'bitcore' if you use this code elsewhere.
  var bitcore = require('../bitcore');
  var RpcClient = bitcore.RpcClient;
  var hash = '0000000000f4859dc879f19a0c50636a0cc04424da29f66e5e79113cf3389aa4';

  var config = {
    protocol: 'http',
    user: 'startcoinrpc',
    pass: 'password',
    host: '10.211.55.6',
    port: '6667'
  };

  var rpc = new RpcClient(config);

  rpc.getBlock(hash, function(err, ret) {
    if (err) {
      console.error('An error occured fetching block', hash);
      console.error(err);
      return;
    }
    console.log(ret);
  });
};

module.exports.run = run;
if (require.main === module) {
  run();
}
