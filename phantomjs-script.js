console.log('start phantom');

var page = require('webpage').create();
    var url = 'https://mediasilo.github.io/grauman/test/safestream-mixpanel.html';
    console.log('loading ' + url);
    page.open(url, function (status) {
        console.log("Page loaded");
    });

setTimeout(function() {
    console.log('Completed test');
    phantom.exit();
}, 400000);