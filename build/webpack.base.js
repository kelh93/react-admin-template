const { join } = require('path');

const srcDir = join(__dirname, '../src');

module.exports = {
    entry: './src/index.js',
    output: {
        path: join(__dirname, '../dist'),
        filename: '[filename].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|svg|png|gif)$/,
                type: 'asset/resource',
            }
        ]
    }
}