'use strict';

exports.handleuncaughtExceptions = function(){
    process.on('uncaughtException', function(msg) {
        console.log('[uncaughtException] \x1b[31m[ERROR '+getDateTime()+'] \x1b[37m'+msg);
    });
};

exports.info = function(msg) {
    console.log('\x1b[32m[INFO '+getDateTime()+'] \x1b[37m'+msg);
};

exports.debug = function(msg){
    console.log('\x1b[36m[DEBUG '+getDateTime()+'] \x1b[37m'+msg);
};

exports.error = function(msg) {
    console.log('\x1b[31m[ERROR '+getDateTime()+'] \x1b[37m'+msg);
};

exports.warn = function(msg){
    console.log('\x1b[33m[WARNING '+getDateTime()+'] \x1b[37m'+msg);
};

var getDateTime = function() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    return hour + ":" + min + ":" + sec;
};