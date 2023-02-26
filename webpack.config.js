const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash].[ext]',
                                outputPath: 'images/',
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash].[ext]',
                                outputPath: 'fonts/',
                            },
                        },
                    ],
                },
            ],
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin(),
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: !isProduction,
                }),
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body',
            }),
            new MiniCssExtractPlugin({
                filename: 'bundle.[hash].css',
                chunkFilename: '[id].[hash].css',
            }),
        ],
        devtool: isProduction ? false : 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            hot: true,
        },
    };
};
