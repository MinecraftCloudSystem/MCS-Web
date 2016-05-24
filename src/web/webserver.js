'use strict';

const express = require('express');
const serveStatic = require('serve-static');

module.exports = class Webserver {

    constructor() {
        this._app = express();
        this._serve = serveStatic('public');

        this._app.use(this._serve);

        this._app.listen(8080);
    }

};