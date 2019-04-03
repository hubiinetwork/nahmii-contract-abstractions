'use strict';

const _getAbstraction = (name) => {
    return require(`../build/contracts/${name}.json`);
};

const _getEvent = (contractName, eventName) => {
    return require(`../events/${contractName}.json`)[eventName];
};

module.exports = {
    getAbstraction: _getAbstraction,
    getEvent: _getEvent
};