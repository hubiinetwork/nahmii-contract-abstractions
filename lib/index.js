const _getAbstractionByName = (name) => {
    return require(`../build/contracts/${name}.json`);
};

module.exports = {
    get: _getAbstractionByName
};