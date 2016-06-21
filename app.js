'use strict';

var Secure = require('./system/Secure');
var Updater = require('./system/Updater');
var log = require('./system/Log');

// -----------------------------

log.info("Launching Web...");
log.info("");
log.info(" __  __  ____ ____    ____    _ ");
log.info("|  \\/  |/ ___/ ___|  |___ \\  / |");
log.info("| |\\/| | |   \\___ \\    __) | | |");
log.info("| |  | | |___ ___) |  / __/ _| |");
log.info("|_|  |_|\\____|____/  |_____(_)_|");
log.info("");
log.info("You're using MCS-Web v" + require('./package.json').version);
log.info("Checking for Updates... (This may take a while)");
