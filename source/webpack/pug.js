const htmlWebpackPlugin = require('html-webpack-plugin');
const _paths = require('./paths');

module.exports = function() {
    return {
        plugins: [  // Adding new pages HERE!
            new htmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: _paths().sourcePug('index.pug')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            ]
        }
    };
};