const merge = require('webpack-merge');

const _paths = require('./webpack/paths');
const _pug = require('./webpack/pug');
const _styles = require('./webpack/styles');
const _images = require('./webpack/images');


const common = {
    mode: "development",
    entry: {
        common: _paths().sourceJS('common')
    },
    output : {
        path: _paths().build(),
        filename: 'js/[name].js',
        library: "common"
    }
};

module.exports = merge([
    common,
    _pug(),
    _images(),
    _styles()
]);
