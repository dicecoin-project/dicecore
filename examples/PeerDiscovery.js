var PeerManager = require('../lib/PeerManager');
var peerman     = new PeerManager({
    network: 'dicecoin'
});



peerman.discover({ limit: 12 }).start();
