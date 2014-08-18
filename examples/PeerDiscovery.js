var PeerManager = require('../lib/PeerManager');
var peerman     = new PeerManager({
    network: 'startcoin'
});



peerman.discover({ limit: 12 }).start();
