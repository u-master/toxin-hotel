const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _paths = require('./paths');

module.exports = function() {
    return {
        entry: {
            style: _paths().sourceJS("style.scss.js")
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: _paths().build()
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[name].css"})
        ]
    };
};
