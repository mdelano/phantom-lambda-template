
var AWS = require('aws-sdk');
var phantomjs = require('phantomjs-prebuilt');

exports.handler = function(event, context, callback) {
    var phantom = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2');

    var page = require('webpage').create();
    var url = 'https://mediasilo.github.io/grauman/test/safestream-mixpanel.html';
    console.log('loading ' + url);
    page.open(url, function (status) {
        //Page is loaded!
        //phantom.exit();
    });

    phantom.stdout.on('data', function(buf) {
        console.log('[STR] stdout "%s"', String(buf));
    });
    phantom.stderr.on('data', function(buf) {
        console.log('[STR] stderr "%s"', String(buf));
    });
    phantom.on('close', function(code) {
        console.log('[END] code', code);
    });

    phantom.on('exit', code => {
        callback(null, 'fin!!');
    });

};