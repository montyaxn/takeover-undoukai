const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = [{
    mode: 'development',
    target: 'node',
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {test: /\.txt/, use: 'raw-loader'},
            {
                test: /\.jsx/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

        ]
    },
},{
    mode: 'development',
    target: 'node',
    entry: {
        abstract: "./src/css/abstract.scss",
        article: "./src/css/article.scss"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [new FixStyleOnlyEntriesPlugin(),new MiniCssExtractPlugin()],
}];
