'use strict';

var crypto = require('crypto');

module.exports = class Secure {
    constructor(password, hash, encoding) {
        this.hash = crypto.createHash(hash);
        this.hash.setEncoding(encoding);
        this.hash.write(password);
        this.hash.end();
    }

    /**
     * Gets the Hash
     * @returns {string}
     * */
    getHash(callback) {
        if(callback !== undefined) {
            callback(this.hash.read());
        } else {
            return this.hash.read();
        }
    }
};