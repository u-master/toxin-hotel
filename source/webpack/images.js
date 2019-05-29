const CopyWebpackPlugin = require('copy-webpack-plugin');
const _paths = require('./paths');

module.exports = function() {
    return {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: _paths().source('blocks/**/*.svg'),
                    to: _paths().build('images/'),
                    toType: 'dir',
                    flatten: true
                }])
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader'
                }
            ]
        }
    };
};