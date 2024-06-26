const readline = require('readline');

let binds = new Map();

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);

process.stdin.on('keypress', (chunk, key) => {

    console.log(key.name);

    if (binds.has(key.name)) {
        let args = binds.get(key.name)[2];
        binds.get(key.name)[0](args);
    }
});

function bind_input(key, callback, ...args) {
    binds.set(key, [callback, {args}]);
}

module.exports = {bind_input};