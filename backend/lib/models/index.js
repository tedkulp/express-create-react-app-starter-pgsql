// Get the main express app instance
const fs = require('fs');

let models = {};

(() => {
    let files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        fileName = fileName.replace('.js', '');
        if (fileName !== 'index') {
            let { model } = require('./' + fileName);
            models[fileName] = model;
        }
    });
})();

module.exports = {
    loadModel: name => {
        return models[name];
    },
};
