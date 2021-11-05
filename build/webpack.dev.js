const { merge } = require('webpack-merge');
const { join } = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const srcDir = join(__dirname, '../src');

const devConfig = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: '8000',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Admin Template',
            template: srcDir + '/template/index.html'
        })
    ]
};


module.exports = merge(baseConfig, devConfig);